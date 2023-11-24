import React from "react";
function Button({text, buttonClassName, icon, onClick}) {
	return (
		<div className={`${buttonClassName}`}>
			<button onClick={onClick}>
				{icon}
				{text}
			</button>
		</div>
	);
}

export default Button;
