<?php
	//class declaration
	class Person {
		//properties with access modifiers
		public $name;          //visible inside and outside of the class
		private $age = 25;     //visible only inside current class
		protected $id = 888;   //visible only inside current class and its child classes

		//constructor is defined using '__construct' method name and invoked when class is instantiated
		function __construct($name = 'Vasyok') {
			//'$this' is used to access instance of the class inside class itself
			$this->name = $name;
		}

		//destructor is defined using '__destruct' method name and invoked when class is destructed
		function __destruct() {
			echo "$this->name is destructed\n";
		}

		//methods (access modifiers are the same as for properties, default is public)
		private function getAge() {
			return $this->age;
		}

		protected function getId() {
			return $this->id;
		}

		public function showInfo() {
			//{} is used to call method inside string
			echo "Age: {$this->getAge()}, id: {$this->getId()}\n";
		}

		//static properties
		public static $staticProp = 'Person static property';
		private static $className = 'Person';

		//static method
		public static function showClassName() {
			//'self' is used to access class inside class itself
			echo "Class name is ".self::$className."\n";
		}

		//class constant
		const CLASS_CONSTANT = 'Class constant can\'t be changed';
	}

	//class can be instantiated without braces if there are no arguments in its constructor
	$vasyok = new Person;

	var_dump($vasyok);
	echo "\n";

	//check if object is an instance of given class
	echo "\$vasyok is instance of class Person: ";
	var_dump($vasyok instanceof Person);

	//access public property
	echo "$vasyok->name\n";

	//call public method
	$vasyok->showInfo();

	//add dynamic property to class instance
	$vasyok->surname = "Vasilyev";
	echo "$vasyok->surname\n\n";

	//access static property
	echo Person::$staticProp."\n";

	//call static method
	Person::showClassName();
	echo "\n";

	//access class constant
	echo Person::CLASS_CONSTANT."\n";
	echo "\n";

	//class instantiated with arguments in its constructor
	$fedunya = new Person('Fedunya');

	echo "$fedunya->name\n";
	echo "$fedunya->surname\n"; //PHP Notice: Undefined property
?>
