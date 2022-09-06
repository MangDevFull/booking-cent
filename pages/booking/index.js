import { useState, useEffect, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap"
import styles from "@/styles/booking.module.css"
import dynamic from 'next/dynamic'
import { CloseOutlined, ArrowLeftOutlined } from "@ant-design/icons"
import { Select, Radio, Space, DatePicker, Tag, Tabs, message, Modal } from 'antd';
const { Option } = Select;
const { TabPane } = Tabs;
import Api from "@/services/api"
import timesEnum from "@/enums/times.enum";
import _ from "lodash"
import Head from 'next/head'
import { getSession, useSession } from "next-auth/react";
import { fetchAPI } from "../../libs/api"
import Image from 'next/image'
import Router from 'next/router'
const Item = dynamic(() => import('@/components/booking/Item'));
const Package = dynamic(() => import('@/components/booking/Package'));
const Login = dynamic(() => import('@/components/authen/Login'));

export default function BookingPage({ data }) {
  const { data: session } = useSession();
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
  const [successOrder, setSuccessOrder] = useState(false)
  const [chooseIndex, setChooseIndex] = useState("1")
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisibleNote, setIsModalVisibleNote] = useState(false);
  const [note, setNote] = useState("")
  const [packages, setPackages] = useState(data.data.package[0].map(x => {
    return {
      ...x,
      selected: false
    }
  }))
  const [selectedPackages, setSelectedPackages] = useState([])
  const [isDisableSubmit, setIsDisableSubmit] = useState(false)
  const handleCancel = () => {
    setIsModalVisible(false)
  }

  useEffect(() => {
    const findP = packages.filter(x => x.selected)
    setSelectedPackages(findP)
  }, [packages])

  const hanldeCheckPackage = (id) => {
    const findIndex = packages.findIndex(x => x.id == id)
    packages[findIndex].selected = !packages[findIndex].selected
    setPackages([...packages])
  }
  const handleScroll = event => {
    const posision = event.currentTarget.scrollTop
    if (posision < 1565) {
      setChooseIndex("1")
    }
    if (posision > 1565 && posision < 3676) {
      setChooseIndex("2")
    }
    if (posision > 3676 && posision < 7745) {
      setChooseIndex("4")
    }
    if (posision > 7745) {
      setChooseIndex("5")
    }
  };
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
    setSelectLocation(0)
  }
  useEffect(() => {
    fetchLocation()
  }, [location])
  const fetchLocation = async () => {
    const res = await Api.get(`/api/public/stores?name=${location}`)
    const { data } = res
    if (data.code == 200) {
      setStores(data.data)
    }
  }
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
    setChooseIndex(key)
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
    const index = services.findIndex(y => {
      return y[0] == x.category_id
    })
    const filter = services[index][1].findIndex(z => z.id == x.id)
    services[index][1][filter].isCkecked = false
    setServices([...services])
  }
  const hanldeSubmit = async () => {
    try {
      setIsDisableSubmit(true)
      let mess = []
      if ((selectServices.length === 0 && selectedPackages.length === 0)) {
        mess.push("Bạn chưa chọn dịch vụ")
        setIsDisableSubmit(false)
      }
      if (selectLocation == 0) {
        mess.push("Bạn chưa chọn cơ sở")
        setIsDisableSubmit(false)
      }
      if (chooseHour == "" || chooseDate == "") {
        mess.push("Bạn chưa chọn thời gian")
        setIsDisableSubmit(false)
      }
      if (mess.length > 0) {
        mess.forEach(x => {
          message.error(x)
        })
        setIsDisableSubmit(false)
      } else {
        const items = [...selectedPackages, ...selectServices]
        const { user } = session
        const payload = {
          "customer_name": user.full_name,
          "status": 1,
          "date_book": `${chooseDate} ${chooseHour}`,
          "store_id": selectLocation,
          "note": note,
          "customer_id": user.id,
          "booking_items": JSON.stringify(items),
          "phone": user.mobile,
          "store_name": nameLoctionSelect
        }
        const data = await fetchAPI("/bookings", "", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ data: payload }),
        })
        if (data) {
          window.scrollTo(0, 0)
          setSuccessOrder(true)
          setIsDisableSubmit(false)
        }
      }
    } catch (error) {
      message.error("Có lỗi xảy ra")
      setIsDisableSubmit(false)
    }
  }
  const hanldeCreateNote = () => {
    setIsModalVisibleNote(true)
  }
  const handleCancelNote = () => {
    setIsModalVisibleNote(false)
  }
  const hanldeNote = (e) => {
    setNote(e.target.value)
  }
  const hanldeReload = () => {
    Router.reload(window.location.pathname)
  }
  return (
    <>
      <Head>
        <title>Đặt lịch</title>
      </Head>
      {!session ?
        <Row>
          <Col sm={12} xs={12}>
            <Login isModalVisible={session ? isModalVisible : true} handleCancel={handleCancel} link={"/booking"} />
          </Col>
        </Row>
        :
        <Row className="m-1">
          <Modal title="Tạo ghi chú" visible={isModalVisibleNote} onOk={handleCancelNote} onCancel={handleCancelNote}>
            <textarea rows={4} placeholder="Tạo ghi chú" onChange={hanldeNote} className="w-100" />
          </Modal>
          <Col md={{ span: 4, offset: 4 }}>
            <div className={`${styles.background} pl-3 pt-3 pr-3 pb-3`}>
              <Image
                src={'/assets/images/booking_phone.png'}
                alt="Picture of the author"
                width={460}
                height={62}
              />
              <div className={styles.boxShawdow} ref={serviceRef}>
                {successOrder ?
                  <>
                    <div className={`pl-5 pr-5 pb-5 mb-5 ${styles.checkOut}`}>
                      <div className={` p-3`}>
                        <Col lg={12} sm={12} xs={12} className="mt-5 pt-5 pl-5 pr-5">
                          <p className={styles.text7}>Cảm ơn bạn đã đặt lịch</p>
                          <p className={styles.text8}>Vui lòng chờ Cent Beauty xác nhận trong giây lát</p>
                        </Col>
                        <hr></hr>
                        <p className={styles.text9}>Thông tin chi tiết</p>
                        {selectedPackages.length > 0 &&
                          <>
                            <Row>
                              <Col lg={3}>
                                Thẻ liệu trình:
                              </Col>
                              <Col lg={9}>
                                <ul className="pl-0">
                                  {selectedPackages.map((x, i) => {
                                    return <li key={x.id}>{`${i + 1}. ${x.product_name}`}</li>
                                  })}
                                </ul>
                              </Col>
                            </Row>
                            <hr />
                          </>
                        }
                        {selectServices.length > 0 &&
                          <>
                            <Row>
                              <Col lg={3}>
                                Dịch vụ:
                              </Col>
                              <Col lg={9}>
                                <ul className="pl-0">
                                  {selectServices.map((x, i) => {
                                    return <li key={x.id}>{`${i + 1}. ${x.product_name}`}</li>
                                  })}
                                </ul>
                              </Col>
                            </Row>
                            <hr />
                          </>
                        }
                        <Row>
                          <Col lg={3}>
                            Cơ sở:
                          </Col>
                          <Col lg={9}>
                            {nameLoctionSelect}
                          </Col>
                        </Row>
                        <hr />
                        <Row>
                          <Col lg={3}>
                            Tổng tiền:
                          </Col>
                          <Col lg={9}>
                            {convertCurrency(total)}
                          </Col>
                        </Row>
                        <hr />
                        <Row>
                          <Col lg={3}>
                            Thời gian
                          </Col>
                          <Col lg={9}>
                            {`${chooseHour} ${chooseDate}`}
                          </Col>
                        </Row>
                        <hr />
                        <Row>
                          <Col lg={3}>
                            Trạng thái
                          </Col>
                          <Col lg={9}>
                            Chờ xác nhận
                          </Col>
                        </Row>
                      </div>
                      <div className="d-flex justify-content-center p-2">
                        <button className={styles.button2} onClick={hanldeReload}>Đặt lịch tiếp</button>
                      </div>
                    </div>
                  </>
                  :
                  <>
                    {!chooseService ? <>
                      <p className={`${styles.text1} p-3`}>Đặt lịch 3 bước</p>
                      <div className="w-100">
                        <div className="steps-card" style={{ boxShadow: "none", paddingLeft: "0x", marginTop: "0px", borderRadius: "0px 0px 8px 8px" }}>
                          <div className="step-list">
                            <div className={`pb-3 step ${(selectServices.length > 0 || selectedPackages.length > 0) ? "step-completed" : "step-incomplete"}`}>
                              <h1 className={`${selectServices.length > 0 ? "step-heading" : "step-heading2"}`}> {"1. Chọn dịch vụ"} </h1>
                              <div>
                                {
                                  packages.map((x => {
                                    return <Package key={x.id} data={x} hanldeCheckPackage={hanldeCheckPackage} />
                                  }))
                                }
                              </div>
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
                              <div className="d-flex justify-content-center mt-3">
                                <button className={`${styles.buttonAddService} p-2 w-100`}
                                  onClick={chooseServiceHanlde}
                                >+ {(selectServices.length > 0 || selectedPackages.length > 0) ? "Thêm dịch vụ khác" : "Chọn dịch vụ cần đặt lịch"}</button>
                              </div>
                            </div>
                            <div className={`pb-3 step ${choosedLocation ? "step-completed" : "step-incomplete"}`}>
                              <h1 className={`${choosedLocation ? "step-heading" : "step-heading2"}`}> {"2. Chọn chi nhánh"} </h1>
                              {choosedLocation ?
                                <div className={`${styles.chooseLocation} p-3 d-flex justify-content-between`}>
                                  <span>{nameLoctionSelect}</span>
                                  <CloseOutlined onClick={cancelChooseLocation} className="mt-1" />
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

                                  <Radio.Group onChange={onChaneLocation} value={selectLocation} className="mt-2 mb-3">
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
                                <DatePicker onChange={onChangeDate}
                                 getPopupContainer={(triggerNode) => {
                                  return triggerNode.parentNode;
                                }}
                                 className="w-100" placeholder="Chọn thời gian" />
                              </div>
                              {chooseDate.length > 0 ?
                                <>
                                  <p className={styles.text4}>Chọn khung giờ (từ 9h30 sáng đến 19h30)</p>
                                  <Row>
                                    {timesEnum.map((x, i) => {
                                      return <Col key={i}>
                                        <Tag key={i} xs={3}
                                          style={{ width: "4rem", cursor: "pointer", background: `${chooseIndexHour == i ? "#FFE9E2" : "white"}` }} className={`mb-2 p-1 text-center `}
                                          onClick={() => { hanldeChoseHour(x.value, i) }}
                                        >
                                          {x.label}
                                        </Tag></Col>
                                    })}
                                  </Row>
                                </>
                                : ""}
                            </div>
                            <div>
                              <p className={styles.textNote}
                                onClick={hanldeCreateNote}
                              >Tạo ghi chú</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center">
                            <button className={`${styles.textSubmit} pt-1 pb-1 pl-4 pr-4`}
                              onClick={hanldeSubmit}
                              disabled={isDisableSubmit}
                            >
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
                      <div style={{ background: "white", borderRadius: "0px 0p 8px 8px" }} className="p-2 w-100" >
                        <div className="d-flex justify-content-center">
                          <Tabs activeKey={chooseIndex} onChange={onChangeTabs} className="w-100 text-center" tabBarStyle={{ fontSize: "8px" }}>
                            {categories.length > 0 && categories.map(x => {
                              return <TabPane tab={x.name} key={x.id}>
                              </TabPane>
                            })}
                          </Tabs>
                        </div>
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
                        <Container className={styles.warpServices} onScroll={handleScroll}>
                          {services.length > 0 && services.map((x, i) => {
                            return (
                              <Row key={i}>
                                {x[0] == 1 && <div ref={serviceRef1}></div>}
                                {x[0] == 2 && <div ref={serviceRef2}></div>}
                                {x[0] == 4 && <div ref={serviceRef4}></div>}
                                {x[0] == 5 && <div ref={serviceRef5}></div>}
                                {x[1].map(y => {
                                  return (
                                    <Col key={y.id} xs={6} lg={6} sm={6} className="mb-3">
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
                  </>}
              </div>
            </div>
          </Col>
        </Row>
      }
    </>
  )
}
export async function getServerSideProps(ctx) {
  try {
    // Fetch data from external API
    const session = await getSession(ctx);
    const res = await Api.get(`/api/public/categories?id=${session?.user.id || ""}`)
    const { data } = res
    if (data.code == 200) {
      // Pass data to the page via props
      return { props: { data: data } }
    } else {
      throw new Error('Internal Server Error');
    }
  } catch (error) {
    throw new Error('Internal Server Error');
  }

}