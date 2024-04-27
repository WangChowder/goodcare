import React, { useEffect } from 'react';
import './hover.css'


const ScrollEffectComponent = () => {
    useEffect(() => {
        const hoverContainer = document.getElementById('hoverContainer');
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const hover1Elements = document.querySelectorAll('.hover1');
            const hover2Elements = document.querySelectorAll('.hover2');
            if (scrollTop > 2950) {
                hover1Elements.forEach(element => {
                    element.style.top = '0px';
                });

                hover2Elements.forEach(element => {
                    element.style.top = '0px';
                });
            } else {
                hover1Elements.forEach(element => {
                    element.style.top = '100px';
                });

                hover2Elements.forEach(element => {
                    element.style.top = '-100px';
                });
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <>
        <div class="hover" id="hoverContainer">
            <div class="hover1">
                <img src={require('../../asset/images/Home/hover1.png')} alt="老人圖1" />
            </div>
            <div class="hover2">
                <img src={require('../../asset/images/Home/hover2.png')} alt="老人圖2" />
            </div>
            <div class="hover1">
                <img src={require('../../asset/images/Home/hover3.png')} alt="老人圖3" />
            </div>
            <div class="hover2">
                <img src={require('../../asset/images/Home/hover4.png')} alt="老人圖4" />
            </div>
        </div>
    </>
};

export default ScrollEffectComponent;
