import { Dispatch, SetStateAction, useState } from 'react';
import BlueButton from '../../../Button/Button'
import { AdminModal } from '../../AdminModal/AdminModal'
import style from './Banner.module.scss'

interface BannerProps {
    description: string;
    setDescription: Dispatch<SetStateAction<string>>;
    title: string;
    setTitle: Dispatch<SetStateAction<string>>;
    banner: boolean;
    setBanner: any
}

const Banner: React.FC<BannerProps> = ({ description, setDescription, title, setTitle, banner, setBanner }) => {
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleSubmit = () => {
        if (title.trim() === '' || description.trim() === '') {
            setIsSubmitted(true); 
            return;
        }
        setBanner(false);
    };

    return (
        <AdminModal isOpened={banner} setOpen={setBanner}>
            <div className={style.wrapper}>
                <h2>Добавить баннер</h2>
                <p>Он будет виден при нажатии на выбранный вариант товара.</p>
                <div className={style.inputsWrapper}>
                    <p>Заголовок виджета</p>
                    <input
                        type="text"
                        placeholder="Акция"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {isSubmitted && title.trim() === '' && <p className={style.error}>Заголовок обязателен</p>}
                </div>
                <div className={style.inputsWrapper}>
                    <p>Описание виджета</p>
                    <input
                        type="text"
                        placeholder="Описание акции"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    {isSubmitted && description.trim() === '' && <p className={style.error}>Описание обязательно</p>}
                </div>
                <div className={style.btns}>
                    <button className={style.white} onClick={() => setBanner(false)}>Закрыть</button>
                    <div>
                        <BlueButton
                            text="Добавить"
                            fontSize="16px"
                            height="44px"
                            width="100%"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </AdminModal>
    )
}

export default Banner