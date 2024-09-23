const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const Flight = require('./models/Flight'); // Flight modelini dahil edin

const app = express();
const port = 5000; // Sunucu portu

app.use(cors()); // CORS sorunlarını çözmek için
app.use(express.json()); // JSON gövde verilerini işlemek için

// MongoDB bağlantısı
mongoose.connect('mongodb://127.0.0.1:27017/flightdb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

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

// Uçuş kaydetme route
app.post('/api/flights/book', async (req, res) => {
  const flightData = req.body;

  console.log("Received flight data:", flightData); // Hata ayıklama için eklenmiştir.

  // departureTime ve arrivalTime string olarak saklanacak
  const newFlight = new Flight({
    flightName: flightData.flightName,
    flightNumber: flightData.flightNumber,
    airline: flightData.airline,
    departure: flightData.departure,
    arrival: flightData.arrival,
    departureTime: flightData.departureTime, // string olarak
    arrivalTime: flightData.arrivalTime,     // string olarak
    status: flightData.status,
    price: flightData.price,
  });

  try {
    await newFlight.save();
    res.status(201).json({ message: 'Flight booked successfully', flight: newFlight });
  } catch (error) {
    console.error('Error saving flight:', error);
    res.status(500).json({ error: 'Unable to save flight' });
  }
});


app.get('/api/myflights', async (req, res) => {
  try {
    const flights = await Flight.find(); // Tüm uçuşları bul
    res.json(flights); // Uçuş verilerini döndür
  } catch (error) {
    console.error('Error fetching flights:', error);
    res.status(500).json({ error: 'Unable to fetch flights' });
  }
});

// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});