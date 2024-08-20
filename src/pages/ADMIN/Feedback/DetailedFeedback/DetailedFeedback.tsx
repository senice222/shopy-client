import React from "react";
import s from "./DetailedFeedback.module.scss";
import BackTick from "../../../../components/ADMIN/BackTick/BackTick";
import { PoleIcon } from "../Svgs";
import { Trash, Arrow, Arrow2, Copy } from "../../CategoriesAndProducts/Svg";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const DetailedFeedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className={s.detailedFeedback}>
      <div className={s.leftDiv}>
        <BackTick
          title={"Settings"}
          to="/panel"
          nestedTitle={"Feedback"}
          nestedTo={"/panel/settings/"}
        />
        <div className={s.topDiv}>
          <h1>Настройки обратной связи</h1>
          <p>Название обратной связи</p>
          <div className={s.btns}>
            <button className={s.gray}>Отмена</button>
            <button className={s.blue}>Сохранить</button>
          </div>
        </div>
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
                {...register("item.name", { required: true })}
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
                {...register("item.name", { required: true })}
                type="text"
                placeholder={"billing@untitledui.com"}
              />
            </div>
            <div className={s.loginBlock}>
              <p className={s.headingText}>Описание (выводится ниже)</p>
              <textarea
                {...register("item.name", { required: true })}
                placeholder={"Введите почту, на котору"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={s.rightDiv}></div>
    </div>
  );
};

export default DetailedFeedback;
