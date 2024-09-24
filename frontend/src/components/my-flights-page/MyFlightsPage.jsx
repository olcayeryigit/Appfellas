import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MyFlightCard from './my-flight-card/MyFlightCard';

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
    <div className='py-2 vh-100' style={{ backgroundColor: '#e6f4ff' }}>
        <a style={{color:"var(--color1)"}} className="text-center d-block link-home" href="/">Home </a>
      <div className="container">
      

        <div className="flight-results">
          {myFlights.map((flight, index) => (
            <MyFlightCard
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