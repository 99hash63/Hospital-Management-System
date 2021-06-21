

//Mobile number validation(contact us)


function mobileVal(){

	
	var num = document.getElementById("mNo").value;
	
	var rNo = /^[0]\d{9}$/;

	if(rNo.test(num))
	{
	
	document.getElementById("wtext").style.visibility = "hidden";
	
}

else{
	
	document.getElementById("wtext").innerHTML= "Warning! Please input a valid mobile number";
	document.getElementById("wtext").style.visibility = "visible";
	
}
}

// email validation
function emailVal(){

	var mail = document.getElementById("email").value;
	
	var rmail = /^([a-z A-Z 0-9\.-]+)@([a-z A-Z 0-9 -]+).([a-z]{2,20})$/;

	if(rmail.test(mail))
	{
	
	document.getElementById("etext").style.visibility = "hidden";
	
}

else{
	
	document.getElementById("etext").innerHTML= "Warning! Please input a valid email address";
	document.getElementById("etext").style.visibility = "visible";
	
}
}

// map
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


