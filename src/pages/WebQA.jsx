import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import SideBar from '../components/sidebar/SideBar';
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';

import '../asset/css/Q&A.css';

const Service = () => {
  const sidebarTitle = '常見問題'

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox pathName={"常見問題"} path={"/webqa"}/>
      <div className="container">
        <div className="row">
          <SideBar title={sidebarTitle} />
          <div className="col-md-12 col-lg-9 col-xl-9">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                  type="button" role="tab" aria-controls="home" aria-selected="true">長照問題</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                  type="button" role="tab" aria-controls="profile" aria-selected="false">會員問題</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <h3>Q1:長期照顧服務項目有哪些？</h3>
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <h5>&emsp;A:有照顧服務(包含居家服務、日間照顧及家庭托顧)、交通接送、專業服務、輔具及居家無障礙環境改善、喘息服務、營養餐飲服務、長期照顧機構服務、家庭照顧者支持服務、小規模多機能服務、銜接出院準備服務。
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <h3>Q2:長照服務請領資格？</h3>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <h5>&emsp;A:應為長照需要等級第二級(含)以上，且符合下列情形之一:
                          <br /><br />
                          &emsp;(1) 65 歲以上老人
                          <br /><br />
                          &emsp;(2) 領有身心障礙證明(手冊)者
                          <br /><br />
                          &emsp;(3) 55-64 歲原住民
                          <br /><br />
                          &emsp;(4) 50 歲以上失智症者
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThree" aria-expanded="false"
                        aria-controls="collapseThree">
                        <h3>Q3:何謂是「居家服務」？</h3>
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse"
                      aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <h5>&emsp;A:協助床上擦澡或洗澡、如廁或更換尿布、翻身拍背、加熱飯菜或備餐、餵食或灌食、陪同外出、陪同就醫、家務協助(針對失能者主要居家生活空間之清理，非大掃除)、代購或代領或代送服務、協助依照藥袋指示將藥物置入藥盒等。
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFour" aria-expanded="false"
                        aria-controls="collapseFour">
                        <h3>Q4:何謂「喘息服務」？</h3>
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <h5 style={{ fontWeight: 'bold' }}>一、支持家庭照顧者，讓照顧者獲得短暫的休息時間，紓解照顧壓力</h5>
                        <br /><br />
                        <h5 style={{ fontWeight: 'bold' }}>二、申請條件</h5>
                        <h5>☞經評估家庭照顧者確實有照顧事實者。
                          <br /><br />
                          ☞已接受機構收容安置者，不適用喘息服務。
                          <br /><br />
                          ☞已聘僱外籍家庭看護工之家庭，其被照顧者經長期照顧管理中心評估為長照需要等級2至8級者，如其所聘外看因故無法協助照顧，得申請喘息服務，並自109年12月1日起實施。
                        </h5>
                        <br /><br />
                        <h5 style={{ fontWeight: 'bold' }}>三、服務內容分為：</h5>
                        <h5>1.機構喘息：由衛生局合約之養護中心或護理之家提供24小時照護。
                          <br /><br />
                          2.居家喘息：居家服務員至家中提供照顧服務。
                          <br /><br />
                          3.日間照顧中心喘息：失能者至日間照顧中心接受照顧服務。
                          <br /><br />
                          4.小規模多機能服務夜間喘息：失能者於夜間至小規模多機能服務中心，由機構工作人員提供照顧服務。
                          <br /><br />
                          5.巷弄長照站臨托：由與衛生局特約之巷弄長照站接受照顧、停留。
                        </h5>
                        <br />
                        <h5 style={{ fontWeight: 'bold' }}>落實檢討與管考</h5>
                        <h5>&emsp;&emsp;落實與管考效能，各辦理機關依權責確實執行，本部每半年追蹤各工作項目之執行成果，且每年召開跨部會成果報告及檢討會議，並定期公布「失智症防治照護政策綱領暨行動方案2.0」辦理情形。
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseFive" aria-expanded="false"
                        aria-controls="collapseFive">
                        <h3>Q5:使用長期照顧服務需要付錢嗎？怎麼算？</h3>
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <h5>&emsp;A:長照需要者使用各類服務，應依照下列身分別自行負擔長照服務費，各類服務之負擔比率如附表：
                        </h5>
                        <img src={require('../asset/images/Q&A/oldprice.png')} style={{ width: '100%' }} alt='oldprice' />
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSix">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        <h3>Q6:申請送餐服務有何規定？</h3>
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                      data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <h5>&emsp;A:(1)實際居住於本市符合社會救助法列冊之低收入戶或中低收入戶，且無聘請外籍看護工，並經照顧服務管理專員評估失能等級2-8級，以無法外出至社區據點、巷弄站共餐及無特殊餐食需求者為原則。
                          <br /><br /><br />
                          &emsp;(2) 不符合上述補助之對象，可協助申請『自費送餐服務』。
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingSeven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseSeven" aria-expanded="false"
                        aria-controls="collapseSeven">
                        <h3>Q7:請問什麼叫做失能？</h3>
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse"
                      aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <h5>&emsp;A:依據長期照顧服務法第三條，長期照顧係指身心失能持續已達或預期達六個月以上者，依其個人或其照顧者之需要，所提供之生活支持、協助、社會參與、照顧及相關之醫護服務；而意外事故造成暫時性失能係屬急性醫療範圍非屬長照範圍。
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="accordion" id="accordionExample2">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingeight">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseeight" aria-expanded="false"
                        aria-controls="collapseeight">
                        <h3>Q1:目前提供哪些付款方式？</h3>
                      </button>
                    </h2>
                    <div id="collapseeight" className="accordion-collapse collapse"
                      aria-labelledby="headingeight" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <h5>&emsp;A:信用卡。
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingNine">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseNine" aria-expanded="false"
                        aria-controls="collapseNine">
                        <h3>Q2:忘記密碼怎麼辦？</h3>
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine"
                      data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <h5>&emsp;A:若您忘記密碼，請您先「會員登入」後，點選「忘記密碼」
                          再輸入註冊的電子郵件，系統會自動發送密碼重設通知給您，再請您依照通知步驟重新設定密碼即可。
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingten">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
                        <h3>Q3:該如何修改個人資料及密碼？</h3>
                      </button>
                    </h2>
                    <div id="collapseten" className="accordion-collapse collapse" aria-labelledby="headingten"
                      data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <h5>&emsp;A:請會員登入後至「會員資料」有修改密碼按鍵進行修改即可進行變更。
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingeleven">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseeleven" aria-expanded="false"
                        aria-controls="collapseeleven">
                        <h3>Q4:如何修改、加訂或合併訂單?</h3>
                      </button>
                    </h2>
                    <div id="collapseeleven" className="accordion-collapse collapse"
                      aria-labelledby="headingeleven" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <h5>&emsp;A:為避免影響商品庫存及避免帳務錯誤，請恕我們無法為您再將訂單『修改』或『加購』或合併』訂單商品。
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingtwelve">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapsetwelve" aria-expanded="false"
                        aria-controls="collapsetwelve">
                        <h3>Q5:如何更改訂購內容、送貨地址或取消訂單？?</h3>
                      </button>
                    </h2>
                    <div id="collapsetwelve" className="accordion-collapse collapse"
                      aria-labelledby="headingtwelve" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <h5>&emsp;A:請寄信至goodcare@gmail.com，會有專員為您處理。
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThirteen">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseThirteen" aria-expanded="false"
                        aria-controls="collapseThirteen">
                        <h3>Q6:台灣外島地區可以寄送嗎？</h3>
                      </button>
                    </h2>
                    <div id="collapseThirteen" className="accordion-collapse collapse"
                      aria-labelledby="headingThirteen" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <h5>&emsp;A:採信用卡方式付款，將以郵局海運配送，預計3-7日內配達，而送達時間會因天氣狀況、船隻班次而有變動的可能性。
                        </h5>
                      </div>
                    </div>
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