<?php

namespace application\controllers;

use application\core\Controller;
use application\lib\Pagination;

class MainController extends Controller {
	public function indexAction() {
		$page = $this->routeParams['page'] = isset($_GET['page']) ? $_GET['page'] : 1;
		$limit = 3;

		$pagination = new Pagination($this->routeParams, $this->model->getPostsCount(), $limit);

		$data = [
			'title' => 'SmallMVC - Home',
			'posts' => $this->model->getPosts($page, $limit),
			'pages' => $pagination->getPages()
		];

		$this->view->render($data);
	}

	public function aboutAction() {
		$data = ['title' => 'SmallMVC - About'];
		$this->view->render($data);
	}

	public function contactsAction() {
		if (!empty($_POST)) {
			$err = $this->model->validateContactsForm($_POST);

			if (!empty($err)) {
				$message = ['status' => 'error', 'message' => $err];
			}

			else {
				$message = ['status' => 'success', 'message' => 'Message sent'];
			}

			die(json_encode($message));
		}

		$data = ['title' => 'SmallMVC - Contacts'];
		$this->view->render($data);
	}

	public function postAction() {
		$data = [
			'title' => 'SmallMVC - Post',
			'post' => $this->model->getPostById($_GET['id'])
		];

		$this->view->render($data);
	}
}
