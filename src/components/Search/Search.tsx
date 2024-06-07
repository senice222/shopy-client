import React from 'react';
import style from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
    return (
        <div className={style.search}>
            <div className={style.container}>
                <div className={style['search-body']}>
                    <label className={style.label} htmlFor="search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </label>
                    <input type="text" id="search" placeholder="Найти подписку или игру" className={style.searchInput} />
                </div>
            </div>
        </div>
    );
};

export default Search;
