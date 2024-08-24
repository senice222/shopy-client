import React, {FC, useState} from 'react';
import {AdminModal} from "../AdminModal/AdminModal";
import style from './AddPromo.module.scss'
import BlueButton from "../../Button/Button";
import {useSWRConfig} from "swr";
import {fetcher, url} from "../../../core/fetch";

const AddPromo: FC<{ open: boolean, setOpen: any }> = ({open, setOpen}) => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const { mutate } = useSWRConfig();

    const handleSubmit = async () => {
        setIsSubmitted(true);

        if (title.trim() === '' || description.trim() === '') {
            return;
        }

        try {
            const token = localStorage.getItem('token')
            const newPromo = {
                title,
                description,
                expireAt: new Date().toISOString(),
                discount: 10,
                amountUsed: 0,

            };

            await mutate('/api/promos', fetcher(`${url}/api/promo/create`, {
                body: JSON.stringify(newPromo),
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }));
            setOpen(false);

            setTitle('');
            setDescription('');
            setIsSubmitted(false);
        } catch (err) {
            console.error("Error creating promo:", err);
        }
    };

    return (
        <AdminModal isOpened={open} setOpen={() => setOpen((prev: boolean) => !prev)}>
            <div className={style.wrapper}>
                <h2>Добавить промокод</h2>
                <p>Он будет виден при нажатии на выбранный вариант товара.</p>
                <div className={style.inputsWrapper}>
                    <p>Промокод</p>
                    <input
                        type="text"
                        placeholder="Акция"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {isSubmitted && title.trim() === '' && <p className={style.error}>Заголовок обязателен</p>}
                </div>
                <div className={style.inputsWrapper}>
                    <p>Срок действия</p>
                    <input
                        type="text"
                        placeholder="Описание акции"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {isSubmitted && description.trim() === '' && <p className={style.error}>Описание обязательно</p>}
                </div>
                <div className={style.inputsWrapper}>
                    <p>Описание</p>
                    <input
                        type="text"
                        placeholder="Описание акции"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {isSubmitted && description.trim() === '' && <p className={style.error}>Описание обязательно</p>}
                </div>
                <div className={style.btns}>
                    <button className={style.white} onClick={() => setOpen(false)}>Закрыть</button>
                    <div onClick={handleSubmit}>
                        <BlueButton
                            text="Добавить"
                            fontSize="16px"
                            height="44px"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
        </AdminModal>
    );
};

export default AddPromo;
