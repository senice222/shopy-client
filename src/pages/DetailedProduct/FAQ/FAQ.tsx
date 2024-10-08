import React, { useState } from 'react';
import styles from './FAQ.module.scss';
import { ReactComponent as PlusIcon } from '../../../assets/svg/Icon wrap.svg';
import { ReactComponent as MinusIcon } from '../../../assets/svg/minus-circle.svg';
import { motion } from 'framer-motion';

interface Features {
    features: {
        id: string,
        title: string,
        value: string,
    }[]
}

const FAQ = ({ features }: Features) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index: any) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.faqContainer}>
            <h2 className={styles.title}>Часто задаваемые вопросы</h2>
            {
                features?.map((item, i) => (
                    <div className={styles.faqItem} key={i}>
                        <div className={styles.question} onClick={() => toggleFAQ(i)}>
                            <span>{item.title}</span>
                            {activeIndex === i ? <MinusIcon className={styles.icon} /> : <PlusIcon className={styles.icon} />}
                        </div>
                        <motion.div
                            initial={{ maxHeight: 0 }}
                            animate={{ maxHeight: activeIndex === i ? 400 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className={styles.answer}
                        >
                            {item.value}
                        </motion.div>
                    </div>
                ))
            }
        </div>
    );
};

export default FAQ;
