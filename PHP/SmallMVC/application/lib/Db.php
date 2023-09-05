<?php

namespace application\lib;

use PDO;

class Db {
	protected $conn;

	public function __construct($config) {
		$this->conn = new PDO(
			'mysql:host='.$config['host'].';dbname='.$config['db'],
			$config['user'],
			$config['pass']
		);
	}

	public function query($sql, $params = []) {
		if (empty($params)) {
			$res = $this->conn->query($sql);
		}

		else {
			$res = $this->conn->prepare($sql);

			foreach ($params as $p => $v) {
				$type = is_int($v) ? PDO::PARAM_INT : PDO::PARAM_STR;
				$res->bindValue(':'.$p, $v, $type);
			}

			$res->execute();
		}

		return $res->fetchAll(PDO::FETCH_ASSOC);
	}
}
