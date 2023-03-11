import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleTour from "./SingleTour";

const PopularToursTwo = ({ toursPage = false }) => {

  var myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4NTQ0NzgwLCJpYXQiOjE2NzgzNTkyNjUsImp0aSI6IjEwNGRkMjA3YWY4MzQwMTg4ZWVhMDA0YjdmOGFkY2FmIiwidXNlcl9pZCI6MjZ9.IonAsLHoh_BCEMaSflhIRkSh2e3grI95cc7oOe5H9fk");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("https://6wv6aciiid.execute-api.ap-south-1.amazonaws.com/dev_v1/tourist/package_list/", requestOptions)
      .then((responce) => responce.json())
      .then((data) => setPlaces(data.results));
    // .then((data) => console.log(data.results));
  }, []);

  return (
    <section className="popular-tours-two">
      <Container>
        {!toursPage && (
          <div className="section-title text-center">
            <span className="section-title__tagline">Featured tours</span>
            <h2 className="section-title__title">Most Popular Tours</h2>
          </div>
        )}
        <Row>
          {places.map((tour) => (
            <Col
              key={tour.id}
              xl={4}
              lg={6}
              md={6}
              className="animated fadeInUp"
            >
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularToursTwo;