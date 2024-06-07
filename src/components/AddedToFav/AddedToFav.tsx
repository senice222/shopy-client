import s from './AddedToFav.module.scss'
import {FC} from "react";

interface AddedToFavI {
    isOpen: boolean,
    setOpen: () => void,
    isAdd: boolean
}

export const AddedToFav : FC<AddedToFavI> = ({isOpen, setOpen, isAdd}) => {
    return (
        <div className={`${s.popa} ${isOpen ? s.active : ''}`}>
            <div className={s.content}>
                <div className={s.top}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                    >
                        <g opacity="0.3">
                            <path
                                d="M6 19C6 11.8203 11.8203 6 19 6C26.1797 6 32 11.8203 32 19C32 26.1797 26.1797 32 19 32C11.8203 32 6 26.1797 6 19Z"
                                stroke="#079455"
                                strokeWidth={2}
                            />
                        </g>
                        <g opacity="0.1">
                            <path
                                d="M1 19C1 9.05888 9.05888 1 19 1C28.9411 1 37 9.05888 37 19C37 28.9411 28.9411 37 19 37C9.05888 37 1 28.9411 1 19Z"
                                stroke="#079455"
                                strokeWidth={2}
                            />
                        </g>
                        <g clipPath="url(#clip0_505_15574)">
                            <path
                                d="M15.25 19L17.75 21.5L22.75 16.5M27.3334 19C27.3334 23.6023 23.6024 27.3333 19 27.3333C14.3976 27.3333 10.6667 23.6023 10.6667 19C10.6667 14.3976 14.3976 10.6666 19 10.6666C23.6024 10.6666 27.3334 14.3976 27.3334 19Z"
                                stroke="#079455"
                                strokeWidth="1.66667"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_505_15574">
                                <rect width={20} height={20} fill="white" transform="translate(9 9)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <svg
                        onClick={setOpen}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: 'pointer' }}
                    >
                        <path
                            d="M18 6L6 18M6 6L18 18"
                            stroke="#98A2B3"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <h3>{isAdd ? 'Товар добавлен в избранное!' : 'Товар удалён из избранного!'}</h3>
            </div>
        </div>
    )
}