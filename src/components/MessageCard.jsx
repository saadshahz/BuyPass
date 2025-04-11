import { Avatar, Card, Tag } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import LocationIcon from "../assets/images/svgs/LocationIcon.jsx";

export default function MessageCard(props) {
  const { title, image_url, location, status, id, date } = { ...props };

  const path = useLocation();
  console.log("pathname :", path.pathname);
  const getFirstLetters = (text) => {
    if (!text) return "";
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("");
  };

  return (
    <Link
      to={`/chats/${id}`}
      // className={path.pathname == `/chats/${id}` ? "bg-amber-300" : null}
    >
      <div
        className={`w-full py-2 px-4 border-b-2 border-b-[#fafafa] bg-red ${
          path.pathname == `/chats/${id}` ? "bg-[#dedede]" : null
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            {image_url ? (
              <image
                href={image_url}
                className="w-[10px] h-[10px] rounded-full "
              />
            ) : (
              <Avatar
                style={{ backgroundColor: "#fcff00", verticalAlign: "middle" }}
                size="large"
                gap={2}
              >
                {getFirstLetters(title)}
              </Avatar>
            )}

            <div className="space-y-0.5">
              <h3 className="text-label flex justify-between items-center w-full font-semibold text-gray-800">
                <span className="block">{title}</span>
                <span className="block ml-4 text-[0.7rem] font-light text-[#b2bbc5]">
                  {date}
                </span>
              </h3>
              <p className="text-[0.8rem] flex gap-1 items-center">
                <span>
                  <LocationIcon fill={"#0877ff"} />
                </span>
                {location}
              </p>
            </div>
          </div>
          {status == "viewed" ? (
            <span className="block bg-[#0877ff] w-[10px] h-[10px] rounded-full"></span>
          ):null }
        </div>
      </div>
    </Link>
  );
}
