import React from "react";
import '../Header/Header.css'
export default function Header() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundImage: `url(/moon.svg)`}} >
      <div className="container-fluid">
  
        <a className="navbar-brand" href="/">
          <span className="link-nav" > Demo!</span>
        </a>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav" >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/facts"> <span className="link-nav">Fun Facts</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/quotes"> <span className="link-nav" >Quotes</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/currency"><span className="link-nav" >Currency</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  );
}
