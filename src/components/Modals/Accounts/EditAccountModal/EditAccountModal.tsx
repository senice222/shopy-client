import BootstrapModal from "../../BootstrapModal/BootstrapModal";
import {FC, useState} from "react";
import AccountsDetailes from "./AccountsDetailes/AccountsDetailes";
import DeleteAccount from "./DeleteAccount/DeleteAccount";

export interface EditAccountModalProps {
    active: boolean;
    onClose: () => void;
}


const EditAccountModal: FC<EditAccountModalProps> = ({active, onClose}) => {
    const [emailInput, setEmailInput] = useState<string>('olivia@mshopy.ru');
    const [isDelete, setIsDelete] = useState<boolean>(false)


    return (
        <BootstrapModal active={active} onClose={onClose} setIsDelete={setIsDelete}>
            {
                !isDelete ? (
                    <AccountsDetailes
                        setIsDelete={setIsDelete}
                        email={emailInput}
                        active={active}
                        onClose={onClose}
                    />
                ) : (
                    <DeleteAccount
                        active={active}
                        onClose={onClose}
                        setIsDelete={setIsDelete}
                    />
                )
            }
        </BootstrapModal>
    );
};

export default EditAccountModal;
