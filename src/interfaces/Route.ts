import {User} from "./User";

export interface RouteConfig {
    path: string;
    element: React.ComponentType<any>;
    props?: Record<string, any>;
    children?: RouteConfig[];
}
interface HomeProps {
    setAddedFunc: (func: () => void) => void;
    isAdd: boolean;
    added: boolean;
    setAdded: (added: boolean) => void;
}
interface ActiveSubscriptionsProps {
    user: User | null
}