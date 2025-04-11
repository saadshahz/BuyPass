import React from 'react'
import Login from '../screen/auth/Login'
import Register from '../screen/auth/Register'
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";

export default function MainLayout() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}
