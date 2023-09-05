<?php
	//magic methods
	class Person {
		public $name;

		public function greet() {
			echo "Hi, I am $this->name\n";
		}

		//'__clone' magic method is called when class instance is cloned
		public function __clone() {
			echo "$this->name is cloned\n";
		}

		//array to access non-existing properties, using '__get' and '__set' magic methods
		private $getSetArr = array();

		//'__get' magic method is called when non-existing or private property is accessed for reading
		public function __get($prop) {
			echo "Getting '$prop'\n";

			if (array_key_exists($prop, $this->getSetArr)) {
				return $this->getSetArr[$prop];
			}
		}

		//'__set' magic method is called when non-existing or private property is accessed for writing
		public function __set($prop, $val) {
			echo "Setting '$prop' to '$val'\n";
			$this->getSetArr[$prop] = $val;
		}
	}

	//usage
	$vasyok = new Person();
	$vasyok->name = 'Vasyok';
	$vasyok->greet();

	echo "\n";

	//clone instance using 'clone' keyword
	$fedunya = clone $vasyok;
	$fedunya->name = 'Fedunya';
	$fedunya->greet();

	echo "\n";

	//greet one more time
	$vasyok->greet();
	$fedunya->greet();

	echo "\n";

	//get and set id property
	$vasyok->id = "888";
	echo "id: $vasyok->id\n";

	echo "\n";
	var_dump($vasyok);
?>
