import style from './Button.module.scss'
import {FC} from "react";

interface ButtonProps {
    text: string;
    height?: string;
    width?: string;
    fontSize?: string;
    letterSpacing?: string;
}

const BlueButton: FC<ButtonProps> = ({text, height, width, fontSize, letterSpacing}) => {
    return (
        <button className={style.blue} style={{height, width, fontSize, letterSpacing}}>{text}</button>
    );
};

export default BlueButton;
