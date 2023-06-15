"use client";

import { Form } from "@/components/layout/Form";
import { PasswordFeild } from "@/components/layout/PasswordFeild";
import { inputState } from "@/utils/inputState";
import { useState } from "react";

const Login: React.FC = () => {
	const [username, setUsername] = useState<string>();
	const [password, setPassword] = useState<string>();

	return (
		<>
			<Form
				title="Login"
				buttons={
					// <div
					// className={clsx(!valid && "tooltip-error tooltip")}
					// data-tip="Password must be strong and username must not be taken">
					<button
						// disabled={!valid}
						onClick={() => {}}
						className="btn-primary btn">
						Login
					</button>
					// </div>
				}>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Username</span>
					</label>
					<input
						onChange={inputState(setUsername)}
						className="input"
						required></input>
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<PasswordFeild onChange={setPassword} />
				</div>
			</Form>
		</>
	);
};

export default Login;
