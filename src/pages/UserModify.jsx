import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import Footersecond from '../components/footersecond/Footersecond';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
import Modify from '../components/modify/modify';
const Service = () => {
  const userData = localStorage.getItem('auth')
  if (!userData){ window.location.href = './userlogin' }

  return (
    <React.Fragment>
      {userData &&
        <>
        <Header />
        <IndexNav />
        <Modify/>
        <Footersecond/>
        <BackToTopBtn />
        </>
      }
      </React.Fragment>
  )
}

export default Service