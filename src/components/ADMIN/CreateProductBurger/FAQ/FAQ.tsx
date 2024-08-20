import s from './FAQ.module.scss'
import BlueButton from "../../../Button/Button";
import { Dispatch, SetStateAction, useState } from 'react';
import { Pencil } from '../../../Modals/AdminModals/UserMessage/Svgs';
import { Btns } from '../../../Modals/AdminModals/UserMessage/UserMessageModal';

const QuestionsFAQ = ({btns, setBtns}: any) => {
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
                        <button onClick={() => setCreating(false)}>Отмена</button>
                        <button onClick={isEditing ? updateData : addButton}>{isEditing ? "Сохранить" : "Добавить"}</button>
                    </div>
                </div> : <div className={s.addDiv}>
                    <h1 onClick={() => setCreating(true)}>+ Добавить кнопки</h1>
                    <div className={s.createdBtns}>
                        {btns.map((item: any) => <>
                            <button onClick={() => handleChange({ id: item.id, text: item.question, link: item.answer })}>{item.question} <Pencil /></button>
                        </>)}
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default QuestionsFAQ;
