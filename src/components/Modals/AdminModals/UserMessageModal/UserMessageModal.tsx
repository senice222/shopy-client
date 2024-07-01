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
            <h2>Отправить сообщение клиенту</h2>
            <p>Введите сообщение</p>
        </AdminModal>
    )
}