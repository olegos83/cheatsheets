<?php

namespace application\core;

class View {
	protected $routeParams;
	protected $path;
	protected $layout = 'default';

	public function __construct($routeParams = NULL) {
		if ($routeParams) {
			$this->routeParams = $routeParams;
			$this->path = $routeParams['controller']."/".$routeParams['action'];
		}
	}

	public function setLayout($layout) {
		$this->layout = $layout;
	}

	public function getAction() {
		return $this->routeParams['action'];
	}

	public function render($data = ['title' => 'SmallMVC']) {
		extract($data);

		ob_start();
		require "application/views/$this->path.php";
		$data['content'] = ob_get_clean();

		require "application/views/layouts/$this->layout.php";
	}

	public function showErrorPage($errorCode) {
		$data = ['title' => 'SmallMVC'];

		ob_start();
		require "application/views/errors/$errorCode.php";
		$data['content'] = ob_get_clean();

		http_response_code($errorCode);
		require "application/views/layouts/$this->layout.php";
	}
}
