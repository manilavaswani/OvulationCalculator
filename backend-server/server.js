const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());  // Allow requests from any origin
app.use(express.json());

// const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwDKz9h7Zf1mWVctosyXk0lI5UiBd3LYL-HTUEPOlKDPD8BU6YJqhV0fYytc8bycBNyjA/exec';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxnXWukM4pQMnqQ1y89RFUL-Ga-E0TZ_s2r09vSWTXyuxzy0XP_0uDJW4X5awJ-xF1Tbg/exec'
// const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxnXWukM4pQMnqQ1y89RFUL-Ga-E0TZ_s2r09vSWTXyuxzy0XP_0uDJW4X5awJ-xF1Tbg/exec'
// Proxy route to call Google Apps Script
app.get('/trigger-reminder', async (req, res) => {
    try {
        const response = await axios.get(GOOGLE_SCRIPT_URL);
        res.json(response.data);
    } catch (error) {
        console.error("Error calling Google Apps Script:", error);
        res.status(500).json({ error: "Failed to trigger script" });
    }
});

//for testing
// app.get('/send-test-email', async (req, res) => {
//     try {
//         const response = await axios.get(GOOGLE_SCRIPT_URL);
//         res.json({ message: "✅ Email request sent!", scriptResponse: response.data });
//     } catch (error) {
//         console.error("❌ Error sending email:", error);
//         res.status(500).json({ error: "Failed to send test email." });
//     }
// });

// Start the server
const PORT = 3000;
app.get('/', (req, res) => {
    res.send("✅ Backend is running!");
});
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));