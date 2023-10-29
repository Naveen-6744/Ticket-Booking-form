  // Function to validate the form
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const numberOfPassengers = document.getElementById("number").value;
    const destination = document.getElementById("dropdown").value;
    const travelMode = document.querySelector('input[name="travel-mode"]:checked');
    const travelDate = document.getElementById("date").value;

    if (name === "" || email === "" || phoneNumber === "" || numberOfPassengers === "" || destination === "Select a Destination" || !travelMode || travelDate === "") {
        alert("Please fill in all the required fields.");
        return false;
    }

    
    alert("Ticket submitted successfully! Thank you for booking your ticket.");
    return true;
}

// Add event listener for form submission
const form = document.getElementById("survey-form");
form.addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

