import { useState } from "react"
import { Row, Col, Navbar, Nav, Container } from "react-bootstrap"
import Link from 'next/link'
import styles from "./style.module.css"
import { SearchOutlined } from "@ant-design/icons"
import { useRouter } from 'next/router'
import { message, Modal } from "antd"
import OtpInput from 'react-otp-input';
import libphone from 'google-libphonenumber';
import Api from "@/services/api"
import { signIn } from "next-auth/react";
import 'antd/dist/antd.css';
import { useSession, signOut } from "next-auth/react";
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image'
const { PhoneNumberFormat, PhoneNumberUtil } = libphone;
const phoneUtil = PhoneNumberUtil.getInstance();
export default function HeaderLayout() {
  const { data: session } = useSession();
  const router = useRouter()
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [phone, setPhone] = useState("")
  const [isValidPhone, setIsValidPhone] = useState(false)
  const [title, setTitle] = useState("Đăng nhập")
  const [content, setContent] = useState("Số điện thoại của bạn là gì ạ?")
  const [otp, setOtp] = useState("")
  const [isDisable, setIsDisable] = useState(false)
  const [link, setLink] = useState('/')
  const handleCancel = () => {
    setLink('/')
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
    setIsDisable(true)
    e.preventDefault()
    const reg = /^\d+$/;
    if (reg.test(phone)) {
      const number = phoneUtil.parse(phone, 'VN');
      if (phoneUtil.isValidNumber(number)) {
        const payload = {
          phone: phone
        }
        try {
          const res = await Api.post('/api/login-phone', payload)
          const { data } = res
          if (data.code === 200) {
            setTitle("Nhập mã OTP")
            setContent("Bạn vui lòng nhập mã OTP")
            setIsValidPhone(true)
            setIsDisable(false)
          } else {
            message.error("Số điện thoại không hợp lệ")
            setIsDisable(false)
          }
        } catch (error) {
          message.error("Xin vui lòng thử lại")
          setIsDisable(false)
        }
      } else {
        message.error("Số điện thoại không hợp lệ")
        setIsDisable(false)
      }
    } else {
      message.error("Số điện thoại không hợp lệ")
      setIsDisable(false)
    }
  }
  const hanldeChangeOtp = (e) => {
    setOtp(e)
  }
  const cancelOtp = () => {
    setPhone("")
    setIsValidPhone(false)
  }
  const hnaldeCheckOtp = async (e) => {
    e.preventDefault()
    try {
      const res = await signIn("cent-login-otp", {
        phone: phone,
        otp: otp,
        redirect: false,
      });
      if (res.error == null) {
        setIsModalVisible(false)
        setPhone("")
        setOtp("")
        setIsValidPhone(false)
        setContent("Số điện thoại của bạn là gì ạ?")
        setTitle("Đăng nhập")
        router.push(link);
      } else {
        message.error("Mã OTP không hợp lệ")
      }
    } catch (error) {
      message.error("Đã có lỗi xảy ra")
    }
  }
  const hanldeClickBooking = () => {
    setLink('/booking')
    if (session) {
      router.push('/booking')
    } else {
      hanldeLogin()
    }
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
                disabled={isDisable}
              >Tiếp tục</button>
            </form>
          </Col> : <Col xs={12}>
            <div className="d-flex justify-content-center">
              <OtpInput
                value={otp}
                onChange={hanldeChangeOtp}
                numInputs={6}
                shouldAutoFocus={true}
                inputStyle={{ maxWidth: "4rem", borderRadius: "4px", border: "2px solid #a3a3a3", maxHeight: "4rem", marginRight: "1rem", minHeight: "2.4rem", minWidth: "2.4rem" }}
              />
            </div>

            <div className="d-flex mt-4">
              <button className={styles.buttonCan}
                onClick={cancelOtp}
              >Quay lại</button>
              <button className={styles.buttonLogin2}
                onClick={hnaldeCheckOtp}
              >Tiếp tục</button>
            </div>
          </Col>}
        </Row>
      </Modal>
      <Row className="m-1 mb-5">
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
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                      {session.user.mobile}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item

                        onClick={() =>
                          signOut({
                            callbackUrl: `${window.location.origin}/`,
                          })
                        }
                      >Đăng xuất</Dropdown.Item>
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