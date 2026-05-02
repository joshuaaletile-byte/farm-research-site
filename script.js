document.getElementById("businessForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Collect form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const businessType = document.getElementById("businessType").value;
    const message = document.getElementById("message").value;

    // Build full message
    const fullMessage = `
🌱 FARM RESEARCH REQUEST
👤 Name: ${name}
📧 Email: ${email}
📱 WhatsApp: ${whatsapp}
🏢 Business Type: ${businessType}
📝 Request: ${message}
`;

    try {
        // =========================
        // WHATSAPP SEND
        // Replace with your WhatsApp number
        // Example: 2348012345678
        // =========================
        window.open(
            `https://wa.me/2348060156557text=${encodeURIComponent(fullMessage)}`,
            "_blank"
        );

        // =========================
        // EMAIL SEND
        // Replace with your email
        // =========================
        window.location.href =
            `mailto:aletileajokebola@gmail.com?subject=Farm Research Business Request&body=${encodeURIComponent(fullMessage)}`;

        // Success message
        document.getElementById("status").innerText =
            "✅ Request opened in WhatsApp and Email successfully!";

        // Reset form
        document.getElementById("businessForm").reset();

    } catch (error) {
        document.getElementById("status").innerText =
            "❌ Failed to open WhatsApp or Email.";
    }
});
