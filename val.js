document.getElementById("myform").addEventListener("submit",function(event) {
    event.preventDefault(); // prevent the default form submission behavior
    const userName = document.getElementById("userName").value;
    console.log("userName: ", userName)
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    if (userName==="") {
    alert("userName is required")
    return;
    }

    if (age < 1 || age > 100) {
        alert("age must be between 1 and 100")
        return;
    }
    alert("form submitted successfully")
});


