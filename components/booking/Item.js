import { useState } from "react";
import styles from "@/styles/booking.module.css"
import Image from 'next/image'
import { Radio } from 'antd';
export default function Item({data,parent,hanldeSelectService}) {
  function convertCurrency(data) {
    let res = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data)
    return res;
};
const hanldeChoose = ()=>{
  hanldeSelectService(parent,data.id)
}
  return (
    <div className={`${styles.boxShawdow2} h-100`}>
      <div>
        <Image
          // loader={myLoader}
          src={data.avata_url ? data.avata_url :"/assets/images/no-image.jpeg"}
          alt="No image"
          width={500}
          height={500}
        />
        <Radio onClick={hanldeChoose} checked={data.isCkecked} className="ml-1"><p className={`${styles.textItem}`}>{data.product_name}</p></Radio>
        <p className={`${styles.textPrice} text-center`}>{convertCurrency(data.price)}</p>
      </div>
    </div>
  )
}