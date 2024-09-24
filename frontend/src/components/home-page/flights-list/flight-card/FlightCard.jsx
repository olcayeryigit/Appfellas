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
import axios from "axios"; // Axios'u import et

const FlightCard = ({
  departure,
  arrival,
  price,
  departureTime,
  arrivalTime,
  airline,
}) => {
  const formatDepartureTime = formatDateTimeTo12Hour(departureTime);
  const formatArrivalTime = formatDateTimeTo12Hour(arrivalTime);
  const timeDifference = calculateTimeDifference(departureTime, arrivalTime);

  // Uçuşu kaydetmek için fonksiyon
  const handleBookFlight = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/flights/book", {
        departure,
        arrival,
        price,
        departureTime,
        arrivalTime,
        airline,
      });
      alert('Flight booked successfully!'); // Başarılı booking durumu
    } catch (error) {
      console.error('Error booking flight:', error);
      alert('Failed to book flight. Please try again.');
    }
  };

  return (
    <div className="mb-3">
      <div className="flight-card w-100">
        <h5 className="ps-3 pt-3">
          {departure} to {arrival}
        </h5>

        <div className="d-flex justify-content-between align-items-center px-3">
          <div>
            <div className="align-items-center">
              <TbPlaneDeparture />
              <div>Departure</div>
            </div>
            <div className="fw-bold">{formatDepartureTime}</div>
            <div>{departure}</div>
          </div>

          <div className="line"></div>

          <div>
            <img className="airlines-icon" src="/images/image-1.png" alt="airline" />
            <div className="flight-icon">
              <IoAirplaneSharp />
            </div>
            <div>{timeDifference}</div>
          </div>

          <div className="line"></div>

          <div className="mb-3">
            <div className="align-items-center">
              <TbPlaneArrival />
              <div>Arrival</div>
            </div>
            <div className="fw-bold">{formatArrivalTime}</div>
            <div>{arrival}</div>
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