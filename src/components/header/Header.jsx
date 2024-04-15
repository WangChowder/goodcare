import React from 'react';
import { useContext } from 'react';
import AuthContext from "../../Context/AuthProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'
import { NavLink } from 'react-router-dom';

function Header() {
    const sessionData = localStorage.getItem('auth')
    const userData = sessionData ? JSON.parse(sessionData) : []
    const { logout } = useContext(AuthContext)

    const doRedirect = () => {
        if (userData) {
            window.location.href = '/usermodify'
        } else {
            window.location.href = '/userlogin'
        }
    }

    const doLogout = () => {
        logout()
        window.location.href = '/userlogin'
    }


    return (
        <div className="container">
            <div className="d-flex justify-content-between">
                <div><a href="/"><img src={require("../../asset/images/index/headerlogo.png")} alt="headerLogo" className="headerlogo" /></a></div>
                <div className="d-flex">
                    <nav className="navbar me-4">
                        <div className="container-fluid">
                            <NavLink to="https://www.hpa.gov.tw/Home/Index.aspx" className="navbar-brand me-4" id='tmp'>衛生福利部</NavLink>
                            <NavLink to="/" className="navbar-brand me-4">首頁專區</NavLink>
                            <form className="d-flex search-bar" role="search" action="/news">
                                <input className="form-control me-2" type="search" placeholder="搜尋長照補助" aria-label="Search" name="keyword" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                            {/* 彈跳視窗 */}
                            <div class="modal fade" id="searchmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-body">
                                            <form className="d-flex" role="search" action="/news">
                                                <input className="form-control me-2" type="search" placeholder="搜尋長照補助" aria-label="Search" name="keyword" />
                                                <button className="btn btn-outline-success" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div className="d-flex align-items-center">
                        <NavLink className="search-icon text-decoration-none" data-bs-toggle="modal" data-bs-target="#searchmodal"><i className="fa-solid fa-magnifying-glass"></i></NavLink>
                        <NavLink className="user text-dark" onClick={doRedirect} href='#a'>
                            <i className="fa-solid fa-user"></i>
                            &nbsp;
                            <span>{userData.name ? `${userData.name}  你好` : '會員登入/註冊'}</span>
                        </NavLink>
                        &nbsp;
                        <NavLink className={userData.name ? "user text-dark" : "hide"} onClick={doLogout} href='#a' >
                            <i className="fa-solid fa-arrow-right-from-bracket n"></i>
                            <span>登出</span>
                        </NavLink>
                        &nbsp;
                        <div className="ps-2 mt-3 me-lg-5">
                            <NavLink to="/cart" ><h2><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></h2></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
