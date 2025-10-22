document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');
    
    // Form submission handler
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!validateForm(formData)) {
            return;
        }

        try {
            // Simulate form submission (replace with your actual API endpoint)
            await submitForm(formData);
            showToast('Message sent successfully!', 'success');
            form.reset();
        } catch (error) {
            showToast('Failed to send message. Please try again.', 'error');
            console.error('Error:', error);
        }
    });

    // Form validation
    function validateForm(data) {
        // Check for empty fields
        for (let key in data) {
            if (!data[key].trim()) {
                showToast(`Please fill in your ${key}`, 'error');
                return false;
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showToast('Please enter a valid email address', 'error');
            return false;
        }

        // Validate phone number
        const phoneRegex = /^\+?[\d\s-]{10,}$/;
        if (!phoneRegex.test(data.phone)) {
            showToast('Please enter a valid phone number', 'error');
            return false;
        }

        return true;
    }

    // Form submission function
    async function submitForm(data) {
        // Replace with your actual API endpoint
        const response = await fetch('your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to send message');
        }

        return response.json();
    }

    // Toast notification
    function showToast(message, type) {
        const toast = document.getElementById('toast');
        const toastMessage = toast.querySelector('.toast-message');
        const toastIcon = toast.querySelector('.toast-icon');
        
        toastMessage.textContent = message;
        toastIcon.className = `fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`;
        toast.className = `toast show ${type}`;
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Input animations
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });

        // Set initial state for pre-filled inputs
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
});