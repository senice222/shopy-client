import s from "../../DetailedFeedback/DetailedFeedback.module.scss";
import {PoleIcon} from "../../Svgs";
import {Arrow2, Copy, Trash} from "../../../CategoriesAndProducts/Svg";
import {SavingDataSettings} from "../../SavingDataSettings/SavingDataSettings";
import React from "react";

export const FeedBackInput = () => {
    return (
        <div className={s.pole}>
            <p className={s.number}>Поле 1</p>
            <div className={s.topBtnsBlock}>
                <div className={s.nameDiv}>
                    <PoleIcon />
                    <p>Поле для ввода в одну строку</p>
                </div>
                <div className={s.btns}>
                    <div className={s.rotated}>
                        <Arrow2 />
                    </div>
                    <div>
                        <Arrow2 />
                    </div>
                    <div>
                        <Copy />
                    </div>
                    <div>
                        <Trash />
                    </div>
                </div>
                <div className={s.loginBlock}>
                    <p className={s.headingText}>Название поле</p>
                    <input
                        type="text"
                        placeholder={"Логин для входа"}
                    />
                    {/* {errors.email && <p className={s.error}>Поле обязательно</p>}
                                            <p className={s.descr}>
                                                {item.description}
                                            </p> */}
                </div>
                <div className={s.loginBlock}>
                    <p className={s.headingText}>Плейсхолдер</p>
                    <input
                        type="text"
                        placeholder={"billing@untitledui.com"}
                    />
                </div>
                <div className={s.loginBlock}>
                    <p className={s.headingText}>Описание (выводится ниже)</p>
                    <textarea
                        placeholder={"Введите почту, на котору"}
                    />
                </div>
            </div>
            <SavingDataSettings />
        </div>
    )
}