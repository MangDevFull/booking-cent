import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap"
import { useSelector, useDispatch } from 'react-redux'
import {checkIsMobile} from "../../redux/reducers/layout"
export default function Layout({ children }) {
  const isMobile = useSelector((state) => state.layouts.isMobile)
  const dispatch = useDispatch()
  useEffect(() => {
    let currentHideNav = window.innerWidth
    if (currentHideNav <= 760) {
      dispatch(checkIsMobile(true))
    }
  }, [])
  return (
    <Row style={{ background: "rgb(248,249,250)" }}>
      <Col xs={12} lg={12} sm={12}>
        {!isMobile && <Header />}
        {children}
        {!isMobile && <Footer />}
      </Col>
    </Row>
  )
}