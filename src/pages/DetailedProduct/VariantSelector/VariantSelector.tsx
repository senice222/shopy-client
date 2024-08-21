import React from 'react';
import style from '../DetailedProduct.module.scss';
import { VariantItem } from "../../../interfaces/Product";

interface VariantSelectorProps {
    data: any;
    selectedVariants: any;
    handleVariantChange: (propertyId: string, dataId: string, option: any, banner: { title: string, description: string }) => void;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({ data, selectedVariants, handleVariantChange }) => {
    const splitterByIds = () => {
        let obj: any = {};
        if (data) {
            const ids = data.variants.properties;

            data.variants.items.forEach((item: VariantItem) => {
                item.values.forEach((value) => {
                    if (!obj[value.id]) {
                        obj[value.id] = [value.value];
                    } else {
                        obj[value.id] = [...obj[value.id], value.value];

                    }
                });
            });
            obj.ids = ids;
        }
        return obj.ids.map((property: any) => {
            const uniqueArray = Array.from(new Set(obj[property.id]));
            return (
                <div key={property.id} className={style.plan}>
                    <h3>{property.text}</h3>
                    <div className={style.btns}>
                        {uniqueArray.map((value: any, index: number) => {
                            const isActive = selectedVariants[data._id]?.some((item: any) => item.option === value);
                            const selectedItem = data.variants.items.find((item: VariantItem) =>
                                item.values.some(v => v.id === property.id && v.value === value)
                            );
                            const banner = selectedItem?.banner;
                            return (
                                <button
                                    key={`${property.id}-${index}`}
                                    className={isActive ? style.active : ''}
                                    onClick={() => handleVariantChange(property.text, data._id, value, banner)}
                                >
                                    {value}
                                </button>
                            );
                        })}
                    </div>
                </div>
            );
        });
    };

    return <>{splitterByIds()}</>;
};

export default VariantSelector
