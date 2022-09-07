import { useState } from "react";
import styles from "@/styles/booking.module.css"
import Image from 'next/image'
import { Radio } from 'antd';
export default function Item({ data, parent, handleSelectService }) {
  function convertCurrency(data) {
    let res = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(data)
    return res;
  };
  const handleChoose = () => {
    handleSelectService(parent, data.id)
  }
  return (
    <div className={`${styles.boxShadow2} h-100`}>
      <div>
        <Image
          src={data.avata_url ? data.avata_url : "/assets/images/no-image.jpeg"}
          alt="No image"
          className={`p-2`}
          width={500}
          height={500}
        />
        <Radio onClick={handleChoose} checked={data.isChecked} className="ml-1">
            <p className={`${styles.textItem}`}>{data.product_name}</p>
        </Radio>

        <p className={`${styles.textPrice} text-center`}>{convertCurrency(data.price)}</p>
      </div>
    </div>
  )
}