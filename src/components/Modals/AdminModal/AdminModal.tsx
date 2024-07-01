import s from './AdminModal.module.scss'
import {FC, ReactNode} from "react";

interface AdminModalI {
    children: ReactNode,
    setOpen: () => void,
    isOpened: boolean
}

export const AdminModal : FC<AdminModalI> = ({children, isOpened, setOpen}) => {
    return (
        <div onClick={setOpen} className={s.bgModal}>
            <div onClick={(e) => e.stopPropagation()} className={s.content}>
                {children}
            </div>
        </div>
    )
}