import React, {FC} from "react";
import style from "./TopItem.module.scss";

interface TopItemProps {
    text: string
}

const TopItem: FC<TopItemProps> = ({text}) => {
    return (
        <div className={style.titleDiv}>
            <h1>{text}</h1>
        </div>
    );
};

export default TopItem;
