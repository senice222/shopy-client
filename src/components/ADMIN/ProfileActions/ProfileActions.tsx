import React from 'react';
import styles from './ProfileActions.module.scss';


const ProfileActions = () => {
    const actions = [
        {icon: '📧', label: 'Отправить сообщение'},
        {icon: '💼', label: 'Изменить баланс'},
        {icon: '💳', label: 'Изменить процент кешбека'},
        {icon: '📈', label: 'Изменить процент реферала'},
        {icon: '🔒', label: 'Заблокировать'},
    ];

    return (
        <div className={styles.profileActionsContainer}>
            <h2>Действия с профилем</h2>
            <div className={styles.actionsGrid}>
                {actions.map((action, index) => (
                    <div key={index} className={styles.actionItem}>
                        <span className={`${styles.icon}`}>{action.icon}</span>
                        <p>{action.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ProfileActions;
