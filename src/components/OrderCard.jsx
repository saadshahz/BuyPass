import React from "react";
import { Card, Progress, Button, Input } from "antd";
import {
  ShoppingCartOutlined,
  BoxPlotOutlined,
  TruckOutlined,
  CheckCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import productImage from "../assets/images/product-image.jpg";
import BuildingIcon from "../assets/images/svgs/BuildingIcon";

export default function OrderCard() {
  const orderDetails = {
    orderId: "12345676789",
    productName: "Retrograph-Espresso",
    price: "544.00",
    total: "544.00",
    status: "Discovered",
    quantity: "2",
    progress: 75, // 25% for each step (Packed, Shipping, Discovered)
    hasVideoProof: true,
    logisticPartner: "Standard Shipping",
  };

  const statusSteps = [
    {
      title: "Logistics",
      icon: <BuildingIcon fill="#fff" />,
      description: "Your order has been packed",
    },
    {
      title: "Packed up",
      icon: <BoxPlotOutlined />,
      description: "Your order has been packed",
    },
    {
      title: "Shipping",
      icon: <TruckOutlined />,
      description: "Your order is on the way",
    },
    {
      title: "Deliverd",
      icon: <CheckCircleOutlined />,
      description: "Your order has arrived",
    },
  ];
  return (
    <section className="bg-[#fff] h-[66vh] overflow-hidden px-2 py-4 rounded shadow">
      <div>
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
      </div>
      <div className="h-[65vh] order-card overflow-y-scroll">
        <div className="py-4 ">
          <Card className="shadow-lg rounded-lg">
            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-[#546171]">
                  <span className="text-[0.75rem] ">Order Number:</span>
                </span>
                <span className="text-[#546171]">
                  <span className=" text-[0.75rem]">
                    {orderDetails.orderId}
                  </span>
                </span>
              </div>
              <div className="flex items-center border-[#edeff2] border-1 rounded p-2">
                <div>
                  <img
                    src={productImage}
                    className="w-[80px] h-[70px] rounded mr-2"
                  />
                </div>
                <div>
                  <div className="text-lable">{orderDetails.productName}</div>
                  <div className="text-label font-semibold">
                    x{orderDetails.quantity}
                  </div>

                  <div className="text-label">
                    <span>Rs: </span>
                    <span className="font-semibold">{orderDetails.price}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between text-label pt-2 ">
                <span>Total:</span>
                <span className="font-semibold">{orderDetails.total}</span>
              </div>
            </div>

            {orderDetails.hasVideoProof && (
              <div className="mb-6 p-2 bg-blue-50 rounded text-blue-700 text-center">
                <CheckCircleOutlined className="mr-2" />
                Video Proof Uploaded
              </div>
            )}
            {/* 
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">Logistic partner</span>
              <span>{orderDetails.logisticPartner}</span>
            </div>
          </div> */}

            <div className="mb-6 relative">
              <Progress
                percent={orderDetails.progress}
                showInfo={false}
                strokeColor="#1677ff"
              />

              <div className="absolute top-[-25px] w-full flex justify-between mt-4">
                {statusSteps.map((step, index) => (
                  <div key={index} className="text-center">
                    <div
                      className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center 
                  ${
                    index * 25 <= orderDetails.progress
                      ? "bg-blue-500 text-white text-[0.8rem]"
                      : "bg-gray-200"
                  }`}
                    >
                      {step.icon}
                    </div>
                    <div
                      className={`mt-2 text-sm ${
                        index * 25 <= orderDetails.progress
                          ? "font-semibold"
                          : ""
                      }`}
                    >
                      <p className="text-[0.75rem]">{step.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button
                type="default"
                className="mt-7 border-red-300 text-red-500"
              >
                View Details
              </Button>
              <Button
                type="primary"
                className="mt-7 bg-blue-500 hover:bg-blue-600"
              >
                Track Order
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
