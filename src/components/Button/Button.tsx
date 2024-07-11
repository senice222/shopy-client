import style from './Button.module.scss'
import {FC} from "react";
import {ClipLoader} from "react-spinners";

interface ButtonProps {
    text: string;
    height?: string;
    width?: string;
    fontSize?: string;
    letterSpacing?: string;
    loading?: boolean
}

const BlueButton: FC<ButtonProps> = ({text, height, width, fontSize, letterSpacing, loading}) => {
    return (
        <button className={style.blue} style={{height, width, fontSize, letterSpacing}}>
            {loading ? (
                <ClipLoader size={20} color={'#ffffff'} loading={true} />
            ) : (
                text
            )}
        </button>
    );
};

export default BlueButton;
