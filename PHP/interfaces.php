<?php
	//interface declaration
	interface Namable {
		//interface contains methods to be implemented in class which implements interface
		public function setName($name);
	}

	interface Greetable {
		public function greet();
	}

	//interface can be extended from one or multiple parent interfaces
	interface Personable extends Namable, Greetable {
		public function getName();
	}

	//class must implement methods from interface it implements
	class Personality implements Personable {
		private $name;

		public function setName($name) {
			$this->name = $name;
			return $this;
		}

		public function getName() {
			return $this->name;
		}

		public function greet() {
			echo "Hello! I am {$this->getName()}!\n";
		}
	}

	//class can implement multiple interfaces
	class Person implements Namable, Greetable {
		private $name;

		public function setName($name) {
			$this->name = $name;
			return $this;
		}

		public function greet() {
			echo "Hi! I am $this->name!\n";
		}
	}

	//usage
	$fedunya = new Personality();
	$fedunya->setName('Fedunya')->greet();

	$vasyok = new Person();
	$vasyok->setName('Vasyok')->greet();
?>
