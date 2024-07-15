import React, {Dispatch, FC, SetStateAction, useEffect, useRef, useState} from 'react'
import './BootstrapModal.scss'

interface ActiveProps {
    active: boolean;
    children: React.ReactNode;
    onClose?: () => void;
    bottom?: boolean;
    isFocused?: boolean;
    Y?: number
}

const BootstrapModal:FC<ActiveProps> = ({active, children, onClose, bottom, isFocused, Y}) => {
    const [height, setHeight] = useState(600);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (active) {
            if (ref.current) {
                setHeight(ref.current.offsetHeight);
            }
        }
    }, [active, ref]);

    return (
        <div
            className={`promo ${active ? "active" : ""} ${bottom ? 'bottom' : ''}`}
            onClick={() => {
                if (onClose) {
                    onClose();
                }
            }}
        >
            <div
                ref={ref}
                className={`modal-win__popup promo__popup ${active ? 'activeCont' : ''}`}
                style={{
                    transform: isFocused ? `translateY(${Y ? Y : -90}%)` : '',
                    transition: isFocused ? 'transform 0.3s ease-in-out' : '',
                }}
                onClick={e => e.stopPropagation()}
            >
                <div
                    className={`modal-win__popup-body`}
                    onClick={e => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BootstrapModal;
