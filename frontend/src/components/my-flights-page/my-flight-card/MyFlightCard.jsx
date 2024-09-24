import React from "react";

import { TbPlaneArrival, TbPlaneDeparture } from "react-icons/tb";
import { IoAirplaneSharp } from "react-icons/io5";
import { calculateTimeDifference, formatDateTimeTo12Hour, parse12HourTimeTo24Hour } from "../../../helpers/timeUtils";

const MyFlightCard = ({
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


  return (
    <div className="mb-3">
      <div className="bg-white w-100 ">
        <h5 className="ps-3 pt-2">
          {from} to {to}
        </h5>

        <div className="d-flex justify-content-between align-items-center px-3 ">
          <div>
            <div className="align-items-center">
              <TbPlaneDeparture />
              <div>Departure</div>
            </div>
            <div className="fw-bold">{formatDepartureTime}</div>
            <div>{from}</div>
          </div>

         

          <div>
            <img
              className="airlines-icon"
              src="/images/image-1.png"
              alt="airline"
            />
            <div className="flight-icon">
              <IoAirplaneSharp />
            </div>
            <div>{timeDifference}</div>
          </div>


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
        </div>
      </div>
    </div>
  );
};

export default MyFlightCard;
