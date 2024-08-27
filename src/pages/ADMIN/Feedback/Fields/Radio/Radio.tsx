import React from "react";
import s from "../../DetailedFeedback/DetailedFeedback.module.scss";
import { RadioSvg } from "../../Svgs";
import { Arrow2, Copy, Trash } from "../../../CategoriesAndProducts/Svg";
import { SavingDataSettings } from "../../SavingDataSettings/SavingDataSettings";
import { Cross } from "../../../../../components/Modals/AdminModal/Svgs";

interface Variant {
    name: string;
    id: string;
}

interface FeedBackRadioProps {
    name: string;
    placeholder: string;
    description: string;
    variants: Variant[];
    onNameChange: (newName: string) => void;
    onPlaceholderChange: (newPlaceholder: string) => void;
    onDescriptionChange: (newDescription: string) => void;
    onVariantChange: (id: string, newName: string) => void;
    onAddVariant: () => void;
    onDeleteVariant: (id: string) => void;
    moveBlockUp: () => void;
    moveBlockDown: () => void;
    copyBlock: () => void;
    deleteBlock: () => void;
    index: number; // Добавляем индекс для отображения номера
    length: number

}

export const FeedBackRadio: React.FC<FeedBackRadioProps> = ({
                                                                name,
                                                                placeholder,
                                                                description,
                                                                variants,
                                                                onNameChange,
                                                                onPlaceholderChange,
                                                                onDescriptionChange,
                                                                onVariantChange,
                                                                onAddVariant,
                                                                onDeleteVariant,
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
                    <RadioSvg />
                    <p>Радио-кнопки</p>
                </div>
                <div className={s.btns}>
                    {index+1 !== length && (
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
                    <input
                    type="text"
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
                <div className={s.variantsBlock}>
                    <p className={s.headingText}>Варианты</p>
                    {variants.map((variant) => (
                        <div key={variant.id} className={s.radioItem}>
                            <input
                                type="text"
                                className={s.text}
                                value={variant.name}
                                onChange={(e) => onVariantChange(variant.id, e.target.value)}
                                placeholder="Введите вариант"
                            />
                            <div className={s.cross} onClick={() => onDeleteVariant(variant.id)}>
                                <Cross />
                            </div>
                        </div>
                    ))}
                    <button className={s.buttonAdd} onClick={onAddVariant}>Добавить вариант</button>
                </div>
            </div>
            <SavingDataSettings />
        </div>
    );
};