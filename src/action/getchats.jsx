import React from "react";

export default function getchats() {
  try {
    const result = [
      {
        id: 1,
        title: "Alex Johnson",
        image_url: null,
        location: "Greenwood Plaza",
        status: "viewed",
        date: "June 15",
        from: "Customers",
      },
      {
        id: 2,
        title: "Maria Smith",
        image_url: null,
        location: "Maple Street Market",
        status: "not-viewed",
        date: "July 20",
        from: "Riders",
      },
      {
        id: 3,
        title: "David Lee",
        image_url: null,
        location: "Sunset Avenue",
        status: "viewed",
        date: "August 10",
        from: "Orders",
      },
      {
        id: 4,
        title: "Emily Davis",
        image_url: null,
        location: "Oceanview Market",
        status: "not-viewed",
        date: "September 25",
        from: "Sellers",
      },
      {
        id: 5,
        title: "James Wilson",
        image_url: null,
        location: "Central Business District",
        status: "not-viewed",
        date: "October 5",
        from: "Customers",
      },
      {
        id: 6,
        title: "Sarah Brown",
        image_url: null,
        location: "Hillside Village",
        status: "viewed",
        date: "November 12",
        from: "Riders",
      },
      {
        id: 7,
        title: "Michael Taylor",
        image_url: null,
        location: "Riverside Complex",
        status: "not-viewed",
        date: "December 3",
        from: "Orders",
      },
      {
        id: 8,
        title: "Jessica Martinez",
        image_url: null,
        location: "Downtown Mall",
        status: "viewed",
        date: "January 18",
        from: "Sellers",
      },
      {
        id: 9,
        title: "Robert Anderson",
        image_url: null,
        location: "Northside Plaza",
        status: "viewed",
        date: "February 22",
        from: "Customers",
      },
      {
        id: 10,
        title: "Jennifer Thomas",
        image_url: null,
        location: "Eastwood District",
        status: "not-viewed",
        date: "March 8",
        from: "Riders",
      },
      {
        id: 11,
        title: "Daniel White",
        image_url: null,
        location: "Westfield Center",
        status: "viewed",
        date: "April 15",
        from: "Orders",
      },
      {
        id: 12,
        title: "Lisa Garcia",
        image_url: null,
        location: "Southside Market",
        status: "not-viewed",
        date: "May 20",
        from: "Sellers",
      },
    ];

    return result;
  } catch (error) {
    return error;
  }
}
