import React from "react";
import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import PathBox from "../components/pathbox/PathBox";
import Footer from "../components/footer/Footer";
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";
import SubsidyHome from "../components/subsidy/subsidy";

const Service = () => {
  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox />
      <SubsidyHome />

      <br />
      <Footer />
      <BackToTopBtn />
    </React.Fragment>
  );
};

export default Service;
