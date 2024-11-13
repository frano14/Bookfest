import pic1 from "../assets/row-1-column-1.png";
import pic2 from "../assets/row-1-column-2.png";
import pic3 from "../assets/row-1-column-3.png";

const AboutUs = () => {
  return (
    <div className="pt-24 pb-12" id="aboutus">
      <div className="grid grid-cols-4 grid-rows-2 gap-8 fullscreen-minus-nav bg-gray-200">
        <div className="flex justify-end items-start flex-col">
          <p className="text-textGray text-[14px]">
            You cannot learn what you do not know, but you can learn what you
            already know, and books are the best guides in this process.
          </p>
          <p className="text-white mt-2 customItalicFont">Socrates</p>
        </div>
        <div>
          <img src={pic1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-2">
          <img src={pic2} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="row-span-2 relative">
          <div className="absolute bg-[#111111] w-full bottom-0 z-999 pt-8">
            <div className="flex justify-end items-start flex-col">
              <p className="text-textGray text-[14px]">
                Books are the spiritual food that leads us to the truth, for
                what we read shapes our inner wisdom.
              </p>
              <p className="text-white mt-2 customItalicFont">Plato</p>
            </div>
          </div>
          <img src={pic3} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="col-span-2 leading-[196px] ">
          <p className="text-white  text-[186px] text-right">ABOUT</p>
          <div className="flex justify-center items-center gap-4">
            <div className="w-full h-[0.5px] bg-white"></div>
            <p className="text-white  text-[186px] text-right">US</p>
          </div>
        </div>
      </div>
      <div className="relative bg-[#111111] flex justify-center items-center flex-col my-[154px]">
        <p className="text-orange customItalicFont text-[28px] mb-6">
          SINCE 2024
        </p>
        <div className="absolute z-[0] w-[40%] h-[40%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blue__gradient" />
        <p className="w-[800px] customMontserratFont text-textGray text-[32px] text-center">
          Welcome to <span className="text-white">Book Fest</span>, a place
          where book lovers can enjoy reading their favorite titles. Our mission
          is to provide easy access to a wide variety of books, allowing users
          to explore new worlds and expand their knowledge from the comfort of
          their own home. Whether you're looking for the latest bestsellers,
          classics, or specialized titles,{" "}
          <span className="text-white">Book Fest</span> is the right place for
          you. Enjoy reading, discover new books, and share your passion for
          literature with us!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

{
  /* <div className="py-12 grid grid-cols-4 grid-rows-2 gap-6 h-screen">
    <div className="bg-red-100">1</div>
    <div className="bg-red-200">2</div>
    <div className="bg-red-300 row-span-2">
      <img src={img2} alt="" className="object-" />
    </div>
    <div className="bg-red-400 row-span-2">
      <img src={img3} alt="" />
    </div>
    <div className="bg-red-500 col-span-2">5</div>
  </div> */
}