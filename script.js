document.getElementById("businessForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const businessType = document.getElementById("businessType").value;
    const message = document.getElementById("message").value;

    const fullMessage = `
🌱 FARM RESEARCH REQUEST
👤 Name: ${name}
📧 Email: ${email}
📱 WhatsApp: ${whatsapp}
🏢 Business Type: ${businessType}
📝 Request: ${message}
`;

    // =========================
    // YOUR TELEGRAM BOT DETAILS
    // =========================
    const botToken = "YOUR_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";

    const telegramURL = `https://api.telegram.org/bot${botToken}/sendMessage`;

    try {
        // SEND TO TELEGRAM
        await fetch(telegramURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: fullMessage
            })
        });

        // OPEN WHATSAPP
        window.open(
            `https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(fullMessage)}`,
            "_blank"
        );

        // OPEN EMAIL
        window.location.href =
            `mailto:YOUR_EMAIL@gmail.com?subject=Farm Research Business Request&body=${encodeURIComponent(fullMessage)}`;

        document.getElementById("status").innerText =
            "✅ Request sent successfully!";

        document.getElementById("businessForm").reset();

    } catch (error) {
        document.getElementById("status").innerText =
            "❌ Failed to send request.";
    }
});
