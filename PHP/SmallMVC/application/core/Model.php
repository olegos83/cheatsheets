<?php

namespace application\core;

use application\lib\Db;

abstract class Model {
	protected $db;

	public function __construct() {
		$this->db = new Db([
			'host' => DB_HOST,
			'db' => DB_BASE,
			'user' => DB_USER,
			'pass' => DB_PASS
		]);
	}
}
