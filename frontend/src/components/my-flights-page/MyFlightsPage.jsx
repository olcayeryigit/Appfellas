import React from 'react';

const MyFlightsPage = () => {
    // Example flight data can be added here
    const flights = [
        {
            time: "7:40 AM - 9:12 AM",
            airline: "Delta Air Lines",
            flightNumber: "DL 1443",
            duration: "1h 32m",
            priceMain: "$156",
            priceComfort: "$204",
            priceFirst: "$386"
        },
        {
            time: "7:00 AM - 8:52 AM",
            airline: "American Airlines",
            flightNumber: "AA 166",
            duration: "1h 52m",
            priceMain: "$182",
            priceComfort: "",
            priceFirst: "$400"
        }
        // Add more flights here
    ];

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
                    {flights.map((flight, index) => (
                        <FlightCard
                            key={index}
                            time={flight.time}
                            airline={flight.airline}
                            flightNumber={flight.flightNumber}
                            duration={flight.duration}
                            priceMain={flight.priceMain}
                            priceComfort={flight.priceComfort}
                            priceFirst={flight.priceFirst}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const FlightCard = ({ time, airline, flightNumber, duration, priceMain, priceComfort, priceFirst }) => {
    return (
        <div className="flight-card">
            <div className="flight-details">
                <p><strong>Time:</strong> {time}</p>
                <p><strong>Airline:</strong> {airline} ({flightNumber})</p>
                <p><strong>Duration:</strong> {duration}</p>
            </div>
            <div className="price-options">
                <p><strong>Main:</strong> {priceMain}</p>
                <p><strong>Comfort+:</strong> {priceComfort}</p>
                <p><strong>First:</strong> {priceFirst}</p>
            </div>
        </div>
    );
};

export default MyFlightsPage;