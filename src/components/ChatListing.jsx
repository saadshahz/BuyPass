import React, { useState } from "react";
import MessageCard from "./MessageCard";
import { Input, Space, Tabs } from "antd";
const { Search } = Input;

export default function ChatListing(props) {
  const { chatData } = { ...props };
  const [data, setData] = useState(chatData);
  const onSearch = () => {};

  const items = [
    {
      key: "1",
      label: (
        <p>
          All
          <span>05</span>
        </p>
      ),
      children: (
        <>
          {data &&
            data.map((items) => {
              return (
                <MessageCard
                  title={items.title}
                  location={items.location}
                  status={items.status}
                  id={items.id}
                  image_url={items.image_url}
                  date={items.date}
                />
              );
            })}
        </>
      ),
    },
    {
      key: "2",
      label: (
        <p>
          Active
          <span>05</span>
        </p>
      ),
      children: (
        <>
          {data &&
            data.map((items) => {
              return (
                <MessageCard
                  title={items.title}
                  location={items.location}
                  status={items.status}
                  id={items.id}
                  image_url={items.image_url}
                  date={items.date}
                />
              );
            })}
        </>
      ),
    },
    {
      key: "3",
      label: (
        <p>
          Delivered
          <span>05</span>
        </p>
      ),
      children: (
        <>
          {data &&
            data.map((items) => {
              return (
                <MessageCard
                  title={items.title}
                  location={items.location}
                  status={items.status}
                  id={items.id}
                  image_url={items.image_url}
                  date={items.date}
                />
              );
            })}
        </>
      ),
    },
    {
      key: "4",
      label: (
        <p>
          Canceled
          <span>05</span>
        </p>
      ),
      children: (
        <>
          {data &&
            data.map((items) => {
              return (
                <MessageCard
                  title={items.title}
                  location={items.location}
                  status={items.status}
                  id={items.id}
                  image_url={items.image_url}
                  date={items.date}
                />
              );
            })}
        </>
      ),
    },
    {
      key: "5",
      label: (
        <p>
          Return
          <span>05</span>
        </p>
      ),
      children: (
        <>
          {data &&
            data.map((items) => {
              return (
                <MessageCard
                  title={items.title}
                  location={items.location}
                  status={items.status}
                  id={items.id}
                  image_url={items.image_url}
                  date={items.date}
                />
              );
            })}
        </>
      ),
    },
  ];

  const onChange = () => {};
  return (
    <>
      <div className="px-4 py-2">
        <Search
          placeholder="Search Chat Or User name"
          allowClear
          onSearch={onSearch}
        />
      </div>
      <Tabs
        className="chatlistingTab inner-chatlistingTab"
        defaultActiveKey="1"
        type="card"
        items={items}
        onChange={onChange}
      />
    </>
  );
}
