import React from "react";
import s from "../../DetailedFeedback/DetailedFeedback.module.scss";
import { TextSvg } from "../../Svgs";
import { Arrow2, Copy, Trash } from "../../../CategoriesAndProducts/Svg";
import { SavingDataSettings } from "../../SavingDataSettings/SavingDataSettings";

interface FeedBackTextAreaProps {
    name: string;
    placeholder: string;
    description: string;
    onNameChange: (newName: string) => void;
    onPlaceholderChange: (newPlaceholder: string) => void;
    onDescriptionChange: (newDescription: string) => void;
    moveBlockUp: () => void;
    moveBlockDown: () => void;
    copyBlock: () => void;
    deleteBlock: () => void;
    index: number;
    length: number

}

export const FeedBackTextArea: React.FC<FeedBackTextAreaProps> = ({
    name,
    placeholder,
    description,
    onNameChange,
    onPlaceholderChange,
    onDescriptionChange,
    moveBlockUp,
    moveBlockDown,
    copyBlock,
    deleteBlock,
    index,
    length
}) => {
    return (
        <div className={s.pole}>
            <p className={s.number}>Поле {index + 1}</p>
            <div className={s.topBtnsBlock}>
                <div className={s.nameDiv}>
                    <TextSvg />
                    <p>Текстовое поле в несколько строк</p>
                </div>
                <div className={s.btns}>
                    {index + 1 !== length && (
                        <div className={s.rotated} onClick={moveBlockDown}>
                            <Arrow2 />
                        </div>
                    )}
                    {index > 0 && (
                        <div onClick={moveBlockUp}>
                            <Arrow2 />
                        </div>
                    )}
                    <div onClick={copyBlock}>
                        <Copy />
                    </div>
                    <div onClick={deleteBlock}>
                        <Trash />
                    </div>
                </div>
                <div className={s.loginBlock}>
                    <p className={s.headingText}>Название поле</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => onNameChange(e.target.value)}
                        placeholder="Введите название"
                    />
                </div>
                <div className={s.loginBlock}>
                    <p className={s.headingText}>Плейсхолдер</p>
                    <textarea
                        value={placeholder}
                        onChange={(e) => onPlaceholderChange(e.target.value)}
                        placeholder="Введите плейсхолдер"
                    />
                </div>
                <div className={s.loginBlock}>
                    <p className={s.headingText}>Описание (выводится ниже)</p>
                    <textarea
                        value={description}
                        onChange={(e) => onDescriptionChange(e.target.value)}
                        placeholder="Введите описание"
                    />
                </div>
            </div>
            <SavingDataSettings />
        </div>
    );
};