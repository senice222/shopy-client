import React from 'react';
import s from './Pagination.module.scss';
import {Arrow2} from "../../pages/ADMIN/CategoriesAndProducts/Svg";

interface PaginationProps {
    totalPages: number | null;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const generatePagination = () => {
        if (totalPages) {
            const pages: (number | string)[] = [];
            const visiblePages = 3; // Number of pages to show around the current page

            if (totalPages <= 5) {
                // Show all pages if totalPages is 5 or less
                for (let page = 1; page <= totalPages; page++) {
                    pages.push(page);
                }
            } else {
                // Show first page
                pages.push(1);

                // Show dots if currentPage > 3
                if (currentPage > visiblePages) {
                    pages.push('...');
                }

                // Show pages around the currentPage
                for (let page = Math.max(2, currentPage - 1); page <= Math.min(totalPages - 1, currentPage + 1); page++) {
                    pages.push(page);
                }

                // Show dots if currentPage < totalPages - 2
                if (currentPage < totalPages - (visiblePages - 1)) {
                    pages.push('...');
                }

                // Show last page
                pages.push(totalPages);
            }

            return pages;
        }
    };

    const pages = generatePagination();

    return (
        <div className={s.paginationWrapper}>
            {totalPages ? <> <button disabled={currentPage === 1} onClick={()=> onPageChange(currentPage-1)} className={s.prev + " " + s.butt2}><Arrow2 />Previous</button>
                <div className={s.pagination}>
                    {pages && pages.map((page, index) => (
                        <button
                            key={index}
                            onClick={() => typeof page === 'number' && onPageChange(page)}
                            className={`${s.button} ${page === currentPage ? s.active : ''}`}
                            disabled={page === '...'}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button disabled={currentPage === totalPages} onClick={()=> onPageChange(currentPage+1)} className={s.next + " " + s.butt2}>Next<Arrow2 /></button></> : null}
        </div>
    );
};

export default Pagination;