<?php
	//constant
	define('PI', 3.14);
	echo "Constant PI = ".PI."\n\n";

	//variables of different types
	$int = 8; //integer
	$dbl = 8.88; //double
	$str = "Vasyok"; //string

	$bool_true = true; //boolean true
	$bool_false = false; //boolean false
	$null = null; //NULL

	$arr = array(1, 2, 3); //array
	$arr_assoc = array('a' => 1, 'b' => '2', 'c' => 3); //array

	echo $int.": ".gettype($int)."\n";
	echo $dbl.": ".gettype($dbl)."\n";
	echo $str.": ".gettype($str)."\n\n";

	//type casting example - '(type_to_cast)$var'
	echo "Cast integer variable type to string, ".$int.": ".gettype((string)$int)."\n\n";

	echo $bool_true.": ".gettype($bool_true)."\n";
	echo $bool_false.": ".gettype($bool_false)."\n";
	echo $null.": ".gettype($null)."\n\n";

	echo var_export($arr, true).": ".gettype($arr)."\n\n";
	echo var_export($arr_assoc, true).": ".gettype($arr_assoc)."\n\n";

	//check variable existence
	echo '$str exists: '.(isset($str) ? "true" : "false")."\n";
	echo '$str2 exists: '.(isset($str2) ? "true" : "false")."\n\n";

	//strings
	$fmt = '$str\n'; //single quotes do not interpolate variables and special chars
	$fmt2 = "$str\n"; //double quotes interpolate variables into their values and respect special chars

	echo $fmt."\n";
	echo $fmt2;

	//access to single character
	echo "0: $fmt2[0]\n";
	echo "1: $fmt2[1]\n";
	echo "2: $fmt2[2]\n\n";

	//conditions
	$x = 8;
	if ($x == 8) echo "x = 8\n\n"; else echo "x != 8\n\n";

	//loops
	while ($x > 0) {
		echo "$x ";
		$x--;
	}

	echo "\n";

	$x = 8;

	do {
		echo "$x ";
	}

	while ($x-- > 0);

	echo "\n";

	for ($x = 0; $x < 9; $x++) {
		echo "$x ";
	}

	echo "\n\n";

	//arrays
	$arr = array(1, 2, 3, 4, 5, 6, 7, 8);
	$arr[] = 9;
	$arr[] = 10;

	foreach ($arr as $x) {
		echo "$x ";
	}

	$l = count($arr);
	echo "\nTotal: $l\n\n";

	//associative arrays
	$arr = array(
		8,
		'a' => 1,
		'name1' => 'Vasyok',
		'name2' => 'Fedunya'
	);

	$arr['prop'] = 'value';
	$arr['inner_array'] = array(1, 2, 3);
	$arr[] = 88;
	$arr['inner_array_assoc'] = array('x' => 'x', 'y' => 'y', 'z' => 'z');

	foreach ($arr as $k => $v) {
		if (is_array($v)) {
			echo "$k: ";
			foreach ($v as $x) echo "$x ";
			echo "\n";
		}

		else echo "$k: $v\n";
	}

	$l = count($arr);
	echo "\nTotal: $l\n\n";

	//array concatenation
	$arr1 = [1, 2, 3, 4]; //declared using '[]' instead of 'array' keyword
	$arr2 = [5, 6, 7, 8];
	$arr_merged = array_merge($arr1, $arr2);

	var_export($arr_merged);
	echo "\n\n";
?>
