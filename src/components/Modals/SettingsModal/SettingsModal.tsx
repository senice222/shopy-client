import React, {useEffect, useState} from 'react'
import styles from './SettingsModal.module.scss'
import {useTelegram} from "../../../hooks/useTelegram";

interface FullScreenModalProps {
    settingsOpen: boolean
    setSettingsOpen: any
}

const FullScreenModal: React.FC<FullScreenModalProps> = ({ settingsOpen, setSettingsOpen }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const { onBackButtonClick } = useTelegram();

    useEffect(() => {
        onBackButtonClick(() => setSettingsOpen(false));

        return () => {
            onBackButtonClick(null);
        };
    }, [onBackButtonClick]);

    const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTheme(event.target.value as 'light' | 'dark')
    }

    if (!settingsOpen) return null

    return (
        <div className={`${styles.modal} ${styles[theme]}`}>
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
                onClick={() => setSettingsOpen(false)}
                className={styles.closeButton}
            >
                Close
            </button>
        </div>
    )
}

export default FullScreenModal
