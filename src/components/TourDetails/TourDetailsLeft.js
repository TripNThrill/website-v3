import SingleTour from "@/components/PopularTours/SingleTour";
import popularTours from "@/data/popularTours";
// import { tourDetailsLeft } from "@/data/tourDetailsPage";
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import ReviewForm from "./ReviewForm";
import ReviewScoreBar from "./ReviewScoreBar";
import SingleComment from "./SingleComment";
import token from "@/data/token";
const { getToken } = token;
// const { overview, overviewList, faq, superb, reviewScore, comments, reviews } = tourDetailsLeft;

const TourDetailsLeft = (id) => {
  const [active, setActive] = useState(1);
  const [places, setPlaces] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", getToken);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  useEffect(() => {
    if (id.id == undefined) {
      //console.log(id);
    }
    else {
      console.log('fetching for' + id.id)
      fetch("https://6wv6aciiid.execute-api.ap-south-1.amazonaws.com/dev_v1/tourist/package_details/" + id.id, requestOptions)
        .then((responce) => {
          console.log(responce);
          return responce.json()
        }).catch(console.error)
        .then((data) => {
          setPlaces(data)
          // console.log(data)
        });
    }
  }, [id]);

  return (
    <div className="tour-details-two__left">
      <div className="tour-details-two__overview">
        <h3 className="tour-details-two__title">Overview</h3>
        <p className="tour-details-two__overview-text">{places.description}</p>
        <div className="tour-details-two__overview-bottom">
          <h3 className="tour-details-two-overview__title">Included/Exclude</h3>
          <div className="tour-details-two__overview-bottom-inner">
            <div className="tour-details-two__overview-bottom-left">
              {/* <ul className="list-unstyled tour-details-two__overview-bottom-list">
                {places.inclusions.map((inclusion, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-check"></i>
                    </div>
                    <div className="text">
                      <p>{inclusion}</p>
                    </div>
                  </li>
                ))}
              </ul> */}
              {places.inclusions}
            </div>
            {/* <div className="tour-details-two__overview-bottom-right">
              <ul className="list-unstyled tour-details-two__overview-bottom-right-list">
                {overviewList.slice(4).map((over, index) => (
                  <li key={index}>
                    <div className="icon">
                      <i className="fa fa-times"></i>
                    </div>
                    <div className="text">
                      <p>{over}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <div className="tour-details-two__tour-plan">
        <h3 className="tour-details-two__title">Tour Policy</h3>
        <div className="accrodion-grp faq-one-accrodion">
          {["confirmation_policy", "refund_policy", "cancellation_policy", "payment_terms"].map((policy, index) => (
            <div
              className={`accrodion overflow-hidden${active === index ? " active" : ""
                }`}
              key={index}
            >
              <div onClick={() => setActive(index)} className="accrodion-title">
                <h4>
                  <span>Policy : {index + 1}</span>  {policy}
                </h4>
              </div>
              <div
                className={`accrodion-content animated ${active === index ? "slideInUp d-block" : "slideInDown d-none"
                  }`}
              >
                <div className="inner">
                  <p>{places[policy]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tour-details-two__location">
        <h3 className="tour-details-two__title">Tour Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
          className="tour-details-two__location-map"
          allowFullScreen
        ></iframe>
      </div>
      {/* <div className="tour-details-two__related-tours">
        <h3 className="tour-details-two__title">Category</h3>
        <Row>
          {places.category.image.map((tour) => (
            <Col xl={6} key={tour.id}>
              <SingleTour tour={tour} userSelect />
            </Col>
          ))}
        </Row>
      </div>
      <h3 className="tour-details-two__title review-scores__title">
        Review Scores
      </h3> */}
      {/* <div className="tour-details__review-score">
        <div className="tour-details__review-score-ave">
          <div className="my-auto">
            <h3>{places.rating_details}</h3>
            <p>
              <i className="fa fa-star"></i> Super
            </p>
          </div>
        </div>
        <div className="tour-details__review-score__content">
          {reviewScore.map((review) => (
            <ReviewScoreBar review={review} key={review.id} />
          ))}
        </div>
      </div> */}
      {/* <div className="tour-details__review-comment">
        {comments.map((comment) => (
          <SingleComment comment={comment} key={comment.id} />
        ))}
      </div> */}
      {/* <ReviewForm reviews={reviews} /> */}
    </div>
  );
};

export default TourDetailsLeft;