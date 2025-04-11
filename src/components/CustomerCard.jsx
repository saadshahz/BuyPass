import { Avatar, Space } from "antd";
import React from "react";
import WhatsappIcon from "../assets/images/svgs/WhatsappIcon";
import PhoneIcon from "../assets/images/svgs/PhoneIcon";
import TrashIcon from "../assets/images/svgs/TrashIcon";
import ReloadIcon from "../assets/images/svgs/ReloadIcon";

export default function CustomerCard(props) {
  const {
    image_url,
    joining_date,
    title,
    address,
    purchased,
    lifetime,
    phone,
  } = { ...props };

  const getFirstLetters = (text) => {
    if (!text) return "";
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  };

  return (
    <section className="bg-[#fff] px-2 py-4 rounded shadow">
      <Space size={"middle"}>
        {image_url ? (
          <image href={image_url} className="w-[10px] h-[10px] rounded-full " />
        ) : (
          <Avatar
            style={{ backgroundColor: "#fcff00", verticalAlign: "middle" }}
            size="large"
            gap={2}
          >
            {getFirstLetters(title)}
          </Avatar>
        )}
        <div>
          <p className="font-bold  text-heading">{title}</p>
          <p className="text-label text-[#000]">
            <span className="text-[#546171]">Customer Since : </span>{" "}
            {joining_date}
          </p>
        </div>
        <div>
          <p className="text-label text-[#546171] ">Address: </p>
          <p className="text-label text-[#000] font-semibold">{address}</p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-label text-[#000]">
            <span className="text-[#546171]">Purchased: </span> {purchased}
          </p>
          <p className="text-label text-[#000]">
            <span className="text-[#546171]">Lifetime: </span> {lifetime}
          </p>
        </div>
        <div className="bg-green-400 p-2 rounded-full ">
          <WhatsappIcon fill="#FFF" />
        </div>
        <div className="bg-blue-500 p-2 rounded-full ">
          <PhoneIcon fill="#FFF" />
        </div>
        <p className="text-paragraph font-semibold">{phone}</p>
        <button className="text-input border-1 py-1 px-2 rounded-md text-[#0877ff] border-[#0877ff] hover:bg-[#0877ff] hover:text-[#fff] cursor-pointer">
          Order History
        </button>
        <button className=" cursor-pointer">
          <TrashIcon className={"hover:fill-red-600"} />
        </button>
        <button className=" cursor-pointer">
          <ReloadIcon className={"hover:fill-green-600"} />
        </button>
      </Space>
    </section>
  );
}
