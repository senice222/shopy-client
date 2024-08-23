import { Dispatch, FC, SetStateAction, useState } from 'react';
import s from "./VariantsTable.module.scss";
import BlueButton from "../../../Button/Button";
import { Variant, VariantItem } from "../../../../interfaces/Product";
import { Pencil } from '../../../Modals/AdminModals/UserMessage/Svgs';
import { Copy, Eye, Trash, Message, Percent } from '../../../../pages/ADMIN/CategoriesAndProducts/Svg';
import Banner from '../../../Modals/AdminModals/Banner/Banner';
import useEditing from '../../../../hooks/useEditing';
import useProperties from '../../../../hooks/useProperties';
import { v4 as uuidv4 } from 'uuid';

interface VariantsTableProps {
    description: string;
    setDescription: Dispatch<SetStateAction<string>>;
    titleBanner: string;
    setTitleBanner: Dispatch<SetStateAction<string>>;
    variants: Variant;
    setVariants: Dispatch<SetStateAction<Variant>>;
}

const VariantsTable: FC<VariantsTableProps> = (props) => {
    const { description, setDescription, titleBanner, setTitleBanner, variants, setVariants } = props;
    const [banner, setBanner] = useState<boolean>(false);
    const { editingCell, tempValue, handleCellClick, handleInputChange, handleBlur } = useEditing('');
    const { editingProperty, tempPropertyText, handlePropertyClick, handlePropertyBlur, handlePropertyInputChange, handleAddProperty } = useProperties(variants, setVariants);
    const [variantId, setVariantId] = useState<string>()

    const handleAddVariant = () => {
        const newVariant: VariantItem = {
            id: uuidv4(),
            price: 0,
            oldPrice: 0,
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

    const handleDeleteVariant = (index: number) => {
        setVariants(prev => ({
            ...prev,
            items: prev.items.filter((_, i) => i !== index)
        }));
    };

    const handleDuplicateVariant = (index: number) => {
        const newId = uuidv4();
        const newVariant = { ...variants.items[index], id: newId };
        setVariants(prev => ({
            ...prev,
            items: [
                ...prev.items.slice(0, index + 1),
                newVariant,
                ...prev.items.slice(index + 1)
            ]
        }));
    };

    const handleToggle = (index: number) => {
        setVariants(prev => ({
            ...prev,
            items: prev.items.map((item, i) => i === index ? { ...item, visible: !item.visible } : item)
        }));
    };

    const toggleBanner = () => setBanner(prev => !prev);

    return (
        <>
            <Banner
                variantId={variantId}
                setVariants={setVariants}
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
                                    <td>
                                        {editingCell && editingCell.rowIndex === rowIndex && editingCell.type === 'price' ? (
                                            <input
                                                type="text"
                                                value={tempValue}
                                                onChange={handleInputChange}
                                                onBlur={() => handleBlur(value => {
                                                    const newVariants = { ...variants };
                                                    newVariants.items[rowIndex].price = +value;
                                                    setVariants(newVariants);
                                                })}
                                                autoFocus
                                            />
                                        ) : (
                                            <div onClick={() => handleCellClick(rowIndex, 0, item.price.toString(), 'price')} style={{ cursor: 'pointer' }}>
                                                {item.price}₽
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        {editingCell && editingCell.rowIndex === rowIndex && editingCell.type === 'oldPrice' ? (
                                            <input
                                                type="text"
                                                value={tempValue}
                                                onChange={handleInputChange}
                                                onBlur={() => handleBlur(value => {
                                                    const newVariants = { ...variants };
                                                    newVariants.items[rowIndex].oldPrice = +value;
                                                    setVariants(newVariants);
                                                })}
                                                autoFocus
                                            />
                                        ) : (
                                            <div onClick={() => handleCellClick(rowIndex, 0, item.oldPrice.toString(), 'oldPrice')} style={{ cursor: 'pointer' }}>
                                                {item.oldPrice}₽
                                            </div>
                                        )}
                                    </td>
                                    {item.values.map((value, valueIndex) => (
                                        <td
                                            key={valueIndex}
                                            onClick={() => handleCellClick(rowIndex, valueIndex, value.value, 'value')}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            {editingCell && editingCell.rowIndex === rowIndex && editingCell.valueIndex === valueIndex && editingCell.type === 'value' ? (
                                                <input
                                                    type="text"
                                                    value={tempValue}
                                                    onChange={handleInputChange}
                                                    onBlur={() => handleBlur(updatedValue => {
                                                        const newVariants = { ...variants };
                                                        newVariants.items[rowIndex].values[valueIndex].value = updatedValue;
                                                        setVariants(newVariants);
                                                    })}
                                                    autoFocus
                                                />
                                            ) : (
                                                value.value
                                            )}
                                        </td>
                                    ))}
                                    <td>
                                        {editingCell && editingCell.rowIndex === rowIndex && editingCell.type === 'quantity' ? (
                                            <input
                                                type="text"
                                                value={tempValue}
                                                onChange={handleInputChange}
                                                onBlur={() => handleBlur(value => {
                                                    const newVariants = { ...variants };
                                                    newVariants.items[rowIndex].quantity = +value;
                                                    setVariants(newVariants);
                                                })}
                                                autoFocus
                                            />
                                        ) : (
                                            <div onClick={() => handleCellClick(rowIndex, 0, item.quantity.toString(), 'quantity')} style={{ cursor: 'pointer' }}>
                                                {item.quantity}
                                            </div>
                                        )}
                                    </td>
                                    <td>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }} onClick={() => handleToggle(rowIndex)}><Eye /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }} onClick={() => handleDuplicateVariant(rowIndex)}><Copy /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }} onClick={() => handleDeleteVariant(rowIndex)}><Trash /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }} onClick={() => {
                                            setVariantId(item.id)
                                            setBanner(true)
                                        }}><Message /></span>
                                        <span style={{ paddingRight: "12px", cursor: "pointer" }}><Percent /></span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={s.btnDiv}>
                        <div onClick={handleAddVariant}>
                            <BlueButton text={"Добавить вариант товара"} width={"238px"} height={"44px"} />
                        </div>
                        <button className={s.white} onClick={handleAddProperty}>Добавить свойство</button>
                    </div>
                </div>

            </div>
        </>
    );
};

export default VariantsTable;
