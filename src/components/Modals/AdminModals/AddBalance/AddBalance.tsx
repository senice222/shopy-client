import s from './AddBalance.module.scss'
import {AdminModal} from "../../AdminModal/AdminModal";
import React, {FC, useEffect, useState} from "react";
import {motion} from "framer-motion";
import useSWR, {useSWRConfig} from "swr";
import {fetcher, url} from "../../../../core/fetch";
import Loader from "../../../Loader/Loader";
import {useDebounce} from "../../../../hooks/useDebouce";
import axios from "axios";
import {notification} from "antd";

interface AddBalanceI {
    setOpen: () => void,
    isOpened: boolean,
    id?: number,
}

export const AddBalance : FC<AddBalanceI> = ({id, setOpen, isOpened}) => {
    const [type, setType] = useState('increase')
    const [value, setValue] = useState('')
    const debouncedValue = useDebounce(value, 400)
    const [balance, setBalance] = useState()
    const {data: user} = useSWR(`${url}/api/user/${id}`, fetcher)
    const {mutate} = useSWRConfig()

    useEffect(() => {
        if (user) {
            let newBalance = user.balance;
            if (type === 'increase') {
                newBalance += +debouncedValue;
            } else if (type === 'decrease') {
                newBalance -= +debouncedValue;
            }
            setBalance(newBalance);
        }
    }, [debouncedValue, type, user]);

    const addBalance = async () => {
        try {
            const body = {
                balance
            }
            await axios.put(`${url}/api/user-balance/${id}`, body)
            mutate(`${url}/api/user/${id}`)
            mutate(`${url}/api/users`)

            notification.success({
                message: "Вы успешно изменили баланс.",
                duration: 1.5
            })
            setOpen()
        } catch (e) {
            console.log(e)
        }
    }

    const handleClose = () => { }

    if (!user) return <Loader />

    return (
        <AdminModal setOpen={setOpen} isOpened={isOpened}>
            <h2>Изменить баланс</h2>
            <p>Введите необходиые значения</p>
            <div className={s.typeWrapper}>
                <div className={'type'}>
                    <div className="items">
                        <motion.div
                            onClick={() => setType('increase')}
                            className={`item ${type === 'increase' ? 'active' : ''}`}
                            animate={{ opacity: type === 'increase' ? 1 : 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            Увеличить
                        </motion.div>
                        <motion.div
                            onClick={() => setType('decrease')}
                            className={`item ${type === 'decrease' ? 'active' : ''}`}
                            animate={{ opacity: type === 'decrease' ? 1 : 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            Уменьшить
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className={s.blocks}>
                <div className={s.block}>
                    <h3>Введите значение</h3>
                    <input value={value} onChange={(e) => setValue(e.target.value)} placeholder={'Например, 300'}/>
                </div>
                <div className={s.block}>
                    <h3>Итоговый баланс клиента</h3>
                    <input disabled={true} value={balance} placeholder={balance} />
                </div>
            </div>
            <div className={s.lastbtns}>
                <button onClick={handleClose} className={s.grayBtn}>Отмена</button>
                <button className={s.blueBtn} onClick={addBalance}>Изменить</button>
            </div>
        </AdminModal>
    )
}