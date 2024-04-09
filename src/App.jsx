import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import { colors  } from "./helper/index";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Form from "./containers/Form";
import Footer from "./containers/Footer";

const App = () => {
  return (
    <main
      style={{
        backgroundColor: colors.background.primary,
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Form />} path="/form" />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
