import { AdminModal } from '../../AdminModal/AdminModal'
import style from './Banner.module.scss'

const Banner = ({banner, setBanner}: {banner: boolean, setBanner: any}) => {
    return (
        <AdminModal isOpened={banner} setOpen={setBanner}>Banner</AdminModal>
    )
}

export default Banner