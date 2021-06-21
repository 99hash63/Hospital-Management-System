
<?php  
	$con = new mysqli("localhost","root","","serendib_hospitals");
	// Check connection
	if ($con->connect_error) {
	  die("Connection failed: " . $con->connect_error);
	}


?>