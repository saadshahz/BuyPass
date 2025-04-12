import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import ChatDetails from "../../components/ChatDetails";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

export default function chats() {
  const location = useLocation();
  const loactionId = location.pathname.split("/").pop();

  const [isMenu, setIsMenu] = useState(true);
  const [isTab, setIsTab] = useState(false);
  const handleToggle = () => {
    setIsMenu(!isMenu);
  };
  useEffect(() => {
    if (window.innerWidth <= 991) {
      setIsMenu(false);
      setIsTab(true);
    }
  }, []);

  return (
    <section className="flex justify-between">
      <div
        className={`shadow transition-[0.5s] ${
          isMenu ? "showMenu w-[20%]" : "hideMenu w-0"
        }`}
      >
        <Sidebar />
      </div>
      <div className={` transition-[0.8s] ${isMenu ? " w-[80%]" : "w-full"}  `}>
        <Header handleMenu={handleToggle} />
        <div className="p-2 bg-[#f7f7fa]">
          {loactionId ? (
            <ChatDetails isTab={isTab} />
          ) : (
            <div className="h-[80vh] text-heading font-bold flex justify-center items-center">
              Chat detail will be over here
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
