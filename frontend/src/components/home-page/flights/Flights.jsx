import React, { useContext } from "react";
import StoreContext from "../../../store";
import FlightCard from "./flight-card/FlightCard";

const Flights = () => {
  const { flights } = useContext(StoreContext);

  return (
    <>
      {flights.length > 0 ? (
        flights.map((flight) => (
          <FlightCard
            key={flight.id}
            from={flight.route.destinations[0] || "Unknown"}
            to={flight.prefixICAO || "Unknown"}
            price={`$${flight.flightNumber}`} // Placeholder, adjust as necessary
            departureTime={flight.scheduleTime || "Unknown"}
            arrivalTime={flight.estimatedLandingTime || "Unknown"}
            airline={flight.airlineCode || "Unknown"}
          />
        ))
      ) : (
        <p>No flights available</p>
      )}
    </>
  );
};

export default Flights;
