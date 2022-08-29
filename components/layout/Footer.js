import { Row, Container, Col } from "react-bootstrap"
import { PhoneOutlined, DiffOutlined, HomeOutlined, MailOutlined } from "@ant-design/icons"
export default function Footer() {
  return (
    <Container style={{ marginLeft: "20rem", marginRight: "20rem" }}>
      <Row className="mb-3">
        <Col xs={3}>Logo</Col>
        <Col xs={3}><b>Giờ phục vụ</b></Col>
        <Col xs={6}><b>Cơ sở hiện tại</b></Col>
      </Row>
      <Row>
        <Col xs={3}>
          <div className="d-flex">
            <PhoneOutlined className="mr-2 mt-1" />
            <div>
              <p>Hà Nội: 1900.636833</p>
              <p>TP.HCM: 1900.636032</p>
            </div>
          </div>
          <div className="d-flex mt-3">
            <DiffOutlined className="mr-2" />
            <div>
              <p> Mã số thuế: 0108852257</p>
            </div>
          </div>
          <div className="d-flex mt-3">
            <HomeOutlined className="mr-2 mt-1" />
            <div>
              <p>Office: 33 Ngõ 75 Trần Thái Tông, P. Dịch Vọng, Q. Cầu Giấy, TP. Hà Nội
              </p>
            </div>
          </div>
          <div className="d-flex mt-3">
            <MailOutlined className="mr-2" />
            <div>
              <p>cskh@centbeauty.com</p>
            </div>
          </div>
        </Col>
        <Col xs={3}>
          <p> Thứ 2 đến thứ 6: 8h00 - 21h00</p>
          <p> Thứ 7, chủ nhật: 7h30 - 21h00</p>
          <p>HOTLINE: 1800.28.30 (MIỄN PHÍ)</p>
        </Col>
        <Col xs={6}>
          <p>Cơ sở 1: Số 6 - 8 ngõ 100 Trần Duy Hưng, Q. Cầu Giấy, Hà Nội</p>
          <p>Cơ sở 2: Số 1 ngõ 18 Võ Văn Dũng, Q. Đống Đa, Hà Nội</p>
          <p>Cơ sở 3: Số 55 Nguyễn Văn Huyên, Q. Cầu Giấy, Hà Nội</p>
          <p>Cơ sở 4: Số 382/35 Nguyễn Thị Minh Khai, P.5, Q.3, TP.HCM</p>
        </Col>
      </Row>
    </Container>
  )
}