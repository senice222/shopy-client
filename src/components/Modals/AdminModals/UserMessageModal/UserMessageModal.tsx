import React, { FC, useState } from "react";
import s from './UserMessageModal.module.scss';
import { AdminModal } from "../../AdminModal/AdminModal";
import { Bold, Italic, LinkSvg } from "./Svgs";

interface UserMessageModal {
    isOpen: boolean,
    setOpen: () => void
}
interface Btns {
    text : string
    id: string
}
export const UserMessageModal: FC<UserMessageModal> = ({ isOpen, setOpen }) => {
    const [text, setText] = useState<string>('');
    const [selectionStart, setSelectionStart] = useState<number | null>(null);
    const [selectionEnd, setSelectionEnd] = useState<number | null>(null);
    const [btns, setBtns] = useState<Btns[]>([])

    const handleClose = () => {
        setText('');
        setOpen();
    }
    const addButton = () => {
        let btnsCopied = btns.concat()
    }
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        setSelectionStart(e.target.selectionStart);
        setSelectionEnd(e.target.selectionEnd);
    }

    const formatText = (formatType: string) => {
        if (selectionStart === null || selectionEnd === null) return;

        const selectedText = text.slice(selectionStart, selectionEnd);
        let formattedText = '';

        switch (formatType) {
            case 'bold':
                formattedText = `<b>${selectedText}</b>`;
                break;
            case 'italic':
                formattedText = `<i>${selectedText}</i>`;
                break;
            case 'link':
                const url = prompt('Введите URL:', 'https://');
                if (url) {
                    formattedText = `<a href="${url}">${selectedText}</a>`;
                }
                break;
            default:
                break;
        }

        const newText = text.slice(0, selectionStart) + formattedText + text.slice(selectionEnd);
        setText(newText);
    }

    return (
        <AdminModal isOpened={isOpen} setOpen={setOpen}>
            <h2>Отправить сообщение клиенту</h2>
            <p>Введите сообщение</p>
            <div className={s.btns}>
                <div className={s.item} onClick={() => formatText('bold')}><Bold /></div>
                <div className={s.item} onClick={() => formatText('italic')}><Italic /></div>
                <div className={s.item} onClick={() => formatText('link')}><LinkSvg /></div>
            </div>

            <div className={s.inputDiv}>
                <h3>Введите текст сообщения</h3>
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    placeholder={"Например, привет."}
                    onSelect={(e) => {
                        setSelectionStart(e.currentTarget.selectionStart);
                        setSelectionEnd(e.currentTarget.selectionEnd);
                    }}
                />
            </div>

            <div className={s.textWithLines}>
                <div className={s.line}></div>
                <h3>Кнопки</h3>
                <div className={s.line}></div>
            </div>

            <div className={s.addDiv}>
                <h1>+ Добавить кнопки</h1>
                <div className={s.createdBtns}>
                    {btns.map((item) => <input value={item.text}/>)}
                </div>
            </div>

            <div className={s.lastbtns}>
                <button onClick={handleClose} className={s.grayBtn}>Закрыть</button>
                <button className={s.blueBtn}>Отправить</button>
            </div>
        </AdminModal>
    )
}