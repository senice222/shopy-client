import s from './CheckBox.module.scss'
import {FC, useEffect, useState} from "react";


interface CheckBoxI {
    setChecked: (value: boolean) => void
}
export const CheckBox : FC<CheckBoxI> = ({setChecked}) => {
    const [isChecked, setIsChecked] = useState(true)
    useEffect(() => {
        setChecked(isChecked)
    }, [isChecked]);

    return (
        <div onClick={() => setIsChecked((value) => !value)} className={`${s.checkBox} ${isChecked ? s.active : ''}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M9 1L3.5 6.5L1 4" stroke="white" stroke-width="1.6666" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}