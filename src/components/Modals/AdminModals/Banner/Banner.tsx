import BlueButton from '../../../Button/Button'
import { AdminModal } from '../../AdminModal/AdminModal'
import style from './Banner.module.scss'

const Banner = ({ banner, setBanner }: { banner: boolean, setBanner: any }) => {
    return (
        <AdminModal isOpened={banner} setOpen={setBanner}>
            <div className={style.wrapper}>
                <h2>Добавить баннер</h2>
                <p>Он будет виден при нажатии на выбранный вариант товара.</p>
                <div className={style.inputsWrapper}>
                    <p>Заголовок виджета</p>
                    <input type="text" placeholder='Акция' />
                </div>
                <div className={style.inputsWrapper}>
                    <p>Описание виджета</p>
                    <input type="text" placeholder='Описание акции' />
                </div>
                <div className={style.btns}>
                    <button className={style.white} onClick={() => setBanner(false)}>Закрыть</button>
                    <div>
                        <BlueButton text='Добавить' fontSize='16px' height='44px' width='100%' />
                    </div>
                </div>
            </div>
        </AdminModal>
    )
}

export default Banner