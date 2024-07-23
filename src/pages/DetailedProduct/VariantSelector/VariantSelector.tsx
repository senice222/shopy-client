import React from 'react';
import style from '../DetailedProduct.module.scss';

interface VariantSelectorProps {
    data: any;
    selectedVariants: any;
    handleVariantChange: (propertyId: string, dataId: string, option: any) => void;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({ data, selectedVariants, handleVariantChange }) => {
    const splitterByIds = () => {
        let obj: any = {};

        if (data) {
            const ids = data.variants.properties;
            data.variants.items.forEach((item: any) => {
                item.values.forEach((value: any) => {
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
                            const isActive = selectedVariants[data._id]?.[property.id] === value;

                            return (
                                <button
                                    key={`${property.id}-${index}`}
                                    className={isActive ? style.active : ''}
                                    onClick={() => handleVariantChange(property.id, data._id, value)}
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
