import { Row, Container, Col } from "react-bootstrap"
import { PhoneOutlined, DiffOutlined, HomeOutlined,MailOutlined } from "@ant-design/icons"
export default function Footer() {
  return (
    <Container style={{ marginLeft: "20rem", marginRight: "20rem" }}>
      <Row>
        <Col xs={3}>
          <div className="d-flex">
            <PhoneOutlined className="mr-2 mt-1" />
            <div>
              <strong>Hà Nội: 1900.636833</strong>
              <br></br>
              <strong>TP.HCM: 1900.636032</strong>
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
            <MailOutlined  className="mr-2" />
            <div>
              <p>cskh@centbeauty.com</p>
            </div>
          </div>
        </Col>
        <Col xs={3}>a</Col>
        <Col xs={6}>a</Col>
      </Row>
    </Container>
  )
}