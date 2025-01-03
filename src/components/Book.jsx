/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
/* eslint-disable react/prop-types */
import { useState } from "react";

function Book({ book }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };

  return (
    <div
      className={` ${
        isHovered
          ? "bg-[#eee4d0] border-[1px] border-textGray"
          : " border-[1px] border-bg"
      }  pt-4 mb-4`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <div className="h-[15%] px-2">
        <p className="customMontserratFont text-start">
          {book.volumeInfo.title}
        </p>
      </div>
      <div className="my-4 w-full flex justify-center items-center h-3/5 overflow-hidden">
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
      </div>
      <div
        className={` h-1/5 flex justify-between items-center mt-4 px-2 ${
          isHovered ? "bg-black" : ""
        }`}
      >
        <p className={`customItalicFont ${isHovered ? "text-white" : ""}`}>
          {book.volumeInfo.authors}
        </p>
        <p className="text-textGray text-[14px]">
          {book.volumeInfo.pageCount} pages
        </p>
      </div>
    </div>
  );
}

export default Book;
