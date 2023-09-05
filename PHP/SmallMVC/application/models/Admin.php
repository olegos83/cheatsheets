<?php

namespace application\models;

use application\core\Model;

class Admin extends Model {
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

	public function addPost($post) {
		$params = [
			'title' => $post['title'],
			'description' => $post['description'],
			'text' => $post['text']
		];

		$this->db->query("insert into posts (title, description, text) values (:title, :description, :text)", $params);
	}

	public function editPost($post) {
		$params = [
			'id' => $post['id'],
			'title' => $post['title'],
			'description' => $post['description'],
			'text' => $post['text']
		];

		$this->db->query("update posts set title=:title, description=:description, text=:text where id=:id", $params);
	}

	public function deletePost($id) {
		$this->db->query('delete from posts where id=:id', ['id' => $id]);
	}

	public function validateAuthForm($data) {
		if ($data['login'] != 'Vasyok' || $data['pass'] != 'Fedunya') {
			return "Invalid login or password";
		}

		return "";
	}

	public function validatePostForm($post) {
		$titleLength = mb_strlen($post['title']);
		if ($titleLength < 3 || $titleLength > 200) return "Title must contain from 3 to 200 symbols";

		$descLength = mb_strlen($post['description']);
		if ($descLength < 3 || $descLength > 500) return "Description must contain from 3 to 500 symbols";

		$textLength = mb_strlen($post['text']);
		if ($textLength < 3 || $textLength > 2000) return "Text must contain from 3 to 2000 symbols";

		return "";
	}
}
