import styles from './Categories.module.scss'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import useSWR from 'swr';
import { fetcher, url } from '../../core/fetch';
import { CategoryI } from '../../interfaces/Category';
import Loader from '../Loader/Loader';

const Categories = () => {
    const navigate = useNavigate()
    const { data: categories } = useSWR(`${url}/api/categories`, fetcher)

    const handleClick = (item: string) => {
        navigate(`/category/${item}`)
    };
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.125,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        },
    };

    if (!categories) return <Loader />

    return (
        <div className={styles.category}>
            <div className={`${styles.category__content} ${styles.container}`}>
                <h1 className={`${styles['category-title']} ${styles.title}`}>Категории</h1>
                <motion.div
                    className={styles['categories-body']}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {categories?.map((item: CategoryI, i: number) => (
                        item && item.name && item.icon ? (  // Проверка на наличие данных
                            <motion.div
                                onClick={() => handleClick(item.name)}
                                key={i}
                                className={styles['category-card']}
                                variants={itemVariants}
                            >
                                <img
                                    src={`${url}/api/uploads/${item.icon}`}
                                    alt={item.name}
                                />
                                <h1 className={styles['card-title']}>{item.name}</h1>
                            </motion.div>
                        ) : null  // Если item, item.name или item.icon undefined или пустые, элемент не рендерится
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Categories;
