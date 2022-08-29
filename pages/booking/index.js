import { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap"
import styles from "@/styles/booking.module.css"
import 'antd/dist/antd.css';
import { CloseOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import { Select, Radio, Space, DatePicker, Tag } from 'antd';
const { Option } = Select;
import Api from "@/services/api"
import timesEnum from "@/enums/times.enum";
export default function BookingPage() {
  const [selectLocation, setSelectLocation] = useState(0)
  const [nameLoctionSelect, setNameLocationSelect] = useState("")
  const [location, setLocation] = useState("Hà Nội")
  const [stores, setStores] = useState([])
  const [choosedLocation, setChoosedLocation] = useState(false)
  const [selectServices, setSelectServices] = useState([])
  const [chooseService, setChooseService] = useState(false)
  const [chooseDate, setChooseDate] = useState("")
  const [chooseHour, setChooseHour] = useState("")
  const [chooseIndexHour, setChooseIndexHour] = useState(-1)
  const onChange = (value) => {
    setLocation(value)
  };
  const onChaneLocation = (e) => {
    setSelectLocation(e.target.value)
    const filter = stores.filter(x => x.id === e.target.value)
    setNameLocationSelect(`${filter[0].name_store} ${filter[0].address}`)
    setChoosedLocation(true)
  }
  const cancelChooseLocation = () => {
    setChoosedLocation(false)
  }
  useEffect(async () => {
    const res = await Api.get(`/api/public/stores?name=${location}`)
    const { data } = res
    if (data.code == 200) {
      setStores(data.data)
    }
  }, [location])
  const chooseServiceHanlde = () => {
    setChooseService(true)
  }
  const hanldeBack = () => {
    setChooseService(false)
  }
  const onChangeDate = (date, dateString) => {
    setChooseDate(dateString);
    setChooseIndexHour(-1)
  }
  const hanldeChoseHour = (x, i) => {
    setChooseIndexHour(i)
    setChooseHour(x)
  }
  console.log(chooseIndexHour)
  return (
    <Row className="mt-5 mb-5">
      <Col md={{ span: 6, offset: 3 }}>
        <div className={`${styles.background} pl-3 pr-3 pt-5 pb-3`}>
          <div className={styles.boxShawdow}>
            {!chooseService ? <>
              <p className={`${styles.text1} p-3`}>Đặt lịch 3 bước</p>
              <div className="w-100">
                <div className="steps-card" style={{ boxShadow: "none", paddingLeft: "0x", marginTop: "0px", borderRadius: "8px" }}>
                  <div className="step-list">
                    <div className={`step ${selectServices.length > 0 ? "step-completed" : "step-incomplete"}`}>
                      <h1 className={`${selectServices.length > 0 ? "step-heading" : "step-heading2"}`}> {"1. Chọn dịch vụ"} </h1>
                      <div className="d-flex justify-content-center mt-2">
                        <button className={`${styles.buttonAddService} p-2 w-100`}
                          onClick={chooseServiceHanlde}
                        >+ Thêm dịch vụ khác</button>
                      </div>
                    </div>
                    <div className={`step ${choosedLocation ? "step-completed" : "step-incomplete"}`}>
                      <h1 className={`${choosedLocation ? "step-heading" : "step-heading2"}`}> {"2. Chọn chi nhánh"} </h1>
                      {choosedLocation ?
                        <div className={`${styles.chooseLocation} p-3 d-flex justify-content-between`}>
                          <span>{nameLoctionSelect}</span>
                          <CloseOutlined onClick={cancelChooseLocation} />
                        </div>
                        :
                        <>
                          <Select
                            showSearch
                            placeholder="Chọn chi nhánh"
                            optionFilterProp="children"
                            onChange={onChange}
                            className="w-100"
                            filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                          >
                            <Option value="Hà Nội">Hà Nội</Option>
                            <Option value="TP Hồ Chí Minh">TP Hồ Chí Minh</Option>
                          </Select>

                          <Radio.Group onChange={onChaneLocation} value={selectLocation} className="mt-2">
                            <Space direction="vertical">
                              {stores.map(x => {
                                return <Radio key={x.id} value={x.id}>{x.name_store}</Radio>
                              })}
                            </Space>
                          </Radio.Group>

                        </>
                      }
                    </div>
                    <div className={`step ${chooseHour === "" ? "step-incomplete-last" : "step-completed-last"}`}>
                      <h1 className={`${chooseHour === "" ? "step-heading2" : "step-heading"}`}> {"3. Chọn thời gian"} </h1>
                      <div className="mb-3">
                        <DatePicker onChange={onChangeDate} className="w-100" placeholder="Chọn thời gian" />
                      </div>
                      {chooseDate.length > 0 ?
                        <>
                          <p className={styles.text4}>Chọn khung giờ (từ 9h30 sáng đến 19h30)</p>
                          <Row className="mt-3">
                            {timesEnum.map((x, i) => {
                              return <Col>
                                <Tag key={i} xs={3}
                                  style={{ width: "4rem", cursor: "pointer", background: `${chooseIndexHour == i ? "#FFE9E2" : "white"}` }} className={`mb-2 p-1 text-center `}
                                  onClick={() => { hanldeChoseHour(x, i) }}
                                >
                                  {x}
                                </Tag></Col>
                            })}
                          </Row>
                        </>
                        : ""}
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button className={`${styles.textSubmit} pt-1 pb-1 pl-4 pr-4`}>
                      Đặt lịch
                    </button>
                  </div>
                </div>
              </div>
            </> : <>
              <div className={`${styles.text2} p-3 d-flex`} onClick={hanldeBack}>
                <ArrowLeftOutlined className="mt-2 mr-1" />
                <span className={`${styles.text3}`}>Quay lại</span>
              </div>
            </>}
          </div>
        </div>
      </Col>
    </Row>
  )
}
