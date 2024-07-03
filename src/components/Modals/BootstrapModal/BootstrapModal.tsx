import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react'
import './BootstrapModal.scss'

interface ActiveProps {
    active: boolean;
    children: React.ReactNode;
    onClose?: () => void;
    bottom?: boolean;
}

const BootstrapModal = ({active, children, onClose, bottom}: ActiveProps) => {
    const [height, setHeight] = useState(600);
    const ref = useRef<HTMLDivElement>(null);
    console.log(height)
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
            <div ref={ref} className={`modal-win__popup promo__popup ${active ? "activeCont" : ''}`}
                 style={!active ? {bottom : `-${height+60}px`} : {bottom: 0}}
                 onClick={onClose}
            >
                <div className="modal-win__popup-body" onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BootstrapModal;
