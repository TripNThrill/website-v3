import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "@/components/TourDetails/TourDetailsPage";
import React from "react";
import { useRouter } from 'next/router'

const TourDetails = () => {

    const router = useRouter()
    const { id } = router.query
    // console.log(id);

    return (
        <Layout pageTitle="Tours Details">
            <MainSliderTwo id={id} />
            <TourDetailsPage id={id} />
        </Layout>
    );
};

export default TourDetails;
