<?php

namespace application\controllers;

use application\core\Controller;
use application\lib\Pagination;

class AdminController extends Controller {
	public function __construct($routeParams) {
		parent::__construct($routeParams);
		$this->view->setLayout('admin');

		if (!isset($_SESSION['admin']) && $this->routeParams['action'] != 'login') {
			header('Location: ../admin/login');
			exit;
		}
	}

	public function indexAction() {
		$page = $this->routeParams['page'] = isset($_GET['page']) ? $_GET['page'] : 1;
		$limit = 8;

		$pagination = new Pagination($this->routeParams, $this->model->getPostsCount(), $limit);

		$data = [
			'title' => 'SmallMVC - Admin',
			'posts' => $this->model->getPosts($page, $limit),
			'pages' => $pagination->getPages()
		];

		$this->view->render($data);
	}

	public function loginAction() {
		if (isset($_SESSION['admin'])) {
			header('Location: ../admin/index');
			return;
		}

		if (!empty($_POST)) {
			$err = $this->model->validateAuthForm($_POST);

			if (!empty($err)) {
				$message = ['status' => 'error', 'message' => $err];
			}

			else {
				$_SESSION['admin'] = true;
				$message = ['status' => 'success', 'url' => '../admin/index'];
			}

			die(json_encode($message));
		}

		$data = ['title' => 'SmallMVC - Login'];
		$this->view->render($data);
	}

	public function logoutAction() {
		unset($_SESSION['admin']);
		header('Location: ../admin/login');
		return;
	}

	public function addAction() {
		if (!empty($_POST)) {
			$err = $this->model->validatePostForm($_POST);

			if (!empty($err)) {
				$message = ['status' => 'error', 'message' => $err];
			}

			else {
				$this->model->addPost($_POST);
				$message = ['status' => 'success', 'url' => '../admin/index'];
			}

			die(json_encode($message));
		}

		$data = ['title' => 'SmallMVC - Add'];
		$this->view->render($data);
	}

	public function editAction() {
		if (!empty($_POST)) {
			$err = $this->model->validatePostForm($_POST);

			if (!empty($err)) {
				$message = ['status' => 'error', 'message' => $err];
			}

			else {
				$this->model->editPost($_POST);
				$message = ['status' => 'success', 'url' => '../admin/index'];
			}

			die(json_encode($message));
		}

		if (!isset($_GET['id'])) {
			header('Location: ../admin/index');
			return;
		}

		$post = $this->model->getPostById($_GET['id']);

		if (!$post) {
			header('Location: ../admin/index');
			return;
		}

		$data = [
			'title' => 'SmallMVC - Edit',
			'post' => $post
		];

		$this->view->render($data);
	}

	public function deleteAction() {
		if (isset($_GET['id'])) {
			$this->model->deletePost($_GET['id']);
		}

		header('Location: ../admin/index');
	}
}
