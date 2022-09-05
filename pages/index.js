
import { useEffect } from "react";
import {getStrapiURL,fetchAPI} from "../libs/api"
export default function Home() {
  useEffect(async()=>{
    const data = await fetchAPI("/bookings")
  })
  return (
    <>
    </>
  );
}
