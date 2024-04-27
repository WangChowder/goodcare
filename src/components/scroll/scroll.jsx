import React, { useEffect } from 'react';
import * as basicScroll from 'basicscroll'
import './scroll.css';

function Scroll() {
    useEffect(() => {
        document.querySelectorAll('.scene').forEach((elem) => {
            const modifier = elem.getAttribute('data-modifier');
            basicScroll.create({
                elem: elem,
                from: 0,
                to: 450,
                direct: true,
                props: {
                    '--translateY': {
                        from: '0',
                        to: `${10 * modifier}px`
                    }
                }
            }).start();
        });
    }, []);

    return (
        <>
        <div>
          <img className="scene" data-modifier="40" alt="pic1" src={require('../../asset/images/Home/basicScroll-1.png')} />
          <img className="scene" data-modifier="28" alt="pic2" src={require('../../asset/images/Home/basicScroll-2.png')} />
          <img className="scene" data-modifier="28" alt="pic3" src={require('../../asset/images/Home/basicScroll-3.png')} />
          <img className="scene" data-modifier="34" alt="pic4" src={require('../../asset/images/Home/basicScroll-4.png')} />
          <img className="scene" data-modifier="24" alt="pic5" src={require('../../asset/images/Home/basicScroll-5.png')} />
          <img className="scene" data-modifier="28" alt="pic6" src={require('../../asset/images/Home/basicScroll-6.png')} />
          <img className="scene" data-modifier="28" alt="pic7" src={require('../../asset/images/Home/basicScroll-7.png')} />
          <img className="scene" data-modifier="34" alt="pic8" src={require('../../asset/images/Home/basicScroll-8.png')} />
          <img className="scene" data-modifier="18" alt="pic9" src={require('../../asset/images/Home/basicScroll-9.png')} />
        </div>
        <div className='scrollbr'>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
        </>
    );
}

export default Scroll;