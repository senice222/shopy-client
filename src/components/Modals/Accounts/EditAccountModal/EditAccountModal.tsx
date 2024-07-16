import BootstrapModal from "../../BootstrapModal/BootstrapModal";
import {FC, useEffect, useRef, useState} from "react";
import AccountsDetailes from "./AccountsDetailes/AccountsDetailes";
import DeleteAccount from "./DeleteAccount/DeleteAccount";
import EditAccount from "./EditAccount/EditAccount";
import {EditAccountModalProps} from "../../../../interfaces/AccountsProps";
import s from "../../SelectAccount/SelectAccount.module.scss";
import MobileDetect from "mobile-detect";


const EditAccountModal: FC<EditAccountModalProps> = ({selectedAccountId, account, active, onClose}) => {
    const [isDelete, setIsDelete] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const currentAccount = Array.isArray(account) ? account.find(item => item.id === selectedAccountId) : undefined;
    const [emailInput, setEmailInput] = useState<string>(currentAccount?.email || '');

    const [isFocused, setIsFocused] = useState<boolean>(false);
    const md = new MobileDetect(window.navigator.userAgent);
    const inputRef = useRef<HTMLFormElement | null>(null);
    const isMobileDevice = md.mobile();

    useEffect(() => {
        const handleFocus = () => {
            setIsFocused(true);
        };

        const handleBlur = () => {
            setIsFocused(false);
        };

        const formElement = inputRef.current;

        if (formElement && isMobileDevice) {
            const inputs = formElement.querySelectorAll<HTMLInputElement>('input');

            inputs.forEach((input) => {
                input.addEventListener('focus', handleFocus);
                input.addEventListener('blur', handleBlur);
            });

            return () => {
                inputs.forEach((input) => {
                    input.removeEventListener('focus', handleFocus);
                    input.removeEventListener('blur', handleBlur);
                });
            };
        }
    }, [inputRef, isMobileDevice]);

    const handleClose = () => {
        onClose();
        setTimeout(() => {
            setIsDelete(false);
            setIsEdit(false);
        }, 300);
    };

    // if (!currentAccount) return null;

    return (
        <BootstrapModal isFocused={isFocused} active={active} onClose={handleClose}>
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
