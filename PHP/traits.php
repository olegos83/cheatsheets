<?php
	//trait is a mixin, which contains part of functionality
	trait Name {
		//trait can contain properties
		private $name;

		//trait can contain methods
		public function setName($name) {
			$this->name = $name;
		}

		private function getName() {
			return $this->name;
		}
	}

	//one more trait
	trait Greeting {
		public function greet() {
			echo "Hello, I am {$this->getName()}\n";
		}
	}

	//class declaration
	class Person {
		//traits usage (they become part of the class)
		use Name, Greeting;

		//class method overrides method, declared in trait
		public function setName($name) {
			$this->name = $name;
			return $this;
		}
	}

	//usage
	$vasyok = new Person();
	$vasyok->setName("Vasyok")->greet();

	echo "\n";
	var_dump($vasyok);
?>
