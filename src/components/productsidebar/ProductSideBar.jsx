import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './ProductSideBar.css';

const ProductSideBar = ({ category, title }) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);

    useEffect(() => {
        setActiveLink("/product");
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div className="col-2">
            <div className="w3-sidebar w3-bar-block w3-light-grey w3-card h-auto">
                <NavLink to="/product" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/product" ? "active" : ""}`} onClick={() => handleLinkClick("/product")}>所有商品</NavLink>
                <NavLink to="/product/category/拐杖" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/product/category/拐杖" ? "active" : ""}`} onClick={() => handleLinkClick("/product/category/拐杖")}>拐杖</NavLink>
                <NavLink to="/product/category/輪椅" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/product/category/輪椅" ? "active" : ""}`} onClick={() => handleLinkClick("/product/category/輪椅")}>輪椅</NavLink>
                <NavLink to="/product/category/額耳溫槍" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/product/category/額耳溫槍" ? "active" : ""}`} onClick={() => handleLinkClick("/product/category/額耳溫槍")}>額(耳)溫槍</NavLink>
                <NavLink to="/product/category/氣墊床" className={`w3-bar-item w3-button w3-border-bottom ${activeLink === "/product/category/氣墊床" ? "active" : ""}`} onClick={() => handleLinkClick("/product/category/氣墊床")}>氣墊床</NavLink>
            </div>
        </div>
    );
}

export default ProductSideBar;
