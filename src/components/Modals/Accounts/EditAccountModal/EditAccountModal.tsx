import BootstrapModal from "../../BootstrapModal/BootstrapModal";
import {FC, useState} from "react";
import AccountsDetailes from "./AccountsDetailes/AccountsDetailes";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import EditAccount from "./EditAccount/EditAccount";

export interface EditAccountModalProps {
    active: boolean;
    onClose: () => void;
    account: {
        service: string;
        email: string;
        password: string;
        image: string;
    }
}


const EditAccountModal: FC<EditAccountModalProps> = ({account, active, onClose}) => {
    const [emailInput, setEmailInput] = useState<string>(account.email);
    const [isDelete, setIsDelete] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    console.log(account)
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
                        account={account}
                        setIsDelete={setIsDelete}
                        setIsEdit={setIsEdit}
                        email={emailInput}
                        active={active}
                        onClose={handleClose}
                    />
                ) : isDelete ? (
                    <DeleteAccount
                        account={account}
                        active={active}
                        onClose={handleClose}
                        setIsDelete={setIsDelete}
                    />
                ) : (
                    <EditAccount
                        account={account}
                        emailInput={emailInput}
                        setIsEdit={setIsEdit}
                        onClose={handleClose}
                    />
                )
            }
        </BootstrapModal>
    );
};

export default EditAccountModal;
