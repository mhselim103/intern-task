import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <div>
        <Header />
      </div>
      <main className="pl-10">{children}</main>
    </div>
  );
};

export default Layout;
