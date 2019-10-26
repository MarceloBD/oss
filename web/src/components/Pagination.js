import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Clickable from './Clickable';

const PAGES_NUMBER = 5;
const PER_PAGE = [15, 30, 50];

const PaginationBox = styled.div`
  display: flex;
  margin-top: 32px;
  margin-bottom: 121px;
  justify-content: space-between;
`;

const PagesBox = styled.div`
  display: flex;
`;

const ActionButton = styled.div`
  background-color: #ffffff;
  border: solid 1px rgb(18, 18, 18, 0.12);
  width: 80px;
  height: 36px;
  font-family: Open Sans;
  font-size: 12px;
  text-align: center;
  line-height: 36px;
  margin-right: 4px;
  border-radius: 3px;
  color: #757575;
`;

const Previous = styled(ActionButton)``;

const Page = styled(ActionButton)`
  width: 36px;
  height: 36px;
  ${props => props.isSelected && `color: #ffffff; background-color: #640B68; border: solid 1px #640B68;`}
`;

const LastPageBox = styled.div`
  display: flex;
`;

const Next = styled(ActionButton)``;

const Dotted = styled.div`
  width: 36px;
  height: 36px;
  text-align: center;
  line-height: 40px;
  color: #757575;
  margin-right: 4px;
`;

const PerPageBox = styled.div`
  display: flex;
`;

const PerPageText = styled(ActionButton)`
  border: 0px;
`;

const Pagination = ({ selectedPage, setSelectedPage, totalPages, commentsPerPage, setCommentsPerPage }) => {
  const [initial, setInitial] = useState(1);
  const pages = Array.from(
    { length: initial + PAGES_NUMBER <= totalPages ? PAGES_NUMBER : totalPages - initial + 1 },
    (x, i) => i + initial,
  );

  const handlePageClick = page => {
    const isLastPageShowed = page === initial + PAGES_NUMBER - 1;
    const isFirstPageShowed = page === initial;
    const isLastPage = page === totalPages;
    const isAnotherInitial = initial + PAGES_NUMBER - 1 < totalPages;
    const isPageLessThanPagesShowed = page < PAGES_NUMBER;

    if (isLastPageShowed) {
      setInitial(initial + 2);
    } else if (isFirstPageShowed) {
      setInitial(initial - 2 > 0 ? initial - 2 : 1);
    } else if (isLastPage && isAnotherInitial) {
      setInitial(totalPages - PAGES_NUMBER + 1);
    } else if (isLastPage && isPageLessThanPagesShowed) {
      setInitial(1);
    }

    setSelectedPage(page);
    window.scrollTo(0, 0);
  };

  const nextPage = selectedPage + 1;
  const previousPage = selectedPage - 1;

  useEffect(() => {
    if (selectedPage === 1) setInitial(1);
  }, [selectedPage]);

  useEffect(() => {
    handlePageClick(1);
  }, [commentsPerPage]);

  return (
    <PaginationBox>
      <PagesBox>
        {previousPage > 0 && (
          <Clickable
            onClick={() => {
              if (previousPage) handlePageClick(previousPage);
            }}
          >
            <Previous>Anterior</Previous>
          </Clickable>
        )}

        {initial > 1 && (
          <LastPageBox>
            <Clickable onClick={() => handlePageClick(1)}>
              <Page>1</Page>
            </Clickable>
            <Dotted>...</Dotted>
          </LastPageBox>
        )}
        {pages.map(elem => (
          <Clickable key={elem} onClick={() => handlePageClick(elem)}>
            <Page isSelected={elem === selectedPage}>{elem}</Page>
          </Clickable>
        ))}

        {initial + PAGES_NUMBER < totalPages + 1 && (
          <LastPageBox>
            <Dotted>...</Dotted>
            <Clickable onClick={() => handlePageClick(totalPages)}>
              <Page>{totalPages}</Page>
            </Clickable>
          </LastPageBox>
        )}
        {nextPage <= totalPages && (
          <Clickable
            onClick={() => {
              if (nextPage <= totalPages) handlePageClick(nextPage);
            }}
          >
            <Next>Próximo</Next>
          </Clickable>
        )}
      </PagesBox>
      <PerPageBox>
        {PER_PAGE.map(elem => (
          <Clickable key={elem} onClick={() => setCommentsPerPage(elem)}>
            <Page isSelected={commentsPerPage === elem}>{elem}</Page>
          </Clickable>
        ))}
        <PerPageText>por página</PerPageText>
      </PerPageBox>
    </PaginationBox>
  );
};

Pagination.propTypes = {
  selectedPage: PropTypes.number.isRequired,
  setSelectedPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  commentsPerPage: PropTypes.number.isRequired,
  setCommentsPerPage: PropTypes.func.isRequired,
};

export default Pagination;
