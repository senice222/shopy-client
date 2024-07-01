import s from './AdminModal.module.scss'
import {ReactNode} from "react";

export const AdminModal = ({children} : {children : ReactNode}) => {
    return (
        <div className={s.bgModal}>
            <div className={s.content}></div>
        </div>
    )
}