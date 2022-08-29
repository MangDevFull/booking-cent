import { Row, Col, NavDropdown, Navbar, Nav, Form, Container, Button } from "react-bootstrap"
import Link from 'next/link'
import styles from "./style.module.css"
export default function HeaderLayout() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="pl-2 pr-2">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', marginLeft: "15rem" }}
              navbarScroll
            >
              <Link href={`./`}>
                <Nav className={`mr-3`}>
                  <a className={`${styles.textNav}`}>Trang chủ</a>
                </Nav>
              </Link>
              <Link href={'./'}>
                <Nav className={`mr-3`}>
                  <a className={`${styles.textNav}`}>Dịch vụ</a>
                </Nav>
              </Link>
              <Link href={`/booking`}>
                <Nav className={` mr-3`}>
                 <a className={`${styles.textNav}`}>Đặt lịch</a>
                </Nav>
              </Link>
              <Link href={`./`}>
                <Nav className={` mr-3`}>
                <a className={`${styles.textNav}`}>Tin tức</a>
                </Nav>
              </Link>
              <Link href={'/'}>
                <Nav className={` mr-3`} >
                <a className={`${styles.textNav}`}> Về chúng tôi</a>
                </Nav>
              </Link>
              <Link href={`/`}>
                <Nav className={` mr-3`}>
                <a className={`${styles.textNav}`}>  Liên hệ</a>
                </Nav>
              </Link>
            </Nav>
            <div className="d-flex" style={{ marginRight: "15rem" }}>
              <input
                type="search"
                placeholder="Tìm kiếm"
                className={`${styles.inputSearch} mr-3`}
                aria-label="Search"
              />
              <button className={styles.buttonLogin}>Đăng nhập</button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}