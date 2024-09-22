import axios from "axios";
import { useContext, useEffect, useState } from "react";
import StoreContext from "../../../store";

const FlightList = () => {
  const { direction, setDirection } = useContext(StoreContext);
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(false);
  const [linkHeader, setLinkHeader] = useState("");

  const fetchFlights = async (page = 0) => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/api/flights', {
        params: {
          page: page,
          direction: direction 
        }
      });
      setFlights(response.data.flights);
      setLinkHeader(response.data.linkHeader);
    } catch (error) {
      console.error('Error fetching flights:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights(); // Varsayılan olarak sayfa 0 ile verileri çek
  }, [direction]);

  const handlePageChange = (newPage) => {
    fetchFlights(newPage); // Sayfa değiştiğinde verileri çek
  };

  const renderPagination = () => {
    if (linkHeader) {
      const links = linkHeader.split(', ');
      let nextPage = null;
      let prevPage = null;

      links.forEach(link => {
        if (link.includes('rel="next"')) {
          nextPage = getPageNumber(link);
        } else if (link.includes('rel="prev"')) {
          prevPage = getPageNumber(link);
        }
      });

      return (
        <div>
          {prevPage && <button onClick={() => handlePageChange(prevPage)}>Önceki</button>}
          {nextPage && <button onClick={() => handlePageChange(nextPage)}>Sonraki</button>}
        </div>
      );
    }
    return null;
  };

  const getPageNumber = (link) => {
    const url = link.split(';')[0].slice(1, -1); // URL'yi al
    const params = new URLSearchParams(url.split('?')[1]);
    return params.get('page'); // Sayfa numarasını döndür
  };

  return (
    <div>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <ul>
          {flights.length > 0 ? (
            flights.map((flight, index) => (
              <li key={index}>
                <strong>Uçuş Numarası:</strong> {flight.flightNumber} - 
                <strong> Uçuş Yönü:</strong> {flight.flightDirection} -
                <strong> Kalkış Zamanı:</strong> {flight.scheduleTime}
              </li>
            ))
          ) : (
            <p>Uçuş bulunamadı.</p>
          )}
        </ul>
      )}
      {renderPagination()} {/* Sayfalandırma düğmelerini render et */}
    </div>
  );
};

export default FlightList;