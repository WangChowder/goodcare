import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form"
import "./CartDetail.css";
import Counter from "../Counter/counter";

const CartDetail = ({ doSecondBtn }) => {
  let sessionInfo = sessionStorage.getItem("cartInfo") ? JSON.parse(sessionStorage.getItem("cartInfo")) : null;
  const [cartInfo, setCartInfo] = useState(sessionInfo || []);
  const [couponInd, setCouponInd] = useState(0);
  const [userCoupon, setUserCoupon] = useState(sessionStorage.getItem("couponDiscount"));
  const [isUsed, setIsUsed] = useState(false)

  // console.log(userCoupon)
  // 更新購物車資訊
  const changeCartInfo = (id, num) => {
    const updatedCartInfo = cartInfo.map(item => {
      if (item.id === id) {
        return { ...item, quantity: num };
      }
      return item;
    });
    setCartInfo(updatedCartInfo);
    sessionStorage.setItem('cartInfo', JSON.stringify(updatedCartInfo))
  };

  // delete item
  const doDelete = (id) => {
    const idToRemove = id
    let updatedCartInfo = [...cartInfo]
    updatedCartInfo = updatedCartInfo.filter(item => item.id !== idToRemove)
    setCartInfo(updatedCartInfo)
    sessionStorage.setItem('cartInfo', JSON.stringify(updatedCartInfo))
  }

  // 跳出吐司提示
  const notify = (msg) => toast.success(msg);
  if (!cartInfo.length) notify("購物車尚未有任何東西！");

  // 驗證折扣碼
  let realCoupon = [
    { code: "GC2024", discount: 0.85 },
    { code: "GodRex", discount: 0.7 }
  ];
  const { register, handleSubmit } = useForm();
  const onSubmit = e => {
    let checkInd = realCoupon.findIndex(i => i.code === e.code)
    if (checkInd >= 0) {
      setUserCoupon(realCoupon[checkInd].discount)
      sessionStorage.setItem('couponDiscount', realCoupon[checkInd].discount)
      setIsUsed(true)
      notify("使用折扣碼成功！")
    }
  }
  
  const checkCoupon = e => {
    let checkInd = realCoupon.findIndex(i => i.code === e.target.value)
    setCouponInd(checkInd)
    console.log("coupon id:", couponInd)
  }


  // 計算總金額
  let cartPrice = 0;
  let charge = 100;
  let totalDiscount = 0;
  let totalPrice = 0;


  cartPrice = cartInfo.length > 0
    ? cartInfo.reduce((total, item) => {
      return total + item.quantity * item.price
    }, 0)
    : 0
  totalPrice =
    userCoupon
      ? cartPrice * userCoupon + charge
      : cartPrice + charge;
  totalDiscount = totalPrice - cartPrice - charge;

  return (
    <>
      {/* 購物車明細 */}
      <div className="container CartDetail">
        <div className="row">
          <div className="col-sm-2 col-lg-2 text-center ">商品圖片</div>
          <div className="col-sm-2 col-lg-2text-center ">商品名稱</div>
          <div className="col-sm-2 col-lg-2 text-center ">單件價格</div>
          <div className="col-sm-3 col-lg-2 text-center ">數量</div>
          <div className="col-sm-2 col-lg-2 text-center ">小計</div>
          <div className="col-sm-2 col-lg-2 text-center ">刪除</div>
        </div>
        <br />
        {cartInfo.length > 0 ? (
          cartInfo.map(val => {
            return (
              <div key={val.id}>
                <div className="row align-items-center">
                  <div className="col-sm-2 text-center">
                    <img
                      src={require(`../../asset/images/numberImages/${val.id}.png`)}
                      alt="Product"
                      className="CartDetailimg"
                    />
                  </div>
                  <div className="col-sm-2 text-center">{val.productName}</div>
                  <div className="col-sm-2 text-center">{'NTD$ '+val.price}</div>
                  <div className="col-sm-2 text-center">
                    <Counter
                      curNum={val.quantity}
                      childToParent={numChanged => { changeCartInfo(val.id, numChanged) }}
                    />
                  </div>
                  <div className="col-sm-2 text-center">{'NTD$ '+ (val.quantity * val.price)}</div>
                  <div className="delete-btn col-sm-2 text-center" onClick={() => doDelete(val.id)}>
                    <i className="fas fa-trash-alt"></i>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <tr>
            <td colSpan={6} className="text-muted text-center">
              {" "}
              您尚未加入任何東西到購物車{" "}
            </td>
          </tr>
        )}
      </div>
      <div className="containe CartDetail2">
        {cartInfo.length > 0 ? (
          cartInfo.map(val => {
            return (
              <div className="row">

                <div key={val.id} className="col-6 col-md-5 col-sm-6 col-lg-4 mb-4">
                  <img
                    src={require(`../../asset/images/numberImages/${val.id}.png`)}
                    alt="Product"
                    className="CartDetailimg2"
                  />
                </div>
                <div className="col-sm-3 col-md-6 col-sm-6 d-flex flex-column justify-content-center align-items-center">
                  <div>{val.productName}</div>
                  <br />
                  <div className="d-flex justify-content-end mb-3"><p>單件價格:</p>{val.price}</div>
                  <div>
                    <Counter
                      curNum={val.quantity}
                      childToParent={numChanged => { changeCartInfo(val.id, numChanged) }}
                    />
                  </div>

                  <div className="d-flex justify-content-end"><p>小計:</p>{val.quantity * val.price}</div>
                  <div className="delete-btn text-center d-flex justify-content-end mb-3" onClick={() => doDelete(val.id)}>
                    <i className="fas fa-trash-alt">刪除</i>
                  </div>
                </div>
                <hr />
              </div>
            );
          })
        ) : (
          <tr>
            <td colSpan={6} className="text-muted text-center">
              {" "}
              您尚未加入任何東西到購物車{" "}
            </td>
          </tr>
        )}
      </div>

      <br />
      <br />
      <br />
      <br />

      {/* 帳單明細 */}
      {
        cartInfo.length > 0 && (
          <div className="container">
            <div className="row">
              <div className="col-9">
                <h2 className="my-4 text-center" style={{ fontWeight: "bold" }}>
                  訂單資訊
                </h2>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>商品小計</td>
                      <td>{"NTD$ " + cartPrice}</td>
                    </tr>
                    <tr>
                      <td>折扣</td>
                      <td className={totalDiscount < 0 ? "text-danger" : ""}>
                        {"NTD$ " + parseInt(totalDiscount)}
                      </td>
                    </tr>
                    <tr>
                      <td>運費</td>
                      <td>{"NTD$ " + charge}</td>
                    </tr>
                    <tr>
                      <td>合計</td>
                      <td>{"NTD$ " + parseInt(totalPrice)}</td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
                {/* 折扣碼 */}
                {cartInfo.length > 0 && (
                  <div className="container">
                    <div className="d-flex justify-content-center">
                      <div className="col-6 ms">
                        <form className="input-group" onSubmit={handleSubmit(onSubmit)}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="請輸入折扣碼"
                            {...register('code',
                              {
                                require: true,
                                pattern: '^/w+$',
                                maxLength: 6
                              }
                            )}
                            onChange={checkCoupon}
                          />

                          <div className="input-group-append">
                            <input type="submit"
                              className={"btn btn-outline-primary " + (isUsed ? "disabled" : "")}
                              value="使用折扣碼"
                            />
                          </div>
                        </form>
                        <div className={couponInd < 0 ? "block" : "d-none"} >
                          <p className="text-danger d-flex justify-content-center">此折扣碼無效</p>
                        </div>
                      </div>
                    </div>
                    <Toaster />
                  </div>
                )}
                <br />
                <br />
                <br />
                <br />
                <div className="text-center d-flex justify-content-center">
                  <a href="/product">
                    <button className="btn btn-lg custom-button2 me-3">
                      <i className="fa-solid fa-shopping-cart"></i>&nbsp;繼續購物
                    </button>
                  </a>
                  <button
                    type="button"
                    className="btn btn-lg custom-button "
                    onClick={doSecondBtn}>
                    <i className="fa-brands fa-cc-visa"></i>&nbsp;前往結帳
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {/* 叫他回去買東西 */}
      {
        cartInfo.length === 0 && (
          <div className="grid text-center">
            <a href="/product">
              <button className="btn btn-lg custom-button px-5 g-start-2">
                <i className="fa-solid fa-shopping-cart"></i> 繼續購物
              </button>
            </a>
            <Toaster position="top-right" reverseOrder={false} />
          </div>
        )
      }
    </>
  );
};

export default CartDetail;
