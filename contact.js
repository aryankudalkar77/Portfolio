// Initialize EmailJS
emailjs.init("4L8qGnLwWpN9Z9ZqV");

// Get the form
const form = document.getElementById("contactForm");

// Handle form submit
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const sendBtn = form.querySelector("button");
    sendBtn.disabled = true;
    sendBtn.textContent = "Sending...";

    emailjs.send(
        "service_hhhgyhd",
        "template_3dnj96u",
        {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
    )
    .then(function () {
        alert("Thank you! Your message has been sent successfully.");

        form.reset();

        sendBtn.disabled = false;
        sendBtn.textContent = "Send";
    })
    .catch(function (error) {
        console.error("EmailJS Error:", error);

        alert("Failed to send message. Please try again.");

        sendBtn.disabled = false;
        sendBtn.textContent = "Send";
    });
});