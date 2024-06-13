import style from './AddAccountModal.module.scss'
import './antd.scss'
import BootstrapModal from "../../BootstrapModal/BootstrapModal";
import spotify from '../../../../assets/spotify.png'
import yt from '../../../../assets/youtube.png'
import netflix from '../../../../assets/netflix.png'
import {Input, Select} from "antd";
import {useState} from "react";
import BlueButton from "../../../Button/Button";
import lock from "../../../../assets/lock-02.png";

interface AccountProps {
    addAccount: boolean;
    onClose: () => void;
}

const { Option } = Select;

const AddAccountModal = ({addAccount, onClose}: AccountProps) => {
    const [selected, setSelected] = useState<string>('');

    const handleChange = (value: string) => {
        setSelected(value);
    };

    return (
        <BootstrapModal active={addAccount}>
            <div className={style.modalWinPopupHead}>
                <h3>Добавить аккаунт</h3>
                <svg
                    onClick={onClose}
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
            <div className={style.form}>
                <div className={style.item}>
                    <p className={style.title}>Сервис</p>
                    <Select
                        className={style.select}
                        onChange={handleChange}
                    >
                        <Option value="Spotify" className={style.option}>
                            <div className={selected === "Spotify" ? `${style.selectItem} ${style.selected}` : style.selectItem}>
                                <img src={spotify} alt="/"/>
                                <p>Spotify</p>
                            </div>
                        </Option>
                        <Option value="Netflix" className={style.option}>
                            <div className={selected === "Netflix" ? `${style.selectItem} ${style.selected}` : style.selectItem}>
                                <img src={netflix} alt="/"/>
                                <p>Netflix</p>
                            </div>
                        </Option>
                    </Select>
                </div>
                <div className={style.item}>
                    <p className={style.title}>Почта или логин</p>
                    <Input className={style.input} placeholder="olivia@mshopy.ru"/>
                </div>
                <div className={style.item}>
                    <p className={style.title}>Почта</p>
                    <Input className={style.input} placeholder="*******"/>
                </div>
                <div style={{width: "100%", marginTop: "20px"}}>
                    <BlueButton text={"Добавить"} height={"44px"} width={"100%"} />
                </div>
                <div className={style.securityDiv}>
                    <div className={style.security}>
                        <img src={lock} alt="/"/>
                        <p>Все данные надёжно защищены</p>
                    </div>
                </div>
            </div>
        </BootstrapModal>
    );
};

export default AddAccountModal;
