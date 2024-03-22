import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./CartPayment.css";

const CartPayment = ({ doFirstBtn, doThirdBtn, userData }) => {
  const [orderData, setOrderData] = useState({});
  const [isSync, setIsSync] = useState(false);

  // cart info
  const sessionData = sessionStorage.getItem("cartInfo")
  const cartInfo = sessionData? JSON.parse(sessionData):null
  // form sync
  const doSycnInfo = (e) => {
    if (!isSync) {
      const detail = getValues(["orderman", "ordertel", "orderaddress"]);
      setValue("getman", detail[0]);
      setValue("gettel", detail[1]);
      setValue("getaddress", detail[2]);
      setIsSync(true);
    } else {
      setValue("getman", "");
      setValue("gettel", "");
      setValue("getaddress", "");
      setIsSync(false);
    }
  };

  // form data
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    setOrderData(data);
    if (isRealValue(errors)) doThirdBtn();
  };

  // check null object
  const isRealValue = (obj) => {
    return obj && obj !== "null" && obj !== "undefined";
  };

  //axios post

  return (
    <>
      <div className="container">
        <div className="row">
          {/* 購物車明細 */}
          <div className="mt-5">
            <div class="accordion" id="accordion">
              <div class="accordion-item1">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    購買清單
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <table className="table" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th scope="col">商品圖片</th>
                          <th scope="col">商品名稱</th>
                          <th scope="col">單價</th>
                          <th scope="col">數量</th>
                          <th scope="col">小計</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartInfo.map((val) => {
                          return (
                            <tr key={val.id}>
                              <td>
                                <img
                                  src={require(`../../asset/images/numberImages/${val.id}.png`)}
                                  alt="Product"
                                  width="150"
                                  height="150"
                                />
                              </td>
                              <td>{val.productName}</td>
                              <td>{val.price}</td>
                              <td>{val.quantity}</td>
                              <td>{val.quantity * val.price}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 超大表單 */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    <i className="fas fa-shipping-fast"></i>&nbsp;
                    運送方式（宅配到府）
                  </h5>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      姓名
                    </label>
                    {errors.getman && (
                      <span role="alert" className="text-danger">
                        *必填
                      </span>
                    )}
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="請填寫您的姓名"
                      aria-invalid={errors.getman ? "true" : "false"}
                      {...register("getman", { required: true })}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="phone" className="form-label">
                      聯絡電話
                    </label>
                    {errors.gettel && (
                      <span role="alert" className="text-danger">
                        *必填
                      </span>
                    )}
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="請填寫您的聯絡電話"
                      aria-invalid={errors.gettel ? "true" : "false"}
                      {...register("gettel", {
                        required: true,
                        pattern: /^09\d{2}-?\d{3}-?\d{3}$/,
                      })}
                    />
                  </div>
                  {/* <div className="mb-3 row">
                  <div className="col-md-6">
                    <label for="city" className="form-label">
                      縣市
                    </label>
                    <select id="city" className="form-select">
                      <option defaultValue="">請選擇縣市</option>
                      <option defaultValue="">台北市</option>
                      <option defaultValue="">台中市</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label for="district" className="form-label">
                      地區
                    </label>
                    <select id="district" className="form-select">
                      <option defaultValue="">請選擇地區</option>
                    </select>
                  </div>
                </div> */}
                  <div className="mb-3">
                    <label for="address" className="form-label">
                      詳細地址
                    </label>
                    {errors.getaddress && (
                      <span role="alert" className="text-danger">
                        *必填
                      </span>
                    )}
                    <textarea
                      className="form-control"
                      id="address"
                      rows="3"
                      placeholder="請填寫完整的地址"
                      aria-invalid={errors.getaddress ? "true" : "false"}
                      {...register("getaddress", { required: true })}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    <i className="fas fa-user"></i>&nbsp;訂購人資料
                  </h5>
                  {/* <form onSubmit={handleSubmit(onSubmitOrder)}> */}
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="sameAsShipping"
                      onClick={doSycnInfo}
                    />
                    <label className="form-check-label" for="sameAsShipping">
                      收件人資料同訂購人資料
                    </label>
                  </div>
                  <div className="mb-3">
                    <label for="name" className="form-label">
                      姓名
                    </label>
                    {errors.orderman && (
                      <span role="alert" className="text-danger">
                        *必填
                      </span>
                    )}
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="orderName"
                      placeholder="請填寫您的姓名"
                      defaultValue={userData ? userData.name : ""}
                      aria-invalid={errors.orderman ? "true" : "false"}
                      {...register("orderman", {
                        required: true,
                      })}
                    />
                  </div>
                  <div className="mb-3">
                    <label for="phone" className="form-label">
                      聯絡電話
                    </label>
                    {errors.ordertel && (
                      <span role="alert" className="text-danger">
                        *必填
                      </span>
                    )}
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="請填寫您的聯絡電話"
                      defaultValue={userData ? userData.tel : ""}
                      aria-invalid={errors.ordertel ? "true" : "false"}
                      {...register("ordertel", {
                        required: true,
                        pattern: /^09\d{2}-?\d{3}-?\d{3}$/,
                      })}
                    />
                  </div>
                  {/* <div className="mb-3 row">
                  <div className="col-md-6">
                    <label for="city" className="form-label">
                      縣市
                    </label>
                    <select id="city" className="form-select">
                      <option defaultValue="">請選擇縣市</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label for="district" className="form-label">
                      地區
                    </label>
                    <select id="district" className="form-select">
                      <option defaultValue="">請選擇地區</option>
                    </select>
                  </div>
                </div> */}
                  <div className="mb-3">
                    <label for="address" className="form-label">
                      詳細地址
                    </label>
                    {errors.orderaddress && (
                      <span role="alert" className="text-danger">
                        *必填
                      </span>
                    )}
                    <textarea
                      className="form-control"
                      id="address"
                      rows="3"
                      placeholder="請填寫完整的地址"
                      defaultValue={userData ? userData.address : ""}
                      aria-invalid={errors.orderaddress ? "true" : "false"}
                      {...register("orderaddress", {
                        required: true,
                      })}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label for="email" className="form-label">
                      電子郵件
                    </label>
                    {errors.orderemail && (
                      <span role="alert" className="text-danger">
                        *必填
                      </span>
                    )}
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="請填寫您的電子郵件"
                      defaultValue={userData ? userData.email : ""}
                      aria-invalid={errors.orderemail ? "true" : "false"}
                      {...register("orderemail", {
                        required: true,
                      })}
                    />
                  </div>
                  <hr />
                  <div className="mb-3">
                    <label for="paymentMethod" className="form-label">
                      付款方式
                    </label>
                    <select id="paymentMethod" className="form-select">
                      <option defaultValue="creditCard">信用卡</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label for="creditCardNumber" className="form-label">
                      信用卡號碼
                    </label>
                    {errors.cardnumber && (
                      <span role="alert" className="text-danger">
                        *必填
                      </span>
                    )}
                    <input
                      type="password"
                      className="form-control"
                      id="creditCardNumber"
                      placeholder="請填寫信用卡號碼"
                      // aria-invalid={errors.cardnumber ? "true" : "false"}
                      {...register("cardnumber", {
                        // required: false,
                        // pattern: /^(4[0-9]{12}(?:[0-9]{3})?)*$/,
                      })}
                    />
                  </div>
                  <div className="mb-3 row">
                    <div className="col-md-6">
                      <label for="expiryDate" className="form-label">
                        到期日期
                      </label>
                      {errors.expired && (
                        <span role="alert" className="text-danger">
                          *必填
                        </span>
                      )}
                      <input
                        type="text"
                        className="form-control"
                        id="expiryDate"
                        placeholder="MM/YY"
                        aria-invalid={errors.expired ? "true" : "false"}
                        {...register("expired", {
                          required: true,
                          maxLength: 5,
                        })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="securityCode" className="form-label">
                        安全碼
                      </label>
                      {errors.cvc && (
                        <span role="alert" className="text-danger">
                          *必填
                        </span>
                      )}
                      <input
                        type="text"
                        className="form-control"
                        id="securityCode"
                        placeholder="請填寫信用卡安全碼"
                        aria-invalid={errors.cvc ? "true" : "false"}
                        {...register("cvc", {
                          required: true,
                          maxLength: 3,
                          pattern: /\d{3}$/,
                        })}
                      />
                    </div>
                  </div>
                  {/* </form> */}
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="row justify-content-center">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <button
                      className="btn btn-lg custom-button-back px-5"
                      onClick={doFirstBtn}
                    >
                      返回購物車
                    </button>
                  </div>
                  <div className="col-md-4 text-center">
                    <button
                      type="submit"
                      className="btn btn-lg custom-button px-5"
                      // onClick={doThirdBtn}
                    >
                      確認結帳
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CartPayment;
