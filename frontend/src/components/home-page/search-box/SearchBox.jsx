import React, { useContext, useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import "./search-box.css";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import StoreContext from "../../../store";
const SearchBox = () => {
  const { direction, setDirection} = useContext(StoreContext);

  const [roundTripClassName, setroundTripClassName] = useState("bg-4");
  const [oneWayClassName, setOneWayClassName] = useState("bg-6 color-1");

  const handleClickRoundTrip = () => {
    if (roundTripClassName == "bg-6 color-1") {
      setroundTripClassName("bg-4");
      setOneWayClassName("bg-6 color-1");
      setDirection('D')    }
  };

  const handleClickOneWayTrip = () => {
    if (oneWayClassName == "bg-6 color-1") {
      setroundTripClassName("bg-6 color-1");
      setOneWayClassName("bg-4");
      setDirection('A')    }
  };

  useEffect(() => {
    console.log("Seçilen yön: ", direction);
  }, [direction]);
  return (
    <div className="bg-3 p-3 rounded-3">
      <div className="d-flex justify-content-between">
        <h5>BOOK YOUR FLIGHT</h5>

        <div className="trip-options">
          <Button
            className={`trip-options-1 ${roundTripClassName}`}
            onClick={handleClickRoundTrip}
          >
            Round trip
          </Button>
          <Button
            className={`trip-options-2 ${oneWayClassName}`}
            onClick={handleClickOneWayTrip}
          >
            One way
          </Button>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-3 mt-3 ">
        <div className="d-flex justify-content-center align-items-center gap-1">
          <InputGroup className="input-group-1">
            <InputGroup.Text
              id="basic-addon1"
              className="input-group-text-1 text-color-1"
            >
              <MdFlightTakeoff size={22} />
            </InputGroup.Text>
            <Form.Control
              className="input input-1"
              placeholder=""
              aria-label="from"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup>
            <Form.Control
              className="input input-2"
              placeholder=""
              aria-label="To"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text
              id="basic-addon2"
              className="input-group-text-2 text-color-1"
            >
              <MdFlightLand size={22} />
            </InputGroup.Text>
          </InputGroup>
        </div>
        <div className="d-flex gap-1">
          <InputGroup className="">
            <InputGroup.Text
              id="basic-addon1"
              className="input-group-text-1 text-color-1"
            >
              <IoMdCalendar size={22} />
            </InputGroup.Text>
            <Form.Control
              className="input input-1"
              placeholder=""
              aria-label="Departure Date"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="">
            <Form.Control
              className="input input-2"
              placeholder=""
              aria-label="Return Dat"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text
              id="basic-addon2"
              className="input-group-text-2 text-color-1"
            >
              <IoMdCalendar size={22} />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>

      <Button className="mt-3 rounded-3 bg-4">Show Flights</Button>
    </div>
  );
};

export default SearchBox;
