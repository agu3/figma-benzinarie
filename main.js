var slider_img = document.querySelector('.slider-img');
var images = ['a.jpg', 'b.jpg', 'c.jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}

function setImg(){
	return slider_img.setAttribute('src', "poze/"+images[i]);
	
}

function showSidebar(){
	const sidebar= document.querySelector('.sidebar')
	sidebar.style.display = 'flex';

}

function hideSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = 'none';
}


function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
  	alert("All fields must be filled out");
	  return false;
    }
    alert("Form submitted successfully!");
    return true;
}