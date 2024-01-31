import { Paragraph } from "../styled-components/utilities";
import "./button.styles.css";

const Button = ({
    icon,
    children,
    action,
    reverse,
    style,
    outline,
    fontColor,
    fontSize = "16px",
    buttonClassName = ""
}) => {
    const onClick = evt => {
        evt.preventDefault();
        action();
    };

    return (
        <button
            className={`button-icon 
                ${reverse ? "button-icon--reverse" : ""}
                ${outline ? "button-icon--outline" : ""}
                ${buttonClassName}
                `}
            onClick={onClick}
            style={style}
        >
            {icon}
            <Paragraph color={fontColor} fontSize={fontSize}>
                {children}
            </Paragraph>
        </button>
    );
};

export default Button;
