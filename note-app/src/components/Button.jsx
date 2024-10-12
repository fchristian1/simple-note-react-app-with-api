import React from "react";

function Button({ type, onClick, active, children }) {
    return (
        <button
            className={
                "bg-gray-100 border-2 border-gray-300 rounded-md px-2 py-1 m-2 hover:bg-gray-400 " +
                (active ? " border-orange-400 " : " ")
            }
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
