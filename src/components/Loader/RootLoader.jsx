import ReactDOM from "react-dom";
import React, { useEffect } from "react";

const loaderRoot = document.getElementById("loader-root");

const RootLoader = ({ isLoading }) => {

    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isLoading]);

    if (!isLoading) return null;


    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-teal-300 border-solid"></div>
        </div>,
        loaderRoot
    );
};

export default RootLoader;
