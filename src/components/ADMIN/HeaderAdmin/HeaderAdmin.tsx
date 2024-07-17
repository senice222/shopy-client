import React from 'react';
import s from './HeaderAdmin.module.scss'
import {Logo} from "../../Navbar/Logo";


export const HeaderAdmin = ({setActive} : {setActive : () => void}) => {
    return (
        <div className={s.header}>
            <Logo />
            <svg
                onClick={setActive}
                xmlns="http://www.w3.org/2000/svg"
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
            >
                <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V32C40 36.4183 36.4183 40 32 40H8C3.58172 40 0 36.4183 0 32V8Z"
                    fill="white"
                />
                <path
                    d="M11 20H23M11 14H29M11 26H29"
                    stroke="#344054"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

        </div>
    )
}



