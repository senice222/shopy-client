import { Dispatch, FC, useState, SetStateAction, ChangeEvent } from 'react';
import s from "./VariantsTable.module.scss";
import BlueButton from "../../../Button/Button";
import { Properties, Variant, VariantItem } from "../../../../interfaces/Product";
import { Pencil } from '../../../Modals/AdminModals/UserMessage/Svgs';
import { Copy, Eye, Trash, Message, Percent } from '../../../../pages/ADMIN/CategoriesAndProducts/Svg';
import Banner from '../../../Modals/AdminModals/Banner/Banner';

interface VariantsTableProps {
    description: string;
    setDescription: Dispatch<SetStateAction<string>>;
    titleBanner: string;
    setTitleBanner: Dispatch<SetStateAction<string>>;
    variants: Variant;
    setVariants: Dispatch<SetStateAction<Variant>>;
}

const VariantsTable: FC<VariantsTableProps> = ({ description, setDescription, titleBanner, setTitleBanner, variants, setVariants }) => {
    const [banner, setBanner] = useState<boolean>(false)
    const [editingCell, setEditingCell] = useState<{ rowIndex: number, valueIndex: number } | null>(null);
    const [tempValue, setTempValue] = useState<string>('');
    const [editingProperty, setEditingProperty] = useState<number | null>(null);
    const [tempPropertyText, setTempPropertyText] = useState<string>('');

    const handlePropertyClick = (index: number, currentText: string) => {
        setEditingProperty(index);
        setTempPropertyText(currentText);
    };
    const handleCellClick = (rowIndex: number, valueIndex: number, currentValue: string) => {
        setEditingCell({ rowIndex, valueIndex });
        setTempValue(currentValue);
    };

    const handlePropertyBlur = () => {
        if (editingProperty !== null) {
            const newProperties = [...variants.properties];
            newProperties[editingProperty].text = tempPropertyText;
            setVariants({
                ...variants,
                properties: newProperties
            });
            setEditingProperty(null);
        }
    };
    const handleBlur = () => {
        if (editingCell !== null) {
            const newVariants = { ...variants };
            newVariants.items[editingCell.rowIndex].values[editingCell.valueIndex].value = tempValue;
            setVariants(newVariants);
            setEditingCell(null);
        }
    };

    const handlePropertyInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTempPropertyText(e.target.value);
    };
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTempValue(e.target.value);
    };

    const handleAddVariant = () => {
        const newVariant: VariantItem = {
            price: 0,
            oldPrice: 0,
            _id: Date.now().toString(),
            visible: true,
            img: '',
            quantity: 0,
            attachedId: '',
            values: variants.properties.map(prop => ({ id: prop.id, value: '' }))
        };

        setVariants(prev => ({
            ...prev,
            items: [...prev.items, newVariant]
        }));
    };

    const handleAddProperty = () => {
        const newProperty: Properties = {
            id: Date.now().toString(),
            text: 'Новое свойство',
            _id: Date.now().toString()
        };

        setVariants(prev => ({
            ...prev,
            properties: [...prev.properties, newProperty]
        }));

        setVariants((prev: Variant) => ({
            ...prev,
            items: prev.items.map((item: any) => ({
                ...item,
                values: [...item.values, { id: newProperty.id, value: '' }]
            }))
        }));
    };

    const toggleBanner = () => {
        setBanner(prev => !prev);
    };

    return (
        <>
            <Banner
                description={description}
                setDescription={setDescription}
                title={titleBanner}
                setTitle={setTitleBanner}
                banner={banner}
                setBanner={toggleBanner}
            />
            <div className={s.products}>
                <div className={s.tableDiv}>
                    <table className={s.usersTable}>
                        <thead>
                            <tr>
                                <th>Цена</th>
                                <th>Старая цена</th>
                                {variants.properties.map((property, index) => (
                                    <th key={index} style={{ whiteSpace: 'nowrap', verticalAlign: 'middle' }}>
                                        {editingProperty === index ? (
                                            <input
                                                type="text"
                                                className={s.inputProperty}
                                                value={tempPropertyText}
                                                onChange={handlePropertyInputChange}
                                                onBlur={handlePropertyBlur}
                                                autoFocus
                                            />
                                        ) : (
                                            <div style={{ cursor: 'pointer' }} onClick={() => handlePropertyClick(index, property.text)}>
                                                {property.text}
                                                <span
                                                    style={{ verticalAlign: 'middle', marginLeft: '5px' }}
                                                >
                                                    <Pencil />
                                                </span>
                                            </div>
                                        )}
                                    </th>
                                ))}
                                <th>Количество</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {variants.items.map((item, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>{item.price}₽</td>
                                    <td>{item.oldPrice}₽</td>
                                    {item.values.map((value, valueIndex) => (
                                        <td
                                            key={valueIndex}
                                            onClick={() => handleCellClick(rowIndex, valueIndex, value.value)}
                                        >
                                            {editingCell && editingCell.rowIndex === rowIndex && editingCell.valueIndex === valueIndex ? (
                                                <input
                                                    className={s.input}
                                                    type="text"
                                                    value={tempValue}
                                                    onChange={handleInputChange}
                                                    onBlur={handleBlur}
                                                    autoFocus
                                                />
                                            ) : (
                                                value.value || '—'
                                            )}
                                        </td>
                                    ))}
                                    <td>{item.quantity}</td>
                                    <td>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }}><Eye /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }}><Copy /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }}><Trash /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }} onClick={() => setBanner(true)}><Message /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }}><Percent /></span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={s.btnDiv}>
                    <div onClick={handleAddVariant}>
                        <BlueButton text={"Добавить вариант товара"} width={"238px"} height={"44px"} />
                    </div>
                    <button className={s.white} onClick={handleAddProperty}>Добавить свойство</button>
                </div>
            </div>
        </>
    );
};

export default VariantsTable;
