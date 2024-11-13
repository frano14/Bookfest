/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import poz2 from "../assets/poz2.jpg";
import qrc from "../assets/qrc.svg";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col pt-12">
      <div className="flex justify-between items-start pb-12 pt-[52px] gap-8 text-gray">
        <div className="relative w-[60%] ">
          <div className="">
            <p className="customMontserratFont text-[72px] leading-[72px]">
              Vintage <br /> books
              <span className="customItalicFont font-thin text-orange text-[72px]">
                {" "}
                from
              </span>
              <br />
              <p className="text-background">around the world</p>
            </p>
            <div className="absolute right-0 top-0 w-[46%]">
              <p className="text-textGray text-[14px] leading-[22px] mt-5">
                We are waiting for all book lovers and connoisseurs of
                literature for the long-awaited discovery of new worlds through
                the pages of
                <span className="customMontserratFont"> books.</span>
              </p>
            </div>
          </div>
          <div className="flex mt-10">
            <Button text="Read Book" path="books" />
          </div>
        </div>

        <div className="w-[30%] flex items-stretch flex-col">
          <div className="flex justify-center">
            <div className="bg-gray rounded-xl w-[70%] py-3 px-8">
              <p className="customMontserratFont text-white text-[44px] leading-[44px] mb-4">
                Books
                <span className="customItalicFont"> fest</span>
              </p>
              <p className="text-textGray customItalicFont">November 11/2024</p>
            </div>
            <div className="bg-gray text-white rounded-xl w-1/3 py-3 -translate-x-[1.5px] flex justify-end items-center">
              <div className="flex justify-center items-center">
                <img src={qrc} alt="Opis slike" />
                <p className="text-textGray text-[14px] transform -rotate-90 -translate-x-2">
                  scan
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="customMontserratFont text-[24px] mb-1">
              Look at the available books
            </p>
            <p className="text-textGray text-[14px] leading-[22px]">
              A page for true aesthetes and book lovers.
              <br /> If this is you, <span className="font-bold">join us</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-grow overflow-hidden">
        <img
          src={poz2}
          alt="Opis slike"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
}
