import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap"
import { Resizable } from 'react-resizable';
export default function Layout({ children }) {
  const [isMobile, setIsMobile] = useState(false)
  const [width, setWidth] = useState(760)
  useEffect(() => {
    let currentHideNav = window.innerWidth
    if (currentHideNav <= 760) {
      setIsMobile(true)
    }
    setWidth(currentHideNav)
  }, [])
  const updateWidthAndHeight = () => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });
  return (
    <Row style={{ background: "rgb(248,249,250)" }} className="pt-3">
      <Col xs={12} lg={12} sm={12}>
        {!isMobile && <Header />}
        {children}
        {!isMobile && <Footer />}
      </Col>
    </Row>
  )
}