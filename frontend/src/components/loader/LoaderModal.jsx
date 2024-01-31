import Modal from "react-modal";
import Loader from "./Loader";

const customStylesModal = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)"
    }
};

const LoaderModal = ({ message, isOpen }) => {
    return (
        <Modal isOpen={isOpen} style={customStylesModal} ariaHideApp={false}>
            <Loader message={message} />
        </Modal>
    );
};

export default LoaderModal;
