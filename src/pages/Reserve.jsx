import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import Footersecond from '../components/footersecond/Footersecond';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
import Reserve from '../components/reserve/Reserve';

const Service = () => {

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox pathName={"照服員預約"} path={"/reserve"}/>
      <Reserve />
      <Footersecond />
      <BackToTopBtn />
    </React.Fragment>
  )
}

export default Service