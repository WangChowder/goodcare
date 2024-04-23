import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import Footersecond from '../components/footersecond/Footersecond';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
import Register from '../components/register/register';
const Service = () => {
  
  return (
    <React.Fragment>
        <Header />
        <IndexNav />
        <Register/>
        <Footersecond/>
        <BackToTopBtn />
      </React.Fragment>
  )
}

export default Service