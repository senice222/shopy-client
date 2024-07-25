import style from './Newsletter.module.scss'
import AdminLayout from "../../../layouts/AdminLayout";
import UploadButton from "../../../components/ADMIN/UploadButton/UploadButton";
import React, {useState} from "react";
import s from "../../../components/Modals/AdminModals/UserMessage/UserMessageModal.module.scss";
import {Pencil} from "../../../components/Modals/AdminModals/UserMessage/Svgs";
import {Btns} from "../../../components/Modals/AdminModals/UserMessage/UserMessageModal";
import BlueButton from "../../../components/Button/Button";
import { Switch } from 'antd';

const Newsletter = () => {
    const [isCreating, setCreating] = useState<boolean>(false)
    const [btnText, setBtnText] = useState('')
    const [btnLink, setBtnLink] = useState('')
    const [isEditing, setEditing] = useState<string>()
    const [btns, setBtns] = useState<Btns[]>([])

    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

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

    const handleChange = ({id, text, link} : {id : string, text: string, link : string}) => {
        setEditing(id)
        setBtnText(text)
        setBtnLink(link)
        setCreating(true)
    }

    return (
            <div className={style.wrapper}>
                <div className={style.firstBlock}>
                    <h1 className={style.title}>Рассылка</h1>
                    <UploadButton  />
                    <div className={style.textareaDiv}>
                        <h2>Сообщение</h2>
                        <textarea placeholder={"Введите описание"} />
                        <p>Максимум - 4096 символов</p>
                    </div>
                    <div className={style.buttons}>
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
                                    <button onClick={() => handleChange({id: item.id, text: item.text, link : item.link})}>{item.text} <Pencil /></button>
                                </div>)}
                            </div>
                        </div>}
                    </div>
                    <div className={style.newsletterBtn}>
                        <BlueButton text={"Отправить рассылку"} width={"202px"} height={"44px"} />
                    </div>
                </div>
                <div className={style.secondBlock}>
                    <div className={style.settings}>
                        <h2 className={style.settingText}>Настройки сообщения</h2>
                        <div className={style.radio}>
                            <Switch defaultChecked onChange={onChange} />
                            <div>
                                <h2>Без уведомления</h2>
                                <p>Сообщение будет отправлено без уведомления</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.btnDiv}>
                        <button>Отправить тестовое сообщение</button>
                    </div>
                </div>
            </div>
    );
};

export default Newsletter;
