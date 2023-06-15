"use client";

import { Form } from "@/components/layout/Form";
import { PasswordFeild } from "@/components/layout/PasswordFeild";
import { inputState } from "@/utils/inputState";
import clsx from "clsx";
import { useEffect, useState } from "react";
import pwd_strength from "zxcvbn";

function strengthColor(strength: number) {
	if (strength <= 1) return "text-error";
	if (strength <= 3) return "text-warning";
	return "text-success";
}

function strengthText(strength: number) {
	if (strength <= 1) return "Weak";
	if (strength <= 3) return "Ok";
	return "Strong";
}

const Signup: React.FC = () => {
	const [username, setUsername] = useState<string>();
	const [password1, setPassword1] = useState<string>();
	const [password2, setPassword2] = useState<string>();
	const [strength, setStrength] = useState<number>(0);

	const valid = strength === 4 && password1 === password2;

	// const { updateData, setValid } = props;

	useEffect(() => {
		if (password1) {
			setStrength(pwd_strength(password1).score);
		}
	}, [password1]);

	// useEffect(() => {
	// 	setValid(valid);
	// }, [setValid, valid]);

	return (
		<>
			<Form
				title="Signup"
				buttons={
					<div
						className={clsx(!valid && "tooltip-error tooltip")}
						data-tip="Password must be strong and username must not be taken">
						<button
							disabled={!valid}
							type="submit"
							onClick={() => {}}
							className="btn-primary btn">
							Create account
						</button>
					</div>
				}>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Username</span>
					</label>
					<input
						onChange={inputState(setUsername)}
						className="input"
						required></input>
					{/* TODO: is Taken check */}
					{/* && (
						<label className="label">
							<span className={clsx("label-text", strengthColor(strength))}>
								{strengthText(strength)}
							</span>
						</label>
					)} */}
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Password</span>
					</label>
					<PasswordFeild onChange={setPassword1} />
					{!!password1 && (
						<label className="label">
							<span className={clsx("label-text", strengthColor(strength))}>
								{strengthText(strength)}
							</span>
						</label>
					)}
				</div>
				<div className="form-control">
					<label className="label">
						<span className="label-text">Confirm your password</span>
					</label>
					<PasswordFeild onChange={setPassword2} />
					{password1 !== password2 && !!password2 && (
						<label className="label">
							<span className="label-text text-error">
								Passwords do not match
							</span>
						</label>
					)}
				</div>
			</Form>
		</>
	);
};

export default Signup;
