import {Dispatch, FC, SetStateAction, useState} from "react";
import style from "./EditAccount.module.scss"
import {Input, Select} from "antd";
import spotify from "../../../../../assets/spotify.png";
import netflix from "../../../../../assets/netflix.png";
import BlueButton from "../../../../Button/Button";
import lock from "../../../../../assets/lock-02.png";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const {Option} = Select;
interface EditAccountProps {
    emailInput: string;
    setIsEdit: Dispatch<SetStateAction<boolean>>;
    onClose: () => void;
}

const EditAccount:FC<EditAccountProps> = ({emailInput, setIsEdit, onClose}) => {
    const [selected, setSelected] = useState<string>('Spotify');
    const [newEmail, setNewEmail] = useState(emailInput);

    const handleChange = (value: string) => {
        setSelected(value);
    };

    return (
        <>
            <div className={style.modalWinPopupHead}>
                <h3>Изменить данные</h3>
                <svg
                    onClick={() => setIsEdit(false)}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{cursor: 'pointer'}}
                >
                    <path
                        d="M18 6L6 18M6 6L18 18"
                        stroke="#98A2B3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <div className={style.securityDiv}>
                <div className={style.security}>
                    <img src={lock} alt="/"/>
                    <p>Все данные надёжно защищены</p>
                </div>
            </div>
            <div className={style.form}>
                <div className={style.item}>
                    <p className={style.title}>Сервис</p>
                    <Select
                        className={style.select}
                        value={selected}
                        onChange={handleChange}
                    >
                        <Option value="Spotify" className={style.option}>
                            <div
                                className={selected === "Spotify" ? `${style.selectItem} ${style.selected}` : style.selectItem}>
                                <img src={spotify} alt="/"/>
                                <p>Spotify</p>
                            </div>
                        </Option>
                        <Option value="Netflix" className={style.option}>
                            <div
                                className={selected === "Netflix" ? `${style.selectItem} ${style.selected}` : style.selectItem}>
                                <img src={netflix} alt="/"/>
                                <p>Netflix</p>
                            </div>
                        </Option>
                    </Select>
                </div>
                <div className={style.item}>
                    <p className={style.title}>Почта или логин</p>
                    <Input className={style.input} value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder="olivia@mshopy.ru"/>
                </div>
                <div className={style.item}>
                    <p className={style.title}>Пароль</p>
                    <Input.Password
                        className={style.input}
                        value={"your password"}
                        placeholder="****"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </div>
                <div style={{width: "100%", marginTop: "20px"}}>
                    <BlueButton text={"Сохранить"} height={"44px"} width={"100%"}/>
                </div>
            </div>
        </>
    );
};

export default EditAccount;
