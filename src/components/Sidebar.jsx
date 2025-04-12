import React from "react";
import MessageCard from "./MessageCard";
import { Tabs } from "antd";
import ChatListing from "./ChatListing";
import getchats from "../action/getchats";
import CrossIcon from "../assets/images/svgs/CrossIcon";

export default function Sidebar(props) {
  const { show, handleToggle } = { ...props };

  const data = getchats();

  const items = [
    {
      key: "1",
      label: (
        <p>
          Customers <span>05</span>
        </p>
      ),
      children: <ChatListing chatData={data} />,
    },
    {
      key: "2",
      label: (
        <p>
          Riders <span>04</span>
        </p>
      ),
      children: <ChatListing chatData={data} />,
    },
    {
      key: "3",
      label: (
        <p>
          Orders <span>04</span>
        </p>
      ),
      children: <ChatListing chatData={data} />,
    },
    {
      key: "04",
      label: (
        <p>
          Sellers <span>05</span>
        </p>
      ),
      children: <ChatListing chatData={data} />,
    },
  ];
  const onChange = () => {
    console.log("tabs ON change");
  };

  return (
    <section
      className={`h-screen sidebar-inner bg-[#fff] w-[100%] overflow-hidden `}
    >
      <button
        onClick={handleToggle}
        className="absolute top-[10px] rounded-full text-label flex justify-between items-center px-1 py-1 bg-[#dedede] right-[10px] text-white cursor-pointer close-btn"
      >
        <CrossIcon />
      </button>
      <div className="p-4 text-[20px] text-center font-bold flex justify-center items-center h-[10vh]">
        LOGO
      </div>
      <div className="h-[90vh]">
        <p className="px-4 py-2 text-label text-[#dedede]">Message Center</p>
        <Tabs
          className="chatlistingTab"
          defaultActiveKey="1"
          type="card"
          items={items}
          onChange={onChange}
        />
      </div>
    </section>
  );
}
