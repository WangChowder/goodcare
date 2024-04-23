import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import PathBox from "../components/pathbox/PathBox";
import VideoSideBar from "../components/videosidebar/VideoSideBar";
import SingleVideoContent from "../components/singlevideocontent/SingleVideoContent";
import Footer from "../components/footer/Footer";
import BackToTopBtn from "../components/backtotopbtn/BackToTopBtn";

import videoData from "../components/singlevideocontent/VideoContent.json";

const Service = () => {
  const { id } = useParams();
  const singleContent = videoData[id];
  // console.log(singleContent.title)

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox pathName={"影音專區"} path={"/video"} />
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-none d-md-block">
            <VideoSideBar dataList={videoData} />
          </div>
          {/* 這裡放你的主內容 */}
          <div className="col-12 col-md-9">
            {videoData && <SingleVideoContent dataList={singleContent} />}
            {/* {videoData && console.log('OK')} */}
          </div>
        </div>
      </div>
      <Footer />
      <BackToTopBtn />
    </React.Fragment>
  );
};

export default Service;
