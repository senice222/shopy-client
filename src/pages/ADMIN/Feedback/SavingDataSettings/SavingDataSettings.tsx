import {FC, useEffect, useRef, useState} from "react";
import styles from './SavingDataSettings.module.scss'
import {ArrowDown} from "../Svgs";
import {CheckBox} from "../../../../components/CheckBox/CheckBox";

interface SavingDataSettingsI {
    // setOpenSavingData:
}

export const SavingDataSettings : FC<SavingDataSettingsI> = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState('0px');
    const [notSave, setNotSave] = useState(false)
    const [everyTime, setEveryTime] = useState(false)

    // Указываем тип для contentRef как HTMLDivElement или null
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleSettings = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // Проверяем, что contentRef.current не равен null перед доступом к scrollHeight
        if (contentRef.current) {
            setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        }
    }, [isOpen]);

    return (
        <div className={styles.settingsContainer}>
            <div className={styles.header} onClick={toggleSettings}>
                <span>Настройки сохранения данных</span>
                <span>{isOpen ? <div style={{transform: 'rotate(180deg)', display: 'flex', alignItems: 'center'}}>{<ArrowDown />}</div> : <ArrowDown />}</span>
            </div>
            <div
                className={styles.contentWrapper}
                style={{ height: height }}
                ref={contentRef}
            >
                <div className={styles.content}>
                    <div className={styles.checkboxdiv}>
                        <div className={styles.checkbox}><CheckBox setChecked={setNotSave}/></div>
                        <div className={styles.textDiv}>
                            <label htmlFor="dontSave">Не сохранять данные</label>
                            <p>Эти данные не будут сохраняться. Работает, если включена настройка “Сохранять для клиента”.</p>
                        </div>
                    </div>
                    <div className={styles.checkboxdiv}>
                        <div className={styles.checkbox}><CheckBox setChecked={setEveryTime}/></div>
                        <div className={styles.textDiv}>
                            <label htmlFor="dontSave">Запрашивать у клиента каждый раз при покупке</label>
                            <p>Это поле будет выводиться каждый раз при покупке. Работает, если включена настройка “Не сохранять данные”.</p>
                        </div>
                    </div>
                    {/*<div>*/}
                    {/*    <div className={styles.checkboxdiv}>*/}
                    {/*        <div className={styles.checkbox}><CheckBox setChecked={setEveryTime}/></div>*/}
                    {/*        <label htmlFor="askEveryTime">Запрашивать у клиента каждый раз при покупке</label>*/}
                    {/*    </div>*/}
                    {/*    <p>Это поле будет выводиться каждый раз при покупке. Работает, если включена настройка "Не сохранять данные".</p>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};
