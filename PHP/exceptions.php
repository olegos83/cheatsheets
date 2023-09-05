<?php
	//generate exception
	function generateException() {
		//throw error with given message and code
		throw new Exception("Generated exception", 888);
	}

	//exceptions handling
	try {
		generateException();
	}

	//catching error
	catch(Exception $e) {
		echo "{$e->getMessage()}\n\n";
		var_dump($e);
	}

	//finally block is allways executed
	finally {
		echo "\nFinally block\n";
	}
?>
