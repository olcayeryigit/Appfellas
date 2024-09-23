import axios from "axios";
import { useContext, useEffect, useState } from "react";
import StoreContext from "../../../store";
import FlightCard from "./flight-card/FlightCard";
import "./flight-list.css"

const FlightList = () => {
  const { allFlights, filtered, setAllFlights, setFiltered } = useContext(StoreContext);
  const [loading, setLoading] = useState(false); // Yüklenme durumu
  const [currentPage, setCurrentPage] = useState(0); // Mevcut sayfa

  // Uçuş verilerini backend'den çekme fonksiyonu
  const fetchFlights = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/flights", {
        params: {
          page: currentPage,
        },
      });

      const flights = response.data.flights; // Tüm uçuşları al
      setAllFlights(flights);
    } catch (error) {
      console.error("Error fetching flights:", error);
    } finally {
      setLoading(false);
    }
  };

  // Uçuş verilerini çek
  useEffect(() => {
    fetchFlights();
  }, [currentPage]);

  // Sayfa değişim fonksiyonu
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <>
          <div className="scroll-container">
            <h2>Tüm Uçuşlar</h2>
            <ul>
              {filtered.length > 0 ? (
                filtered.map((flight) => (
                  <FlightCard
                    key={flight.id}
                    from={flight.route.destinations[0] || "Bilinmiyor"}
                    to={flight.prefixICAO || "Bilinmiyor"}
                    price={`$${flight.flightNumber}`}
                    departureTime={flight.scheduleTime || "Bilinmiyor"}
                    arrivalTime={flight.estimatedLandingTime || "Bilinmiyor"}
                    airline={flight.airlineCode || "Bilinmiyor"}
                  />
                ))
              ) : (
                <p>Uçuş bulunamadı.</p>
              )}
            </ul>
          </div>

          {/* Sayfalandırma düğmeleri */}
          <div className="d-flex justify-content-center gap-1">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              Önceki
            </button>
            <button onClick={() => handlePageChange(currentPage + 1)}>
              Sonraki
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FlightList;