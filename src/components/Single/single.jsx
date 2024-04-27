import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import "bootstrap/dist/css/bootstrap.min.css";
import "./single.css";
import Counter from "../Counter/counter";

const Single = () => {
  const [singleList, setSingleList] = useState([
    { id: 0, productName: "", productDescription: "" },
  ]);

  const [cartInfo, setCartInfo] = useState({});

  const [numToBuy, setNumToBuy] = useState(1);

  const params = useParams();


  const notify = () => toast.success("成功加入購物車！");

  const fetchData = async () => {
    const result = await axios.get(
      `http://localhost:8000/product/single/${params.id}`
    );
    setSingleList(result.data);
  };
  useEffect(() => {
    fetchData();
    const cartInit = {
      id: singleList[0].id,
      productName: singleList[0].productName,
      quantity: 1,
      price: singleList[0].price,
      style: singleList[0].style,
    };
    setCartInfo(cartInit);
  }, [params.id, singleList]);

  const index = params.id;

  var text = singleList[0].productDescription;

  const cardText = text.split("\\n").map((line, ind) => (
    <React.Fragment key={ind}>
      {line}
      <br />
    </React.Fragment>
  ));

  const handlePutInCart = () => {
    const newCartInfo = { ...cartInfo };
    newCartInfo.quantity = numToBuy;
    setCartInfo(newCartInfo);

    // 先取目前cartInfo 陣列值，才將新值填入
    let sessionData = sessionStorage.getItem("cartInfo")
    let cartSession = sessionData? JSON.parse(sessionData):null

    if (!cartSession) {
      // 目前session沒有任何資料故直接存
      sessionStorage.setItem("cartInfo", JSON.stringify([newCartInfo]));
    } else {
      let ind = cartSession.findIndex((i) => i.id === cartInfo.id);
      // console.log(ind)
      if (ind < 0) {
        // session有資料但找不到此商品故新增進去
        sessionStorage.setItem(
          "cartInfo",
          JSON.stringify([...cartSession, newCartInfo])
        );
      } else {
        // session有資料但找到此商品後修改
        cartSession[ind] = newCartInfo;
        sessionStorage.setItem("cartInfo", JSON.stringify(cartSession));
      }
    }
  };

  return (
    <>
      <div className="card mb-3" style={{ maxWidth: "1300px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={require(`../../asset/images/numberImages/${index}.png`)}
              alt="..."
              style={{ width: '100%' }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{singleList[0].productName}</h3>
              <br />
              <p
                className="card-text"
                id="cardtext"
              >
                {cardText}
              </p>

              <p className="card-text">
                <span style={{ color: "orangered" }}>
                  NTD$ {singleList[0].price}
                </span>
              </p>
              {/* <!-- 數量按鈕 --> */}
              <div className="row">
                <div className="col-8">
                <div className="input-group">
                  <div className="h4 me-3">數量</div>
                    <Counter curNum={numToBuy} childToParent={setNumToBuy} />
                  </div>
                </div>
              </div>
              <br />
              {/* <!-- 直接購買 & 放入購物車 --> */}
              <div className="d-flex justify-content-between">
                <a
                  className="direct2cart btn btn-outline-success"
                  type="button"

                  onClick={handlePutInCart}
                  href="/cart"
                >
                  直接購買
                </a>
                <button
                  className="putcart btn btn-warning ms-5 text-white"
                  type="button"
                  onClick={() => {
                    handlePutInCart();
                    notify();
                  }}
                >
                  放入購物車
                </button>
                <Toaster position="top-right" reverseOrder={false} />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 商品介紹 --> */}
        <div className="mt-5">
          <p className="text-center mb-5 producttext">
            商品規格
          </p>
          <img
            src={require(`../../asset/images/numberDescripiton/${index}.png`)}
            alt="" style={{ width: '100%' }}
          />
        </div>
      </div>
    </>
  );
};

export default Single;
