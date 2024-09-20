import React from "react";
import "./flight-card.css";
import {
  formatScheduleTime,
  calculateTimeDifference,
  formatEstimatedTime,
} from "../../../../helpers/timeUtils";
import { TbPlaneArrival, TbPlaneDeparture } from "react-icons/tb";
import { Button, Card, Col, Row } from "react-bootstrap";
import { IoAirplaneSharp } from "react-icons/io5";
const FlightCard = ({
  from,
  to,
  price,
  departureTime,
  arrivalTime,
  airline,
}) => {
  return (
    <div className="">
      <div className="flight-card">
        <h5 className="ps-3 pt-3">
          {from} to {to}
        </h5>

        <div className="d-flex justify-content-between align-items-center px-3">
          <div className="">
            <div className="align-items-center">
              <TbPlaneDeparture />
              <div>Departure</div>
            </div>
            <div className="fw-bold">{formatScheduleTime(departureTime)}</div>
            <div>{from}</div>
          </div>


<div>-</div>

          <div className="">
         <div></div>
         <img className="airlines-icon" src="/images/image-1.png"/>
         <div className="flight-icon"><IoAirplaneSharp/>
         </div>
            <div>
              {calculateTimeDifference(
                formatScheduleTime(departureTime),
                formatEstimatedTime(arrivalTime)
              )}
            </div>
          </div>


          <div>-</div>


          <div  className="mb-3">
            <div className="align-items-center">
              <TbPlaneArrival />
              <div> Arrival</div>
            </div>
            <div className="fw-bold">{formatEstimatedTime(arrivalTime)}</div>
            <div>{to}</div>
          </div>
        </div>


 <div className="d-flex justify-content-between ps-3 ">
  <div>
    <div className="fw-bold price fs-6">Price: {price}</div>
          <div>Round Trip</div>
  </div>
          
          <Button size="lg" className="book-button">Book Flight</Button>
        </div>
      </div>

       

      <Button className="check-button ">
        Check the details
      </Button>
    </div>
  );
};

export default FlightCard;
