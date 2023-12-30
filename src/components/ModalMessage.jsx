import {styles} from "../style.js";

const ModalMessage = ({ message }) => {
    return (
        <div className="rounded-2xl py-4 bg-black flex justify-center">
        <div>
            <p className={`${styles.paragraph} text-center`}>{message}</p>
        </div>
        </div>
    );
}

export default ModalMessage;