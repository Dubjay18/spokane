import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Purple from "../components/Purple";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mt-16 ">{children}</div>
      <Purple />
      <Footer />
    </>
  );
};

export default MainLayout;
