import React from "react";
import s from "./DetailedFeedback.module.scss";
import BackTick from "../../../../components/ADMIN/BackTick/BackTick";
import {PoleIcon, RadioSvg, TextSvg} from "../Svgs";
import {Trash, Arrow, Arrow2, Copy, Plus} from "../../CategoriesAndProducts/Svg";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {SavingDataSettings} from "../SavingDataSettings/SavingDataSettings";
import {FeedBackInput} from "../Fields/Input/Input";
import {FeedBackRadio} from "../Fields/Radio/Radio";

const DetailedFeedback = () => {

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
        <FeedBackInput />
        <FeedBackRadio />
        <div className={s.lastBtns}>
          <div className={s.btns}>
            <button className={s.gray}>Отмена</button>
            <button className={s.blue}>Сохранить</button>
          </div>
        </div>
      </div>
      <div className={s.rightDiv}>
        <div className={s.addBlock}>
          <h3>Добавить блок</h3>

          <div className={s.blocks}>
            <div className={s.block}>
              <div className={s.flex12}>
                <div className={s.icon}><PoleIcon /></div>
                <p>Поле для ввода в одну строку</p>
              </div>
              <button><Plus /> Добавить</button>
            </div>
            <div className={s.block}>
              <div className={s.flex12}>
                <div className={s.icon}><TextSvg /></div>
                <p>Текстовое поле в несколько строк</p>
              </div>
              <button><Plus /> Добавить</button>
            </div>
            <div className={s.block}>
              <div className={s.flex12}>
                <div className={s.icon}><RadioSvg /></div>
                <p>Радио-кнопки</p>
              </div>
              <button><Plus /> Добавить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedFeedback;
