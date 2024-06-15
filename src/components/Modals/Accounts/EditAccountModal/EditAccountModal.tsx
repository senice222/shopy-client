import BootstrapModal from "../../BootstrapModal/BootstrapModal";
import {FC, useState} from "react";
import AccountsDetailes from "./AccountsDetailes/AccountsDetailes";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import EditAccount from "./EditAccount/EditAccount";

export interface EditAccountModalProps {
    active: boolean;
    onClose: () => void;
}


const EditAccountModal: FC<EditAccountModalProps> = ({active, onClose}) => {
    const [emailInput, setEmailInput] = useState<string>('olivia@mshopy.ru');
    const [isDelete, setIsDelete] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setIsDelete(false);
            setIsEdit(false);
        }, 300);
    };

    return (
        <BootstrapModal active={active} onClose={handleClose}>
            {
                !isDelete && !isEdit ? (
                    <AccountsDetailes
                        setIsDelete={setIsDelete}
                        setIsEdit={setIsEdit}
                        email={emailInput}
                        active={active}
                        onClose={handleClose}
                    />
                ) : isDelete ? (
                    <DeleteAccount
                        active={active}
                        onClose={handleClose}
                        setIsDelete={setIsDelete}
                    />
                ) : (
                    <EditAccount
                        email={emailInput}
                        setIsEdit={setIsEdit}
                        onClose={handleClose}
                    />
                )
            }
        </BootstrapModal>
    );
};

export default EditAccountModal;
