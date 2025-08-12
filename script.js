document.addEventListener('DOMContentLoaded', () => {
    // --- LOGIN PAGE LOGIC ---
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            if (user === 'admin' && pass === 'password') {
                window.location.href = 'dashboard.html';
            } else {
                document.getElementById('error-message').textContent = 'Invalid credentials.';
            }
        });
    }

    // --- DASHBOARD PAGE LOGIC ---
    // Conditional Popup Logic
    const checkPromoBtn = document.getElementById('check-promo-btn');
    if (checkPromoBtn) {
        checkPromoBtn.addEventListener('click', () => {
            // Only show the popup about 50% of the time to test conditional logic
            if (Math.random() > 0.5) {
                document.getElementById('promo-popup').style.display = 'flex';
            } 
        });
    }

    const closePopupBtn = document.getElementById('close-popup-btn');
    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', () => {
            document.getElementById('promo-popup').style.display = 'none';
        });
    }

    // JS Assertion Logic (Recalculate ROI on click to simulate dynamic content)
    const roiElement = document.getElementById('roi');
    if (roiElement) {
        roiElement.addEventListener('click', () => {
            const investment = parseFloat(document.getElementById('investment').textContent);
            const newReturn = Math.floor(Math.random() * (1500000 - 1100000 + 1)) + 1100000; // Random return
            document.getElementById('return').textContent = newReturn;
            const roi = ((newReturn - investment) / investment) * 100;
            roiElement.textContent = roi.toFixed(0);
        });
    }

    // CAPTCHA and Value Passing Logic
    const captchaBypassBtn = document.getElementById('captcha-bypass-btn');
    const submitProjectBtn = document.getElementById('submit-project-btn');
    const submissionStatus = document.getElementById('submission-status');

    if (captchaBypassBtn) {
        captchaBypassBtn.addEventListener('click', () => {
            document.getElementById('captcha-challenge').style.backgroundColor = '#5cb85c';
            document.getElementById('captcha-challenge').innerHTML = '<span>Verified!</span>';
            submitProjectBtn.disabled = false;
        });
    }

// --- In script.js ---

if (submitProjectBtn) {
    submitProjectBtn.addEventListener('click', async () => { // Make the function async
        const projectName = document.getElementById('project-name').value;
        if (projectName) {
            try {
                // Show a loading state
                submissionStatus.textContent = 'Submitting...';
                submissionStatus.className = '';

                // Call our new serverless API endpoint
                const response = await fetch('/api/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ projectName: projectName }),
                });

                const data = await response.json();

                if (response.ok) {
                    // Update the UI with the response from the API
                    submissionStatus.textContent = data.message;
                    submissionStatus.className = 'success';
                    
                    // Store the ID for the next step in the test
                    window.lastProjectId = data.projectId;
                } else {
                    throw new Error(data.error || 'Something went wrong');
                }

            } catch (error) {
                submissionStatus.textContent = `Error: ${error.message}`;
                submissionStatus.className = 'error';
            }
        } else {
            alert('Please enter a project name.');
        }
    });
}

    // Verification Logic
    const verifyBtn = document.getElementById('verify-btn');
    if (verifyBtn) {
        verifyBtn.addEventListener('click', () => {
            const enteredId = document.getElementById('verify-project-id').value;
            const statusEl = document.getElementById('verification-status');
            if (enteredId && enteredId === window.lastProjectId) {
                statusEl.textContent = 'Verification successful!';
                statusEl.className = 'success';
            } else {
                statusEl.textContent = 'Verification failed. ID does not match.';
                statusEl.className = 'error';
            }
        });
    }
});
