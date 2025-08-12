# Datadog Synthetics Demo for ADB Workshop

This project is a simple, interactive web application designed to demonstrate key features of Datadog Synthetic Monitoring. It was created for a workshop with the Asian Development Bank to provide a hands-on platform for building and understanding various synthetic tests.

The application simulates a "Project Funding Dashboard" and includes specific UI elements and behaviors tailored to showcase six distinct testing capabilities.

## Features Demonstrated

This application is built to be the target for Datadog Synthetic Browser Tests that cover the following use cases:

1.  **Targeting Elements with CSS Selectors**: A standard login form to practice creating stable element locators.
2.  **Setting Smart Conditions**: A promotional popup that only appears intermittently, perfect for testing optional steps.
3.  **Leveraging JavaScript Assertions**: A dynamic ROI calculator where the result must be validated with custom JavaScript.
4.  **Handling CAPTCHA Challenges**: A simulated CAPTCHA with a bypass mechanism to demonstrate testing strategies for bot detection.
5.  **Support for New Windows**: A link that opens in a new browser window to show how Datadog handles multi-window user journeys.
6.  **Passing Variables Between Steps**: A workflow to create a project, extract its dynamically generated ID, and use that variable in a subsequent step to verify its creation.


## File Structure

The project is organized as follows:

```
/
├── api/
│   └── submit.js       # Serverless backend function for APM tracing
├── index.html          # Login page
├── dashboard.html      # Main application dashboard
├── style.css           # All CSS styles
├── script.js           # Frontend JavaScript logic
├── package.json        # Project dependencies (for dd-trace)
└── README.md           # This file
