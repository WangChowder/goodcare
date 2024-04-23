import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import Path from "../components/Path/path";
import PathBox from '../components/pathbox/PathBox';
import ProductSideBar from "../components/productsidebar/ProductSideBar";
import Footersecond from '../components/footersecond/Footersecond';
import Title from "../components/title/title";
import Card from '../components/card/card'
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
// // icon library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, fas, far);

function Service() {
  //路由分類 -> 解構賦值
  const { category } = useParams();
  // console.log(useParams())

  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');

  //排序
  const handleSortChange = (value) => {
    setSortBy(value);
  };

  //找商品
  const handleSearch = (value) => {
    setSearch(value);
  }
  return (
    <>
      <Header />
      <IndexNav />
      <div className="container">
        <div className="row">

          <PathBox pathName={"醫療輔具商品"} path={"/Product"} />
          <Path onSearch={handleSearch} />

        </div>
        <>
          <Title category={category} onSortChange={handleSortChange} />
        </>
      </div>
      <div className="container">
        <div className="row mb-5">
          <ProductSideBar category={category} />
          <div className='col-1'></div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 col-md-12 col-lg-9 g-4">
            <Routes>
              <Route exact path="/" element={<Card category={category} sortBy={sortBy} search={search} />} />
              <Route path="/category/:category" element={<Card category={category} sortBy={sortBy} search={search} />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footersecond />
      <BackToTopBtn />
    </>
  );
}

export default Service;
