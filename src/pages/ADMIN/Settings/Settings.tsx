import React, {useEffect, useState} from "react";
import style from "./Settings.module.scss";
import {Outlet, useNavigate} from 'react-router-dom'
import Feedback from "../Feedback/Feedback";
import Promocodes from "../../../components/ADMIN/Promocodes/Promocodes";


const Settings = () => {
    const [activeSection, setActiveSection] = useState("feedback");

    useEffect(() => {
        console.log("Section changed:", activeSection);
    }, [activeSection]);

    const renderSection = () => {
        console.log("Active Section:", activeSection);
        switch (activeSection) {
            case "feedback":
                return <Feedback />;
            case "promocodes":
                return <Promocodes />;
            default:
                return <Feedback />;
        }
    };

    return (
        <div className={style.wrapper}>
            <div className={style.firstBlock}>
                <h1 className={style.title}>Настройки</h1>
            </div>
            <div className={style.line}/>
            <div className={style.contentWrapper}>
                <div className={style.sideBar}>
                    <div
                        className={style.sideItem}
                        onClick={() => setActiveSection("bot-settings")}
                    >
                        <h2>Настройки бота</h2>
                    </div>
                    <div
                        className={style.sideItem}
                        onClick={() => setActiveSection("feedback")}
                    >
                        <h2>Обратная связь</h2>
                    </div>
                    <div
                        className={`${style.sideItem} ${activeSection === "services" ? style.active : ""}`}
                        onClick={() => setActiveSection("services")}
                    >
                        <h2>Сервисы</h2>
                    </div>
                    <div
                        className={style.sideItem}
                        onClick={() => setActiveSection("promocodes")}
                    >
                        <h2>Промокоды</h2>
                    </div>
                </div>
                <div className={style.content}>
                    {renderSection()}
                </div>
            </div>
        </div>
    );
};

export default Settings;
