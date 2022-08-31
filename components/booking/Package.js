

import {Checkbox} from "antd"
import { Container,Row,Col } from "react-bootstrap";
import styles from "@/styles/booking.module.css"
export default function Package({data,hanldeCheckPackage}){
  const onChange = () => {
    hanldeCheckPackage(data.id)
  };
  return(
    <div className="d-flex mt-3 mb-4">
      <Checkbox onChange={onChange} checked={data.selected} className="mr-3 mt-4"></Checkbox>
      <div className={`${styles.package} w-100`}>
       <Container className="p-2">
        <Row>
          <Col xs={6}>
            <span className={styles.textPackage}>Liệu trình đang sở hữu</span>
          </Col>
          <Col xs={6} className="d-flex justify-content-end pt-1">
            <span  className={styles.textPackage2}>{data.product_name}</span>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={6}>
            <span  className={styles.textPackage}>Số buổi còn lại</span>
          </Col>
          <Col xs={6} className="d-flex justify-content-end pt-1">
            <span className={styles.textPackage2}>{data.max_used >=999999 ? "Không giới hạn": `${(data.max_used - data.count_used)} lần`}</span>
          </Col>
        </Row>
       </Container>
      </div>
    </div>

  )
}