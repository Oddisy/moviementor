import React from "react";
function Button({text, buttonClassName}) {
	return (
		<div className={`${buttonClassName}`}>
			<button>{text}</button>
		</div>
	);
}

export default Button;
