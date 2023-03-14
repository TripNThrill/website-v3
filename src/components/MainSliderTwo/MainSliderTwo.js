// import mainSliderTwoData from "@/data/mainSliderTwoData";
import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import SingleSlide from "./SingleSlide";
import token from "@/data/token";
const { getToken } = token;
SwiperCore.use([Autoplay, Navigation, EffectFade]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
};

const MainSliderTwo = (id) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", getToken);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  const [places, setPlaces] = useState([]);

  useEffect(() => {
    if (id.id === undefined) { }
    else {
      fetch("https://6wv6aciiid.execute-api.ap-south-1.amazonaws.com/dev_v1/tourist/package_details/" + id.id, requestOptions)
        .then((responce) => responce.json())
        .then((data) => {
          setPlaces(data.banner_imgs)
          // console.log(data.banner_imgs);
        });
    }
  }, [id]);

  return (
    <section className="main-slider tour-details-slider">
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
          {places.map((image) => (
            <SingleSlide key={image?.id} slide={image ? { bg: image.image } : ""} />
          ))}
        </div>
        <div className="main-slider-nav">
          <div
            id="main-slider__swiper-button-prev"
            className="main-slider-button-prev"
          >
            <span className="icon-right-arrow"></span>
          </div>
          <div
            id="main-slider__swiper-button-next"
            className="main-slider-button-next"
          >
            <span className="icon-right-arrow"></span>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MainSliderTwo;
