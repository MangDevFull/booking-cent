import { Row, Container, Col } from "react-bootstrap"
import { PhoneOutlined, DiffOutlined, HomeOutlined, MailOutlined, BankOutlined } from "@ant-design/icons"
import styles from "./style.module.css"
import Image from 'next/image'
import { BackTop } from 'antd';
export default function Footer() {
  return (
    <div className={`pt-3 ${styles.backgroud}`}>
       <BackTop />
      <Row className="mt-5 p-2 mb-3 pt-5">
        <Col md={{ span: 10, offset: 1 }}>
          <Row style={{ borderBottom: "1px solid white" }}>
            <Col lg={3} sm={8} className="mb-2">
              <h4 className={styles.textHeading}>Feedback</h4>
              <p className={styles.textLi}>Mọi vấn đề về chất lượng dịch vụ xin hay báo cho chúng tôi qua các kênh:</p>
              <input className={`${styles.inputNote} p-2 w-100`} placeholder="Ý kiến của bạn" />
            </Col>
            <Col lg={3} sm={8}>
              <h4 className={`${styles.textHeading}`}>Chăm sóc khách hàng</h4>
              <ul className="pl-0">
                <p className={styles.textLi}>Hỏi đáp - FAQs</p>
                <p className={styles.textLi}>Trung tâm trợ giúp</p>
                <p className={styles.textLi}>Gói quà tặng</p>
                <p className={styles.textLi}>Thành viên Cent Loyalty</p>
                <p className={styles.textLi}>Chính sách khuyến mãi</p>
                <p className={styles.textLi}>Chính sách thanh toán</p>
                <p className={styles.textLi}>Chính sách bảo mật thanh toán</p>
              </ul>
            </Col>
            <Col lg={3} sm={8}>
              <h4 className={`${styles.textHeading}`}>{`Về Cent'`}</h4>
              <ul className="pl-0">
                <p className={styles.textLi}> Câu chuyện về Cent</p>
                <p className={styles.textLi}>Gia nhập Cent</p>
                <p className={styles.textLi}> Be Confident Be Happy</p>
                <p className={styles.textLi}> Hệ thống cửa hàng</p>

              </ul>
            </Col>
            <Col lg={3} sm={8}>
              <h4 className={`${styles.textHeading}`}>{`Khám phá & trải nghiệm`}</h4>
              <ul className="pl-0">
                <p className={styles.textLi}>Chăm sóc da</p>
                <p className={styles.textLi}> Chăm sóc body</p>
                <p className={styles.textLi}> Liệu trình triệt lông</p>
                <p className={styles.textLi}> Phun xăm thẩm mĩ</p>
                <p className={styles.textLi}> Cent Lab</p>
              </ul>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col lg={8}>
              <Row>
                <span className={styles.text4}>Công ty Cổ Phần Dịch Vụ Cent Beauty</span>
                <Col xs={12} className="d-flex mt-3">
                  <HomeOutlined style={{ color: "white" }} className="mr-2" />
                  <p className={styles.textLi}>Địa chỉ: Số 8, ngõ 100 Trần Duy Hưng, Trung Hoà, Cầu Giấy, Hà Nội</p>
                </Col>
                <Col xs={12} className="d-flex">
                  <BankOutlined style={{ color: "white" }} className="mr-2" />
                  <p className={styles.textLi}>Office: 33 Ngõ 75 Trần Thái Tông, Dịch Vọng, Cầu Giấy, Hà Nội</p>
                </Col>
                <Col xs={12} className="d-flex">
                  <PhoneOutlined style={{ color: "white" }} className="mr-2" />
                  <p className={styles.textLi}>Hotline: 1900.636833</p>
                </Col>
                <Col xs={12} className="d-flex">
                  <MailOutlined style={{ color: "white" }} className="mr-2" />
                  <p className={styles.textLi}>Email: cskh@centbeauty.com</p>
                </Col>
                <Col xs={12} className="d-flex">
                  <DiffOutlined style={{ color: "white" }} className="mr-2" />
                  <p className={styles.textLi}>Mã số thuế: 0108852257</p>
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="d-flex justify-content-end pt-5">
              <div className="mr-2">
                <Image
                  src="/assets/images/footer1.png"
                  alt="Picture of the author"
                  width={118}
                  className={`${styles.backImage} p-2`}
                  height={42}
                />
              </div>
              <div>
                <Image
                  src="/assets/images/footer2.png"
                  alt="Picture of the author"
                  width={111}
                  height={42}
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}