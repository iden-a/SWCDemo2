import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Home/Home.css";
import "../Home/Modal.css";

export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigateTo = useNavigate();

  const handleNavigation = (route) => {
    navigateTo(route);
  };

  const handleToggle = () => {
    setToggle(!toggle);
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  console.log("toggle state: ", toggle);
  console.log("modal state: ", showModal);

  return (
    <>
      {!showModal ? (
        <>
          <div
            className="background"
            style={{ backgroundImage: `url(/moon.svg)` }}
          >
            <div className="home-container">
              <h1 className="home-title">Welcome To My Demo!</h1>
              <p className="text">
                {" "}
                A Simple React Project - Made with the Ninja Api
              </p>
              <button
                className="start-btn"
                onClick={handleToggle}
                type="button"
              >
                Get Started!
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="modal-background"
            style={{ backgroundImage: `url(/moon.svg)` }}
          >
            <div className="modal-container">
              <h3 className="modal-title"> Select The Demo of Your Choice!</h3>

              <div className="btns-container">
                <button
                  className="link-btn"
                  onClick={() => handleNavigation("/facts")}
                >
                  {" "}
                  Fun Facts
                </button>
                <button
                  className="link-btn"
                  onClick={() => handleNavigation("/quotes")}
                >
                  {" "}
                  Quotes
                </button>
                <button
                  className="link-btn"
                  onClick={() => handleNavigation("/currency")}
                >
                  {" "}
                  Currency Converter
                </button>
              </div>
              <button onClick={closeModal} className="modal-close-btn">
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
