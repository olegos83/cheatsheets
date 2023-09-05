<?php
	if (isset($_FILES['file'])) {
		//file info
		$fname = $_FILES['file']['name']; //name
		$fsize = $_FILES['file']['size']; //size

		$ftmp = $_FILES['file']['tmp_name']; //temporary name
		$ftype = $_FILES['file']['type']; //type

		if (!empty($fname)) $finfo = var_export($_FILES['file'], true);

		//move uploaded file from temporary location to given destination
		move_uploaded_file($ftmp, "upload/$fname");
	}
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<title>PHP File Upload</title>

		<style>
			h1 { font-size: 16px; }
		</style>
	</head>

	<body>
		<h1>PHP File Upload</h1>

		<?php
			if (isset($finfo)) {
				echo "<pre>$finfo</pre>";
			}
		?>

		<form method="POST" action="file_upload.php" enctype="multipart/form-data">
			<p><input type="file" name="file"></p>
			<p><input type="submit" value="Upload"></p>
		</form>
	</body>
</html>
