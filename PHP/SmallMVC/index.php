<?php

use application\core\Router;
use application\lib\Db;

//for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

function debug($str) {
	echo "<pre>";
	var_dump($str);
	echo "</pre>";
}

//configure class autoloading
spl_autoload_register(function($class) {
	$path = str_replace('\\', '/', $class.'.php');

	if (file_exists($path)) {
		require_once $path;
	}
});

//get site configuration
require 'application/config/site.php';

//start session
session_start();

//create router
$routes = require 'application/config/routes.php';

$router = new Router($routes);
$router->resolve($_SERVER['REQUEST_URI']);
