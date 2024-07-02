import React, { FC, useState } from "react";
import s from './UserMessageModal.module.scss';
import { AdminModal } from "../../AdminModal/AdminModal";
import {Bold, Italic, LinkSvg, Pencil} from "./Svgs";
import {set} from "react-hook-form";
import {Cross} from "../../AdminModal/Svgs";

interface UserMessageModal {
    isOpen: boolean,
    setOpen: () => void
}
interface Btns {
    text : string
    id: string,
    link: string,
}
interface IsEditingI {
    // isEditing: boolean,
    id: string | null,
}

export const UserMessageModal: FC<UserMessageModal> = ({ isOpen, setOpen }) => {
    const [text, setText] = useState<string>('');
    const [selectionStart, setSelectionStart] = useState<number | null>(null);
    const [selectionEnd, setSelectionEnd] = useState<number | null>(null);
    const [btns, setBtns] = useState<Btns[]>([])
    const [isEditing, setEditing] = useState<string>()
    const [isCreating, setCreating] = useState<boolean>(false)
    const [btnText, setBtnText] = useState('')
    const [btnLink, setBtnLink] = useState('')


    const handleClose = () => {
        setOpen();
        setText('');
        setBtns([])
    }
    const addButton = () => {
        if (btns.length < 4) {
            let btnsCopied = btns.concat()
            btnsCopied.push({
                text: btnText,
                id: String(btns.length + Math.floor(Math.random())),
                link: btnLink
            })
            setBtns(btnsCopied)
            setBtnText('')
            setBtnLink('')
            setCreating(false)
        }
    }
    const handleChange = ({id, text, link} : {id : string, text: string, link : string}) => {
        setEditing(id)
        setBtnText(text)
        setBtnLink(link)
        setCreating(true)
    }
    const updateData = () => {
        const id = isEditing

        const copiedArr = btns.concat()

        let foundBtn = copiedArr.find((item) => item.id === id)
        if (foundBtn) {
            foundBtn.text = btnText
            foundBtn.link = btnLink
            setBtns(copiedArr)
            setBtnText('')
            setBtnLink('')
            setCreating(false)
            setEditing('')
        }
    }
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
        setSelectionStart(e.target.selectionStart);
        setSelectionEnd(e.target.selectionEnd);
    }
    const deleteOne = (id : string) => {
        const copiedArr = btns.filter((item) => item.id !== id)
        setBtns(copiedArr)
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

            {isCreating ? <div className={s.creatingDiv}>
                <div className={s.block}>
                    <h3>Название кнопки</h3>
                    <input value={btnText} onChange={(e) => setBtnText(e.target.value)} placeholder={'Название'}/>
                </div>
                <div className={s.block}>
                    <h3>Ссылка</h3>
                    <input value={btnLink} onChange={(e) => setBtnLink(e.target.value)} placeholder={'https://'}/>
                </div>
                <div className={s.createBtns}>
                    <button onClick={() => setCreating(false)}>Отмена</button>
                    <button onClick={isEditing ? updateData : addButton}>{isEditing ? "Сохранить" : "Добавить"}</button>
                </div>
            </div> : <div className={s.addDiv}>
                <h1 onClick={() => setCreating(true)}>+ Добавить кнопки</h1>
                <div className={s.createdBtns}>
                    {btns.map((item) => <div key={item.id} className={s.flex}>
                        {/*<button onClick={() => deleteOne(item.id)}><Cross /></button>*/}
                        <button onClick={() => handleChange({id: item.id, text: item.text, link : item.link})}>{item.text} <Pencil /></button>
                    </div>)}
                </div>
            </div>}

            <div className={s.lastbtns}>
                <button onClick={handleClose} className={s.grayBtn}>Закрыть</button>
                <button className={s.blueBtn}>Отправить</button>
            </div>
        </AdminModal>
    )
}