import React, { useEffect, useState } from 'react';
import FlightCard from '../home-page/flights-list/flight-card/FlightCard';
import axios from 'axios';

const MyFlightsPage = () => {
  const [myFlights, setMyFlights] = useState([]); // Uçuşlar için state

  useEffect(() => {
    const fetchMyFlights = async () => {
      try {
        // Veritabanından uçuşları çekme
        const response = await axios.get('http://localhost:5000/api/myflights'); // Yeni endpoint
        setMyFlights(response.data); // Uçuş verilerini state'e kaydet
      } catch (error) {
        console.error('Error fetching flights:', error);
      }
    };

    fetchMyFlights(); // Uçuşları çek
  }, []); // Bileşen yüklendiğinde çalışır

  if (!Array.isArray(myFlights) || myFlights.length === 0) {
    return <div>No flights available</div>; // Uçuş yoksa mesaj göster
  }

  return (
    <div style={{ backgroundColor: '#e6f4ff' }}>
      <div className="container">
        <header className="header">
          <h1>My Flights</h1>
          <div className="filter-options">
            <button>Times</button>
            <button>Stops</button>
            <button>Airlines</button>
            <button>Airports</button>
            <button>Amenities</button>
            <button>Edit Search</button>
          </div>
        </header>

        <div className="flight-results">
          {myFlights.map((flight, index) => (
            <FlightCard
              key={index}
              from={flight.departure}      // Gerekli alanlar
              to={flight.arrival}
              price={flight.price}
              departureTime={flight.departureTime}
              arrivalTime={flight.arrivalTime}
              airline={flight.airline}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyFlightsPage;