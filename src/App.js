import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import {
  Home,
  News,
  Policy,
  Video,
  Service,
  Subsidy,
  Map,
  Product,
  Reserve,
  ReserveConfirm,
  WebQA,
  UserLogin,
  UserForget,
  UserRegister,
  UserProfile,
  UserModify,
  SingleVideo,
  Cart,
  SingleProduct,
  SubsidyLink1,
  SubsidyLink2,
  SubsidyLink3,
  SubsidyNoMatch,
  SubsidySearch,
  SubsidySearchCFM,
  SubsidyResult,
  CheckOrder,
} from "./pages/appIndex";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} exact />
          <Route path="/News" element={<News />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Video/:id" element={<SingleVideo />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Subsidy" element={<Subsidy />} />
          <Route path="/Map" element={<Map />} />
          <Route path="/Reserve" element={<Reserve />} />
          <Route path="/ReserveConfirm" element={<ReserveConfirm />} />
          <Route path="/WebQA" element={<WebQA />} />

          {/* 商品頁面 */}
          <Route path="/Product/*" element={<Product />} />
          <Route path="/product/category/:category/*" element={<Product />} />
          <Route path="/product/single/:id" element={<SingleProduct />} />

          {/* 購物車 */}
          <Route path="/Cart" element={<Cart />} />

          {/* 商品頁面 */}
          <Route path="/Product/*" element={<Product />} />
          <Route path="/product/category/:category/*" element={<Product />} />
          <Route path="/product/single/:id" element={<SingleProduct />} />

          {/* 會員中心 */}
          <Route path="/UserLogin" element={<UserLogin />} />
          <Route path="/UserForget" element={<UserForget />} />
          <Route path="/UserRegister" element={<UserRegister />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/UserModify" element={<UserModify />} />

          {/* single video */}
          <Route path="/Video/:id" element={<SingleVideo />} />

          {/* 補助資訊 */}
          <Route path="/SubsidyLink1" element={<SubsidyLink1 />} />
          <Route path="/SubsidyLink2" element={<SubsidyLink2 />} />
          <Route path="/SubsidyLink3" element={<SubsidyLink3 />} />
          <Route path="/SubsidyNoMatch" element={<SubsidyNoMatch />} />
          <Route path="/SubsidySearch" element={<SubsidySearch />} />
          <Route path="/SubsidySearchCFM" element={<SubsidySearchCFM />} />
          <Route path="/SubsidyResult" element={<SubsidyResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
