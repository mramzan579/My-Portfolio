/**
 * Advanced Form Handler
 * Manages intl-tel-input validation and Formspree AJAX submissions
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize intl-tel-input on any phone fields
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    const itis = [];

    phoneInputs.forEach(input => {
        const iti = window.intlTelInput(input, {
            initialCountry: "auto",
            geoIpLookup: callback => {
                fetch("https://ipapi.co/json")
                    .then(res => res.json())
                    .then(data => callback(data.country_code))
                    .catch(() => callback("us"));
            },
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        });
        itis.push({ input, iti });
    });

    // 2. Handle Form Submissions via AJAX (Bypass Formspree Redirect)
    const forms = document.querySelectorAll('form[action^="https://formspree.io"]');

    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate Phone Number if present
            let isValid = true;
            itis.forEach(obj => {
                if (form.contains(obj.input)) {
                    if (obj.input.value.trim() && !obj.iti.isValidNumber()) {
                        isValid = false;
                        const errorEl = obj.input.parentElement.nextElementSibling;
                        if(errorEl && errorEl.classList.contains('form-error-msg')) {
                            errorEl.style.display = 'block';
                            errorEl.textContent = 'Please enter a valid phone number.';
                        }
                    } else {
                        // Clear error
                        const errorEl = obj.input.parentElement.nextElementSibling;
                        if(errorEl && errorEl.classList.contains('form-error-msg')) {
                            errorEl.style.display = 'none';
                        }
                        // Replace value with fully formatted international number
                        if(obj.input.value.trim()) {
                            obj.input.value = obj.iti.getNumber();
                        }
                    }
                }
            });

            if (!isValid) return;

            // Prepare AJAX
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) submitBtn.classList.add('loading');
            
            const formData = new FormData(form);
            const endpoint = form.getAttribute('action');

            try {
                const response = await fetch(endpoint, {
                    method: 'POST',
                    body: formData,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    form.reset();
                    showSuccessModal();
                } else {
                    alert("Oops! There was a problem submitting your form.");
                }
            } catch (error) {
                alert("Network error. Please try again later.");
            } finally {
                if (submitBtn) submitBtn.classList.remove('loading');
            }
        });
    });

    // 3. Success Modal Logic
    function showSuccessModal() {
        const modal = document.getElementById('successModal');
        if (modal) modal.classList.add('active');
    }

    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            document.getElementById('successModal').classList.remove('active');
        });
    }
});
