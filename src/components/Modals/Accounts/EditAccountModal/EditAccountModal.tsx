import BootstrapModal from "../../BootstrapModal/BootstrapModal";
import {FC, useState} from "react";
import AccountsDetailes from "./AccountsDetailes/AccountsDetailes";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import EditAccount from "./EditAccount/EditAccount";

export interface EditAccountModalProps {
    active: boolean;
    onClose: () => void;
    selectedAccountId?: string;
    account: Array<{
        id: string;
        service: string;
        email: string;
        password: string;
        image: string;
    }>
}


const EditAccountModal: FC<EditAccountModalProps> = ({selectedAccountId, account, active, onClose}) => {
    const [isDelete, setIsDelete] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const currentAccount = account?.find(item => item.id === selectedAccountId)
    const [emailInput, setEmailInput] = useState<string>(currentAccount?.email || '');

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setIsDelete(false);
            setIsEdit(false);
        }, 300);
    };

    if (!currentAccount) return null;

    return (
        <BootstrapModal active={active} onClose={handleClose}>
            {
                !isDelete && !isEdit ? (
                    <AccountsDetailes
                        editAccount={active}
                        account={currentAccount}
                        setIsDelete={setIsDelete}
                        setIsEdit={setIsEdit}
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
                        account={currentAccount}
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
