import React, { FC, useState, Dispatch, SetStateAction } from 'react';

interface IFilter {
  currentFilter: string;
  changeFilter: Dispatch<SetStateAction<string>>;
}

export const Filter: FC<IFilter> = ({ currentFilter, changeFilter }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div onClick={() => setToggle(!toggle)} className="filter-button-wrapper">
      <p>Sort by: {currentFilter}</p>
      <div
        style={{ visibility: `${toggle ? 'visible' : 'hidden'}` }}
        className="dropdown-wrapper"
      >
        <p onClick={(e) => changeFilter(e.currentTarget.innerText)}>
          {currentFilter === 'Micro' ? 'All' : 'Micro'}
        </p>
        <p onClick={(e) => changeFilter(e.currentTarget.innerText)}>
          {currentFilter === 'Brewpub' ? 'All' : 'Brewpub'}
        </p>
      </div>
    </div>
  );
};
