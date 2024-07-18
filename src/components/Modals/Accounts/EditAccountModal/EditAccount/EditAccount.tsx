import {ChangeEvent, Dispatch, FC, SetStateAction, useState} from "react";
import style from "./EditAccount.module.scss"
import {Input, notification, Select} from "antd";
import spotify from "../../../../../assets/spotify.png";
import netflix from "../../../../../assets/netflix.png";
import BlueButton from "../../../../Button/Button";
import lock from "../../../../../assets/lock-02.png";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {useSWRConfig} from "swr";
import {fetcher, url} from "../../../../../core/fetch";
import {useTelegram} from "../../../../../hooks/useTelegram";
import {Controller, FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {imgs} from "../../../../../utils/imgs";
import SuccessModal from "../../../SuccessModal/SuccessModal";

const {Option} = Select;

interface EditAccountProps {
    emailInput: string;
    setIsEdit: Dispatch<SetStateAction<boolean>>;
    onClose: () => void;
    inputRef: any;
    account: {
        id: string;
        service: string;
        email: string;
        password: string;
        image: string;
    }
}

const EditAccount:FC<EditAccountProps> = ({inputRef, account, onClose, setIsEdit}) => {
    const [editSuccess, setEditSuccess] = useState<boolean>(false)
    const [selected, setSelected] = useState<string>(account.service);
    const { handleSubmit, formState: { errors }, control } = useForm();
    const {mutate} = useSWRConfig()
    const {id} = useTelegram()

    const handleChange = (value: string) => {
        setSelected(value);
    };

    const onSubmit: SubmitHandler<FieldValues>  = (data) => {
        const withImg = {
            id: account.id,
            service: selected,
            ...data,
            image: imgs[selected]
        }

        mutate(`${url}/api/user/account/${id}`, fetcher(`${url}/api/user/account/${id}`, {
            method: "PUT",
            body: JSON.stringify(withImg),
            headers: {
                'Content-Type': 'application/json'
            }
        }))
        notification.success({
            message: "Вы успешно изменили свой аккаунт.",
            duration: 20
        })
        onClose()
    }

    return (
        <>
            <SuccessModal isOpen={editSuccess} setOpen={setEditSuccess} message={"Вы успешно изменили данные."} />
            <div className={style.modalWinPopupHead}>
                <h3>Изменить данные</h3>
                <svg
                    onClick={() => setIsEdit(false)}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ cursor: 'pointer' }}
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
                    <img src={lock} alt="/" />
                    <p>Все данные надёжно защищены</p>
                </div>
            </div>
            <div className={style.form}>
                <form onSubmit={handleSubmit(onSubmit)} ref={inputRef}>
                    <div className={style.item}>
                        <p className={style.title}>Сервис</p>
                        <Select
                            className={style.select}
                            value={selected}
                            onChange={handleChange}
                        >
                            <Option value="Spotify" className={style.option}>
                                <div className={selected === "Spotify" ? `${style.selectItem} ${style.selected}` : style.selectItem}>
                                    <img src={spotify} alt="/" />
                                    <p>Spotify</p>
                                </div>
                            </Option>
                            <Option value="Netflix" className={style.option}>
                                <div className={selected === "Netflix" ? `${style.selectItem} ${style.selected}` : style.selectItem}>
                                    <img src={netflix} alt="/" />
                                    <p>Netflix</p>
                                </div>
                            </Option>
                        </Select>
                        {errors.service && <div className={style.error}>{(errors.service.message as string)}</div>}
                    </div>
                    <div className={style.item}>
                        <p className={style.title}>Почта или логин</p>
                        <Controller
                            name="email"
                            control={control}
                            rules={{ required: 'Введите почту или логин' }}
                            defaultValue={account.email}
                            render={({ field }) => (
                                <Input
                                    className={style.input}
                                    {...field}
                                />
                            )}
                        />
                        {errors.email && <div className={style.error}>{(errors.email.message as string)}</div>}
                    </div>
                    <div className={style.item}>
                        <p className={style.title}>Пароль</p>
                        <Controller
                            name="password"
                            control={control}
                            rules={{ required: 'Введите пароль' }}
                            defaultValue={account.password}
                            render={({ field }) => (
                                <Input.Password
                                    className={style.inputPass}
                                    {...field}
                                    placeholder="****"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            )}
                        />
                        {errors.password && <span className={style.error}>{(errors.password.message as string)}</span>}
                    </div>
                    <div style={{ width: "100%", marginTop: "20px" }}>
                        <BlueButton text={"Сохранить"} height={"44px"} width={"100%"} />
                    </div>
                </form>
            </div>
        </>
    );
};

export default EditAccount;
