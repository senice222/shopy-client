import s from './AddBalance.module.scss'
import {AdminModal} from "../../AdminModal/AdminModal";
import React, {FC, useState} from "react";
import {motion} from "framer-motion";
interface AddBalanceI {
    setOpen: () => void,
    isOpened: boolean
}
export const AddBalance : FC<AddBalanceI> = ({setOpen, isOpened}) => {
    const [type, setType] = useState('digital')
    const [value, setValue] = useState('')
    const [balance, setBalance] = useState('')
    const handleClose =() => {

    }
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
                    <input disabled={true} value={value} placeholder={'2000'}/>
                </div>
            </div>
            <div className={s.lastbtns}>
                <button onClick={handleClose} className={s.grayBtn}>Отмена</button>
                <button className={s.blueBtn}>Изменить</button>
            </div>
        </AdminModal>
    )
}