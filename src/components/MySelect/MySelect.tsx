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

const MySelect = ({
	control,
	errorMessage,

	className,
	children,
	...props
}: any) => {
	const {field} = useController({
		name: props.name || "",
		control,
		defaultValue: "",
	});
	return (
		<div className="">
			<select
				className={
					"bg-none  border-gray-300 w-full p-2 text-xs lg:text-sm text-gray-400 font-light border rounded-sm focus:border-none "
				}
				{...field}
				{...props}
			>
				{children}
			</select>

			{errorMessage && (
				<div className="text-sm text-red-500">{errorMessage}</div>
			)}
		</div>
	);
};

export default MySelect;
