const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 3001;

const url = 'https://f1api.dev/api/';
const endpoints = {
    drivers: `${url}drivers`,
    currentDrivers: `${url}current/drivers`
}

app.use(cors());

app.get('/api/current-drivers', async (req, res) => {
    try {
        const response = await fetch('https://f1api.dev/api/current/drivers');
        const data = await response.json();
        res.json(data);
        console.log(data);

    } catch (err) {
        console.error("Fetch error:", err);
        res.status(500).json({ error: 'Failed to fetch drivers' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});