// Floating label and validation
const form = document.getElementById('contactForm');
const fields = ['name', 'email', 'subject', 'message'];
const icons = {
  valid: '<i class="fas fa-check-circle" style="color:#22c55e"></i>',
  invalid: '<i class="fas fa-times-circle" style="color:#e11d48"></i>'
};

function validateField(field, value) {
  if (field === 'email') {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  if (field === 'message') {
    return value.trim().length > 5;
  }
  return value.trim().length > 1;
}

fields.forEach(field => {
  const input = document.getElementById(field);
  const icon = document.getElementById('icon-' + field);
  const error = document.getElementById('error-' + field);

  input.addEventListener('input', () => {
    const valid = validateField(field, input.value);
    icon.innerHTML = input.value ? (valid ? icons.valid : icons.invalid) : '';
    if (!valid && input.value) {
      error.textContent = field === 'email'
        ? 'Please enter a valid email.'
        : field === 'message'
        ? 'Message should be at least 6 characters.'
        : 'This field is required.';
    } else {
      error.textContent = '';
    }
  });
});

// Form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();
  let allValid = true;
  fields.forEach(field => {
    const input = document.getElementById(field);
    const icon = document.getElementById('icon-' + field);
    const error = document.getElementById('error-' + field);
    const valid = validateField(field, input.value);
    icon.innerHTML = input.value ? (valid ? icons.valid : icons.invalid) : '';
    if (!valid) {
      allValid = false;
      error.textContent = field === 'email'
        ? 'Please enter a valid email.'
        : field === 'message'
        ? 'Message should be at least 6 characters.'
        : 'This field is required.';
    } else {
      error.textContent = '';
    }
  });
  if (allValid) {
    document.getElementById('form-success').classList.add('show');
    setTimeout(() => {
      document.getElementById('form-success').classList.remove('show');
      form.reset();
      fields.forEach(field => {
        document.getElementById('icon-' + field).innerHTML = '';
      });
    }, 2500);
  }
});

// Dark mode toggle
document.getElementById('darkToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark');
  this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// wehbook functionality//
// ...existing validation code above...

form.addEventListener('submit', function(e) {
  e.preventDefault();
  let allValid = true;
  fields.forEach(field => {
    const input = document.getElementById(field);
    const icon = document.getElementById('icon-' + field);
    const error = document.getElementById('error-' + field);
    const valid = validateField(field, input.value);
    icon.innerHTML = input.value ? (valid ? icons.valid : icons.invalid) : '';
    if (!valid) {
      allValid = false;
      error.textContent = field === 'email'
        ? 'Please enter a valid email.'
        : field === 'message'
        ? 'Message should be at least 6 characters.'
        : 'This field is required.';
    } else {
      error.textContent = '';
    }
  });
  if (allValid) {
    // --- Discord Webhook Integration ---
    const webhookUrl = "YOUR_DISCORD_WEBHOOK_URL"; // <-- Replace with your Discord webhook URL
    const payload = {
      content: `**New Contact Form Submission**\n\n**Name:** ${form.name.value}\n**Email:** ${form.email.value}\n**Subject:** ${form.subject.value}\n**Message:**\n${form.message.value}`
    };
    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
    .then(res => {
      document.getElementById('form-success').classList.add('show');
      setTimeout(() => {
        document.getElementById('form-success').classList.remove('show');
        form.reset();
        fields.forEach(field => {
          document.getElementById('icon-' + field).innerHTML = '';
        });
      }, 2500);
    })
    .catch(() => {
      alert("There was an error sending your message. Please try again later.");
    });
  }
});

// ...dark mode toggle code below...