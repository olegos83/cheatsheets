<?php
	//namespaces are used to organize code similar to filesystem
	namespace Personalization;

	//class declaration
	class Person {
		public $name;

		public function __construct($name) {
			$this->name = $name;
		}

		public function greet() {
			echo "Hi, I am $this->name!\n";
		}
	}

	//declare another namspace
	namespace AnotherNamespace;

	//PHP Fatal error: Class 'AnotherNamespace\Person' not found
	//$ivan = new Person('Ivan');

	//explicitly set namespace
	$fedunya = new \Personalization\Person('Fedunya');
	$fedunya->greet();

	//use namespace
	use Personalization\Person;

	$vasyok = new Person('Vasyok');
	$vasyok->greet();

	//namespace and aliases
	use Personalization\Person as AliasedPerson;

	$valerchik = new AliasedPerson('Valerchik');
	$valerchik->greet();
?>
