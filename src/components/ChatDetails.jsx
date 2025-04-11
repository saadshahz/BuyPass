import React from "react";
import CustomerCard from "./CustomerCard";

export default function ChatDetails() {
  return (
    <>
      <CustomerCard
        image_url={""}
        joining_date={"June 15, 2021"}
        title={"Amina Khan"}
        address={"admin@cumahama.com/file:minahan"}
        purchased={"9441"}
        lifetime={"Premium Member"}
        phone="+1 (555) 123-4567"
      />
    </>
  );
}
