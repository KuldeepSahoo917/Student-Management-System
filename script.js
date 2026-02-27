 document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent the form from submitting immediately
    
    // Get the values from the input fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Clear previous error message
    document.getElementById("error-message").textContent = '';
    
    // Simple validation for empty fields
    if (username === "" || password === "") {
        document.getElementById("error-message").textContent = "Please fill in both fields.";
        return;
    }

    // For now, let's assume successful login if both fields are filled
    // In a real-world scenario, you would check credentials against a database
    if (username === "student" && password === "password123") {
        alert("Login successful! Redirecting to the dashboard...");
        // Redirect to the student dashboard or homepage
        window.location.href = "dashboard.html";  // Change this to your actual dashboard URL
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password.";
    }
});
