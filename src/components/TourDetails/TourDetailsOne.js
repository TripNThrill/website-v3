// import { tourDetailsOne } from "@/data/tourDetailsPage";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import token from "@/data/token";
const { getToken } = token;
// const { title, rate, duration, minAge, tourType, location, date, superb } = tourDetailsOne;

const TourDetailsOne = (id) => {

  console.log(id.id);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", getToken);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const [places, setPlaces] = useState({});

  useEffect(() => {
    fetch("https://6wv6aciiid.execute-api.ap-south-1.amazonaws.com/dev_v1/tourist/package_list/", requestOptions)
      .then((responce) => responce.json())
      .then((data) => {
        setPlaces(data.results.filter((result) => result.id == id.id)[0])
      });
  }, [id]);

  return (
    <section className="tour-details">
      <div className="tour-details__top">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__top-inner">
                <div className="tour-details__top-left">
                  <h2 className="tour-details__top-title">{places?.title}</h2>
                  <p className="tour-details__top-rate">
                    <span>${places?.mrp}</span> / Per Person
                  </p>
                </div>
                <div className="tour-details__top-right">
                  <ul className="list-unstyled tour-details__top-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Duration</p>
                        <h6>{places?.duration_day} D</h6>
                        <h6>{places?.duration_night} N</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-user"></span>
                      </div>
                      <div className="text">
                        <p>Offers</p>
                        <h6>{places?.n_offers}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-plane"></span>
                      </div>
                      <div className="text">
                        <p>SP</p>
                        <h6>{places?.sp}</h6>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <span className="icon-place"></span>
                      </div>
                      <div className="text">
                        <p>Location</p>
                        <h6>{places?.get_dest_str}</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="tour-details__bottom">
        <Container>
          <Row>
            <Col xl={12}>
              <div className="tour-details__bottom-inner">
                <div className="tour-details__bottom-left">
                  <ul className="list-unstyled tour-details__bottom-list">
                    <li>
                      <div className="icon">
                        <span className="icon-clock"></span>
                      </div>
                      <div className="text">
                        <p>Posted Posted 2 days ago</p>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        {Array.from(Array(5)).map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                      <div className="text">
                        <p>8.0 Superb</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="tour-details__bottom-right">
                  <a href="#">
                    <i className="fas fa-share"></i>share
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default TourDetailsOne;
