<?php

namespace application\core;

use application\core\View;
use Exception;

class Router {
	protected $routes = [];
	protected $params;

	public function __construct($routes) {
		foreach ($routes as $route => $params) {
			$this->add($route, $params);
		}
	}

	private function add($route, $params) {
		$route = '#^'.$route.'$#';
		$this->routes[$route] = $params;
	}

	private function hasRoute($url) {
		foreach ($this->routes as $route => $params) {
			if (preg_match($route, $url, $matches)) {
				$this->params = $params;
				return true;
			}
		}

		return false;
	}

	private function getRouteName($url) {
		$baseUrl = str_replace('www.', '', BASE_URL);
		$serverName = str_replace('www.', '', $_SERVER['SERVER_NAME']);

		$url = str_replace($baseUrl, '', $serverName.$url);
		$url = explode('?', $url)[0];

		return trim($url, '/');
	}

	public function resolve($url) {
		$routeName = $this->getRouteName($url);

		if ($this->hasRoute($routeName)) {
			$class = 'application\controllers\\'.ucfirst($this->params['controller']).'Controller';

			if (class_exists($class)) {
				$action = $this->params['action'].'Action';

				if (method_exists($class, $action)) {
					$controller = new $class($this->params);
					$controller->$action();
				}

				else {
					throw new Exception("$action not found in $class");
				}
			}

			else {
				throw new Exception("$class not found");
			}
		}

		else {
			(new View())->showErrorPage(404);
		}
	}
}
