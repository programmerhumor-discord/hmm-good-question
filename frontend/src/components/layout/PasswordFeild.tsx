"use client";

import { inputState } from "@/utils/inputState";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface PasswordFeildProps {
	onChange: (password: string) => void;
}

export function PasswordFeild(props: PasswordFeildProps) {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [text, setText] = useState<string>();

	const { onChange } = props;

	useEffect(() => {
		if (text) {
			onChange(text);
		}
	}, [text, onChange]);

	return (
		<>
			<div className="join">
				<input
					onChange={inputState(setText)}
					type={showPassword ? "text" : "password"}
					className="input join-item flex-1 overflow-hidden"
				/>
				<button
					className="btn-square join-item btn"
					onClick={() => {
						setShowPassword(!showPassword);
					}}>
					{showPassword ? <IconEyeClosed size={24} /> : <IconEye size={24} />}
				</button>
			</div>
		</>
	);
}
