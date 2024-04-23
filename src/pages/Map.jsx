import React from "react";
import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import PathBox from "../components/pathbox/PathBox";
import Footer from "../components/footer/Footer";
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";
import Map from "../components/map/Map";

const Service = () => {
  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox pathName={"據點查詢"} path={"/map"} />
      <div className="container carecenter">
        <div className="row">
          <div className="col">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active mapTab"
                  id="longcare-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#longcare"
                  type="button"
                  role="tab"
                  aria-controls="longcare"
                  aria-selected="true"
                >
                  長照據點地圖
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link mapTab"
                  id="rehabilitation-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#rehabilitation"
                  type="button"
                  role="tab"
                  aria-controls="rehabilitation"
                  aria-selected="false"
                >
                  復健據點地圖
                </button>
              </li>
            </ul>

            <Map />
          </div>
        </div>
      </div>
      <Footer />
      <BackToTopBtn />
    </React.Fragment>
  );
};

export default Service;
