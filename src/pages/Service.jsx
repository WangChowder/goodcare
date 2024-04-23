import React, { } from 'react';
import Header from '../components/header/Header';
import IndexNav from '../components/indexnav/IndexNav';
import PathBox from '../components/pathbox/PathBox';
import SideBar from '../components/sidebar/SideBar';
import Footer from '../components/footer/Footer';
import BackToTopBtn from '../components/backtotopbtn/BackToTopBtn';

import '../asset/css/Serve.css';

const Service = () => {
  const sidebarTitle = '服務資訊'

  return (
    <React.Fragment>
      <Header />
      <IndexNav />
      <PathBox pathName={"服務資訊"} path={"/service"}/>
      <div className="container">
        <div className="row">
          <SideBar title={sidebarTitle} />

          {/* 這裡放你的主內容 */}
          <div className='col-md-12 col-lg-9 col-xl-9'>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li>
                <button class="nav-link" style={{  backgroundColor: '#214F39',color: 'white',textShadow:'2px 2px 4px rgba(0, 0, 0, 0.5)'}}>長照服務資訊</button>
              </li>
            </ul>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <div className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    <h3>照顧及專業照顧</h3>
                  </button>
                </div>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h3 style={{fontWeight: 'bold'}}>一.照顧服務</h3>
                    <h5>➡居家服務
                      <br />
                      &emsp;居家服務為受過專業訓練的照顧服務員到家中協助失能者，包含基本身體淸潔、基本日常照顧、測量生命徵<br/>&emsp;象、餵食、餐食照顧、協助沐浴及洗頭、陪同外出或就醫、到宅沐浴車等服務。
                    </h5>
                    <br />
                    <p style={{ textAlign: 'center' }}><img
                      alt="由照顧服務員協助失能者用餐"
                      src="https://1966.gov.tw/Public/Images/202206/15922060916319af3f.jpg"
                      style={{ width: '60%' }} /></p>
                    <br />
                    <h5>➡日間照顧
                      <br />
                      &emsp;失能或失智長輩在白天時間就近至日間照顧中心接受服務，服務內容除了長輩在生活上需要的基本照顧、餐飲<br/>&emsp;服務及從住家到日照中心的交通接送服務外，還包含促進長輩活動及社交能力的健康促進、文康休閒等活動，<br/>&emsp;另也提供家屬指導及諮詢等服務。
                    </h5>
                    <br />
                    <p style={{ textAlign: 'center' }}>
                      <img alt="長輩在日間照顧中心參與活動"
                        src="https://1966.gov.tw/Public/Images/202206/8472206091625a6619.jpg"
                        style={{ width: '40%' }} />
                      <img alt="長輩在日間照顧中心進行用餐，有2位長輩及2位照顧服務員在桌旁，桌上有許多布丁及玻璃罐。"
                        src="https://1966.gov.tw/Public/Images/202206/68722060916279e767.jpg"
                        style={{ width: '40%' }} />
                    </p>
                    <br />
                    <h5>➡小規模多機能服務
                      <br />
                      &emsp;小規模多機能除提供日間照顧服務以外，增加夜間住宿服務。失能或失智長輩在白天時間就近至日間照顧中心<br/>&emsp;接受服務，如果有臨時夜間住宿的需求，每個月最多有15天可以使用夜間住宿服務
                      ，因應個案需求。
                    </h5>
                    <br />
                    <p style={{ textAlign: 'center'}}>
                      <img alt="長輩在日間照顧中心參加遊戲，畫面中有照顧服務員及長輩非別坐在椅子上，手持小皮球，並抬起一隻腳。"
                        src="	https://1966.gov.tw/Public/Images/202206/2782206091631ec30b.jpg"
                        style={{ width: '40%' }} />
                
                      <img alt="有兩位長輩在照顧服務中心接受餐飲服務。"
                        src="https://1966.gov.tw/Public/Images/202206/3872206091631dcae1.jpg"
                        style={{ width: '40%' }} />
                    </p>
                    <br />
                    <h5>➡家庭托顧
                      <br />
                      &emsp;家庭托顧係提供長照服務對象於家庭托顧人員住所（托顧家庭）接受身體及日常生活照顧服務，如同保母在自<br/>&emsp;己的家裡照顧幼兒一樣，我們將家裡的失能者送到照顧服務員的住所（托顧家庭）接受照顧，其服務人數較與<br/>&emsp;一對一之居家服務不同，照顧服務員在照顧自己家人同時，可以在家創業穩定經濟收入，維持其家庭功能的完<br/>&emsp;整性，落實在地老化以及政府推動社區照顧服務的理念。
                    </h5>
                    <br />
                    <p style={{ textAlign: 'center' }}>
                      <img alt="家庭托顧服務，由照顧服務員協助長輩在家中使用輔具行走。"
                        src="https://1966.gov.tw/Public/Images/202206/3622206091632f29b1.jpg" style={{width:'50%'}} />
                    </p>
                    <br />
                    <h3 style={{ fontWeight: 'bold' }}>二.專業服務</h3>
                    <h5>&emsp;長照2.0專業服務照顧組合，置入復能(reablement)觀念，目的是為了讓長照個案學習自主生活，不再總是被照顧，透過專業人員短時間且密集性之介入服務，指導個案及主要照顧者，達到訓練目標，讓個案學習自我照顧能力或家屬學習照顧技巧。長照失能個案如有使用專業服務之需求可向居住地政府照管中心或A單位個管員提出。
                      <br />
                      <br />
                      &emsp;專業服務之使用，係以指導個案及照顧者學習自主獨立或照顧技巧，達成訓練目標即予結案，因此，同一專業服務目標，不超過12次（每週至多1次為原則），
                      並於6個月內完成訓練。個案及主要照顧者應就原服務訓練所指導之內容，於日常生活中加強個案自我訓練，以維專業服務之效益。倘有新訓練目標之需求且為同代碼之照顧組合則需間隔90天，再啟動下一階段新的訓練目標，以循序漸進方式達成訓練與學習成效。
                    </h5>
                    <br />
                    <h5>專業服務項目說明如下：</h5>
                    <br />
                    <p style={{ textAlign: 'center' }}> <img alt="專業服務價目表" src={require('../asset/images/server/serve2.png')} style={{ width: '100%' }} /></p>
                    <br />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <h3>交通接送服務</h3>
                  </button>
                </div>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h5>&emsp;提供長照給付對象往返居家至社區式服務類長照機構或至醫療院所就醫、復健、透析治療之交通接送。
                    </h5>
                    <br />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <h3>出院準備銜接長照服務</h3>
                  </button>
                </div>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h5>&emsp;本部推動之出院準備銜接長照服務計畫，係鑑於部分病人因意外或疾病預後導致日常生活能力受損，出院返家後立即銜接長照服務資源需求上升，爰鼓勵計畫參與醫院以住院病人為中心組成跨專業服務團隊，團隊之評估人員針對符合長照服務資格者，於出院前3天以照顧管理評估量表執行長照需要等級（CMS）及照顧問題評估，後續由長照A單位個案管理員依據評估等級及給付額度，與個案、家屬或主要照顧者討論擬定照顧計畫，協助個案於出院返家7天內取得所需長照服務及資源。另為利有輔具需求個案，可及時獲得輔具，鼓勵醫院建立簡易輔具友善銜接機制，降低返家後日常生活障礙、提升個案及照顧者生活品質，以減輕照顧者負擔及降低照顧支出。
                    </h5>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    <h3>家庭照顧者支持服務</h3>
                  </button>
                </div>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4 style={{fontWeight: 'bold'}}>➡家庭照顧者支持服務原則</h4>
                    <h5>&emsp;為發展家庭照顧者多元支持措施，提升照顧服務品質，減輕家庭 照顧者照顧負荷，完善我國長期照顧服務體<br/>&emsp;系，特針對長期照顧
                      服務法所定家庭照顧者支持服務之申請、評估、提供及其他應遵行事項制定本原則。
                    </h5>
                    <br />
                    <p style={{ textAlign: 'center' }}><img alt="專業服務價目表" src="https://1966.gov.tw/Public/Images/202206/189220610092880839.jpg"
                      style={{ width: '60%' }} />
                    </p>
                    <br />
                    <h4 style={{fontWeight: 'bold'}}>➡照顧實務指導員訓練</h4>
                    <h5>&emsp;為提升照顧服務人力專業知能，以強化照顧服務品質及專業形象，並培育符合家庭照顧者照顧技巧指導需求之<br/>&emsp;人才，培養指導員能夠辨識被照顧者需求以及照顧者之身心負荷及困境，減輕家庭照顧者因照顧知能不足衍生<br/>&emsp;之照顧壓力，特頒布此訓練。
                    </h5>
                    <br />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <div className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFour">
                    <h3>喘息服務</h3>
                  </button>
                </div>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h4 style={{fontWeight: 'bold'}}>➡申請及服務流程</h4>
                    <h5>1.民眾可依其居住處所，向居住地之縣市政府長期照顧管理中心申請，申請方法可電話直撥1966長照服務專業或<br/>&emsp;親自洽詢各縣市政府長期照顧管理中心，或於住院期間洽詢醫院出院準備服務小組。
                      <br />
                      <br />
                      2.各縣市長期照顧管理中心受理後，如果符合收案條件，照顧管理專員會安排進行訪視及評估。
                      <br />
                      <br />
                      3.經照顧管理專員評估符合為失能等級為2-8級者，將交由社區整合型服務中心個案管理人員（以下簡稱A單位個<br/>&emsp;管員）與個案及家屬共同討論擬定照顧服務計畫，民眾若有喘息服務需求時，可向A單位個管員提出，由A單位<br/>&emsp;個管員協助連結服務單位提供服務。
                      <br />
                      <br />
                      4.如有需跨縣市服務情形（原於甲縣市開案服務一段時間後移至乙縣市居住）:
                    </h5>
                    <br />
                    <h5>
                      &emsp;☞由個案或家屬告知甲縣市的A單位個管員，A單位個管員填報個案異動單送甲縣市照管中心，甲縣市照管中心<br/>&emsp;&emsp;會將個案移交予乙縣市照管中心以派案至乙縣市之A單位後媒合單位提供服務。
                      <br />
                      <br />
                      &emsp;☞如個案複評時間將屆，則乙縣市照管中心將會同A單位個管員進行評估，擬定照顧服務計畫後，再提供個案<br/>&emsp;&emsp;所需之長照服務。
                      <br />
                    </h5>
                    <br />
                    <p style={{ textAlign: 'center' }}><img alt="喘息流程圖" src={require('../asset/images/server/serveprice.png')} style={{ width: '100%' }}/>
                    </p>
                    <br />
                    <h4 style={{fontWeight: 'bold'}}>➡服務方式</h4>
                    <h5>&emsp;喘息服務提供下列三種服務方式，民眾可依需要選擇適合之喘息服務模式或採混合配搭使用。
                    </h5>
                    <br />
                    <h5>
                      &emsp;1.居家喘息：藉由受過訓練之照顧服務員至個案家中，提供個案身體照顧服務，包含協助如廁、沐浴、穿換衣<br/>&emsp;&emsp;服、口腔清潔、進食、服藥、翻身、拍背、簡單被動式肢體關節活動、上下床、陪同運動、協助使用日常生<br/>&emsp;&emsp;活輔助器具及其他服務。
                      <br />
                      <br />
                      &emsp;2.機構喘息：個案至住宿式長照機構接受短暫照顧、停留，由機構工作人員提供二十四小時之照顧，服務內容<br/>&emsp;&emsp;包含護理照護、協助沐浴、進食、服藥、活動安排及相關服務。
                      <br />
                      <br />
                      &emsp;3.社區喘息：個案白天至日間照顧中心/巷弄長照站或於夜間至小規模多機能服務中心，依地點提供之服務，接<br/>&emsp;&emsp;受照顧、停留，包含護理照護（日間照顧中心）、協助沐浴（日間照顧中心、小規模多機能服務中心）、進<br/>&emsp;&emsp;食、服藥、活動安排及相關服務。
                      <br />
                    </h5>
                    <br />
                    <h5>喘息服務照顧組合及支付價格:</h5>
                    <br />
                    <p style={{ textAlign: 'center' }}><img alt="喘息服務照顧組合及支付價格" src={require('../asset/images/server/serve3.png')}
                      style={{ width: '100%' }} />
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTopBtn />
    </React.Fragment >
  )
}

export default Service