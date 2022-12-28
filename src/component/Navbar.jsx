import React, { useEffect, useRef, useState } from "react";
import NavbarStyle from "./navbar.module.css";
import logo from "../asset/images/logo.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [position, setPosition] = useState({});
  const navigate =useNavigate()
  const handleClick = (e) => {
    const { right, top, bottom, width, height } =
      e.target.getBoundingClientRect();
    const left = e.target.offsetLeft;
    setPosition({ left, right, top, bottom, width, height });
    navigate(`${e.target.textContent}`)
  };
  const ref = useRef();
  useEffect(() => {
    const el = ref.current.querySelector(".active");
    const { top, width, height } = el.getBoundingClientRect();
    const left = el.offsetLeft;
    setPosition({ left, top, width, height });
  }, []);
  return (
    <div className={NavbarStyle["container"]}>
      <img src={logo} alt="logo" className={NavbarStyle["logo"]}/>
      <nav className={NavbarStyle["menu"]} ref={ref}>
        {Object.values(position).length > 0 && (
          <div
            className={NavbarStyle["scroll"]}
            style={{
              "--left": position.left + "px",
              "--top": position.top + "px",
              "--width": position.width + "px",
              "--height": position.height + "px",
            }}
          ></div>
        )}
        <button className="active" onClick={handleClick}>
          Store
        </button>
        <button onClick={handleClick}>basket</button>
        <button onClick={handleClick}>Favorites</button>
        <button onClick={handleClick}>Profile</button>
      </nav>
    </div>
  );
};

export default Navbar;
