import axios from "axios";
import {url} from "../core/fetch";
import {notification} from "antd";
import {Dispatch, SetStateAction} from "react";
import {Btns} from "../components/Modals/AdminModals/UserMessage/UserMessageModal";
import {FileUpload} from "../components/ADMIN/UploadButton/UploadButton";

export const sendNewsletter = async (
    text: string,
    btns: Array<{text: string, id: string, link: string}>,
    uploads: any,
    setBtns: Dispatch<SetStateAction<Btns[]>>
) => {
    const formData = new FormData()
    formData.append('text', text)
    formData.append('buttons', JSON.stringify(btns))
    uploads.forEach((image: any) => formData.append('images', image.file))

    try {
        await axios.post(`http://localhost:4000/api/user/send-newsletter`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        notification.success({
            message: "Успешно отправлено!",
            duration: 2
        })
        setBtns([])
    } catch (e) {
        console.log(e, "request error")
    }
}