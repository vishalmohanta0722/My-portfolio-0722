// contact.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");

  // ✅ Replace with your Discord Webhook URL
  const WEBHOOK_URL = "https://discord.com/api/webhooks/xxxxxxxxxxxxxxxxxxxxxxxx";

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get values from form fields
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      formMessage.textContent = "⚠️ Please fill all fields.";
      formMessage.style.color = "orange";
      return;
    }

    // Create message payload for Discord
    const discordData = {
      username: "Portfolio Contact Form",
      avatar_url: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
      embeds: [
        {
          title: "📩 New Contact Message!",
          color: 3447003, // Discord embed blue
          fields: [
            { name: "👤 Name", value: name, inline: false },
            { name: "📧 Email", value: email, inline: false },
            { name: "📞 Phone", value: phone, inline: false },
            { name: "💬 Message", value: message, inline: false },
          ],
          footer: { text: "From Vishal's Portfolio Website" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      // Send data to Discord webhook
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordData),
      });

      if (response.ok) {
        formMessage.textContent = "✅ Message sent successfully!";
        formMessage.style.color = "green";
        form.reset();
      } else {
        throw new Error("Webhook request failed");
      }
    } catch (error) {
      console.error(error);
      formMessage.textContent = "❌ Failed to send message. Try again later.";
      formMessage.style.color = "red";
    }
  });
});
