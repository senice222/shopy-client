import style from './Button.module.scss'
import {FC} from "react";

interface ButtonProps {
    text: string;
    height?: string;
    width?: string;
    fontSize?: string;
}

const BlueButton: FC<ButtonProps> = ({text, height, width, fontSize}) => {
    return (
        <button className={style.blue} style={{height, width, fontSize}}>{text}</button>
    );
};

export default BlueButton;
