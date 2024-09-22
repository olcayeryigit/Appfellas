import axios from "axios";
import { useContext, useEffect, useState } from "react";
import StoreContext from "../../../store";
import FlightCard from "./flight-card/FlightCard";

const FlightList = () => {
  const { direction, allFlights, setAllFlights, filtered, setFiltered } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchFlights = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/flights", {
        params: { page: currentPage },
        headers: {
          'app_id': 'faf15705', // API APP ID
          'app_key': '92757bec9ed511e6d2e3cb5e6eab23d2', // API APP KEY
          'resourceVersion': 'v4', // API Version
          'Accept': 'application/json' // Response format
        }
      });

      const flights = response.data.flights;
      setAllFlights(flights);
    } catch (error) {
      console.error("Error fetching flights:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      {loading ? (
        <p>Yükleniyor...</p>
      ) : (
        <>
          <div>
            <ul>
              {filtered.length > 0 ? (
                filtered.map((flight) => (
                  <FlightCard
                    key={flight.id}
                    from={flight.route.destinations[0] || 'Bilinmiyor'}
                    to={flight.prefixICAO || 'Bilinmiyor'}
                    price={`$${flight.flightNumber}`}
                    departureTime={flight.scheduleDateTime || 'Bilinmiyor'}
                    arrivalTime={flight.estimatedLandingTime || 'Bilinmiyor'}
                    airline={flight.airlineCode || 'Bilinmiyor'}
                  />
                ))
              ) : (
                <p>Uçuş bulunamadı.</p>
              )}
            </ul>
          </div>

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