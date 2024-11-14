/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import poz2 from "../assets/poz2.jpg";
import qrc from "../assets/qrc.svg";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col m:pt-12 pt-6">
      <div className="flex justify-between xs:flex-row flex-col items-start l:pb-12 pb-6 pt-[52px] gap-8 text-gray">
        <div className="relative s:w-[60%] w-full">
          <div className="">
            <p className="customMontserratFont xl:text-[72px] l:text-[68px] m:text-[60px] ms:text-[54px] text-[36px] l:leading-[72px] m:leading-[60px] ms:leading-[52px] leading-[36px]">
              Vintage <br /> books
              <span className="customItalicFont font-thin text-orange ">
                {" "}
                from
              </span>
              <br />
              <p className="text-background">around the world</p>
            </p>
            <div className="xl:absolute flex right-0 top-0 l:w-[46%]">
              <p className="text-textGray text-[14px] ms:leading-[22px] leading-[18px] mt-5">
                We are waiting for all book lovers and connoisseurs of
                literature for the long-awaited discovery of new worlds through
                the pages of
                <span className="customMontserratFont"> books</span>.
              </p>
            </div>
          </div>
          <div className="flex l:mt-10 mt-6">
            <Button text="Read Book" path="books" />
          </div>
        </div>

        <div className="s:w-[30%]  flex items-stretch flex-col">
          <div className="flex justify-center l:flex-row flex-col">
            <div className="bg-gray rounded-xl l:w-[70%] w-full py-3 l:px-8 px-6">
              <p className="customMontserratFont text-white l:text-[44px] ms:text-[32px] text-[26px] l:leading-[44px] leading-[32px] l:mb-4 mb-1">
                Book
                <span className="customItalicFont"> fest</span>
              </p>
              <p className="text-textGray customItalicFont leading-[18px]">
                November 11/2024
              </p>
            </div>
            <div className="bg-gray text-white rounded-xl l:w-1/3 w-full xl:py-3 p-0 l:-translate-x-[1.5px] -translate-y-[1.5px] flex l:justify-end justify-center items-center">
              <div className="ms:flex hidden justify-center items-center l:rotate-0 rotate-90 m:h-full h-[100px]">
                <img
                  src={qrc}
                  alt="Opis slike"
                  className="l:scale-100 m:scale-150 scale-100"
                />
                <p className="text-textGray text-[14px] transform -rotate-90 -translate-x-2 l:flex hidden">
                  scan
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="customMontserratFont text-[24px] mb-2 leading-[26px]">
              Look at the available books
            </p>
            <p className="text-textGray text-[14px] ms:leading-[22px] leading-[18px]">
              A page for true aesthetes and book lovers.
              <br className="hidden m:flex" /> If this is you,{" "}
              <span className="font-bold">join us</span>.
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
