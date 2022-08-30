import { useState } from "react"
import { Row, Col, Navbar, Nav, Container } from "react-bootstrap"
import Link from 'next/link'
import styles from "./style.module.css"
import { SearchOutlined } from "@ant-design/icons"
import { useRouter } from 'next/router'
import { message, Modal } from "antd"
import OtpInput from 'react-otp-input';
import libphone from 'google-libphonenumber';
const { PhoneNumberFormat, PhoneNumberUtil } = libphone;
const phoneUtil = PhoneNumberUtil.getInstance();
export default function HeaderLayout() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phone, setPhone] = useState("")
  const [isValidPhone, setIsValidPhone] = useState(false)
  const [title, setTitle] = useState("Đăng nhập")
  const [content, setContent] = useState("Số điện thoại của bạn là gì ạ?")
  const [otp, setOtp] = useState("")
  const router = useRouter()
  const handleCancel = () => {
    setPhone("")
    setIsValidPhone(false)
    setIsModalVisible(false)
  }
  const hanldeLogin = () => {
    setIsModalVisible(true)
  }
  const hanldePhone = (e) => {
    setPhone(e.target.value)
  }
  const hanldeCheckPhone = async (e) => {
    e.preventDefault()
    const reg = /^\d+$/;
    if (reg.test(phone)) {
      const number = phoneUtil.parse(phone, 'VN');
      if (phoneUtil.isValidNumber(number)) {
        console.log("a")
      } else {
        message.error("Số điện thoại không hợp lệ")
      }
    } else {
      message.error("Số điện thoại không hợp lệ")
    }
    // setTitle("Nhập mã OTP")
    // setContent("Bạn vui lòng nhập mã OTP")
    // setIsValidPhone(true)
  }
  const hanldeChangeOtp = (e) => {
    setOtp(e)
  }
  const cancelOtp = () => {
    setPhone("")
    setIsValidPhone(false)
  }
  return (
    <>
      <Modal title={title} footer={null} visible={isModalVisible} onCancel={handleCancel}>
        <p className={`${styles.text5} text-center`}>{content}</p>
        <Row>
          {!isValidPhone ? <Col xs={12}>
            <form>
              <input className={styles.inputPhone} onChange={hanldePhone} placeholder=" Nhập số diện thoại của bạn" />
              <button type="submit" className={`${styles.buttonLogin2} mt-2 mb-2`}
                onClick={hanldeCheckPhone}
              >Tiếp tục</button>
            </form>
          </Col> : <Col xs={12}>
            <OtpInput
              value={otp}
              onChange={hanldeChangeOtp}
              numInputs={6}
              shouldAutoFocus={true}
              inputStyle={{ maxWidth: "4rem", borderRadius: "4px", border: "2px solid #a3a3a3", maxHeight: "4rem", marginRight: "1rem", minHeight: "2.4rem", minWidth: "2.4rem" }}
            />
            <div className="d-flex mt-4">
              <button className={styles.buttonCan}
                onClick={cancelOtp}
              >Quay lại</button>
              <button className={styles.buttonLogin2}>Tiếp tục</button>
            </div>
          </Col>}
        </Row>
      </Modal>
      <Row className="m-1 mb-5">
        <Col md={{ span: 10, offset: 1 }}>
          <Navbar expand="lg" className={styles.wrap}>
            <Container>
              <Link href={`./`}>
                <Navbar.Brand style={{ cursor: "pointer" }} className="mr-5">Logo</Navbar.Brand>
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
                  <button className={styles.buttonLogin}
                    onClick={hanldeLogin}
                  >Đăng nhập</button>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col></Row>
    </>
  )
}