import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { Properties, Variant } from '../interfaces/Product';

const useProperties = (variants: Variant, setVariants: Dispatch<SetStateAction<Variant>>) => {
    const [editingProperty, setEditingProperty] = useState<number | null>(null);
    const [tempPropertyText, setTempPropertyText] = useState<string>('');

    const handlePropertyClick = (index: number, currentText: string) => {
        setEditingProperty(index);
        setTempPropertyText(currentText);
    };

    const handlePropertyBlur = () => {
        if (editingProperty !== null) {
            const newProperties = [...variants.properties];
            newProperties[editingProperty].text = tempPropertyText;
            setVariants(prev => ({
                ...prev,
                properties: newProperties
            }));
            setEditingProperty(null);
        }
    };

    const handlePropertyInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTempPropertyText(e.target.value);
    };

    const handleAddProperty = () => {
        const newPropertyId = Date.now().toString();
        const newProperty = {
            id: newPropertyId,
            text: 'Новое свойство',
        };

        setVariants(prev => ({
            ...prev,
            properties: [...prev.properties, newProperty],
            items: prev.items.map(item => ({
                ...item,
                values: [...item.values, { id: newPropertyId, value: '' }]
            }))
        }));
    };

    return {
        editingProperty,
        tempPropertyText,
        handlePropertyClick,
        handlePropertyBlur,
        handlePropertyInputChange,
        handleAddProperty
    };
};

export default useProperties;
