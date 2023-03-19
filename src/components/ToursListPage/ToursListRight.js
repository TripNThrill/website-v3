// import toursListPage from "@/data/toursListPage";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import token from "@/data/token";
const { getToken } = token;

const ToursListRight = () => {

  var myHeaders = new Headers();
  myHeaders.append("Authorization", getToken);

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
    <div className="tours-list__right">
      <div className="tours-list__inner">
        {places.map(
          ({ id, banner_imgs, superb, title, mrp, duration_day, duration_night, n_offers, get_dest_str }) => {
            const images = banner_imgs.map((bi) => bi.image);
            return (
              <div key={id} className="tours-list__single">
                <div className="tours-list__img">
                  <Carousel autoPlay infiniteLoop>
                    {
                      images.map((i) => (
                        <div className="" key={i}>
                          <Image src={i} height="250" alt="" />
                        </div>
                      ))
                    }
                  </Carousel>
                  <div className="tours-list__icon">
                    <Link href="/tour-details">
                      <a>
                        <i className="fa fa-heart"></i>
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="tours-list__content">
                  <div className="tours-list__stars">
                    <i className="fa fa-star"></i> {superb} Superb
                  </div>
                  <h3 className="tours-list__title">
                    <Link href={"/tour-details/" + id}>{title}</Link>
                  </h3>
                  <p className="tours-list__rate">
                    <span>${mrp}</span> / Per Person
                  </p>
                  <ul className="tours-list__meta list-unstyled">
                    <li>
                      <Link href="/tour-details">
                        <a>
                          <i className="far fa-calendar"></i>
                          {duration_day}D - {duration_night}N
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tour-details">
                        <a>
                          <i className="fas fa-gifts"></i>
                          {n_offers}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tour-details">
                        <a>
                          <i className="far fa-map"></i>
                          {get_dest_str}
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  );
};

export default ToursListRight;
