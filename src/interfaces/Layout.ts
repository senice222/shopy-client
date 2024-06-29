
export interface Children {
    children: React.ReactNode
}
export interface LayoutProps extends Children {
    isRightArrow?: boolean;
    notAnimated?: boolean;
}