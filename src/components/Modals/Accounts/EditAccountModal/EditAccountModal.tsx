import BootstrapModal from "../../BootstrapModal/BootstrapModal";
import {FC, useState} from "react";
import AccountsDetailes from "./AccountsDetailes/AccountsDetailes";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import EditAccount from "./EditAccount/EditAccount";
import {EditAccountModalProps} from "../../../../interfaces/AccountsProps";
import s from "../../SelectAccount/SelectAccount.module.scss";


const EditAccountModal: FC<EditAccountModalProps> = ({selectedAccountId, account, active, onClose}) => {
    const [isDelete, setIsDelete] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const currentAccount = Array.isArray(account) ? account.find(item => item.id === selectedAccountId) : undefined;
    const [emailInput, setEmailInput] = useState<string>(currentAccount?.email || '');

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setIsDelete(false);
            setIsEdit(false);
        }, 300);
    };

    // if (!currentAccount) return null;

    return (
        <BootstrapModal active={active} onClose={handleClose}>
            <div>
            {
                currentAccount ? !isDelete && !isEdit ? (
                    <AccountsDetailes
                        editAccount={active}
                        account={currentAccount}
                        setIsDelete={setIsDelete}
                        setIsEdit={setIsEdit}
                        onClose={handleClose}
                    />
                ) : isDelete ? (
                    <DeleteAccount
                        account={currentAccount}
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
                ) : null
            }
            </div>
        </BootstrapModal>
    );
};

export default EditAccountModal;
