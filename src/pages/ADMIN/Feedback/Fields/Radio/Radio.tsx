import s from "../../DetailedFeedback/DetailedFeedback.module.scss";
import {PoleIcon, RadioSvg} from "../../Svgs";
import {Arrow2, Copy, Trash} from "../../../CategoriesAndProducts/Svg";
import {SavingDataSettings} from "../../SavingDataSettings/SavingDataSettings";
import React, {FC, useState} from "react";
import {Cross} from "../../../../../components/Modals/AdminModal/Svgs";
interface Variant {
    name: string;
    id: string;
}

interface ItemProps {
    name: string;
    id: string;
    onNameChange: (id: string, newName: string) => void;
    onDelete: (id: string) => void;
}

const Item: FC<ItemProps> = ({ name, id, onNameChange, onDelete }) => {
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onNameChange(id, e.target.value);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className={s.radioItem}>
            <input
                value={name}
                className={s.text}
                onChange={handleNameChange}
            />
            <div className={s.cross} onClick={handleDelete}>
                <Cross />
            </div>
        </div>
    );
};

export const FeedBackRadio = () => {
    const [variants, setVariants] = useState<Variant[]>([
        { name: 'First', id: '1' },
        { name: 'Second', id: '2' },
        { name: 'Third', id: '3' },
    ]);

    const handleNameChange = (id: string, newName: string) => {
        setVariants(prevVariants =>
            prevVariants.map(variant =>
                variant.id === id ? { ...variant, name: newName } : variant
            )
        );
    };

    const handleDelete = (id: string) => {
        setVariants(prevVariants => prevVariants.filter(variant => variant.id !== id));
    };

    const handleAddVariant = () => {
        const newId = `${variants.length + 1}`; // Генерация нового id
        setVariants([...variants, { name: `New variant ${newId}`, id: newId }]);
    };

    return (
        <div className={s.pole}>
            <p className={s.number}>Поле 2</p>
            <div className={s.topBtnsBlock}>
                <div className={s.nameDiv}>
                    <RadioSvg />
                    <p>Радио-кнопки</p>
                </div>
                <div className={s.btns}>
                    <div className={s.rotated}>
                        <Arrow2 />
                    </div>
                    <div>
                        <Arrow2 />
                    </div>
                    <div>
                        <Copy />
                    </div>
                    <div>
                        <Trash />
                    </div>
                </div>
                <div className={s.loginBlock}>
                    <p className={s.headingText}>Название поле</p>
                    <input
                        type="text"
                        placeholder={"Логин для входа"}
                    />
                </div>
                <div className={s.loginBlock}>
                    <p className={s.headingText}>Плейсхолдер</p>
                    <input
                        type="text"
                        placeholder={"billing@untitledui.com"}
                    />
                </div>
                <div className={s.loginBlock}>
                    <p className={s.headingText}>Варианты ответов</p>
                    <div className={s.variants}>
                        {variants.map(item => (
                            <Item
                                key={item.id}
                                name={item.name}
                                id={item.id}
                                onNameChange={handleNameChange}
                                onDelete={handleDelete}
                            />
                        ))}
                    </div>
                    <button className={s.buttonAdd} onClick={handleAddVariant}>
                        + Добавить
                    </button>
                </div>

                <div className={s.loginBlock}>
                    <p className={s.headingText}>Описание (выводится ниже)</p>
                    <textarea
                        placeholder={"Введите почту, на котору"}
                    />
                </div>
            </div>
            <SavingDataSettings />
        </div>
    );
};