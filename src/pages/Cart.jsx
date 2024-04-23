import React, { useState } from "react";
import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import CartSearch from "../components/cartsearch/CartSearch";
import Footer from "../components/footer/Footer";
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";
// 本頁切換底下三種流程 分為First, Second, Third
import CartDetail from "../components/cartdetail/CartDetail";
import CartPayment from "../components/cartpayment/CartPayment";
import CartConfirm from "../components/cartconfirm/CartConfirm";

const Cart = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [isSecond, setIsSecond] = useState(false);
  const [isThird, setIsThird] = useState(false);
  const localData = localStorage.getItem('auth')
  const userData = localData? JSON.parse(localData):null

  const goToFirst = () => {
    setIsFirst(true);
    setIsSecond(false);
    setIsThird(false);
  };
  const goToSecond = () => {
    if(!userData) window.location.href = './userlogin'
    setIsFirst(false);
    setIsSecond(true);
    setIsThird(false);
  };
  const goToThird = () => {
    setIsFirst(false);
    setIsSecond(false);
    setIsThird(true);
  };

  return (
    <>
      <Header />
      <IndexNav />
      <CartSearch
        SecondActive={isSecond}
        ThirdActive={isThird}
        FirstDone={isSecond||isThird}
        SecondDone={isThird}
        ThirdDone={isThird}
      />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            {isFirst && (
              <CartDetail
                doFirstBtn={goToFirst}
                doSecondBtn={goToSecond}
                doThirdBtn={goToThird}
              />
            )}
            {isSecond && (
              <CartPayment
                doFirstBtn={goToFirst}
                doSecondBtn={goToSecond}
                doThirdBtn={goToThird}
                userData = {userData}
              />
            )}
            {isThird && (
              <CartConfirm
                doFirstBtn={goToFirst}
                doSecondBtn={goToSecond}
                doThirdBtn={goToThird}
              />
            )}
          </div>
        </div>
      </div>
      <Footer />
      <BackToTopBtn />
    </>
  );
};

export default Cart;
