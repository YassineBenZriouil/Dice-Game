import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Intro from "./intro";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Router>
        <Routes>
            {/* Intro component will load at the root path */}
            <Route path="/" element={<Intro />} />
            {/* App component will load when the URL has the targetValue in the route */}
            <Route path="/game/:targetValue" element={<App />} />
        </Routes>
    </Router>
);
