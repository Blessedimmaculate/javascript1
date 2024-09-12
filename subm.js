document.getElementById("lynda").
addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
       clearform();

       let firstName = document.getElementById("fname").value
       let lastName = document.getElementById("lname").value
       let email = document.getElementById("email").value
       let pwd = document.getElementById("password").value
    });
    
    function clearform() {
        document.getElementById("lynda").reset();
    }