import React from "react";

type InputProps = {
    onChange: () => void;
};

const Input = ({ onChange }: InputProps) => {
    return <input type="text" className="border border-green-500 p-2 w-full mr-2" onChange={onChange} />;
};

export default Input;
