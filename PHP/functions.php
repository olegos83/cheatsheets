<?php
	//function declaration
	function func($arg1, $arg2 = "default") {
		return "func call, arg1: $arg1, arg2: $arg2\n";
	}

	echo func("1", 2);
	echo func("1")."\n";

	//static variable inside function
	function static_var_demo() {
		static $v = 0;
		$v++;
		echo "static variable value: $v\n";
	}

	static_var_demo();
	static_var_demo();
	static_var_demo();
?>
