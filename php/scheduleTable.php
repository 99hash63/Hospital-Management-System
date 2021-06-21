<?php 
	
	require 'config.php';

	$sql = "SELECT Day_of_app,Date_of_app,Start_time,End_time,No_of_appointments,Room_no FROM Schedule";
	$result = $con->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td> ". $row["Day_of_app"]. "</td><td>". $row["Date_of_app"]."</td><td>". $row["Start_time"]."</td><td>". $row["End_time"]."</td><td>". $row["No_of_appointments"]."</td><td>". $row["Room_no"]."</td></tr>";
    }
} else {
    echo "0 results";
}

	$con->close();

	

?>