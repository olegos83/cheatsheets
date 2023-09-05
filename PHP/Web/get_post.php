<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
		<title>PHP GET and POST</title>

		<style>
			h1 { font-size: 16px; }
			fieldset { display: inline-block; }
		</style>
	</head>

	<body>
		<h1>GET Form</h1>

		<?php if (isset($_GET['text'])) { ?>
			<p>Last submitted text: <?php echo htmlspecialchars($_GET['text']); ?></p>
			<p>Last selected options: <?php echo implode(", ", $_GET['options']); ?></p>
		<?php } ?>

		<form method="GET" action="get_post.php">
			<p>Text: <input type="text" name="text"></p>

			<fieldset>
				<legend>Select options</legend>

				<label for="opt_1_get">
					<input id="opt_1_get" type="checkbox" name="options[]" value="Option 1">
					Option 1
				</label>

				<label for="opt_2_get">
					<input id="opt_2_get" type="checkbox" name="options[]" value="Option 2">
					Option 2
				</label>

				<label for="opt_3_get">
					<input id="opt_3_get" type="checkbox" name="options[]" value="Option 3">
					Option 3
				</label>
			</fieldset>

			<p><input type="submit"></p>
		</form>

		<hr>
		<h1>POST Form</h1>

		<?php if (isset($_POST['text'])) { ?>
			<p>Last submitted text: <?php echo htmlspecialchars($_POST['text']); ?></p>
			<p>Last selected options: <?php echo implode(", ", $_POST['options']); ?></p>
		<?php } ?>

		<form method="POST" action="get_post.php">
			<p>Text: <input type="text" name="text"></p>

			<fieldset>
				<legend>Select options</legend>

				<label for="opt_1_post">
					<input id="opt_1_post" type="checkbox" name="options[]" value="Option 1">
					Option 1
				</label>

				<label for="opt_2_post">
					<input id="opt_2_post" type="checkbox" name="options[]" value="Option 2">
					Option 2
				</label>

				<label for="opt_3_post">
					<input id="opt_3_post" type="checkbox" name="options[]" value="Option 3">
					Option 3
				</label>
			</fieldset>

			<p><input type="submit"></p>
		</form>
	</body>
</html>
