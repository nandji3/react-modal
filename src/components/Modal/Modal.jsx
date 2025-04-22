import ReactDOM from "react-dom";
import { useEffect } from "react";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-[0.05]"
            onClick={onClose}
        >
            <div
                className="relative bg-white p-6 rounded shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer text-2xl"
                    onClick={onClose}
                >
                    X
                </button>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
