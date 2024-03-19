import {FormLabel, Select, Stack, Text} from "@chakra-ui/react";
import {useField} from "formik";

const MySelect = ({label, children, ...props}) => {
	const [field, meta] = useField(props);

	return (
		<Stack flexDir={"row"} gap={2} flexGrow={1}>
			{label && <FormLabel w={"20%"}>{label}</FormLabel>}
			<Stack flexGrow={1}>
				<Select {...field} {...props}>
					{children}
				</Select>

				{meta.touched && meta.error ? (
					<Text color={"red"} fontSize={"sm"}>
						{meta.error}
					</Text>
				) : null}
			</Stack>
		</Stack>
	);
};

export default MySelect;
