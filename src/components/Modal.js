import React from "react";
import "../css/Modal.css";

const Modal = ({children, show, onClose}) => {
    const displayClassName = show ? "Modal display-block" : "Modal display-none";

    return (
        <div
            className={displayClassName}
        >
            <section className="Modal-main">
                <button 
                    className="Modal-button-close"
                    onClick={onClose}
                >
                    X
                </button>
                <div className="Modal-message">
                    {children}
                </div>
            </section>
        </div>
    );
};

export default Modal;