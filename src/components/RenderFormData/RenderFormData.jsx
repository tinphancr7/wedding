import {Flex, FormLabel, Text} from "@chakra-ui/react";
import MyInput from "components/MyInput/MyInput";
import MyMultiSelect from "components/MyMultiSelect/MyMultiSelect";
import MySelect from "components/MySelect/MySelect";
import MySwitch from "components/MySwitch/MySwitch";
import React from "react";

const RenderFormData = ({item, multiOptions}) => {
	if (item.kind === "input") {
		return (
			<Flex align="center" mb="18px" flexGrow={1}>
				<FormLabel fontSize="md" color={""} fontWeight="bold" w={"30%"}>
					{item.label}:
				</FormLabel>
				<MyInput
					label=""
					name={item.name}
					type={item.type || "text"}
					placeholder=""
				/>
				{item.type === "number" && (
					<Text px={"5"} fontWeight={"medium"}>
						px
					</Text>
				)}
			</Flex>
		);
	} else if (item.kind === "select") {
		return (
			<Flex align="center" mb="18px">
				<FormLabel fontSize="md" color={""} fontWeight="bold" w={"30%"}>
					{item.label}:
				</FormLabel>
				<MySelect label="" name={item.name}>
					<option>--- Chọn ---</option>
					{item.data}
				</MySelect>
			</Flex>
		);
	} else {
		return (
			<Flex align="center" mb="18px">
				<FormLabel fontSize="md" color={""} fontWeight="bold" w={"30%"}>
					{item.label}
				</FormLabel>
				<MySwitch
					checked={item.checked}
					label=""
					name={item.name}
					type="text"
					placeholder=""
				/>
			</Flex>
		);
	}
};

export default RenderFormData;
