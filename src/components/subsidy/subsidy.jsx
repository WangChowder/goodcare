import React from "react";
import "../../asset/css/subsidy.css";

const subsidyHome = ({ goToFirst }) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="text-center mt-3 mb-3">
              <h1 style={{ fontWeight: "bold" }}>長照服務補助資訊專區</h1>
              <br />
              <br />
            </div>
            <div className="btn-containerA d-flex justify-content-between align-items-center">
              <a
                href="/subsidyLink1"
                target="_blank"
                className="btn custom-btn btn-lg mb-4"
                role="button"
              >
                <i className="fa-solid fa-lightbulb"></i>
                各縣市長照2.0
                <br />
                整合型計畫
              </a>

              <a
                href="/subsidyLink2"
                target="_blank"
                className="btn custom-btn btn-lg mb-4"
                role="button"
              >
                <i className="fa-solid fa-lightbulb"></i>
                長照發展基金
                <br />
                獎助作業要點
              </a>

              <a
                href="/subsidyLink3"
                target="_blank"
                className="btn custom-btn btn-lg mb-4"
                role="button"
              >
                <i className="fa-solid fa-lightbulb"></i>
                失智照護服務計畫
                <br />
                申請作業須知
              </a>
              <br />
              <br />
            </div>

            <div className="d-flex flex-column align-items-center mt-5">
              <button className="btn custom-btn-4 btn-lg" onClick={goToFirst}>
                <i className="fa-solid fa-search"></i> 進行查詢
              </button>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5 mb-4">
            <div className="text-center">
              <h3 className="picCaption">用心照顧，共創美好生活</h3>
            </div>
            <img
              src={require("../../asset/images/subsidy/cuteOldmen.png")}
              alt="cuteoldmen"
              className="centered-image responsive-image"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default subsidyHome;
