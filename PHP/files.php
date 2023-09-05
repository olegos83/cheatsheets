<?php
	//read file to output buffer and return its size
	$l = readfile("tmp/file.txt");
	echo "File size: $l bytes\n\n";

	//open file in given mode (read, write, append)
	$f = fopen("tmp/file.txt", "r");

	//read given number of bytes from opened file (file position moves)
	echo fread($f, 12)."\n";

	//read string from opened file limited by given number of bytes (file position moves)
	echo "Str: ".fgets($f, 3)."\n";

	//check if file position reached to the end of file
	while (!feof($f)) echo "Byte: ".fread($f, 1)."\n";
	if (feof($f)) echo "End of file reached\n";

	//close file
	fclose($f);

	//get file size
	echo "File size: ".filesize("tmp/file.txt")." bytes\n";

	//create new file
	$f = fopen("tmp/new.txt", "w");

	//write to file
	fwrite($f, "Writing to file");

	//close file
	fclose($f);
?>
