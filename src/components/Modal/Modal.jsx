import ReactDOM from "react-dom";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

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
                className="relative bg-white rounded-md overflow-hidden shadow-lg w-full md:max-w-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="absolute top-2 right-2  cursor-pointer text-2xl transition-all ease-in duration-200 bg-teal-600 hover:bg-teal-700 p-[0.3rem] rounded-full"
                >
                    <IoClose onClick={onClose} className="text-white text-[1.1rem] " />
                </div>
                {children}
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
