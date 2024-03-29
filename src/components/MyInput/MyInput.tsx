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

	className,

	...props
}: InputProps) => {
	const {field} = useController({
		name: props.name || "",
		control,
		defaultValue: "",
	});
	return (
		<div className="">
			<div>
				<input
					{...field}
					{...props}
					className={
						"bg-none  border-gray-300 w-full p-2 text-sm font-light border rounded-sm focus:border-none"
					}
				/>
			</div>

			{errorMessage && (
				<div className="text-sm text-red-500">{errorMessage}</div>
			)}
		</div>
	);
};

export default MyInput;
