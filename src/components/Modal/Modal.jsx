import ReactDOM from "react-dom";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

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
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
            <div
                className="relative bg-white p-6 rounded shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto scroll-smooth"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer text-2xl"
                >
                    <AiOutlineClose onClick={onClose} />
                </div>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
