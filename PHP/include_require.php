<?php
	//includes external file
	include "Inc/inc.php";
	include "Inc/inc.php";

	echo "\n";

	//includes external file once
	include_once "Inc/inc_once.php";
	include_once "Inc/inc_once.php";

	echo "\n";

	//warning, file does not exist (script continues execution)
	include "Inc/no_file.php";

	echo "\n";

	//requires external file (if file does not exist, error is thrown)
	require "Inc/req.php";
	require "Inc/req.php";

	echo "\n";

	//requires external file once
	require_once "Inc/req_once.php";
	require_once "Inc/req_once.php";

	echo "\n";

	//error, file does not exist (script stops)
	require "Inc/no_file.php";

	//not executed
	echo "This is not executed";
?>
