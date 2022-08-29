import { Row, Col, NavDropdown, Navbar, Nav, Form, Container, Button } from "react-bootstrap"
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
              <Nav.Link className={`${styles.textNav} mr-3`} href="#action1">Trang chủ</Nav.Link>
              <Nav.Link className={`${styles.textNav} mr-3`} href="#action2">Dịch vụ</Nav.Link>
              <Nav.Link className={`${styles.textNav} mr-3`} href="#">
                Đặt lịch
              </Nav.Link>
              <Nav.Link className={`${styles.textNav} mr-3`} href="#action1">Blog</Nav.Link>
              <Nav.Link className={`${styles.textNav} mr-3`} href="#action2">Về chúng tôi</Nav.Link>
              <Nav.Link className={`${styles.textNav} mr-3`} href="#">
                Liên hệ
              </Nav.Link>
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