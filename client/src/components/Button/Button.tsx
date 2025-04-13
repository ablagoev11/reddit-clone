import style from "./button.module.css";

const Button: React.FunctionComponent<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, disabled, ...rest }) => {
    const combinedClassName = `${style.customButton} ${className || ''}`.trim();

    return (
        <button {...rest} className={combinedClassName} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
