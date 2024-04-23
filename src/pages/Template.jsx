import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/header/Header";
import IndexNav from "../components/indexnav/IndexNav";
import PathBox from "../components/pathbox/PathBox";
import SideBar from "../components/sidebar/SideBar";
import Footer from "../components/footer/Footer";


function Template () {
  const [newsdata, setNewsData] = useState([])
  
  const FetchData = async () => {
    const result = await axios.get('http://localhost:8000/news')
    setNewsData(result.data)
  }

  useEffect(
    () => {
      FetchData()
      // console.log(JSON.stringify(newsdata))
    }
  )

    const style1 = {color:"black", textDecoration:"none"}

  return (
    <div>
      <Header />
      <IndexNav />
      <PathBox />
      <div className="container">
        <div className="row">
          <SideBar />
          <div className="col-9">
          <div>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane"
                                aria-selected="true">焦點新聞</button>
                        </li>
                    </ul>
                    <div className="tab-content " id="myTabContent">
                        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                            aria-labelledby="home-tab" tabIndex="0">
                            <div className="mb-4 new-content">
                                {
                                  newsdata.map((value, index) => {
                                    return(
                                      <div className="newsitem d-flex justify-content-between" key={index}>                                  
                                        <a href="#b" target="_blank" style={ style1 }>
                                            {value.title}
                                        </a>                       
                                        <p>{value.update}</p>
                                      </div>
                                    )
                                  }) 
                                }
                                
                            </div>
                            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a className="page-link" href="#b" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#b">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#b">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#b">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#b" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Template