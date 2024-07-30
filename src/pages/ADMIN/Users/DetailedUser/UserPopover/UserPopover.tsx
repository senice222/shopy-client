import React, { useState } from 'react';
import { Popover, List, Button } from 'antd';
import style from '../DetailedUser.module.scss';
import {statusStyles} from "../../../../../utils/getCurrentStatus";

const statuses = ["payed", "in work", "ready", "cancelled", "refund"] as const;

type Status = typeof statuses[number];

interface UserStatusPopoverProps {
    status: string;
    onStatusChange: (status: Status) => void;
}

const UserStatusPopover: React.FC<UserStatusPopoverProps> = ({ status, onStatusChange }) => {
    const [visible, setVisible] = useState(false);

    const handleVisibleChange = (newVisible: boolean) => {
        setVisible(newVisible);
    };

    const handleStatusChange = (item: Status) => {
        onStatusChange(item);
        setVisible(false);
    };

    const content = (
        <List
            size="small"
            dataSource={[...statuses]}
            renderItem={item => (
                <List.Item onClick={() => handleStatusChange(item)}>
                    <Button type="link">{item}</Button>
                </List.Item>
            )}
        />
    );

    const currentStatus = status ? statusStyles[status] : statusStyles["payed"]

    return (
        <Popover
            visible={visible}
            onVisibleChange={handleVisibleChange}
            content={content}
            title="Выберите статус"
            trigger="click"
        >
            <div className={style.wrapperPaid}>
                <div className={currentStatus}>{status}</div>
            </div>
        </Popover>
    );
};

export default UserStatusPopover;
