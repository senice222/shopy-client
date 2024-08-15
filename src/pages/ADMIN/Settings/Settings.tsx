import React from "react";
import style from "./Settings.module.scss";
import {Outlet} from 'react-router-dom'
const Settings = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.firstBlock}>
        <h1 className={style.title}>Настройки</h1>
      </div>
      <div  className={style.line}/>
      <div className={style.contentWrapper}>
          <div className={style.sideBar}>
            <div className={style.sideItem}>
              <h2>Настройки бота</h2>
            </div>
            <div className={style.sideItem}>
              <h2>Обратная связь</h2>
            </div>
            <div className={`${style.sideItem} ${style.active}`}>
              <h2>Сервисы</h2>
            </div>
            <div className={style.sideItem}>
              <h2>Промокоды</h2>
            </div>
          </div>
          <div className={style.content}>
            <Outlet />
          </div>
      </div>
    </div>
  );
};

export default Settings;
