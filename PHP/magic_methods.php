<?php
	//magic methods
	class Person {
		public $name;

		public function greet() {
			echo "Hi, I am $this->name\n";
		}

		//'__construct' magic method is called when class instance is constructed
		public function __construct() {
			echo self::class." __construct method is called\n";
		}

		//'__destruct' magic method is called when class instance is destructed
		public function __destruct() {
			echo static::class." __destruct method is called\n";
		}

		//'__call' magic method is called when inaccessible class method is invoked
		public function __call(string $name, array $arguments) {
			echo self::class." __call: inaccessible method '$name' is called with arguments\n";
			var_dump($arguments);
			echo "\n";
		}

		//'__callStatic' magic method is called when inaccessible static class method is invoked
		public static function __callStatic(string $name, array $arguments) {
			echo self::class." __callStatic: inaccessible static method '$name' is called with arguments\n";
			var_dump($arguments);
			echo "\n";
		}

		//Some more magic methods for reference
		//-----------------------------------------------------------
		//'__is_set' magic method is triggered by calling isset() or empty() on a non-existing or inaccessible property
		//'__unset' magic method is invoked when unset() is used on a non-existing or inaccessible property
		//'__toString' magic method is invoked when an object of a class is treated as a string
		//'__invoke' magic method is invoked when an object is called as a function
		//'__sleep' magic method commits the pending data
		//'__wakeup' magic method is invoked when the unserialize() runs to reconstruct any resource that an object may have
		//'__serialize' magic method is called by serialize()
		//'__unserialize' magic method is called by unserialize()
		//'__set_state' magic method is called for a class exported by var_export()
		//'__debugInfo' magic method is called by var_dump() when dumping an object to get the properties that should be shown

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
	echo "\n";

	//call unexisting method
	$vasyok->unexistingMethod(7, "7.777");

	//call unexisting static method
	Person::unexistingStaticMethod(8, "string argument");
?>
