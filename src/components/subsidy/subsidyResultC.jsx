import React from "react";
import "../../asset/css/subsidy.css";

const SubsidyResultC = ({ formData }) => {
  console.log(formData);
  // 根据不同的收入狀況返回對應的政府補貼比例
  const SubsidyPercentage = () => {
    switch (formData.income) {
      case "低收入":
        return "100% 的照顧項目支出";
      case "中低收入":
        return "95% 的照顧項目支出";
      case "一般":
      default:
        return "84% 的照顧項目支出";
    }
  };
  return (
    <React.Fragment>
      <div id="content1" className="content-block">
        <h3 className="text-center">照顧服務</h3>
        <div className="container-fluid">
          <table className="table table-striped custom-table ">
            <thead className="thead-dark">
              <tr>
                <th className="text-center col m-line">項目</th>
                <th className="text-center col m-line">資訊</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center m-line ">您的收入狀況為</td>
                <td className="text-center m-line" id="income">
                  {/* {formData.income} */}一般戶
                </td>
              </tr>
              <tr>
                <td className="text-center m-line ">政府補貼</td>
                <td className="text-center m-line" id="subsidy">
                  {SubsidyPercentage}84% 的照顧項目支出
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* 失能等級  */}
        <div className="container-fluid">
          <table className="table table-striped custom-table">
            <thead className="thead-dark">
              <tr>
                <th className="text-center col m-line">失能等級</th>
                <th className="text-center col m-line">每月補助最高金額</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center m-line">第2級</td>
                <td className="text-center m-line" id="income">
                  NTD$ 10,020
                </td>
              </tr>
              <tr>
                <td className="text-center m-line">第3級</td>
                <td className="text-center m-line" id="subsidy">
                  NTD$ 15,460
                </td>
              </tr>
              <tr>
                <td className="text-center m-line">第4級</td>
                <td className="text-center m-line" id="level">
                  NTD$ 18,580
                </td>
              </tr>
              <tr>
                <td className="text-center m-line">第5級</td>
                <td className="text-center m-line" id="price">
                  NTD$ 24,100
                </td>
              </tr>
              <tr>
                <td className="text-center m-line">第6級</td>
                <td className="text-center m-line" id="price">
                  NTD$ 28,070
                </td>
              </tr>
              <tr>
                <td className="text-center m-line">第7級</td>
                <td className="text-center m-line" id="price">
                  NTD$ 32,090
                </td>
              </tr>
              <tr>
                <td className="text-center m-line">第8級</td>
                <td className="text-center m-line" id="price">
                  NTD$ 36,180
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SubsidyResultC;
