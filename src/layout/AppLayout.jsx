import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Chats from "../screen/protected/Chats.jsx";

const Applayout = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Chats />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/chats/:id" element={<Chats />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </>
  );
};
export default Applayout;
