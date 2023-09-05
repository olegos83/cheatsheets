<?php
	session_start();

	if (isset($_POST['clear'])) {
		session_unset();
		session_destroy();
	}

	else {
		if (isset($_POST['text'])) {
			$text = htmlspecialchars($_POST['text']);

			if (!empty($text)) {
				$_SESSION['text'] = $text;
			}
		}

		if (isset($_POST['options'])) {
			$options = implode(", ", $_POST['options']);

			if (!empty($options)) {
				$_SESSION['options'] = $options;
			}
		}
	}

	$text = $_SESSION['text'];
	$options = $_SESSION['options'];
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<title>PHP Session</title>

		<style>
			h1 { font-size: 16px; }
			fieldset { display: inline-block; }
		</style>
	</head>

	<body>
		<h1>Session data</h1>

		<?php if (!empty($text)) { ?>
			<p>Text: <?php echo $text; ?></pre>
		<?php } ?>

		<?php if (!empty($options)) { ?>
			<p>Options: <?php echo $options; ?></p>
		<?php } ?>

		<form method="POST" action="session.php">
			<input type="hidden" name="clear">
			<p><input type="submit" value="Clear"></p>
		</form>

		<hr>
		<h1>Fill the form to save data</h1>

		<form method="POST" action="session.php">
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

			<p><input type="submit" value="Save"></p>
		</form>
	</body>
</html>
