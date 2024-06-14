<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Form Manipulation</title>
<style>
  .error {
    color: red;
  }
</style>
</head>
<body>

<form id="user-form">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  <br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <br><br>
  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>
  <br><br>
  <input type="submit" value="Submit">
</form>

<script>
  document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    
    if (name && email && message) {
      let userData = {
        name: name,
        email: email,
        message: message
      };
      
      console.log("User Data:", userData);
      
      // Reset form fields
      document.getElementById("user-form").reset();
    } else {
      alert("Please fill out all required fields.");
    }
  });
</script>

</body>
</html>
