// JavaScript code for the Succulent shop website

// Define a variable to store the alert element
var cookie = document.querySelector(".alert");

// Define a function to accept the alert and remove it from the DOM
function accept() {
  // Remove the alert element from the DOM
  cookie.remove();
}

// Define a function to display a message when the shopping cart is empty
function cart() {
  // Display an alert message
  alert("Your Cart is empty!");
}

// Define a variable to store the image element
var img = document.querySelector(".img-s");

// Define a function to change the image source when the mouse hovers over the image
function change1(img) {
  // Set the image source to a different image
  img.src = "images/assets/succulents-2.jpg";
  // Return the new image source
  return img.src;
}

// Define a function to change the image source back to the original image when the mouse hovers out of the image
function change2(img) {
  // Set the image source back to the original image
  img.src = "images/assets/succulents-1.jpg";
  // Return the new image source
  return img.src;
}

// Define a function to handle the mouseover event on the image
function changeover(event) {
  // Check if the event type is "mouseover"
  if (event.type == "mouseover") {
    // Call the change1 function and pass the image element as an argument
    change1(img);
  }
}

// Define a function to handle the mouseout event on the image
function change_out(event) {
  // Check if the event type is "mouseout"
  if (event.type == "mouseout") {
    // Call the change2 function and pass the image element as an argument
    change2(img);
  }
}

// Add event listeners to the image element for the "mouseover" and "mouseout" events
img.addEventListener("mouseover", changeover);
img.addEventListener("mouseout", change_out);
