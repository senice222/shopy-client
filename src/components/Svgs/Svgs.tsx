import React from 'react';
import style from './Svg.module.scss'

export const SVGHeart = () => (
    <svg
        fill="none"
        height="20"
        viewBox="0 0 23 20"
        width="23"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            clipRule="evenodd"
            d="M11.1598 3.13581C9.16049 0.7984 5.82643 0.169643 3.32138 2.31001C0.816331 4.45038 0.463655 8.02898 2.43089 10.5604C4.0665 12.6651 9.01646 17.1041 10.6388 18.5408C10.8203 18.7016 10.911 18.7819 11.0169 18.8135C11.1093 18.8411 11.2104 18.8411 11.3028 18.8135C11.4086 18.7819 11.4994 18.7016 11.6809 18.5408C13.3032 17.1041 18.2532 12.6651 19.8888 10.5604C21.856 8.02898 21.5464 4.42787 18.9983 2.31001C16.4502 0.192157 13.1592 0.7984 11.1598 3.13581Z"
            fillRule="evenodd"
            stroke="#98A2B3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

export const Warning = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            viewBox="0 0 48 48"
            fill="none"
        >
            <path
                d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                fill="#FEF0C7"
            />
            <path
                d="M24 20V24M24 28H24.01M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z"
                stroke="#DC6803"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export const Home = () => {
    return (
        <svg
            fill="none"
            height="21"
            viewBox="0 0 20 21"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 9.56505C1 8.9907 1 8.70352 1.07403 8.43905C1.1396 8.20478 1.24737 7.98444 1.39203 7.78886C1.55534 7.56806 1.78202 7.39175 2.23539 7.03912L9.0177 1.764C9.36902 1.49075 9.54468 1.35412 9.73865 1.3016C9.9098 1.25526 10.0902 1.25526 10.2613 1.3016C10.4553 1.35412 10.631 1.49075 10.9823 1.764L17.7646 7.03913C18.218 7.39175 18.4447 7.56806 18.608 7.78886C18.7526 7.98444 18.8604 8.20478 18.926 8.43905C19 8.70352 19 8.9907 19 9.56505V16.8C19 17.9201 19 18.4801 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H4.2C3.07989 20 2.51984 20 2.09202 19.782C1.71569 19.5903 1.40973 19.2843 1.21799 18.908C1 18.4801 1 17.9201 1 16.8V9.56505Z"
                stroke="#98A2B3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    )
}
export const Cart = () => {
    return <svg
        fill="none"
        height="22"
        viewBox="0 0 21 22"
        width="21"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M14.3337 8V5C14.3337 2.79086 12.5429 1 10.3337 1C8.1246 1 6.33374 2.79086 6.33374 5V8M1.92575 9.35196L1.32575 15.752C1.15515 17.5717 1.06985 18.4815 1.37179 19.1843C1.63704 19.8016 2.10186 20.3121 2.69176 20.6338C3.36327 21 4.27711 21 6.10479 21H14.5627C16.3904 21 17.3042 21 17.9757 20.6338C18.5656 20.3121 19.0304 19.8016 19.2957 19.1843C19.5976 18.4815 19.5123 17.5717 19.3417 15.752L18.7417 9.35197C18.5977 7.81535 18.5257 7.04704 18.1801 6.46616C17.8757 5.95458 17.4261 5.54511 16.8883 5.28984C16.2777 5 15.5061 5 13.9627 5L6.70479 5C5.16143 5 4.38975 5 3.77916 5.28984C3.24141 5.54511 2.79175 5.95458 2.4874 6.46616C2.14183 7.04704 2.0698 7.81534 1.92575 9.35196Z"
            stroke="#98A2B3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
}
export const Profile = () => {
    return (
        <svg
            fill="none"
            height="20"
            viewBox="0 0 18 20"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M17 19C17 17.6044 17 16.9067 16.8278 16.3389C16.44 15.0605 15.4395 14.06 14.1611 13.6722C13.5933 13.5 12.8956 13.5 11.5 13.5H6.5C5.10444 13.5 4.40665 13.5 3.83886 13.6722C2.56045 14.06 1.56004 15.0605 1.17224 16.3389C1 16.9067 1 17.6044 1 19M13.5 5.5C13.5 7.98528 11.4853 10 9 10C6.51472 10 4.5 7.98528 4.5 5.5C4.5 3.01472 6.51472 1 9 1C11.4853 1 13.5 3.01472 13.5 5.5Z"
                stroke="#98A2B3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </svg>
    )
}