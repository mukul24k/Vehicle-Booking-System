document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var vehicle = document.getElementById("vehicle").value;
    
    // Display confirmation message
    var confirmationMessage = "Booking details:<br>Name: " + name + "<br>Date: " + date + "<br>Vehicle: " + vehicle;
    document.getElementById("confirmation").innerHTML = confirmationMessage;
    
    // You can add further processing like sending data to server, saving to local storage, etc.
});
