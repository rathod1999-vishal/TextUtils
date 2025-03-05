import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState(null);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("blue-pink", "greenish");
    document.body.classList.remove("chocolate");
    document.body.classList.remove("tomato");
  };

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);

    if (mode === "light") {
      document.body.classList.add(cls);
      setMode("dark");
      // document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      // document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
    // if (cls === "blue-pink") {
    //   document.body.classList.add(cls);
    //   setColor("#213970");
    //   // document.body.style.backgroundColor = "grey";
    //   // showAlert("Dark mode has been enabled", "success");
    //   // document.title = "TextUtils - Dark Mode";
    // } else {
    //   setColor("light");
    //   // document.body.style.backgroundColor = "white";
    //   // showAlert("Light mode has been enabled", "success");
    //   // document.title = "TextUtils - Light Mode";
    // }
  };

  return (
    <>
      {/* <Router> */}
      <Navbar
        title="TextUtils"
        home="Home"
        about="About US"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text here to analyze"
          mode={mode}
          color={color}
        />
        {/* <Routes>
            <Route path="/about" element={<About />}></Route> */}

        {/* <Route
              path="/"
              element={
               
              }
            ></Route>
          </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
