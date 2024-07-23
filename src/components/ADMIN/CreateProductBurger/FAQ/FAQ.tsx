import style from './FAQ.module.scss'
import BlueButton from "../../../Button/Button";

const QuestionsFAQ = () => {
    return (
        <div className={style.faq}>
            <h2>Часто задаваемые вопросы</h2>
            <div className={style.form}>
                <label htmlFor="">Вопрос</label>
                <input type="text" placeholder={"Marketing site redesign"}/>
                <label htmlFor="">Ответ</label>
                <input type="text" placeholder={"Marketing site redesign"}/>
            </div>
            <div className={style.btnDiv}>
                <BlueButton text={"Добавить вопрос"} width={"100%"} height={"44px"} />
            </div>
        </div>
    );
};

export default QuestionsFAQ;
