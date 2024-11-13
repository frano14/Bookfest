/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
//

export function NavLinkBtn({ text, path = "" }) {
  return (
    <NavLink
      to={`/${path}`}
      className={({ isActive }) =>
        isActive
          ? "rounded-full px-6 py-2 bg-orange text-white"
          : "rounded-full px-6 py-2 hover:bg-gray-200"
      }
    >
      {text}
    </NavLink>
  );
}

export default function NavBar() {
  return (
    <nav className="text-gray  py-3  fixed z-10 top-0 right-0 left-0 bg-bg">
      <div className="max-w-[1200px] m-auto flex justify-between items-center ">
        <Link to="/" className="text-[24px] font-bold">
          <span className="customMontserratFont">Book </span>
          <span className="customItalicFont">fest</span>
        </Link>
        <div className="flex space-x-4 justify-center items-center">
          <NavLinkBtn text="Books" path="books" />
          <NavLinkBtn text="Authors" path="authors" />
          <a href="/#aboutus" className="px-6 py-2">
            About Us
          </a>
        </div>
        <Button text="askly" />
      </div>
    </nav>
  );
}
