<?php
	//check if string matches regular expression
	function test_match($re, $str) {
		if (preg_match($re, $str)) echo "'$str' matches '$re'\n";
		else echo "'$str' does not match '$re'\n";
	}

	test_match("/Vas/", 'Vasyok');
	test_match("/Vas/", 'vasyok');
	test_match("/Vas/i", 'vasyok');
	test_match("/Vas/i", 'Vasyok');
	test_match("/Vas/", 'Fedunya');

	echo "\n";

	//check if string matches regex and save array of matches with offsets
	preg_match("/(Fed)(un)(ya)/", "Fedunya", $matches, PREG_OFFSET_CAPTURE);

	var_export($matches);
	echo "\n";
?>
