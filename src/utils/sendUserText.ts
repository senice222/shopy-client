import axios from "axios";
import {url} from "../core/fetch";
import {notification} from "antd";

export const sendUserText = async (
    id: number | undefined,
    text: string,
    btns: Array<{text: string, id: string, link: string}>,
    setBtns: any,
    setText: any,
    setOpen: any
) => {
    try {
        const body = {
            text,
            buttons: btns
        }
        await axios.post(`http://localhost:4000/api/user/send-text/${id}`, body)
        notification.success({
            message: "Успешно отправлено!",
            duration: 2
        })
        setBtns([])
        setText('')
        setOpen(false)
    } catch (e) {
        console.log(e, "request error")
    }
}