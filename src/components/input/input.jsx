import React from "react";

function Input({type, placeholder, value, onChange, inputClassName}) {
	return (
		<input
			className={`pl-4 w-full mb-4 rounded-3xl focus:outline-none focus:border-none py-2 px-4 text-[#5C5C5C] ${inputClassName}`}
			value={value}
			onChange={onChange}
			type={type}
			placeholder={placeholder}
			required
		/>
	);
}

export default Input;
