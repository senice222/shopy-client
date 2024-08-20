import { useState, ChangeEvent } from 'react';

const useEditing = (initialValue: string) => {
    const [editingCell, setEditingCell] = useState<{ rowIndex: number, valueIndex: number, type: string } | null>(null);
    const [tempValue, setTempValue] = useState<string>(initialValue);

    const handleCellClick = (rowIndex: number, valueIndex: number, currentValue: string, type: string) => {
        setEditingCell({ rowIndex, valueIndex, type });
        setTempValue(currentValue);
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTempValue(e.target.value);
    };

    const handleBlur = (updateItem: (value: string) => void) => {
        if (editingCell) {
            updateItem(tempValue);
            setEditingCell(null);
        }
    };

    return {
        editingCell,
        tempValue,
        handleCellClick,
        handleInputChange,
        handleBlur,
    };
};

export default useEditing;
