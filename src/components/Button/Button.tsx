import style from "button.module.css";

interface Props {
    children: React.ReactNode;
}

const Button: React.FunctionComponent<Props> = ({ children }) => {
    return (<button className={style.customButton}>
        {children}
    </button>)
}
export default Button;