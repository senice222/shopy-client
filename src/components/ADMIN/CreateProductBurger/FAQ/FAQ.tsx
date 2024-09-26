import s from './FAQ.module.scss'
import { useState } from 'react';
import { Pencil } from '../../../Modals/AdminModals/UserMessage/Svgs';
import { Btns } from '../../../Modals/AdminModals/UserMessage/UserMessageModal';
import styled from '@emotion/styled/types/base';


const QuestionsFAQ = ({ btns, setBtns }: any) => {
    const [isCreating, setCreating] = useState<boolean>(false)
    const [btnText, setBtnText] = useState<string>('')
    const [btnLink, setBtnLink] = useState<string>('')
    const [isEditing, setEditing] = useState<string>()

    const addButton = () => {
        if (btns.length < 4) {
            let btnsCopied = btns.concat()
            btnsCopied.push({
                title: btnText,
                id: String(btns.length + Math.floor(Math.random())),
                value: btnLink
            })
            setBtns(btnsCopied)
            setBtnText('')
            setBtnLink('')
            setCreating(false)
        }
    }

    const updateData = () => {
        const id = isEditing

        const copiedArr = btns.concat()

        let foundBtn = copiedArr.find((item: Btns) => item.id === id)
        if (foundBtn) {
            foundBtn.title = btnText
            foundBtn.value = btnLink
            setBtns(copiedArr)
            setBtnText('')
            setBtnLink('')
            setCreating(false)
            setEditing('')
        }
    }

    const handleChange = ({ id, text, link }: { id: string, text: string, link: string }) => {
        setEditing(id)
        setBtnText(text)
        setBtnLink(link)
        setCreating(true)
    }

    const deleteBtn = ({id}: {id: string}) => {
        const index = btns.findIndex((item: Btns) => item.id === id)
        if (index!== -1) {
            btns.splice(index, 1)
            setBtns(btns)
            setCreating(false)
        }
    }

    return (
        <div className={s.faq}>
            <h2>Часто задаваемые вопросы</h2>
            <div className={s.buttons}>
                <div className={s.textWithLines}>
                    <div className={s.line}></div>
                    <h3>Вопросы</h3>
                    <div className={s.line}></div>
                </div>

                {isCreating ? <div className={s.creatingDiv}>
                    <div className={s.block}>
                        <h3>Вопрос</h3>
                        <input value={btnText} onChange={(e) => setBtnText(e.target.value)} placeholder={'Напишите вопрос'} />
                    </div>
                    <div className={s.block}>
                        <h3>Ответ</h3>
                        <input value={btnLink} onChange={(e) => setBtnLink(e.target.value)} placeholder={'Напишите ответ'} />
                    </div>
                    <div className={s.createBtns}>
                        {isEditing && <button className={s.delete} onClick={() => deleteBtn({id: isEditing})}>Удалить</button>}
                        <button onClick={() => setCreating(false)}>Отмена</button>
                        <button onClick={isEditing ? updateData : addButton}>{isEditing ? "Сохранить" : "Добавить"}</button>
                    </div>
                </div> : <div className={s.addDiv}>
                    <h1 onClick={() => setCreating(true)}>+ Добавить кнопки</h1>
                    <div className={s.createdBtns}>
                        {btns.map((item: any) => <>
                            <button onClick={() => handleChange({ id: item.id, text: item.title, link: item.value })}>{item.title} <Pencil /></button>
                        </>)}
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default QuestionsFAQ;
