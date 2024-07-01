import s from './AdminModal.module.scss'
import {FC, ReactNode} from "react";
import {Cross, Folder} from "./Svgs";

interface AdminModalI {
    children: ReactNode,
    setOpen: () => void,
    isOpened: boolean
}

export const AdminModal : FC<AdminModalI> = ({children, isOpened, setOpen}) => {
    return (
        <div onClick={setOpen} className={`${s.bgModal} ${isOpened ? s.activeBg : ""}`}>
            <div onClick={(e) => e.stopPropagation()} className={s.content}>
                <div className={s.topDiv}>
                    <div className={s.folderDiv}>
                        <Folder />
                    </div>
                    <div onClick={setOpen} className={s.cross}><Cross /></div>
                </div>
                <div className={s.contWrapper}>
                    <div className={s.modalCont}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}