import React, { useState } from "react";
import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import PathBox from "../components/pathbox/PathBox";
import Footersecond from "../components/footersecond/Footersecond";
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";
import SubsidyHome from "../components/subsidy/subsidy";
import SubsidyResultC from "../components/subsidy/subsidyResultC";
import {
  SubsidyNoMatch,
  SubsidyResult,
  SubsidySearch,
  SubsidySearchCFM,
} from "./appIndex";

const Service = () => {
  const [isHome, setIsHome] = useState(true);
  const [isFirst, setIsFirst] = useState(false); //search
  const [isSecond, setIsSecond] = useState(false); //confirm
  const [isThird, setIsThird] = useState(false); //result
  const [isNoMatch, setIsNoMatch] = useState(false); //nomatch
  const [formData, setFormData] = useState("");

  const goToFirst = () => {
    setIsHome(false);
    setIsFirst(true);
    setIsSecond(false);
    setIsThird(false);
    setIsNoMatch(false);
  };
  const goToSecond = () => {
    setIsHome(false);
    setIsFirst(false);
    setIsSecond(true);
    setIsThird(false);
    setIsNoMatch(false);
  };
  const goToThird = () => {
    setIsHome(false);
    setIsFirst(false);
    setIsSecond(false);
    setIsThird(true);
    setIsNoMatch(false);
  };
  const goToNoMatch = () => {
    setIsHome(false);
    setIsFirst(false);
    setIsSecond(false);
    setIsThird(false);
    setIsNoMatch(true);
  };

  // 定義選定的收入狀況
  const [incomeCategory, setIncomeCategory] = useState("");

  // 根据不同的收入狀況返回對應的政府補貼比例
  const getSubsidyPercentage = () => {
    switch (formData.Income) {
      case "低收入":
        return "100% 的照顧項目支出";
      case "中低收入":
        return "95% 的照顧項目支出";
      case "一般":
      default:
        return "84% 的照顧項目支出";
    }
  };

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox pathName={"補助資訊"} path={"/subsidy"} />
      {isHome && <SubsidyHome goToFirst={goToFirst} />}
      {isFirst && (
        <SubsidySearch goToSecond={goToSecond} setFormData={setFormData} />
      )}
      {isSecond && (
        <SubsidySearchCFM
          goToThird={goToThird}
          goToNoMatch={goToNoMatch}
          goToFirst={goToFirst}
          formData={formData}
        />
      )}
      {isThird && <SubsidyResult goToFirst={goToFirst} formData={formData} />}
      {isNoMatch && <SubsidyNoMatch goToFirst={goToFirst} />}
      <Footersecond />
      <BackToTopBtn />
    </React.Fragment>
  );
};

export default Service;
