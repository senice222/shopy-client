import React, {Dispatch, SetStateAction} from 'react'
import './BootstrapModal.scss'

interface ActiveProps {
    active: boolean;
    children: React.ReactNode;
    onClose?: () => void;
    bottom?: boolean;
}

const BootstrapModal = ({active, children, onClose, bottom}: ActiveProps) => {

    return (
        <div
            className={`promo ${active ? "active" : ""} ${bottom ? 'bottom' : ''}`}
            onClick={() => {
                if (onClose) {
                    onClose();
                }
            }}
        >
            <div className={`modal-win__popup promo__popup ${active ? "activeCont" : ''}`}
                 style={{borderRadius: '12px'}}
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
