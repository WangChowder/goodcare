import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './IndexNav.css'

function IndexNav() {
  const [road, setRoad] = useState('./userlogin')
  const userData = localStorage.getItem('auth')

  useEffect(
    () => userData ? setRoad('./usermodify') : setRoad('./userlogin'),
    [userData]
  )

  return (

    <div>
      <nav className="navbar navbar-expand-lg topnav p-0">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-start" id="navbarScroll">
            <div className="offcanvas-header">
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: '100px' }}>
                <li className="nav-item">
                  <NavLink to="/news" className="topnav-title">最新消息</NavLink>
                </li>
                <li class="nav-item dropdown ">
                  <div className="topnav-title">關於長照</div>
                  <ul class="dropdown-menu dropdown-content">
                    <li class="dropdown-content1">
                      <NavLink to="/policy">政府長照政策</NavLink>
                    </li>
                    <li className="dropdown-content1">
                      <NavLink to="/video">長照影音文章</NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/service" className="topnav-title">服務資訊</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/subsidy" className="topnav-title">補助資訊</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/map" className="topnav-title">長照據點地圖</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/product" className="topnav-title">醫療輔具商品</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/reserve" className="topnav-title">預約照服員</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={road} className="topnav-title">會員資料</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/webqa" className="topnav-title">網站常見問題</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
}

export default IndexNav;
