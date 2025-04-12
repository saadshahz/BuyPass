import React from "react";
import CustomerCard from "./CustomerCard";
import { Col, Row } from "antd";
import Messages from "./Messages";
import OrderCard from "./OrderCard";

export default function ChatDetails(props) {
  const { isTab } = { ...props };

  console.log("isTab : ", isTab);

  return (
    <>
      <div className="h-[15vh]">
        <CustomerCard
          image_url={""}
          joining_date={"June 15, 2021"}
          title={"Amina Khan"}
          address={"admin@cumahama.com/file:minahan"}
          purchased={"9441"}
          lifetime={"Premium Member"}
          phone="+1 (555) 123-4567"
        />
      </div>
      <Row
        className={`h-[67vh] ${
          isTab ? " mobile-measage-content" : "overflow-hidden"
        } `}
      >
        <Col span={isTab ? 24 : 16} className="pr-2">
          <Messages isTab= {isTab} />
        </Col>
        <Col span={isTab ? 24 : 8}>
          <OrderCard isTab= {isTab}  />
        </Col>
      </Row>
    </>
  );
}
