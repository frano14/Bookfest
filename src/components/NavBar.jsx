/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
//

export function NavLinkBtn({ text, path = "" }) {
  return (
    <NavLink
      to={`/${path}`}
      className={({ isActive }) =>
        isActive
          ? "rounded-full ms:px-6 px-3 py-2 bg-orange text-white"
          : "rounded-full ms:px-6 px-3 py-2 hover:bg-gray-200"
      }
    >
      {text}
    </NavLink>
  );
}

export default function NavBar() {
  const [isHamburgerMenuActive, setIsHamburgerMenuActive] = useState(false);

  const handleClick = () => {
    setIsHamburgerMenuActive(!isHamburgerMenuActive);
  };

  return (
    <nav className="text-gray  py-3 fixed z-50 top-0 right-0  left-0 bg-bg">
      <div className="max-w-[1200px] m-auto flex justify-between items-center px-6 xl:px-0">
        <Link to="/" className="text-[24px] font-bold">
          <span className="customMontserratFont">Book </span>
          <span className="customItalicFont">fest</span>
        </Link>
        <div className="s:flex hidden space-x-4 justify-center items-center ">
          <NavLinkBtn text="Books" path="books" />
          <NavLinkBtn text="Authors" path="authors" />
          <a href="/#aboutus" className="ms:px-6 px-3 py-2">
            About Us
          </a>
        </div>
        <div className="s:flex hidden">
          <Button text="askly" />
        </div>
        <p className="s:hidden flex" onClick={handleClick}>
          MENU
        </p>
      </div>
      <div
        className={`${
          isHamburgerMenuActive
            ? "absolute bg-bg w-full top-[62px] z-999"
            : "hidden"
        }`}
      >
        <div className="flex items-center justify-center flex-col gap-4 py-3">
          <a href="/#aboutus" className="ms:px-6 px-3 py-2">
            About Us
          </a>
          <NavLinkBtn text="Books" path="books" />
          <NavLinkBtn text="Authors" path="authors" />
          <div className="w-[200px] flex justify-center items-center">
            <Button text="askly" />
          </div>
        </div>
      </div>
    </nav>
  );
}
