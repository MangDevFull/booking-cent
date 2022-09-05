// import Head from "next/head";
// import MainServiceCollections from "@/components/MainServiceCollections";
// import ProductCollection1 from "@/components/ProductCollection1";
// import Layout from "@/components/Layout";
// import { useEffect } from "react";
// import MainMultipleSlider from "@/components/MainMultipleSlider";
// import PartitionSlider from "@/components/PartitionSlider";
// import MasterParallaxBanner from "@/components/MasterParallaxBanner";
// import styles from "@/styles/homepage.module.css"
import { useEffect } from "react";
import {getStrapiURL,fetchAPI} from "../libs/api"
export default function Home({
  // dealsOfTheDay,
  // dontMissTheseProducts,
  // firstNewProducts,
  // leftNewProducts,
  // rightFeatureProducts,
  // top5Products,
}) {
  useEffect(async()=>{
    const data = await fetchAPI("/bookings")
  })
  return (
    <>
     index
    </>
  );
}

// Home.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };

// export async function getStaticProps() {
  // const response = await fetch(`${process.env.API_URL}`);
  // const { data } = await response.json();

  // return {
  //   props: {
  //     dealsOfTheDay: data.dealsOfTheDay,
  //     dontMissTheseProducts: data.dontMissTheseProducts,
  //     firstNewProducts: data.firstNewProducts,
  //     leftNewProducts: data.leftNewProducts,
  //     rightFeatureProducts: data.rightFeatureProducts,
  //     top5Products: data.top5Products,
  //   },
  //   revalidate: 60,
  // };
// }
