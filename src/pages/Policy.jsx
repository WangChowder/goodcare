import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import SideBar from '../components/sidebar/SideBar';
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';
import '../asset/css/policy.css'

const Service = () => {
  const sidebarTitle = "長照政策"

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox pathName={"長照政策"} path={"/policy"}/>
      <div className="container">
        <div className="row">
          <SideBar title={ sidebarTitle } pathName={ sidebarTitle }/>
          {/* 這裡放你的主內容 */}
          <div className='col-md-12 col-lg-9 col-xl-9'>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li>
                <button class="nav-link" style={{  backgroundColor: '#214F39',color: 'white',textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)'}}>政府長照政策</button>
              </li>
            </ul>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <div className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <h3>長照十年計畫2.0</h3>
                  </button>
                </div>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h5>&emsp;我國整體人口結構快速趨向高齡化，使得長期照顧（簡稱長照）需求人數也同步增加。為發展完善的長照制度，96年行政院即核定《長期照顧十年計畫》（簡稱長照1.0），積極推動長照業務。
                      <br />
                      <br />
                      &emsp;隨著人口老化及照顧服務需求多元化，為因應失能、失智人口增加所衍生之長照需求，提供從支持家庭、居家、社區到住宿式照顧之多元連續服務，建立以社區為基礎之長照服務體系，行政院於105年12月核定《長期照顧十年計畫2.0》（簡稱長照2.0），並自106年1月起實施長照2.0，以回應高齡化社會的長照問題。
                      <br />
                      <br />
                      &emsp;長照2.0的目標希向前端銜接預防保健、活力老化、減緩失能，促進長者健康福祉，提升老人生活品質；向後端提供多目標社區式支持服務，轉銜在宅臨終安寧照顧，減輕家屬照顧壓力，減少長照負擔。除積極推廣社區整體照顧模式試辦計畫、發展創新服務，建構以社區為基礎的健康照護團隊體系，並將服務延伸銜接至出院準備服務、居家醫療等服務。另亦增加長照1.0現有服務之彈性，將服務對象由4類擴大為8類、服務項目由8項增至17項。
                    </h5>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h3>長期照顧服務法</h3>
                  </button>
                </div>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h5>&emsp;為健全長照服務體系之發展，並兼顧服務品質與資源發展，以保障弱勢接受長照服務者之權益，長期照顧服務法（下稱長服法）於104年6月3日總統令公布，106年6月3日正式上路。本法為我國長照發展重要之根本大法，整合各類長照服務資源，使資源更全面，服務更有品質，使長照服務使用者得到適當照顧。
                    </h5>
                    <br />
                    <h5>相關連結：<a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0070040&kw=%e9%95%b7%e6%9c%9f%e7%85%a7%e9%a1%a7%e6%9c%8d%e5%8b%99"
                      target="_blank" rel="noreferrer" style={{ color: '#CF4501', textDecoration: 'none' }}>全國法規資料庫：長期照顧服務</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h3>長期照顧服務機構法人條例</h3>
                  </button>
                </div>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h5>&emsp;為維護住宿式機構接受服務者之權益及照護品質，與維持機構穩定經營機制，達到永續經營之目標，長期照顧服務法（簡稱長照服務法）第22條明定提供「住宿式」服務之長照機構皆需由法人設立。對於新設立或有符合長照服務法第22條第3項規定者，即私立住宿式機構如有機構擴充或遷移等變更之情形，亦需法人化。
                      <br />
                      <br />
                      &emsp;法人治理及財產使用方式良窳，對於整體長照體系及社會環境影響甚鉅，長期照顧服務機構法人條例(簡稱長照機構法人)業經107年1月31日總統令公布，期使長照機構法人治理及財產使用健全發展。
                      <br />
                      <br />
                      &emsp;本條例共四章47條，長照機構法人包含兩類：長照機構財團法人及長照機構社團法人。長照機構法人有共通性規範，包含限制法人設立長照機構之區域、分類、家數及規模、設立必要之財產、董事會組成、資訊公開(如財報)、投資限制及年度收支結餘提撥等。
                    </h5>
                    <br />
                    <h5>相關連結：<a href="https://law.moj.gov.tw/LawClass/LawAll.aspx?pcode=L0070051&kw=%e9%95%b7%e6%9c%9f%e7%85%a7%e9%a1%a7%e6%9c%8d%e5%8b%99%e6%a9%9f%e6%a7%8b%e6%b3%95%e4%ba%ba%e6%a2%9d%e4%be%8b"
                      target="_blank" rel="noreferrer"
                      style={{ color: '#CF4501', textDecoration: 'none' }}>全國法規資料庫：長期照顧服務機構法人條例</a></h5>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <h3>失智症政策綱領2.0</h3>
                  </button>
                </div>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h5 style={{ fontWeight: 'bold' }}>國際接軌推動失智症政策綱領</h5>
                    <h5>&emsp;增加的老年及失智人口，衛生福利部於 2013 年 公布「失智症防治照護政策綱領(2014-2016
                      年)」，並於2014年公告跨部會「失智症防治照護政策綱領暨行動方案」。為持續與國際失智照護資訊交流平臺接軌， 衛生福利部參酌 2017 年 5 月 29
                      日WHO公布之 「2017-2025 年全球失智症行動計畫」，邀請失智症者及家屬代表、失智照護相關團體與服務提供單位代表、專家學者及相關部會共同討論，
                      依據全球失智症行動計畫 7 大策略，於 2017 年 12 月公布我國「失智症防治照護政策綱領暨行動方案 2.0（2018-2025 年）」
                    </h5>
                    <br />
                    <h5 style={{ fontWeight: 'bold' }}>落實檢討與管考</h5>
                    <h5>&emsp;落實與管考效能，各辦理機關依權責確實執行，本部每半年追蹤各工作項目之執行成果，且每年召開跨部會成果報告及檢討會議，並定期公布「失智症防治照護政策綱領暨行動方案2.0」辦理情形。
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTopBtn />
    </React.Fragment>
  )
}

export default Service