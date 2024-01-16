// script.js

/*
style contact page
The code is to ask the user to fill in all the required fields.
*/

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name == "" || email == "" || phone == "" || subject == "" || message == "") {
      alert("Please fill in all the required fields.");
      return false;
  }

  return true;
}



// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Your JavaScript code goes here
  
    // Example: Change the background color of the header
    var header = document.querySelector("header");
    header.style.backgroundColor = "#333";
    
    // You can add more JavaScript code to enhance your webpage
  });

  
  