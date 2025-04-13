import React, { useEffect, useState } from "react";
import SendIcon from "../assets/images/svgs/SendIcon";
import MicIconc from "../assets/images/svgs/MicIconc";
import { Space } from "antd";
import PlusIcon from "../assets/images/svgs/PlusIcon";
import ImageIcon from "../assets/images/svgs/ImageIcon";
import getchatsDetails from "../action/getchatsDetails";
import productImage from "../assets/images/product-image.jpg";

export default function Messages(props) {
  const { handleToggle } = { ...props };
  const [messages, setMessages] = useState([]);

  const user_name = "user654";

  useEffect(() => {
    const data = getchatsDetails();
    setMessages(data);
  }, []);

  return (
    <section
      className={`message-content bg-[#fff] h-[66vh] flex-col flex justify-end items-center px-2 py-4 rounded shadow-md`}
    >
      <div className="h-[100vh] flex flex-col justify-end items-center w-full overflow-x-hidden overflow-y-scroll">
        {messages &&
          messages.map((item, idx) => {
            return (
              <div className=" shadow-md rounded w-full mb-2 bg-[#edeff2] p-3  ">
                <div className="flex flex-col">
                  <p
                    className={`${
                      item.from.sender == user_name ? "text-end" : "left"
                    } text-label font-semibold`}
                  >
                    {item.from}
                    <span className="ml-2 font-normal text-[0.6rem] text-[#b2bbc5]">
                      {item.time}
                    </span>
                  </p>
                  <p
                    className={`${
                      item.from.sender == user_name ? "text-end" : "left"
                    }text-right text-label text-[#b2bbc5] mt-1`}
                  >
                    {item.message}
                  </p>
                  {item.media && (
                    <div
                      className={`flex ${
                        item.from.sender == user_name
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div className="w-[40%] flex gap-2 mt-2 bg-white shadow rounded p-2">
                        <img
                          src={productImage}
                          className="w-[50%] rounded h-[100%]"
                        />
                        <div>
                          <p className="font-semibold text-label">asdasda</p>
                          <p className=" text-label">asdasda</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>

      <div className="flex justify-between items-center w-full border-[#dedede] border-1 px-4 py-2 rounded-lg shadow">
        <input placeholder="How Can I Help You ?" />

        <div>
          <Space size={"middle"}>
            <button>
              <ImageIcon />
            </button>
            <button>
              <PlusIcon />
            </button>
            <button>
              <MicIconc />
            </button>
            <button className="send-btn w-[70px] text-label text-white h-[30px] rounded flex justify-between px-2 items-center bg-blue-600">
              <SendIcon fill="#fff" className={"rotate-45"} /> <span>Send</span>
            </button>
          </Space>
        </div>
      </div>
    </section>
  );
}
