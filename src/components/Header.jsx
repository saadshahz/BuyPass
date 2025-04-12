import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Col, Image, Input, Row, Space } from "antd";
import MoonIcon from "../assets/images/svgs/MoonIcon";
import BoxIcon from "../assets/images/svgs/BoxIcon";
import NotificationIcon from "../assets/images/svgs/NotificationIcon";
import CartIcon from "../assets/images/svgs/CartIcon";
import MultipleBoxIcon from "../assets/images/svgs/MultipleBoxIcon";
import flag from "../assets/images/united-state.png";
import user from "../assets/images/person.png";
import { useLocation } from "react-router-dom";
import ArrowRIghtIcon from "../assets/images/svgs/ArrowRIghtIcon";

export default function Header() {
  const path = useLocation();
  console.log(path.pathname.includes("/chats"));
  return (
    <section className="h-[15vh] p-4 bg-[#fff] shadow ">
      <Row className="justify-between items-center ">
        <Col span={6}>
          <Input
            size=""
            placeholder="Search..."
            name="search"
            onChange={(e) => {
              console.log(e.target.value);
            }}
            className="header-search"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col span={6} className="flex text-end">
          <Space size={"middle"}>
            <div>
              <img src={flag} className="w-[30px] h-[20px] rounded" />
            </div>
            <div>
              <button>
                <MultipleBoxIcon />
              </button>
            </div>
            <div>
              <button>
                <CartIcon />
              </button>
            </div>
            <div>
              <button>
                <BoxIcon />
              </button>
            </div>
            <div>
              <button>
                <MoonIcon />
              </button>
            </div>
            <div>
              <button>
                <NotificationIcon />
              </button>
            </div>
            <div>
              <img src={user} className="rounded-full w-[30px] h-[30px]" />
            </div>
          </Space>
        </Col>
      </Row>
      <div className="pt-4 flex justify-between items-center">
        <p className="text-label">Message Center</p>
        <p className="text-label flex items-center">
          Home{" "}
          {path.pathname.includes("/chats") ? (
            <span className="text-blue-600 flex  items-center">
              <span className="mx-2" ><ArrowRIghtIcon fill="#155dfc"  /></span>
              
              {" Message Center"}
            </span>
          ) : null}
        </p>
      </div>
    </section>
  );
}
