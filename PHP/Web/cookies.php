<?php
	if (isset($_POST['clear'])) {
		setcookie('text', '', -3600);
		setcookie('options', '', -3600);
	}

	else {
		if (isset($_POST['text'])) {
			$text = htmlspecialchars($_POST['text']);

			if (!empty($text)) {
				setcookie('text', $text, time() + 86400);
			}
		}

		if (isset($_POST['options'])) {
			$options = implode(", ", $_POST['options']);

			if (!empty($options)) {
				setcookie('options', $options, time() + 86400);
			}
		}

		if (empty($text)) $text = $_COOKIE['text'];
		if (empty($options)) $options = $_COOKIE['options'];
	}
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<title>PHP Cookies</title>

		<style>
			h1 { font-size: 16px; }
			fieldset { display: inline-block; }
		</style>
	</head>

	<body>
		<h1>Cookies</h1>

		<?php if (!empty($text)) { ?>
			<p>Text: <?php echo $text; ?></pre>
		<?php } ?>

		<?php if (!empty($options)) { ?>
			<p>Options: <?php echo $options; ?></p>
		<?php } ?>

		<form method="POST" action="cookies.php">
			<input type="hidden" name="clear">
			<p><input type="submit" value="Clear"></p>
		</form>

		<hr>
		<h1>Fill the form to set cookies</h1>

		<form method="POST" action="cookies.php">
			<p>Text: <input type="text" name="text"></p>

			<fieldset>
				<legend>Select options</legend>

				<label for="opt_1">
					<input id="opt_1" type="checkbox" name="options[]" value="Option 1">
					Option 1
				</label>

				<label for="opt_2">
					<input id="opt_2" type="checkbox" name="options[]" value="Option 2">
					Option 2
				</label>

				<label for="opt_3">
					<input id="opt_3" type="checkbox" name="options[]" value="Option 3">
					Option 3
				</label>
			</fieldset>

			<p><input type="submit"></p>
		</form>
	</body>
</html>
