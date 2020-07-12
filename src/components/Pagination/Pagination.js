import React from 'react';
import s from './Pagination.module.css'

const Pagination = (props) => {
    const = pageLinks = []

    for(let i = 1; i <= props.pages + 1; i++) {
        let active =props.currentPage == i ? 'active' :
        pageLinks.push(<li className=  )
    }
  return (
        <p>blablabls</p>
  );
}

export default Pagination;