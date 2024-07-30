import React, {FC, useEffect} from 'react'
import styles from './SettingsPage.module.scss'
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";


const SettingsPage: FC = () => {
    const { onBackButtonClick } = useTelegram();
    const navigate = useNavigate()

    useEffect(() => {
        onBackButtonClick(() => navigate('/'));

        return () => {
            onBackButtonClick(null);
        };
    }, [onBackButtonClick, navigate]);


    return (
        <div className={styles.settingsContainer}>
            <div className={styles.content}>
                <h2>Settings</h2>
                макет для настроек
            </div>
        </div>
    )
}

export default SettingsPage
