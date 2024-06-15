import React from 'react'
import s from './ChangeData.module.scss'
import Layout from '../../layouts/Layout'
const ChangeData = () => {
    return (
        <div className={s.background}>
            <Layout isRightArrow={true}>
                <div className={s.content}>
                    <div className={s.firstBlock}>
                    <h2>Изменение данных от аккаунта Spotify</h2>
                    <p>Заказ №212343456</p>
                        <div className={s.security}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={12}
                                height={12}
                                viewBox="0 0 12 12"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_807_14661)">
                                    <path
                                        d="M8.5 5.5V4C8.5 2.61929 7.38071 1.5 6 1.5C4.61929 1.5 3.5 2.61929 3.5 4V5.5M3.9 10.5H8.1C8.94008 10.5 9.36012 10.5 9.68099 10.3365C9.96323 10.1927 10.1927 9.96323 10.3365 9.68099C10.5 9.36012 10.5 8.94008 10.5 8.1V7.9C10.5 7.05992 10.5 6.63988 10.3365 6.31901C10.1927 6.03677 9.96323 5.8073 9.68099 5.66349C9.36012 5.5 8.94008 5.5 8.1 5.5H3.9C3.05992 5.5 2.63988 5.5 2.31901 5.66349C2.03677 5.8073 1.8073 6.03677 1.66349 6.31901C1.5 6.63988 1.5 7.05992 1.5 7.9V8.1C1.5 8.94008 1.5 9.36012 1.66349 9.68099C1.8073 9.96323 2.03677 10.1927 2.31901 10.3365C2.63988 10.5 3.05992 10.5 3.9 10.5Z"
                                        stroke="#17B26A"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_807_14661">
                                        <rect width={12} height={12} fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Все данные надёжно защищены</p>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default ChangeData