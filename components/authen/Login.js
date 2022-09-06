import OtpInput from 'react-otp-input';
import libphone from 'google-libphonenumber';
import Api from "@/services/api"
import { signIn } from "next-auth/react";
import { message, Modal } from "antd"
import { useState } from "react"
import { Row, Col } from "react-bootstrap"
import { useRouter } from 'next/router'
import styles from "./style.module.css"
const { PhoneNumberFormat, PhoneNumberUtil } = libphone;
const phoneUtil = PhoneNumberUtil.getInstance();
export default function OTP({ isModalVisible, handleCancel, link }) {
    const router = useRouter()
    const [phone, setPhone] = useState("")
    const [isValidPhone, setIsValidPhone] = useState(false)
    const [title, setTitle] = useState("Đăng nhập")
    const [content, setContent] = useState("Số điện thoại của bạn là gì ạ?")
    const [otp, setOtp] = useState("")
    const [isDisable, setIsDisable] = useState(false)
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
                setPhone("")
                setOtp("")
                setIsValidPhone(false)
                setContent("Số điện thoại của bạn là gì ạ?")
                setTitle("Đăng nhập")
                router.push(link);
                handleCancel()
            } else {
                message.error("Mã OTP không hợp lệ")
            }
        } catch (error) {
            message.error("Đã có lỗi xảy ra")
        }
    }
    const hanldePhone = (e) => {
        setPhone(e.target.value)
    }
    const hanldeCan = () => {
        handleCancel()
        setPhone("")
        setIsValidPhone(false)
    }
    return (
        <Modal title={title} footer={null} visible={isModalVisible} onCancel={hanldeCan}>
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
                            isInputNum={true}
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
    )
}