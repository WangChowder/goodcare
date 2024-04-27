import React from 'react';
import './Pagination.css';

function Pagination ({ totalNews, newsNum, setCurPage, curPage }) {
    let pages = []
    let maxPage = Math.ceil(totalNews / newsNum)

    for (let i=1; i<= maxPage; i++) {
      pages.push(i)
    }
    return (
      <nav aria-label="Page navigation example" className="d-flex justify-content-center">
        <ul className="pagination ">
            <li className="page-item">
                <button className="page-link" aria-label="Previous"
                  onClick={() =>
                    setCurPage((prev) => {
                      if (prev === 1) return prev;
                      return prev - 1;
                    })}>
                    <span aria-hidden="true">&laquo;</span>
                </button>
            </li>
            
            {
            pages.map((page, ind) => {
              return(
                <li className={curPage === page ? "page-item active" : "page-item"}>
                  <a
                    key={ind}
                    onClick={() => {
                      setCurPage(page);
                    }}
                    href='##'
                    className='page-link'
                  >
                    {page}
                  </a>
                </li>
              )
            })
            }

            <li className="page-item">
                <button className="page-link" aria-label="Previous"
                  onClick={() =>
                    setCurPage((prev) => {
                      if (prev === maxPage) return prev;
                      return prev + 1;
                    })}>
                  <span aria-hidden="true">&raquo;</span>
                </button>
            </li>
        </ul>
      </nav>
    )
}

export default Pagination
