// src/components/Homepage.js
import React, { useState, useEffect, useContext } from "react";
import "./home-page.css";
import { Col, Container, Row } from "react-bootstrap";
import Topbar from "./topbar/TopBar";
import FlightList from "./flights-list/FlightList";
import ImageSideBar from "./image-side-bar/ImageSideBar";
import SearchBar from "./search-bar/SearchBar";

const images = [
  { src: "/images/img-1.jpg" },
  { src: "/images/img-2.jpg" },
  { src: "/images/img-3.webp" },
];

const HomePage = () => {
  return (
    <Container fluid className="home-container d-flex justify-content-center bg-1 py-5  ">
      <Container className="bg-2 w-75 rounded-4 ps-4 pe-0 pt-2">
        <Topbar username="Olcay Eryiğit" />
        <Row className="py-2 m-0 px-0">
          <Col md={9} className="px-0">
            <SearchBar />
 <FlightList/>
          
          </Col>

          <Col md={3} className="p-0 m-0">
            <ImageSideBar images={images}/>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default HomePage;

