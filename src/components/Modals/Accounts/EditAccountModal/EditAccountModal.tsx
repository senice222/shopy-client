import BootstrapModal from "../../BootstrapModal/BootstrapModal";
import { FC, useEffect, useRef, useState } from "react";
import AccountsDetailes from "./AccountsDetailes/AccountsDetailes";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import EditAccount from "./EditAccount/EditAccount";
import { EditAccountModalProps } from "../../../../interfaces/AccountsProps";
import MobileDetect from "mobile-detect";
import useFocusAnimation from "../../../../hooks/useFocusAnimation";


const EditAccountModal: FC<EditAccountModalProps> = ({ selectedAccountId, account, active, onClose }) => {
    const [isDelete, setIsDelete] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const currentAccount = Array.isArray(account) ? account.find(item => item.id === selectedAccountId) : undefined;
    const [emailInput, setEmailInput] = useState<string>(currentAccount?.email || '');
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const md = new MobileDetect(window.navigator.userAgent);
    const inputRef = useRef<HTMLFormElement | null>(null);
    const isMobileDevice = md.mobile();

    useFocusAnimation(inputRef, '.EditAccount_input__isv5p, .EditAccount_inputPass__9-VtL input', isMobileDevice, setIsFocused, isEdit);

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setIsDelete(false);
            setIsEdit(false);
        }, 300);
    };

    return (
        <BootstrapModal Y={-80} isFocused={isFocused} active={active} onClose={handleClose}>
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
                            inputRef={inputRef}
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
