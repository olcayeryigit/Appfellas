import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./search-bar.css";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import StoreContext from "../../../store";
import { formatDate } from "../../../helpers/timeUtils";

// İkonlu Giriş Bileşeni

const SearchBar = () => {
  const { direction, setDirection, allFlights, setFiltered } =
    useContext(StoreContext);
  const [roundTripClassName, setRoundTripClassName] = useState("bg-4");
  const [oneWayClassName, setOneWayClassName] = useState("bg-6 color-1");
  const [departureDate, setDepartureDate] = useState(null);
  const [arrivalDate, setArrivalDate] = useState(null);
  const [departureLocation, setDepartureLocation] = useState("");
  const [arrivalLocation, setArrivalLocation] = useState("");
  const [showClick, setShowClick] = useState(false);

  const handleDirectionChange = (newDirection) => {
    setDirection(newDirection);
    setRoundTripClassName(newDirection === "D" ? "bg-4" : "bg-6 color-1");
    setOneWayClassName(newDirection === "A" ? "bg-4" : "bg-6 color-1");
  };

  const filterFlights = (flights) => {
    const formattedDepartureDate = departureDate
      ? formatDate(departureDate)
      : null;
    const formattedArrivalDate = arrivalDate ? formatDate(arrivalDate) : null;

    return flights
      .filter((flight) =>
        direction ? flight.flightDirection === direction : true
      )
      .filter((flight) =>
        departureLocation
          ? flight.route.destinations[0] === departureLocation
          : true
      )
      .filter((flight) =>
        arrivalLocation ? flight.prefixICAO === arrivalLocation : true
      )
      .filter((flight) =>
        formattedDepartureDate
          ? formatDate(flight.scheduleDateTime) === formattedDepartureDate
          : true
      )
      .filter((flight) =>
        formattedArrivalDate
          ? formatDate(flight.estimatedLandingTime) === formattedArrivalDate
          : true
      );
  };

  const handleClickShowFlights = () => {
    setShowClick((prev) => !prev);
    setFiltered(filterFlights(allFlights)); // Filtreleme işlemini hemen yap
  };

  const handleClearFilters = () => {
    setDirection("");
    setDepartureDate(null);
    setArrivalDate(null);
    setDepartureLocation("");
    setArrivalLocation("");
    setFiltered(allFlights);
    setShowClick(false);
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
          <Button
            className={`trip-options-1 ${roundTripClassName}`}
            onClick={() => handleDirectionChange("D")}
          >
            Round trip
          </Button>
          <Button
            className={`trip-options-2 ${oneWayClassName}`}
            onClick={() => handleDirectionChange("A")}
          >
            One way
          </Button>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center gap-3 mt-3">
        <div className="d-flex gap-1">
          <div className="input-div-1 d-flex align-items-center">
            {" "}
            <div className="icon-div-1 d-flex align-items-center">
              <MdFlightLand className="icon icon-1" />
            </div>
            <input
              className="input input-1 w-100"
              value={departureLocation}
              onChange={(e) => setDepartureLocation(e.target.value)}
            />{" "}
          </div>
          <div className="input-div-2 d-flex align-items-center">
            <input
              className="input input-2 w-100"
              value={arrivalLocation}
              onChange={(e) => setArrivalLocation(e.target.value)}
            />
            <div className="icon-div-2 d-flex align-items-center">
              <MdFlightTakeoff className="icon icon-2" />
            </div>
          </div>
        </div>

        <div className="d-flex gap-1">
          <div className="input-div-1 d-flex align-items-center">
            <div className="icon-div-1 d-flex align-items-center">
              <IoMdCalendar className="icon icon-1" />
            </div>
            <DatePicker
              className="input input-1 w-100"
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
            />
          </div>

          <div className="input-div-2 d-flex align-items-center ">
            <DatePicker
              className="input input-2 w-100"
              selected={arrivalDate}
              onChange={(date) => setArrivalDate(date)}
            />
            <div className="icon-div-2 d-flex align-items-center">
              <IoMdCalendar className="icon icon-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <Button
          className="btn-show rounded-3 bg-4 me-2"
          onClick={handleClickShowFlights}
        >
          Show Flights
        </Button>
        <Button className="btn-clear rounded-3 " onClick={handleClearFilters}>
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;