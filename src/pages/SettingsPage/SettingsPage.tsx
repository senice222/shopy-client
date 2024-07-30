import React, {FC, useEffect, useState} from 'react'
import styles from './SettingsPage.module.scss'
import {useTelegram} from "../../hooks/useTelegram";
import {useNavigate} from "react-router-dom";



const SettingsPage: FC = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const { onBackButtonClick } = useTelegram();
    const navigate = useNavigate()

    useEffect(() => {
        onBackButtonClick(() => navigate('/'));

        return () => {
            onBackButtonClick(null);
        };
    }, [onBackButtonClick, navigate]);

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value as 'light' | 'dark')
    }

    return (
        <div className={styles.settingsContainer}>
            <h2>Settings</h2>
            <label htmlFor="theme-select">Theme:</label>
            <select
                id="theme-select"
                value={theme}
                onChange={handleThemeChange}
                className={styles.select}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            <button
                className={styles.closeButton}
            >
                Close
            </button>
        </div>
    )
}

export default SettingsPage
