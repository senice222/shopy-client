import styles from "../../pages/FavoriteProducts/FavoriteProducts.module.scss";
import nothing from "../../assets/Illustrationnothing.png";
import BlueButton from "../Button/Button";
import React from "react";

const NothingYet = ({title, descr, btnText}: {title: string, descr: string, btnText: string}) => {
    return (
        <div className={styles.nothingYet}>
            <img src={nothing} alt="/"/>
            <h2>{title}</h2>
            <p>{descr}</p>
            <div>
                <BlueButton text={btnText} height={"48px"} width={"100%"} />
            </div>
        </div>
    );
};

export default NothingYet;
