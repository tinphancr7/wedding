import MyInput from "@/components/MyInput/MyInput";
import {useMutation, useQuery} from "@tanstack/react-query";
import Image from "next/image";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
export default function Home() {
	// const { data, refetch } = useQuery({
	//   queryKey: ['post', postId],
	//   queryFn: () => postApi.getPost(postId as string),
	//   enabled: !!postId,
	// });

	//add
	const postData = data?.data?.result;

	const {
		register,
		handleSubmit,
		reset,
		setError,

		watch,
		control,
		setValue,
		formState: {errors, isSubmitting},
	} = useForm({
		defaultValues: {
			nameBrideGroom: "",
			zalo: "",
			phone: "",
			groomFather: "",
			groomMother: "",
			brideFather: "",
			brideMother: "",
			addressGroomParent: "",
			addressBrideParent: "",
			fullNameGroom: "",
			kindOfGroom: "",
			fullNameBride: "",
			kindOfBride: "",
			weddingCeremony: "",
			celebratedAt: "",
			time: "",
			solarCalendar: "",
			lunarCalendar: "",
			weddingInvitation: "",
			organizationLocation: "",
		},
		resolver: yupResolver(postSchema),
	});

	// const createPostMutation = useMutation({
	//   mutationFn: (body) => postApi.createPost(body),
	//   onSuccess: (data) => {
	//     reset();
	//     setValue('description', '');
	//     setImagesPreview([]);

	//     toast.success('Tạo bài viết thành công');
	//   },
	//   onError: (error: any) => {
	//     toast.error('Tạo bài viết thất bại');
	//   },
	// });

	const onSubmit = handleSubmit((data) => {});

	return (
		<main
			className="flex min-h-screen container mx-auto  flex-col items-center justify-between relative"
			style={{
				backgroundImage:
					"linear-gradient(rgb(255, 255, 255), rgb(212, 255, 164))",
			}}
		>
			<div className="relative w-screen h-full ">
				<div className="w-[237px] h-[310px] transition-all hover:rotate-[70] absolute top-[-80px] left-0 rotate-90">
					<Image src="/images/leaf.png" className="object-cover" fill alt="" />
				</div>

				<div className="w-[175px] h-[229px] transition-all hover:rotate-[70] absolute -top-14 right-20 -rotate-[120deg]">
					<Image src="/images/leaf2.png" className="object-cover" fill alt="" />
				</div>

				<div className="flex items-center  justify-center">
					<div className="flex items-center flex-col ">
						<div className="w-[126px] h-[126px] relative">
							<Image
								src="/images/logo.png"
								className="object-cover"
								fill
								alt=""
							/>
						</div>
						<div className="w-[168px] h-[52px] relative">
							<Image
								src="/images/info.png"
								className="object-cover"
								fill
								alt=""
							/>
						</div>
					</div>
					<div>
						<div className="w-[684px] h-[113px] relative">
							<Image
								src="/images/text.png"
								className="object-cover"
								fill
								alt=""
							/>
						</div>
					</div>
				</div>
				<MyInput
					name="bridegroom"
					control={control}
					label="Email"
					type="text"
					className="w-full"
					id="email"
					errorMessage={
						errors.email?.message
							? errors.email?.message
							: errors.email?.message
					}
					placeholder="Tên Dâu & Rể:"
				/>
			</div>
		</main>
	);
}
