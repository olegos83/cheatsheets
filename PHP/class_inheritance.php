<?php
	//parent class
	class ParentClass {
		protected $name;

		public function __construct($name) {
			$this->name = $name;
			echo "ParentClass constructor\n";
		}

		//'final' class or method can not be inherited or overridden
		final public function greet() {
			echo "$this->name greets you!\n";
		}

		public function act() {
			echo "$this->name performs action!\n";
		}
	}

	//child class
	class ChildClass extends ParentClass {
		public function __construct($name) {
			//'parent' is used to access parent class inside child class
			parent::__construct($name);
			echo "ChildClass constructor\n";
		}

		public function act() {
			echo "$this->name performs overridden action!\n";
		}
	}

	//usage
	$vasyok = new ParentClass('Vasyok');
	$vasyok->greet();
	$vasyok->act();

	echo "\n";

	echo "\$vasyok instanceof ParentClass: ";
	var_dump($vasyok instanceof ParentClass);

	echo "\$vasyok instanceof ChildClass: ";
	var_dump($vasyok instanceof ChildClass);

	echo "\n";

	$fedunya = new ChildClass('Fedunya');
	$fedunya->greet();
	$fedunya->act();

	echo "\n";

	echo "\$fedunya instanceof ParentClass: ";
	var_dump($fedunya instanceof ParentClass);

	echo "\$fedunya instanceof ChildClass: ";
	var_dump($fedunya instanceof ChildClass);

	echo "\n";
?>
