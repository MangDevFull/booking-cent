import { useState } from "react"
import { Row, Col, Navbar, Nav, Container } from "react-bootstrap"
import Link from 'next/link'
import styles from "./style.module.css"
import { SearchOutlined, LogoutOutlined } from "@ant-design/icons"
import { useRouter } from 'next/router'
import 'antd/dist/antd.css';
import { useSession, signOut } from "next-auth/react";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image'
import dynamic from 'next/dynamic'
const Login = dynamic(() => import('@/components/authen/Login'));
export default function HeaderLayout() {
  const { data: session } = useSession();
  const router = useRouter()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [link, setLink] = useState('/')
  const hanldeLogin = () => {
    setIsModalVisible(true)
  }
  const hanldeClickBooking = () => {
    if (session) {
      router.push('/booking')
    } else {
      setLink('/booking')
      hanldeLogin()
    }
  }
  const handleCancel = () => {
    setLink('/')
    setIsModalVisible(false)
  }
  return (
    <>
      <Login isModalVisible={isModalVisible} handleCancel={handleCancel} link={link} />
      <Row className="m-1 mb-2">
        <Col md={{ span: 10, offset: 1 }}>
          <Navbar expand="lg" className={styles.wrap}>
            <Container>
              <Link href={`./`}>
                <Navbar.Brand style={{ cursor: "pointer" }} className="mr-5">
                  <Image
                    src="/assets/images/frame.png"
                    alt="Picture of the author"
                    width={107}
                    height={41}
                  />
                </Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className="pl-2 pr-2">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '120px' }}
                  navbarScroll
                >
                  <Link href={`./`}>
                    <Nav className={`mr-3`}>
                      <a className={`${styles.textNav} ${router.pathname === "/" ? styles.selectedNav : ""}`}>Trang chủ</a>
                    </Nav>
                  </Link>
                  <Link href={'./'}>
                    <Nav className={`mr-3`}>
                      <a className={`${styles.textNav}`}>Dịch vụ</a>
                    </Nav>
                  </Link>
                  <Nav className={` mr-3`} onClick={hanldeClickBooking}>
                    <a className={`${styles.textNav} ${router.pathname === "/booking" ? styles.selectedNav : ""}`}>Đặt lịch</a>
                  </Nav>
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
                  <Link href={'/'}>
                    <Nav className={` mr-3`} >
                      <a className={`${styles.textNav}`}> Về chúng tôi</a>
                    </Nav>
                  </Link>
                  <Link href={`/`}>
                    <Nav className={` mr-5`}>
                      <a className={`${styles.textNav}`}>  Liên hệ</a>
                    </Nav>
                  </Link>
                  <Nav>
                    <SearchOutlined className={` mr-3`} />
                  </Nav>
                </Nav>
                <div className="d-flex ml-0">
                  <span className={`${styles.text1} mr-2`} style={{ marginTop: "0.7rem" }}>Tìm cơ sở gần nhất</span>
                  {session ? <Dropdown style={{ maxWidth: "300px" }}>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic" style={{ backgroundColor: "#D35B34", border: "none", color: "white" }}>
                      {session.user.mobile}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item

                        onClick={() =>
                          signOut({
                            callbackUrl: `${window.location.origin}/`,
                          })
                        }
                      >
                        <div className="d-flex">
                          <LogoutOutlined className="mr-1 mt-1" /><span>Đăng xuất</span>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                    :
                    <button className={styles.buttonLogin}
                      onClick={hanldeLogin}
                    >Đăng nhập</button>
                  }
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col></Row>
    </>
  )
}