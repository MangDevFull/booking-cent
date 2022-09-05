import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    let currentHideNav = window.innerWidth
    if (currentHideNav <= 760) {
      setIsMobile(true)
    }
  }, [])
  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <div style={{ background: "rgb(248,249,250)" }} className="pt-3">
      {!isMobile && <Header />}
      <main>{children}</main>
      {!isMobile && <Footer />}
    </div>
  )
}