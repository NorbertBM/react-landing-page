import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./routs/services";
import Header from "./routs/header";
import Contact from "./routs/contact";
import About from "./routs/about";
import LogIn from "./routs/logIn";
import SignUp from "./routs/signUp";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="header" element={<Header />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="logIn" element={<LogIn />} />
        <Route path="signUp" element={<SignUp />} />
      </Route>
    </Routes>
  </Router>,

  document.getElementById("root")
);
