import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="">
      <div>
        <Header />
      </div>
      <main className="pl-10">
        <div>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
