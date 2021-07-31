import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Paginate.module.css";

const Paginate = ({ numberOfPokemon, page, onPageSelect }) => {
  const perPage = 15;

  const numberOfPages = Math.ceil(numberOfPokemon / perPage);

  return (
    <div className={styles.container}>
      <ReactPaginate
        containerClassName={styles.container}
        pageCount={numberOfPages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={5}
        initialPage={page - 1}
        forcePage={page - 1}
        onPageChange={(data) => onPageSelect(data.selected + 1)}
        pageClassName={styles.link}
        activeClassName={styles.active}
        nextLinkClassName={styles.btn}
        previousLinkClassName={styles.btn}
      ></ReactPaginate>
    </div>
  );
};

export default Paginate;
