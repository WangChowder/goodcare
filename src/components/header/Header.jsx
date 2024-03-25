import React from 'react';
import { useContext } from 'react';
import AuthContext from "../../Context/AuthProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'

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
                            <a href="https://www.hpa.gov.tw/Home/Index.aspx" className="navbar-brand me-4" id='tmp'>衛生福利部</a>
                            <a href="/" className="navbar-brand me-4">首頁專區</a>
                            <form className="d-flex search-bar" role="search">
                                <input className="form-control me-2" type="search" placeholder="搜尋長照補助" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <div className="d-flex align-items-center search-icon"><i className="fa-solid fa-magnifying-glass"></i></div>
                    <div className="d-flex align-items-center">
                        <a className="user text-dark" onClick={doRedirect} href='#a'>
                            <i className="fa-solid fa-user"></i>
                            &nbsp;
                            <span>{userData.name ? `${userData.name}  你好` : '會員登入/註冊'}</span>
                        </a>
                        &nbsp;
                        <a className={userData.name ? "user text-dark" : "hide"} onClick={doLogout} href='#a' >
                            <i className="fa-solid fa-arrow-right-from-bracket n"></i>
                            <span>登出</span>
                        </a>
                        &nbsp;
                        <div className="ps-3 mt-2 me-5">
                            <a href="/cart" ><h2><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></h2></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
