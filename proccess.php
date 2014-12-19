<?php
    $filename = "Form.csv";
    $exists = (file_exists($filename));

 	$handle = fopen($filename, 'a');
	$msg = "";//EMail message
	$stringToAdd="";	//File into

	if (!$exists){
		foreach($_POST as $name => $value) {
			$stringToAdd.="$firstname,";
		}
		$stringToAdd.="\n";
		$new=False;
		fwrite($handle, $stringToAdd);
	}
	$stringToAdd="";
	foreach($_POST as $name => $value) {
		print "$name : $value<br>";
		$msg .="$name : $value\n";
		$stringToAdd.="$value,";
	}
	$stringToAdd.="\n";

	fwrite($handle, $stringToAdd);
	fclose($handle); 

	$to = $_POST["usremail"];
	$headers = "From: ". "Justin Platz";
	
	mail($to, 'Registration', $msg,$headers);



	echo "Email sent";
?>