import { useState, useEffect, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap"
import styles from "@/styles/booking.module.css"
import 'antd/dist/antd.css';
import { CloseOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import { Select, Radio, Space, DatePicker, Tag, Tabs } from 'antd';
const { Option } = Select;
const { TabPane } = Tabs;
import Api from "@/services/api"
import timesEnum from "@/enums/times.enum";
import Item from "@/components/booking/Item"
import _ from "lodash"
export default function BookingPage({data}) {
  console.log("dataFetch",data)
  const serviceRef5 = useRef(null)
  const serviceRef4 = useRef(null)
  const serviceRef1 = useRef(null)
  const serviceRef2 = useRef(null)
  const serviceRef = useRef(null)
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
  const [categories, setCategories] = useState(data.data.categories)
  const [services, setServices] = useState(data.data.services)
  const [total, setTotal] = useState([])
  useEffect(() => {
    const converted = services.map(x => {
      return x[1]
    })
    const filter = _.flatten(converted).filter(x => x.isCkecked)
    const sum = _.sumBy(filter, (x) => x.price)
    setTotal(sum)
    setSelectServices(filter)
  }, [services])
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
  const chooseServiceHanlde = async () => {
    setChooseService(true)
  }
  const hanldeBack = () => {
    setChooseService(false)
  }
  const onChangeDate = (date, dateString) => {
    setChooseDate(dateString);
    setChooseIndexHour(-1)
    setChooseHour("")
  }
  const hanldeChoseHour = (x, i) => {
    setChooseIndexHour(i)
    setChooseHour(x)
  }
  const onChangeTabs = (key) => {
    if (key == 5) {
      serviceRef5.current.scrollIntoView()
    } else if (key == 2) {
      serviceRef2.current.scrollIntoView()
    } else if (key == 1) {
      serviceRef1.current.scrollIntoView()
    } else if (key == 4) {
      serviceRef4.current.scrollIntoView()
    }
  };
  const hanldeScroll = () => {
    const a = window.scrollY
    console.log("a", a)
  }
  function convertCurrency(data) {
    let res = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data)
    return res;
  };
  const hanldeSelectService = (x, y) => {
    const index = services[x][1].findIndex(x => x.id == y)
    services[x][1][index].isCkecked = !services[x][1][index].isCkecked
    setServices([...services])
  }
  const cancleItem = (x) => {
    console.log(x)
    const index = services.findIndex(y => {
      return y[0] == x.category_id
    })
    const filter = services[index][1].findIndex(z => z.id == x.id)
    services[index][1][filter].isCkecked = false
    setServices([...services])
  }
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
}, []);
console.log(offset); 
  return (
    <Row className="m-1 mb-5">
      <Col md={{ span: 4, offset: 4 }}>
        {/* <div className={`${styles.background} pl-3 pr-3 pt-5 pb-3`}> */}
        <div className={styles.boxShawdow} ref={serviceRef}>
          {!chooseService ? <>
            <p className={`${styles.text1} p-3`}>Đặt lịch 3 bước</p>
            <div className="w-100">
              <div className="steps-card" style={{ boxShadow: "none", paddingLeft: "0x", marginTop: "0px", borderRadius: "8px" }}>
                <div className="step-list">
                  <div className={`step ${selectServices.length > 0 ? "step-completed" : "step-incomplete"}`}>
                    <h1 className={`${selectServices.length > 0 ? "step-heading" : "step-heading2"}`}> {"1. Chọn dịch vụ"} </h1>
                    {selectServices.length > 0 &&
                      <Container className={`${styles.checkOut} mb-1 m-1 pt-2 pb-2`}>
                        {selectServices.map(x => {
                          return (
                            <>
                              <div className="d-flex justify-content-between pb-0">
                                <p className={styles.text6}>{x.product_name}</p>
                                <div className="d-flex">
                                  <p className={styles.text6}>{convertCurrency(x.price)}</p>
                                  <CloseOutlined style={{ color: "red" }} className="mt-1 ml-1" onClick={() => { cancleItem(x) }} />
                                </div>
                              </div>

                              <hr></hr>
                            </>
                          )
                        })}
                        <div className="d-flex justify-content-between">
                          <p className={styles.text5}>Tổng: </p>
                          <p className={styles.text5}>{convertCurrency(total)}</p>
                        </div>
                      </Container>
                    }
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
                          defaultValue={"Hà Nội"}
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
                  <div className={`step ${chooseHour ==="" ? "step-incomplete-last" : "step-completed-last"}`}>
                    <h1 className={`${chooseHour ==="" ? "step-heading2" : "step-heading"}`}> {"3. Chọn thời gian"} </h1>
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
            <div style={{ background: "white", borderRadius: "8px" }} className="p-2 w-100" >
              <Tabs defaultActiveKey={1} onChange={onChangeTabs} className="w-100" tabBarStyle={{ fontSize: "8px" }}>
                {categories.length > 0 && categories.map(x => {
                  return <TabPane tab={x.name} key={x.id}>
                  </TabPane>
                })}
              </Tabs>
              {selectServices.length > 0 &&
                <Container className={`${styles.checkOut} mb-1 m-1 pt-2 pb-2`}>
                  {selectServices.map(x => {
                    return (
                      <>
                        <div className="d-flex justify-content-between pb-0">
                          <p className={styles.text6}>{x.product_name}</p>
                          <div className="d-flex">
                            <p className={styles.text6}>{convertCurrency(x.price)}</p>
                            <CloseOutlined style={{ color: "red" }} className="mt-1 ml-1" onClick={() => { cancleItem(x) }} />
                          </div>
                        </div>

                        <hr></hr>
                      </>
                    )
                  })}
                  <div className="d-flex justify-content-between">
                    <p className={styles.text5}>Tổng: </p>
                    <p className={styles.text5}>{convertCurrency(total)}</p>
                  </div>
                </Container>
              }
              <Container className={styles.warpServices} >
                {services.length > 0 && services.map((x, i) => {
                  return (
                    <Row >
                      {x[0] == 1 && <div ref={serviceRef1}></div>}
                      {x[0] == 2 && <div ref={serviceRef2}></div>}
                      {x[0] == 4 && <div ref={serviceRef4}></div>}
                      {x[0] == 5 && <div ref={serviceRef5}></div>}
                      {x[1].map(y => {
                        return (
                          <Col xs={6} className="mb-3">
                            <Item data={y} parent={i} hanldeSelectService={hanldeSelectService} />
                          </Col>
                        )
                      })}
                    </Row>
                  )
                })}
              </Container>
              <div className="d-flex justify-content-center p-2">
                <button className={styles.button2} onClick={hanldeBack}>Tiếp tục</button>
              </div>
            </div>
          </>}
        </div>
        {/* </div> */}
      </Col>
    </Row>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await Api.get(`/api/public/categories`)
  const { data } = res

  // Pass data to the page via props
  return { props: { data:data } }
}