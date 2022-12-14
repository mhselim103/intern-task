import React from "react";

const Footer = () => {
  return (
    <div>
      {/* <div className="w-[80%] mx-auto">
        <hr />
      </div> */}
      <div className="flex justify-between items-center px-32 py-4 border-t-[0.2px] border-gray-700">
        <div>
          <p>@2022</p>
        </div>
        <div className="flex gap-5 ">
          <p className="text-sm cursor-pointer">Terms and Use</p>
          <p className="text-sm cursor-pointer">Privacy</p>
          <p className="text-sm cursor-pointer">Desclaimer</p>
          <p className="text-sm cursor-pointer">Help</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
