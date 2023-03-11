// import toursListPage from "@/data/toursListPage";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

// const { toursList } = toursListPage;

const ToursListRight = () => {

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
    <div className="tours-list__right">
      <div className="tours-list__inner">
        {places.map(
          ({ id, banner_imgs, superb, title, mrp, duration_day, n_offers, get_dest_str }) => (
            <div key={id} className="tours-list__single">
              <div className="tours-list__img">
                <Image
                  src={banner_imgs[0].image}
                  alt=""
                />
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
                  <Link href="/tour-details">{title}</Link>
                </h3>
                <p className="tours-list__rate">
                  <span>${mrp}</span> / Per Person
                </p>
                <ul className="tours-list__meta list-unstyled">
                  <li>
                    <Link href="/tour-details">
                      <a>
                        <i className="far fa-calendar"></i>
                        {duration_day} DAYS
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
        )}
      </div>
    </div>
  );
};

export default ToursListRight;
