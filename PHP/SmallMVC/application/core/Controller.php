<?php

namespace application\core;

use application\core\View;

abstract class Controller {
	protected $routeParams;
	protected $view;
	protected $model;

	public function __construct($routeParams) {
		$this->routeParams = $routeParams;
		$this->view = new View($routeParams);
		$this->model = $this->loadModel($routeParams['controller']);
	}

	public function loadModel($name) {
		$class = 'application\models\\'.ucfirst($name);

		if (class_exists($class)) {
			return new $class();
		}
	}
}
