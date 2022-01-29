import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import "../../components/pagination/PaginationComponent.css";

const PaginationComponent = ({
  totalPages,
  setCurrentPage,
  currentPage,
  upperPageBound,
  lowerPageBound,
  setUpperPageBound,
  setLowerPageBound,
}) => {

  const jumpPageList = 5;
  const noOfPages = [];
  for (let i = 1; i <= totalPages; i++) {
    noOfPages.push(i);
  }

  const pageController = (id) => {
    setCurrentPage(id);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % jumpPageList === 0) {
      setUpperPageBound(upperPageBound - jumpPageList);
      setLowerPageBound(lowerPageBound - jumpPageList);
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > upperPageBound) {
      setUpperPageBound(upperPageBound + jumpPageList);
      setLowerPageBound(lowerPageBound + jumpPageList);
    }
  };

  return (
    <div className="paginationContainer">
      <Pagination
        size="sm"
        aria-label="Page navigation example"
        className="paginationWrapper"
      >
        <PaginationItem disabled={currentPage === 1 ? true : false}>
          <PaginationLink previous onClick={previousPage}>
            prev
          </PaginationLink>
        </PaginationItem>
        {noOfPages?.map((pages, index) => {
          if (pages < upperPageBound + 1 && pages > lowerPageBound) {
            return (
              <PaginationItem active={currentPage === pages} key={index}>
                <PaginationLink
                  previous
                  onClick={() => pageController(pages)}
                  key={index}
                >
                  {pages}
                </PaginationLink>
              </PaginationItem>
            );
          }
          return null;
        })}
        <PaginationItem disabled={currentPage === totalPages}>
          <PaginationLink next onClick={nextPage}>
            next
          </PaginationLink>
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
