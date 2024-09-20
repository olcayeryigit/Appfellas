import React from "react";
import { Form } from "react-bootstrap";
import "./search-bar.css";
const SearchBar = () => {
  const arrivalTimes = [
    { label: "5:00 AM - 11:59 AM", value: "morning" },
    { label: "12:00 PM - 5:59 PM", value: "afternoon" },
  ];

  const stops = [
    { label: "Nonstop", value: "nonstop" },
    { label: "1 Stop", value: "1-stop" },
    { label: "2+ Stop", value: "2-plus-stop" },
  ];

  return (
    <div className="py-2 px-3">
      <Form className="">
        <h6>Sort by:</h6>

        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>

        <h6 className="mt-2">Arrival Time</h6>
        <div key="inline-radio" className="mb-3 d-flex flex-column">
          {arrivalTimes.map((time, index) => (
            <Form.Check
              key={index}
              inline
              label={time.label}
              name="arrival-time"
              type="radio"
              id={`arrival-time-${index}`}
              value={time.value}
              defaultChecked={index === 0}
            />
          ))}
        </div>

        <h6>Stops</h6>
        <div key="inline-radio" className="mb-3 d-flex flex-column">
          {stops.map((stop, index) => (
            <div className="d-flex justify-content-between" key={index}>
              <Form.Check
                inline
                label={stop.label}
                name="stops"
                type="radio"
                id={`stops-${index}`}
                value={stop.value}
                defaultChecked={index === 0}
              />
              <div>230</div>
            </div>
          ))}
        </div>

        <h6>Airlines Included</h6>
        <div key="inline-radio" className="mb-3 d-flex flex-column">
          <Form.Check
            inline
            label="1"
            name="group1"
            type="radio"
            id="inline-radio-1"
          />
        </div>
      </Form>
    </div>
  );
};

export default SearchBar;
