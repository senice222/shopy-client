export const SideBarListItem = () => {
    return (
        <div className="list-item rounded-border">
        <div className="icon rounded-border">
            <slot name="icon" />
        </div>
        <span className="list-item__text">
            <slot name="body" />
         </span>
</div>)
}