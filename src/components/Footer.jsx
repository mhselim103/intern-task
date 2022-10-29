import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center px-8">
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
  );
};

export default Footer;
