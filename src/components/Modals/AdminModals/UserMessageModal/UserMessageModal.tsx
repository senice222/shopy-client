import s from './UserMessageModal.module.scss'
import {AdminModal} from "../../AdminModal/AdminModal";
import {FC} from "react";

interface UserMessageModal {
    isOpen: boolean,
    setOpen: () => void
}

export const UserMessageModal : FC<UserMessageModal> = ({isOpen, setOpen}) => {
    return (
        <AdminModal isOpened={isOpen} setOpen={setOpen}>
            <div></div>
        </AdminModal>
    )
}