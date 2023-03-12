import React from "react";
import TourDetailsOne from "./TourDetailsOne";
import TourDetailsTwo from "./TourDetailsTwo";

const TourDetailsPage = (id) => {

  // const id = id.id;

  return (
    <>
      <TourDetailsOne id={id.id} />
      <TourDetailsTwo id={id.id} />
    </>
  );
};

export default TourDetailsPage;
