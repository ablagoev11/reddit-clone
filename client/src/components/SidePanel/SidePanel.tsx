interface Prop {
    style: string;
    children: React.ReactNode;
    isOpen: boolean
}
const useSidePanel: React.FunctionComponent<Prop> = ({ children, style }) => {
    return (<div className={style}>
        {children}
    </div>)
}
export default useSidePanel;