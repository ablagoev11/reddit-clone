import style from "./button.module.css";

const Button: React.FunctionComponent<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ children, ...rest }) => {
    return (<button {...rest} className={style.customButton}>
        {children}
    </button>)
}
export default Button;