import { DatePickerProps, Select, DatePicker, ConfigProvider } from "antd";
import ruRU from 'antd/es/locale/ru_RU'
import React, { FC } from 'react';
import { AdminModal } from "../AdminModal/AdminModal";
import style from './AddPromo.module.scss'
import BlueButton from "../../Button/Button";
import { useSWRConfig } from "swr";
import { fetcher, url } from "../../../core/fetch";
import moment from 'moment';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
    title: string;
    description: string;
    discount: string;
    expireAt: Date | null;
    amount: string;
}

const AddPromo: FC<{ open: boolean, setOpen: any }> = ({ open, setOpen }) => {
    const { mutate } = useSWRConfig();
    const { handleSubmit, control, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            title: '',
            description: '',
            discount: '',
            expireAt: null,
            amount: ''
        }
    });

    const disabledDate = (current: any) => {
        return current && current < moment().startOf('day');
    };

    const onSubmit = async (data: FormData) => {
        const token = localStorage.getItem('token');
        const newPromo = {
            title: data.title,
            description: data.description,
            expireAt: data.expireAt ? data.expireAt.toISOString() : null,
            discount: data.discount,
            amountUsed: data.amount,
        };
        try {
            await mutate('/api/promos', fetcher(`${url}/api/promo/create`, {
                method: 'POST',
                body: JSON.stringify(newPromo),
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            }));
            setOpen(false);
        } catch (err) {
            console.error("Error creating promo:", err);
        }
    };

    return (
        <AdminModal isOpened={open} setOpen={() => setOpen((prev: boolean) => !prev)}>
            <div className={style.wrapper}>
                <h2>Добавить промокод</h2>
                <p>Он будет виден при нажатии на выбранный вариант товара.</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={style.inputsWrapper}>
                        <p>Название</p>
                        <Controller
                            name="title"
                            control={control}
                            rules={{ required: "Название обязательно" }}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Название акции"
                                    {...field}
                                />
                            )}
                        />
                        {errors.title && <p className={style.error}>{errors.title.message}</p>}
                    </div>
                    <div className={style.inputsWrapper}>
                        <p>Число пользований</p>
                        <Controller
                            name="amount"
                            control={control}
                            rules={{ required: "Число пользований обязательно" }}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Число пользований"
                                    {...field}
                                />
                            )}
                        />
                        {errors.amount && <p className={style.error}>{errors.amount.message}</p>}
                    </div>
                    <div className={style.inputsWrapper}>
                        <p>Скидка</p>
                        <Controller
                            name="discount"
                            control={control}
                            rules={{ required: "Скидка обязательна" }}
                            render={({ field }) => (
                                <Select
                                    value={field.value}  // Set the value from the react-hook-form state
                                    style={{ width: "100%" }}
                                    onChange={(value) => field.onChange(value)}  // Use field.onChange to update the form state
                                    options={[
                                        { value: '15%', label: '15% скидка' },
                                        { value: '10%', label: '10% скидка' },
                                        { value: '5%', label: '5% скидка' },
                                    ]}
                                />
                            )}
                        />
                        {errors.discount && <p className={style.error}>{errors.discount.message}</p>}
                    </div>

                    <div className={style.inputsWrapper}>
                        <p>Срок действия</p>
                        <Controller
                            name="expireAt"
                            control={control}
                            rules={{ required: "Дата обязательна" }}
                            render={({ field }) => (
                                <ConfigProvider locale={ruRU}>
                                    <DatePicker
                                        style={{ width: "100%" }}
                                        onChange={(date) => field.onChange(date)}
                                        disabledDate={disabledDate}
                                        inputReadOnly
                                    />
                                </ConfigProvider>
                            )}
                        />
                        {errors.expireAt && <p className={style.error}>{errors.expireAt.message}</p>}
                    </div>

                    <div className={style.inputsWrapper}>
                        <p>Описание</p>
                        <Controller
                            name="description"
                            control={control}
                            rules={{ required: "Описание обязательно" }}
                            render={({ field }) => (
                                <input
                                    type="text"
                                    placeholder="Описание акции"
                                    {...field}
                                />
                            )}
                        />
                        {errors.description && <p className={style.error}>{errors.description.message}</p>}
                    </div>


                    <div className={style.btns}>
                        <button className={style.white} onClick={() => setOpen(false)}>Закрыть</button>
                        <div>
                            <BlueButton
                                text="Добавить"
                                fontSize="16px"
                                height="44px"
                                width="100%"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </AdminModal>
    );
};

export default AddPromo;
