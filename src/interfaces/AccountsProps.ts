import {Dispatch, SetStateAction} from "react";

export interface DetailsProps {
    setIsDelete: Dispatch<SetStateAction<boolean>>;
    onClose: () => void
    account: {
        id: string;
        service: string;
        email: string;
        password: string;
        image: string;
    }
}

export interface DetailesProps {
    setIsDelete: Dispatch<SetStateAction<boolean>>;
    setIsEdit: Dispatch<SetStateAction<boolean>>;
    onClose: () => void;
    editAccount: boolean;
    account: {
        id: string;
        service: string;
        email: string;
        password: string;
        image: string;
    }
}

export interface Account {
    id: string;
    service: string;
    email: string;
    password: string;
    image: string
}

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