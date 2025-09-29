const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Endpoint to fetch last 20 results
app.get('/api/results', async (req, res) => {
    try {
        const response = await axios.get('https://wingo.oss-ap-southeast-7.aliyuncs.com/WinGo_1_20250929100010611_past100_draws?r=1759140662354');
        const data = response.data;
        // Extract last 20 results
        const last20 = data.slice(0, 20);
        res.json(last20);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch results', details: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
