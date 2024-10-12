import React from "react";

function InputText({ value, onChange, onInput, list }) {
    return (
        <input
            className="rounded-md px-2 py-1"
            list={list}
            value={value}
            onChange={onChange}
            onInput={onInput}
        ></input>
    );
}

export default InputText;
