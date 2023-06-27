import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  //create a state to manage css-text-highlight for activeness
  const [active, setActive] = useState("");
  //toggle state to manage the small-device responsiveness
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      const scrollTop = window.scrollY;
      if (scrollTop>100){
        setScrolled(true);
      }
      else{
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return ()=> window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full h-[50px] flex items-center fixed top-0 z-20 ${scrolled?"bg-primary":"bg-transparent"}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Tony&nbsp;<span className="sm:block hidden text-white">
            | PG</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={()=>{
                setActive(link.title);
                setToggle(!toggle)
              }}
            >
              <a 
              href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className={`${scrolled?"bg-transparent":"bg-secondary"} p-1 rounded-md`}>
          <img
          src={toggle?close:menu}
          alt="menu"
          className="w-[28px] h-[28px] cursor-pointer object-contain"
          onClick={()=>setToggle(!toggle)}
          />
          </div>
        <div className={`${!toggle?"hidden":"flex"} p-6 black-gradient absolute top-10 right-0 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className="list-none flex justify-end items-start flex-col gap-3">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                ? "text-white" 
                : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={()=>{
                setActive(link.title);
                setToggle(!toggle)
              }}
            >
              <a 
              href={`#${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
