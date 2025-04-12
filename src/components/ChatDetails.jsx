import React from "react";
import CustomerCard from "./CustomerCard";
import { Col, Row } from "antd";
import Messages from "./Messages";
import OrderCard from "./OrderCard";

export default function ChatDetails() {
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
      <Row className="h-[67vh] overflow-hidden ">
        <Col span={16} className="pr-2">
          <Messages />
        </Col>
        <Col span={8}>
          <OrderCard />
        </Col>
      </Row>
    </>
  );
}
