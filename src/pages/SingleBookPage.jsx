/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { Link } from "react-router-dom";
const apiKey = "AIzaSyDlRCQpD8rlI3ivvO26mHQvIwBigmyzr5M";

export default function SingleBookPage() {
  const baseUrl = `https://www.googleapis.com/books/v1/volumes`;
  const bookId = useLocation().pathname.split("/")[2];
  const [singleBook, setSignleBook] = useState([]);

  useEffect(() => {
    const BookFetching = async () => {
      try {
        const res = await fetch(`${baseUrl}?q=${bookId}&key=${apiKey}`);
        const data = await res.json();
        setSignleBook(data.items[0]);
      } catch (err) {
        throw new Error(err);
      }
    };

    BookFetching();
  }, []);

  return (
    <>
      <div className="relative">
        <div className="max-w-[1200px] m-auto px-6 xl:px-0 flex justify-center items-center flex-col">
          <NavBar />
          <div className="mt-[64px] pt-12 pb-6 w-full flex justify-between items-center">
            <Link to={"/books"}>
              <p className="text-[24px] customMontserratFont">&larr; Go back</p>
            </Link>
            <Link
              className={`px-6 py-2 bg-orange text-white rounded-full ${
                singleBook.accessInfo?.pdf?.acsTokenLink ? "disabled" : ""
              }`}
              to={singleBook.accessInfo?.pdf?.acsTokenLink}
            >
              {singleBook?.accessInfo?.pdf?.acsTokenLink
                ? "Download book"
                : "Unavailable"}
            </Link>
          </div>
          <div className="pb-12 w-full flex justify-center items-start gap-8">
            <img
              src={singleBook.volumeInfo?.imageLinks?.thumbnail}
              alt="Thumbnail"
              className="w-[40%]"
            />
            <div className="w-[60%] ">
              <h1 className="text-[54px] leading-[72px] customMontserratFont">
                {singleBook.volumeInfo?.title}
              </h1>
              <p className="text-[36px] text-orange my-2">
                {singleBook.volumeInfo?.authors}
              </p>
              <p className=" text-[18px] leading-[26px]">
                Published by {singleBook.volumeInfo?.publisher},{" "}
                {singleBook.volumeInfo?.publishedDate}
              </p>
              <p className=" text-[14px] leading-[26px] my-8">
                {singleBook.volumeInfo?.description}
              </p>
              <p className="text-textGray">
                you can check other information{" "}
                <Link
                  className="text-orange"
                  to={singleBook.volumeInfo?.infoLink}
                >
                  here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
