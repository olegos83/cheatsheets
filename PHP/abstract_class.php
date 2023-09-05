<?php
	//abstract class cannot be instantiated (throws error)
	abstract class AbstractPerson {
		//abstract class can have properties and methods
		protected $name;

		public function setName($name) {
			$this->name = $name;
			return $this;
		}

		//abstract class can have abstract methods
		abstract public function greet();

		//abstract class can have static properties and methods
		public static $staticProperty = "Static property";

		public static function staticMethod() {
			echo "Static method\n";
		}
	}

	//access static property and method of abstract class
	echo AbstractPerson::$staticProperty."\n";
	AbstractPerson::staticMethod();

	echo "\n";

	//to use abstract class we can extend it
	class Person extends AbstractPerson {
		//abstract methods must be implemented in child class
		public function greet() {
			echo "Hello, I am $this->name!\n";
		}
	}

	//use class, extended from abstract class
	$vasyok = new Person();
	$vasyok->setName("Vasyok")->greet();
?>
