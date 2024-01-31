import { Paragraph } from "../styled-components/utilities";

const ErrorMessage = ({ errors = [] }) => {
    return (
        <div
            style={{
                backgroundColor: "#ffd7d1",
                width: "100%",
                padding: "8px",
                margin: "12px 0"
            }}
        >
            {errors.map((item, index) => (
                <Paragraph color={"red"} key={index}>
                    - {item.msg}
                </Paragraph>
            ))}
        </div>
    );
};

export default ErrorMessage;
