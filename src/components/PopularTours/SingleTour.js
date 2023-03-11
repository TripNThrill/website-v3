import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ tour = {}, userSelect = false }) => {
  const title = tour.title;
  const price = tour.mrp;
  console.log("banner Img : " + tour.banner_imgs);
  const image = tour.banner_imgs[0].image;

  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={image}
            alt=""
          />
          <div className="popular-tours__icon">
            <Link href="/tour-details">
              <a>
                <i className="fa fa-heart"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">
          <div className="popular-tours__stars">
            <i className="fa fa-star"></i>Superb
          </div>
          <h3 className="popular-tours__title">
            <Link href="/tour-details">{title}</Link>
          </h3>
          <p className="popular-tours__rate">
            <span>${price}</span> / Per Person
          </p>
          {/* <ul className="popular-tours__meta list-unstyled">
            {meta.map((item, index) => (
              <li key={index}>
                <Link href="/tour-details">{item}</Link>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default SingleTour;