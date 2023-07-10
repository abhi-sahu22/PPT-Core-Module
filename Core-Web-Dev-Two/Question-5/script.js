function validateForm(event) {
    event.preventDefault(); 

    //Targeting the values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementById("gender").value;
    var date = document.getElementById("date").value;
    var color = document.getElementById("color").value;
  
    // Validating name 
    if (name === "") {
      alert("Name field is required.");
      return;
    }
  
    // Validating email (should be a valid email format)
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Validating phone number (should be a valid phone number format of 10 digit)
    var phonePattern = /^\d{10}$/; 
    if (!phone.match(phonePattern)) {
      alert("Please enter a valid phone number.");
      return;
    }
  
    // Validating password (should be at least 8 characters long)
    if (password.length < 8) {
      alert("Password should be at least 8 characters long.");
      return;
    }
  
    // Validating age (should be a number between 18 and 100)
    if (isNaN(age) || age < 18 || age > 100) {
      alert("Please enter a valid age between 18 and 100.");
      return;
    }
  
    // Validating gender (should be selected)
    if (gender === "") {
      alert("Please select a gender.");
      return;
    }
  
    // Validating date (should be a valid date format)
    var datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!date.match(datePattern)) {
      alert("Please enter a valid date.");
      return;
    }
  
    // Validating color (should be selected)
    if (color === "") {
      alert("Please select a color.");
      return;
    }
  
    // At last when all the previous validation will match then submiting
    alert("Form submitted successfully!");
    document.getElementById("myForm").submit();
  }
  