import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./search-box.css";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import StoreContext from "../../../store";
import { formatDate } from "../../../helpers/timeUtils";

const IconInput = ({ icon: Icon, placeholder, value, onChange }) => (
  <div className="input-div-1 d-flex align-items-center">
    <div className="icon-div-1 d-flex align-items-center">
      <Icon className="icon icon-1" />
    </div>
    <Form.Control
      className="input input-1"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
);

const SearchBox = () => {
  const { direction, setDirection, allFlights, filtered, setFiltered } = useContext(StoreContext);
  const [departureDate, setDepartureDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [showClick, setShowClick] = useState(false);

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
  };

  const filterFlights = (flights) => {
    const formattedDepartureDate = departureDate ? formatDate(departureDate) : null;
    const formattedArrivalDate = arrivalDate ? formatDate(arrivalDate) : null;

    return flights
      .filter((flight) => (direction ? flight.flightDirection === direction : true))
      .filter((flight) => (departureLocation ? flight.route.destinations[0] === departureLocation : true))
      .filter((flight) => (arrivalLocation ? flight.prefixICAO === arrivalLocation : true))
      .filter((flight) => (formattedDepartureDate ? formatDate(flight.scheduleDateTime) === formattedDepartureDate : true))
      .filter((flight) => (formattedArrivalDate ? formatDate(flight.estimatedLandingTime) === formattedArrivalDate : true));
  };

  const handleClickShowFlights = () => {
    setShowClick((prev) => !prev);
    if (!showClick) {
      setFiltered(filterFlights(allFlights));
    } else {
      setFiltered(allFlights);
    }
  };

  useEffect(() => {
    if (!showClick) {
      setFiltered(allFlights);
    }
  }, [allFlights]);

  return (
    <div className="bg-3 p-3 rounded-3">
      <div className="d-flex justify-content-between">
        <h5>BOOK YOUR FLIGHT</h5>
        <div className="trip-options">
          <Button className={`trip-options-1 ${direction === "D" ? "active" : ""}`} onClick={() => handleDirectionChange("D")}>
            Round trip
          </Button>
          <Button className={`trip-options-2 ${direction === "A" ? "active" : ""}`} onClick={() => handleDirectionChange("A")}>
            One way
          </Button>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
        <div className="d-flex justify-content-center align-items-center gap-1">
          <IconInput
            icon={MdFlightTakeoff}
            placeholder="Departure Location"
            value={departureLocation}
            onChange={(e) => setDepartureLocation(e.target.value)}
          />
          <IconInput
            icon={MdFlightLand}
            placeholder="Arrival Location"
            value={arrivalLocation}
            onChange={(e) => setArrivalLocation(e.target.value)}
          />
        </div>

        <div className="d-flex gap-1">
          <div className="input-div-1 d-flex align-items-center">
            <DatePicker
              className="input input-1"
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
            />
            <div className="icon-div-1 d-flex align-items-center">
              <IoMdCalendar className="icon icon-1" />
            </div>
          </div>

          <div className="input-div-2 d-flex align-items-center">
            <DatePicker
              className="input input-2"
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
            />
            <div className="icon-div-2 d-flex align-items-center">
              <IoMdCalendar className="icon icon-2" />
            </div>
          </div>
        </div>
      </div>

      <Button className="mt-3 rounded-3 bg-4" onClick={handleClickShowFlights}>
        Show Flights
      </Button>
    </div>
  );
};

export default SearchBox;