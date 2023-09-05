<?php
	//set and get default timezone
	date_default_timezone_set("Europe/Kiev");
	echo date_default_timezone_get()."\n\n";

	//get date and time string in given format
	echo date("Y-m-d h:i:s")."\n";

	//get date and time string in given format using locale
	setlocale(LC_ALL, "");
	echo strftime("%A, %Y-%m-%d %H:%M:%S %z %Z\n");

	//get current unix timestamp in seconds (from 1970-01-01 00:00:00 GMT)
	echo time()."\n\n";

	//convert date and time string in english to unix timestamp
	echo strtotime("-10 seconds")."\n";
	echo strtotime("now")."\n";
	echo strtotime("+10 seconds")."\n";
?>
