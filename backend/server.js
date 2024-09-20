const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000; // Sunucu portu

app.use(cors()); // CORS sorunlarını çözmek için

// Uçuş verilerini çeken API route
app.get('/api/flights', async (req, res) => {
  const { page = 0 } = req.query; // Sayfa numarasını al

  try {
    const response = await axios.get(
      `https://api.schiphol.nl/public-flights/flights?includedelays=false&page=${page}&sort=%2BscheduleTime`,
      {
        headers: {
          Accept: 'application/json',
          app_id: 'faf15705',
          app_key: '92757bec9ed511e6d2e3cb5e6eab23d2',
          ResourceVersion: 'v4',
        },
      }
    );

    // flights verisini alıyoruz
    const flights = response.data.flights || [];  // flights dizisini al

    // Sayfalandırma link başlığını alıyoruz
    const linkHeader = response.headers.link || null;

    // Uçuş verilerini ve linkHeader'ı frontend'e yolluyoruz
    res.json({ flights, linkHeader });
  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: 'Unable to fetch flights' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});