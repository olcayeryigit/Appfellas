import React, { useState, useEffect } from 'react';
import { fetchFlights } from '../../../api/api'; // API'den uçuş verilerini çeken fonksiyon
import FlightCard from './flight-card/FlightCard'; // Uçuş kartı bileşeni
import './flights-list.css'; // CSS dosyanız

const FlightsList = () => {
  const [flights, setFlights] = useState([]); // Uçuş verileri
  const [loading, setLoading] = useState(true); // Yükleniyor durumu
  const [error, setError] = useState(null); // Hata durumu
  const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa
  const [totalPages, setTotalPages] = useState(0); // Toplam sayfa sayısı

  const fetchData = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchFlights(page); // Sayfaya göre uçuş verilerini çek
      console.log(data);
      setFlights(data.flights || []);
      const totalPages = parseLinkHeader(data.linkHeader); // Toplam sayfa sayısını al
      setTotalPages(totalPages);
    } catch (error) {
      setError('Uçuşlar alınırken hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const parseLinkHeader = (linkHeader) => {
    const links = linkHeader.split(',').map(link => link.trim());
    const lastLink = links.find(link => link.includes('rel="last"'));
    const match = lastLink.match(/page=(\d+)/);
    return match ? parseInt(match[1]) : 0;
  };

  useEffect(() => {
    fetchData(currentPage); // Bileşen yüklendiğinde verileri çek
  }, [currentPage]);

  return (
    <div>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : error ? (
        <p>{error}</p>
      ) : flights.length > 0 ? (
        <div className="scroll-container">
          {flights.map((flight) => (
            <FlightCard
              key={flight.id}
              from={flight.route.destinations[0] || 'Bilinmiyor'}
              to={flight.prefixICAO || 'Bilinmiyor'}
              price={`$${flight.flightNumber}`}
              departureTime={flight.scheduleDateTime || 'Bilinmiyor'}
              arrivalTime={flight.estimatedLandingTime|| 'Bilinmiyor'}
              airline={flight.airlineCode || 'Bilinmiyor'}
            />
          ))}
        </div>
      ) : (
        <p>Uçuş bulunamadı.</p>
      )}

      {/* Sayfalamayı kontrol et */}
      <div>
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
          disabled={currentPage === 1}
        >
          Önceki
        </button>
        <span>{currentPage} / {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
          disabled={currentPage === totalPages}
        >
          Sonraki
        </button>
      </div>
    </div>
  );
};

export default FlightsList;








/*// FlightsList.js
import React, { useState, useEffect } from 'react';
import { fetchFlights } from '../../../api/api';
import FlightCard from './flight-card/FlightCard';
import './flights-list.css'; // CSS dosyanızı import edin

const FlightsList = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFlights(); // Sayfa parametresini düzenleyin
        console.log(data);
        setFlights(data.flights || []);
      } catch (error) {
        setError('Error fetching flights. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


useEffect(()=>{
  console.log(flights)
},[flights])

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : flights.length > 0 ? (
        <div className="scroll-container">
          {flights.map((flight) => (
            <FlightCard
              key={flight.id}
              from={flight.route.destinations[0] || 'Unknown'}
              to={flight.prefixICAO || 'Unknown'}
              price={`$${flight.flightNumber}`}
              departureTime={flight.scheduleTime || 'Unknown'}
              arrivalTime={flight.estimatedLandingTime || 'Unknown'}
              airline={flight.airlineCode || 'Unknown'}
            />
          ))}
        </div>
      ) : (
        <p>No flights available</p>
      )}
    </div>
  );
};

export default FlightsList;*/


