<?php

namespace application\models;

use application\core\Model;

class Main extends Model {
	public function getPostsCount() {
		$res = $this->db->query('select count(*) as posts_count from posts');
		return $res[0]['posts_count'];
	}

	public function getPosts($page, $limit) {
		$params = [
			'start' => ($page - 1) * $limit,
			'limit' => $limit
		];

		return $this->db->query('select * from posts limit :start, :limit', $params);
	}

	public function getPostById($id) {
		return $this->db->query('select * from posts where id=:id', ['id' => $id])[0];
	}

	public function validateContactsForm($data) {
		$nameLength = mb_strlen($data['name']);
		if ($nameLength < 3 || $nameLength > 35) return "Name must contain from 3 to 35 symbols";

		if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) return "Enter valid email";

		$textLength = mb_strlen($data['text']);
		if ($textLength < 3 || $textLength > 350) return "Text must contain from 3 to 350 symbols";

		return "";
	}
}
