import React from "react";
import SendIcon from "../assets/images/svgs/SendIcon";
import MicIconc from "../assets/images/svgs/MicIconc";
import { Space } from "antd";
import PlusIcon from "../assets/images/svgs/PlusIcon";
import ImageIcon from "../assets/images/svgs/ImageIcon";

export default function Messages(props) {
  const { handleToggle } = { ...props };

  return (
    <section
      className={`message-content bg-[#fff] h-[66vh]  flex justify-center items-end px-2 py-4 rounded shadow-md`}
    >
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
