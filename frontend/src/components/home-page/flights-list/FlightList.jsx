import axios from "axios";
import { useContext, useEffect, useState } from "react";
import StoreContext from "../../../store";
import FlightCard from "./flight-card/FlightCard";
import Spinner from "react-bootstrap/Spinner"; // Spinner bileşeni
import "./flight-list.css";
import { Button } from "react-bootstrap";

const FlightList = () => {
  const { allFlights, filtered, setAllFlights } = useContext(StoreContext);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchFlights = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/flights", {
        params: { page: currentPage },
      });

      const flights = response.data.flights;
      console.log(flights)
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

  const displayFlights = Array.isArray(filtered) && filtered.length > 0 ? filtered : [];

  return (
    <div className="">
      {loading ? ( // Yükleme durumunu kontrol et
      <div className="text-center">
        <Spinner animation="border" />
      </div>
        
      ) : (
        <>
          <div className="scroll-container mt-3 pe-3">
            <div className="">
              {displayFlights.length > 0 ? (
                displayFlights.map((flight) => (
                  <FlightCard
                    key={flight.id}
                    from={flight.route.destinations[0] || "Bilinmiyor"}
                    to={flight.prefixICAO || "Bilinmiyor"}
                    price="500"
                    departureTime={flight.scheduleTime || "Bilinmiyor"}
                    arrivalTime={flight.estimatedLandingTime || "Bilinmiyor"}
                    airline={flight.airlineCode || "Bilinmiyor"}
                  />
                ))
              ) : (
                <p>Uçuş bulunamadı.</p>
              )}
            </div>
          </div>

          <div className="d-flex justify-content-center gap-2 my-4">
            <Button variant="" className="btn-next-prev rounded-0 bg-white "
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
            Previous
            </Button>
            <Button variant="" className="btn-next-prev rounded-0 bg-white "
             onClick={() => handlePageChange(currentPage + 1)}>
Next            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default FlightList;