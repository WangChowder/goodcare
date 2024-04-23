import React from "react";
import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import PathBox from "../components/pathbox/PathBox";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/footer/Footer";
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";

import videoData from "../components/singlevideocontent/VideoContent.json";

import "../asset/css/video.css";

function Video() {
  const sidebarTitle = "影音專區";
  const numberList = ["一", "二", "三", "四", "五", "六", "七"];

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox pathName={"影音專區"} path={"/video"} />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 d-lg-block d-md-block">
            <SideBar title={sidebarTitle} />
          </div>
          <div className="col-lg-9 col-md-8 new-content">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="mb-4">
                  {videoData &&
                    videoData.map((val, ind) => {
                      return (
                        <>
                          <div className="row videoitem mb-4 mt-4" key={ind}>
                            <div className="col-4">
                              <img
                                src={require(`../asset/images/video/video_0${
                                  ind < 10 ? "0" + (ind + 1) : ind + 1
                                }.jpg`)}
                                alt="thumbnail"
                                style={{ width: "100%" }}
                              />
                            </div>
                            <div className="col-8 d-grid">
                              <h2>
                                第{numberList[ind]}篇：{val.title}{" "}
                              </h2>
                              <p className="text-muted">{val.content}</p>
                              <a
                                href={`/video/${ind}`}
                                className="btn btn-lg btn-secondary btn-block"
                                // target="_blank"
                                // rel="noreferrer"
                              >
                                點我看影片
                              </a>
                            </div>
                          </div>

                          {ind < videoData.length - 1 ? (
                            <div
                              className="row mb-4"
                              style={{ borderBottom: "3px solid #DCDAD9" }}
                            ></div>
                          ) : (
                            <></>
                          )}
                        </>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTopBtn />
    </React.Fragment>
  );
}

export default Video;
