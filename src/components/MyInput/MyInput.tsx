"use client";
import React, {ReactNode} from "react";
import {twMerge} from "tailwind-merge";
import {FieldError, useController} from "react-hook-form";

interface InputProps {
	control: any;
	errorMessage?: any;
	icon?: any;
	className?: string;
	name?: string;
	type?: string;
	id?: string;
	label?: string;
	placeholder?: string;
	[key: string]: any;
}

const MyInput: React.FC<InputProps> = ({
	control,
	errorMessage,
	icon: Icon,
	className,
	disabled = false,
	...props
}: InputProps) => {
	const {field} = useController({
		name: props.name || "",
		control,
		defaultValue: "",
	});
	return (
		<div className="mb-2">
			<label
				htmlFor={props.id || props.name}
				className="block capitalize mb-2 text-sm font-semibold text-gray-900"
			>
				{props.label}
			</label>
			<div>
				<input
					disabled={disabled}
					{...field}
					{...props}
					className={className}
				/>

				{Icon && <Icon size={18} />}
			</div>

			{errorMessage && (
				<div className="text-sm text-red-500">{errorMessage}</div>
			)}
		</div>
	);
};

export default MyInput;
