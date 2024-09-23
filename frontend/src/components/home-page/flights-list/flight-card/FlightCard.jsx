import React from "react";
import "./flight-card.css";
import {
  calculateTimeDifference,
  formatDateTimeTo12Hour,
  parse12HourTimeTo24Hour,
} from "../../../../helpers/timeUtils";
import { TbPlaneArrival, TbPlaneDeparture } from "react-icons/tb";
import { Button } from "react-bootstrap";
import { IoAirplaneSharp } from "react-icons/io5";
import axios from 'axios'; // Axios'u import et

const FlightCard = ({
  from,
  to,
  price,
  departureTime,
  arrivalTime,
  airline,
}) => {
  const formatDepartureTime = formatDateTimeTo12Hour(departureTime);
  const formatArrivalTime = formatDateTimeTo12Hour(arrivalTime);
  const dateDepartureTime = parse12HourTimeTo24Hour(formatDepartureTime);
  const dateArrivalTime = parse12HourTimeTo24Hour(formatArrivalTime);
  const timeDifference = calculateTimeDifference(departureTime, arrivalTime);

  // Uçuşu kaydetmek için fonksiyon
  const handleBookFlight = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/flights/book", {
        from,
        to,
        price,
        departureTime,
        arrivalTime,
        airline,
      });
      // ...
    } catch (error) {
      console.error('Error booking flight:', error);
      alert('Failed to book flight. Please try again.');
    }
    console.log(typeof from)
    console.log(typeof to)
    console.log(typeof price)
    console.log(typeof departureTime)
    console.log(typeof arrivalTime)
    console.log(typeof airline)
  };
  return (
    <div>
      <div className="flight-card">
        <h5 className="ps-3 pt-3">
          {from} to {to}
        </h5>

        <div className="d-flex justify-content-between align-items-center px-3">
          <div>
            <div className="align-items-center">
              <TbPlaneDeparture />
              <div>Departure</div>
            </div>
            <div className="fw-bold">{formatDepartureTime}</div>
            <div>{from}</div>
          </div>

          <div>-</div>

          <div>
            <img className="airlines-icon" src="/images/image-1.png" alt="airline" />
            <div className="flight-icon">
              <IoAirplaneSharp />
            </div>
            <div>{timeDifference}</div>
          </div>

          <div>-</div>

          <div className="mb-3">
            <div className="align-items-center">
              <TbPlaneArrival />
              <div>Arrival</div>
            </div>
            <div className="fw-bold">{formatArrivalTime}</div>
            <div>{to}</div>
          </div>
        </div>

        <div className="d-flex justify-content-between ps-3">
          <div>
            <div className="fw-bold price fs-6">Price: {price}</div>
            <div>Round Trip</div>
          </div>

          <Button size="lg" className="book-button" onClick={handleBookFlight}>
            Book Flight
          </Button>
        </div>
      </div>

      <Button className="check-button">Check the details</Button>
    </div>
  );
};

export default FlightCard;