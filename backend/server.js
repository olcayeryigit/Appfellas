const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// CORS ayarlarını yapılandırma
app.use(cors({
  origin: 'http://localhost:5173', // Frontend adresiniz
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// JSON verilerini işlemek için middleware
app.use(express.json());

// API anahtarı ve uygulama ID'nizi burada saklayın
const APP_ID = 'faf15705';
const APP_KEY = '92757bec9ed511e6d2e3cb5e6eab23d2';

// Uçuş verilerini almak için API endpoint
app.get('/api/flights', async (req, res) => {
  try {
    // Schiphol API URL ve parametreler
    const url = 'https://api.schiphol.nl/public-flights/flights';
    const response = await axios.get(url, {
      params: {
        includedelays: false,
        page: 0,
        sort: '+scheduleTime'
      },
      headers: {
        'Accept': 'application/json',
        'app_id': APP_ID,
        'app_key': APP_KEY,
        'ResourceVersion': 'v4'
      }
    });

    // Uçuş verilerini döndürme
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching flight data.' });
  }
});

// Sunucuyu dinlemeye başlama
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});