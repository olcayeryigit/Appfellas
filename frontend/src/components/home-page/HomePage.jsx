// src/components/Homepage.js
import React, { useState, useEffect, useContext } from "react";
import "./home-page.css";
import { Col, Container, Row } from "react-bootstrap";
import Topbar from "./topbar/TopBar";
import SearchBar from "./search-bar/SearchBar";
import Right from "./right/Right";
import SearchBox from "./search-box/SearchBox";
import FlightList from "./flights-list/FlightList";

const images = [
  { src: "/images/img-1.jpg" },
  { src: "/images/img-2.jpg" },
  { src: "/images/img-3.webp" },
];

const HomePage = () => {
  return (
    <div className="bg-1 p-5">
      <Container className="bg-2 my-3 rounded-4 p-3">
        <Topbar username="Olcay Eryiğit" />
        <Row className="p-3 m-0 ">
          <Col md={9}>
            <SearchBox />

            <Row className="m-0 mt-5">
              <Col md={8} className="p-0">
            <FlightList/>
              </Col>
              <Col md={4} className="p-0 mt-4">
                <SearchBar />
              </Col>
            </Row>
          </Col>

          <Col md={3}>
            <Right images={images}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;

/* <div className="flight-results">
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
</div>*/
