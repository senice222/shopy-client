import React, {Dispatch, FC, SetStateAction} from 'react';
import styles from './ProfileActions.module.scss';

interface ActionsProps {
    setMessage: Dispatch<SetStateAction<boolean>>;
    setAddBalance: Dispatch<SetStateAction<boolean>>;
    setCashBack: Dispatch<SetStateAction<boolean>>;
    setReferral: Dispatch<SetStateAction<boolean>>;
}

const ProfileActions: FC<ActionsProps> = ({setMessage, setAddBalance, setCashBack, setReferral}) => {
    const actions = [
        {icon: '📧', label: 'Отправить сообщение'},
        {icon: '💼', label: 'Изменить баланс'},
        {icon: '💳', label: 'Изменить процент кешбека'},
        {icon: '📈', label: 'Изменить процент реферала'},
        {icon: '🔒', label: 'Заблокировать'},
    ];

    const handleActionClick = (label: string) => {
        switch (label) {
            case "Отправить сообщение":
                setMessage(true)
                break;
            case "Изменить баланс":
                setAddBalance(true)
                break;
            case "Изменить процент кешбека":
                setCashBack(true)
                break;
            case "Изменить процент реферала":
                setReferral(true)
                break;
            default:
                break;
        }
    };

    return (
        <div className={styles.profileActionsContainer}>
            <h2>Действия с профилем</h2>
            <div className={styles.actionsGrid}>
                {actions.map((action, index) => (
                    <div key={index} className={styles.actionItem} onClick={() => handleActionClick(action.label)}>
                        <span className={`${styles.icon}`}>{action.icon}</span>
                        <p>{action.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ProfileActions;
