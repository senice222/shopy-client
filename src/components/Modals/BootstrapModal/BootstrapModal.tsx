import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react'
import './BootstrapModal.scss'

interface ActiveProps {
    active: boolean;
    children: React.ReactNode;
    onClose?: () => void;
    bottom?: boolean;
    isFocused?: boolean
}

const BootstrapModal = ({active, children, onClose, bottom, isFocused}: ActiveProps) => {
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
                className={`modal-win__popup promo__popup ${active ? 'activeCont' : ''} ${isFocused ? 'focused' : ''}`}
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
