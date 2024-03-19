"use client";
import MyInput from "@/components/MyInput/MyInput";
import {useMutation, useQuery} from "@tanstack/react-query";
import Image from "next/image";

import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from "react-hook-form";
import MySelect from "@/components/MySelect/MySelect";
import {formDataSchema} from "@/utils/validation";
import {listFormData} from "@/constants";

const arrayException = [
	"groomSolarCalendarInvitationParty",
	"groomDayOfWeekInvitationParty",
	"groomLunarCalendarInvitationParty",
	"groomMapInvitationParty",
	"brideSolarCalendarInvitationParty",
	"brideDayOfWeekInvitationParty",
	"brideLunarCalendarInvitationParty",
	"brideMapInvitationParty",
];
export default function Home() {
	const Export2Doc = (element, filename = "") => {
		var html =
			"<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
		var body1 = `
        <div className="flex items-center flex-col gap-y-2">
					<div className="flex gap-x-2">
						<span>Tên Dâu & Rễ:</span>
						<b>${element?.nameBrideGroom}</b>
					</div>
					<div className="flex gap-x-2">
						<span>Số Zalo:</span>
						<b>0123456789</b>
					</div>
					<div className="flex gap-x-2">
						<span>Số DT liên hệ:</span>
						<b>0123456789</b>
					</div>
				</div>
        `;
		var footer = "</body></html>";
		// var html = html+document.getElementById(element).innerHTML+footer;
		var html = html + body1 + footer;

		//link url
		var url =
			"data:application/vnd.ms-word;charset=utf-8," + encodeURIComponent(html);

		//file name
		filename = filename ? filename + ".doc" : "document.doc";

		// Creates the  download link element dynamically
		var downloadLink = document.createElement("a");

		document.body.appendChild(downloadLink);

		//Link to the file
		downloadLink.href = url;

		//Setting up file name
		downloadLink.download = filename;

		//triggering the function
		downloadLink.click();
		//Remove the a tag after donwload starts.
		document.body.removeChild(downloadLink);
	};
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
			groomWeddingCeremonyBrideProcession: "",
			groomCelebratedAtBrideProcession: "",
			groomAdditionalAddressBrideProcession: "",
			groomTimeBrideProcession: "",
			groomSolarCalendarBrideProcession: "",
			groomLunarCalendarBrideProcession: "",
			groomNumberCardInvitationParty: "",
			groomOrganizationLocationInvitationParty: "",
			groomAddressInvitationParty: "",
			groomSolarCalendarInvitationParty: "",
			groomDayOfWeekInvitationParty: "",
			groomLunarCalendarInvitationParty: "",
			groomMapInvitationParty: "",
			groomPickUpTimeInvitationParty: "",
			groomStartingTimeCeremonyInvitationParty: "",
			groomStartingTimePartyInvitationParty: "",
			brideWeddingCeremonyGroomProcession: "",
			brideCelebratedAtGroomProcession: "",
			brideAdditionalAddressGroomProcession: "",
			brideTimeGroomProcession: "",
			brideSolarCalendarGroomProcession: "",
			brideDayOfWeekGroomProcession: "",
			brideLunarCalendarGroomProcession: "",
			brideMapGroomProcession: "",
			brideNumberCardInvitationParty: "",
			brideOrganizationLocationInvitationParty: "",
			brideAddressInvitationParty: "",
			brideSolarCalendarInvitationParty: "",
			brideLunarCalendarInvitationParty: "",
			bridePickUpTimeInvitationParty: "",
			brideStartingTimeCeremonyInvitationParty: "",
			brideStartingTimePartyInvitationParty: "",
			numberCardInvitationParty: "",
			addressInvitationParty: "",
			pickUpTimeInvitationParty: "",
			startingTimeCeremonyInvitationParty: "",
			startingTimePartyInvitationParty: "",
			organizationLocationInvitationParty: "",
			solarCalendarInvitationParty: "",
			dayOfWeekInvitationParty: "",
			lunarCalendarInvitationParty: "",
			mapInvitationParty: "",
		},
		resolver: yupResolver(formDataSchema),
	});

	const onSubmit = handleSubmit((data) => {
		// createPostMutation.mutate(data);
		console.log("data: ", data);
		// Export2Doc(data);
	});

	const renderForm = (item) => {
		if (item.kind === "input") {
			return (
				<MyInput
					control={control}
					name={item.name}
					type={item.type}
					placeholder={item.placeholder}
					errorMessage={
						errors[item.name] ? errors[item.name].message : undefined
					}
				/>
			);
		} else {
			return (
				<MySelect
					control={control}
					name={item.name}
					type={item.type}
					errorMessage={
						errors[item.name] ? errors[item.name].message : undefined
					}
				>
					{item.data}
				</MySelect>
			);
		}
	};
	return (
		<form
			onSubmit={onSubmit}
			className="flex min-h-screen py-4 lg:pt-0 lg:px-0 px-2  flex-col items-center justify-between relative"
			style={{
				backgroundImage:
					"linear-gradient(rgb(255, 255, 255), rgb(212, 255, 164))",
			}}
		>
			<div className="relative lg:max-w-screen-2xl w-full mx-auto  h-full ">
				<div className="w-[237px] h-[310px] transition-all hover:rotate-[70] absolute top-[-80px] -left-20 lg:left-0 rotate-[80deg] lg:rotate-90">
					<Image src="/images/leaf.png" className="object-cover" fill alt="" />
				</div>

				<div className="w-[175px] h-[229px] transition-all hover:rotate-[70] absolute -top-20 lg:-top-14 -right-10 lg:right-20 -rotate-[120deg]">
					<Image src="/images/leaf2.png" className="object-cover" fill alt="" />
				</div>

				<div className="flex lg:flex-row flex-col items-center  justify-center">
					<div className="flex items-center flex-col ">
						<div className="w-[226px] h-[226px] relative">
							<Image
								src="/images/logo1.png"
								className="object-cover"
								fill
								alt=""
							/>
						</div>
					</div>
					<div>
						<div className="w-screen h-[66px] lg:w-[684px] lg:h-[113px] relative">
							<Image
								src="/images/text.png"
								className="object-cover"
								fill
								alt=""
							/>
						</div>
						<div className="flex flex-col lg:pl-12 px-2 lg:px-0 gap-2 ">
							{listFormData.header.map((item, index) => renderForm(item))}
						</div>
					</div>
				</div>
				<div className="lg:max-w-screen-xl w-full mx-auto mt-10">
					<div className="grid grid-cols-12 gap-5">
						<div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-2 grid-rows-4">
							<h3 className="py-2 bg-slate-50 uppercase font-bold text-center col-span-12">
								PHỤ HUYNH NHÀ TRAI
							</h3>
							{listFormData.groomParent.map((item, index) => (
								<div key={index} className="col-span-12">
									{renderForm(item)}
								</div>
							))}
						</div>
						<div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-2 grid-rows-4">
							<h3 className="py-2 bg-slate-50 uppercase font-bold text-center col-span-12">
								PHỤ HUYNH NHÀ GÁI
							</h3>
							{listFormData.brideParent.map((item, index) => (
								<div key={index} className="col-span-12">
									{renderForm(item)}
								</div>
							))}
						</div>
						<div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-2">
							<h3 className="py-2 bg-slate-50 uppercase font-bold text-center col-span-12">
								CHÚ RỂ
							</h3>
							{listFormData.groom.map((item, index) => (
								<div key={index} className="col-span-12">
									{renderForm(item)}
								</div>
							))}
						</div>
						<div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-2">
							<h3 className="py-2 bg-slate-50 uppercase font-bold text-center col-span-12">
								CÔ DÂU
							</h3>
							{listFormData.bride.map((item, index) => (
								<div key={index} className="col-span-12">
									{renderForm(item)}
								</div>
							))}
						</div>
						<div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-2 h-fit">
							<h3 className="py-2 bg-slate-50 uppercase font-bold text-center col-span-12">
								<span className="text-green-500 bg-yellow-400 p-1">
									THIỆP NHÀ TRAI
								</span>
								<br />
								PHẦN LỄ RƯỚC DÂU HOẶC THÁNH LỄ HÔN PHỐI
							</h3>
							{listFormData.groomHouseCard.map((item, index) => (
								<div key={index} className="col-span-12">
									{renderForm(item)}
								</div>
							))}
							<div className="col-span-12 text-red-500 text-xs lg:text-sm space-y-1">
								<p className="w-full">
									* Nếu là <b>Lễ Tân Hôn</b> tại <b>Tư Gia</b>: Ghi ngày & giờ
									đã rước dâu về nhà trai.
								</p>
								<p className="w-full">
									* Nếu là <b>Lễ Thành Hôn</b> tại <b>Tư Gia</b>: Ghi ngày & giờ
									đã rước dâu về nhà trai.
								</p>
								<p className="w-full">
									* Nếu là Lễ <b>Tân Hôn</b> hoặc <b>Thành Hôn</b> tại{" "}
									<b>Thánh Đường</b>: Ghi ngày và giờ mà Cha sẽ làm lễ.
								</p>
							</div>
						</div>

						<div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-2 ">
							<h3 className="py-2 bg-slate-50 uppercase font-bold text-center col-span-12">
								<span className="text-green-500 bg-yellow-400 p-1">
									THIỆP NHÀ TRAI
								</span>
								<br />
								PHẦN TIỆC MỜI KHÁCH
							</h3>
							{listFormData.groomHouseCard2.map((item, index) => (
								<div
									key={index}
									className={`${
										arrayException.includes(item.name)
											? "col-span-6"
											: "col-span-12"
									}`}
								>
									{renderForm(item)}
								</div>
							))}
						</div>
						<div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-2 h-fit">
							<h3 className="py-2 bg-slate-50 uppercase font-bold text-center col-span-12">
								<span className="text-green-500 bg-yellow-400 p-1">
									THIỆP NHÀ GÁI
								</span>
								<br />
								PHẦN LỄ RƯỚC DÂU HOẶC THÁNH LỄ HÔN PHỐI
							</h3>
							{listFormData.brideHouseCard.map((item, index) => (
								<div key={index} className="col-span-12">
									{renderForm(item)}
								</div>
							))}
							<div className="col-span-12 text-red-500 space-y-1 text-xs lg:text-sm">
								<p className="w-full">
									* Nếu là <b>Lễ Vu Quy</b> tại <b>Tư Gia</b>: Ghi ngày và giờ
									đến nhà gái rước dâu.
								</p>
								<p className="w-full">
									* Nếu là <b>Lễ Thành Hôn</b> tại <b>Tư Gia</b>: Ghi ngày & giờ
									đã rước dâu về nhà trai.
								</p>
								<p className="w-full">
									* Nếu là <b>Lễ Vu Quy</b> hoặc <b>Thành Hôn</b> tại{" "}
									<b>Thánh Đường</b>: Ghi ngày và giờ mà Cha sẽ làm lễ.
								</p>
							</div>
						</div>

						<div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-2 ">
							<h3 className="py-2 bg-slate-50 uppercase font-bold text-center col-span-12">
								<span className="text-green-500 bg-yellow-400 p-1">
									THIỆP NHÀ GÁI
								</span>
								<br />
								PHẦN TIỆC MỜI KHÁCH
							</h3>
							{listFormData.brideHouseCard2.map((item, index) => (
								<div
									key={index}
									className={`${
										arrayException.includes(item.name)
											? "col-span-6"
											: "col-span-12"
									}`}
								>
									{renderForm(item)}
								</div>
							))}
						</div>
						<div className="col-span-12 grid grid-cols-12 gap-2 ">
							<h3 className="py-2 bg-slate-50 uppercase font-bold text-center col-span-12">
								<span className="text-green-500 bg-yellow-400 p-1">
									TIỆC BÁO HỶ
								</span>
								<br />
								PHẦN TIỆC MỜI KHÁCH
							</h3>
							{listFormData.weedingParty.map((item, index) => (
								<div key={index} className="col-span-6">
									{renderForm(item)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<p className="uppercase text-red-500 lg:max-w-screen-lg text-sm lg:text-base text-center my-4">
				TRƯỚC KHI NHẤN NÚT "GỬI NGAY", QUÝ KHÁCH VUI LÒNG CHỤP LẠI MÀN HÌNH ĐẦY
				ĐỦ THÔNG TIN ĐÃ ĐIỀN GỬI VÀO NHÓM ZALO ĐỂ TRÁNH HỆ THỐNG LỖI GHI NHẬN
				KHÔNG ĐỦ THÔNG TIN
			</p>
			<button type="submit" className="text-white bg-green-800 py-2 px-10">
				Gửi ngay
			</button>
		</form>
	);
}
