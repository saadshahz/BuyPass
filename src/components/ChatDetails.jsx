import React, { useState } from "react";
import CustomerCard from "./CustomerCard";
import { Col, Row } from "antd";
import Messages from "./Messages";
import OrderCard from "./OrderCard";

export default function ChatDetails(props) {
  const [isOrderCard, setIsOrderCard] = useState(false);
  const [isCustomerCard, setIsCustomerCard] = useState(false);
  const handleToggle = () => {
    setIsOrderCard(!isOrderCard);
  };

  const handleProfileToggle = () => {
    setIsCustomerCard(!isCustomerCard);
  };

  return (
    <>
      <div className={`h-[15vh] customer-card ${isCustomerCard ? 'show-customer-card': ''}`}>
        <CustomerCard
          image_url={""}
          joining_date={"June 15, 2021"}
          title={"Amina Khan"}
          address={"admin@cumahama.com/file:minahan"}
          purchased={"9441"}
          lifetime={"Premium Member"}
          phone="+1 (555) 123-4567"
          handleToggle= {handleProfileToggle}
        />
      </div>
      <div className="order-detail-btn flex flex-end gap-2 items-center relative">
        <button
          onClick={handleToggle}
          className="btn z-100 rounded absolute right-2 top-2 text-[0.75rem] bg-blue-600 text-white py-2 px-3"
        >
          Order Details
        </button>
        <button
          onClick={handleProfileToggle}
          className=" btn z-100 rounded absolute right-27 top-2 text-[0.75rem] bg-blue-600 text-white py-2 px-3"
        >
          View Profile
        </button>
      </div>
      <Row className={`messages-parent h-[67vh]`}>
        <Col span={16} className="pr-2">
          <Messages />
        </Col>
        <Col span={8}>
          <OrderCard isShow={isOrderCard} handleToggle={handleToggle} />
        </Col>
      </Row>
    </>
  );
}
