import * as yup from "yup";
const formDataSchema = yup.object({
	nameBrideGroom: yup.string().required("Vui lòng không được để trống"),
	zalo: yup
		.number()
		.typeError("Vui lòng nhập số")
		.required("Vui lòng không được để trống"),
	phone: yup
		.number()
		.typeError("Vui lòng nhập số")
		.required("Vui lòng không được để trống"),
	groomFather: yup.string().required("Vui lòng không được để trống"),
	groomMother: yup.string().required("Vui lòng không được để trống"),
	brideFather: yup.string().required("Vui lòng không được để trống"),
	brideMother: yup.string().required("Vui lòng không được để trống"),
	addressGroomParent: yup.string().required("Vui lòng không được để trống"),
	addressBrideParent: yup.string().required("Vui lòng không được để trống"),
	fullNameGroom: yup.string().required("Vui lòng không được để trống"),
	kindOfGroom: yup.string().required("Vui lòng không được để trống"),
	fullNameBride: yup.string().required("Vui lòng không được để trống"),
	kindOfBride: yup.string().required("Vui lòng không được để trống"),
	groomWeddingCeremonyBrideProcession: yup
		.string()

		.required("Vui lòng không được để trống"),
	groomCelebratedAtBrideProcession: yup
		.string()

		.required("Vui lòng không được để trống"),

	groomTimeBrideProcession: yup
		.string()
		.required("Vui lòng không được để trống"),
	groomSolarCalendarBrideProcession: yup
		.string()
		.required("Vui lòng không được để trống"),

	groomLunarCalendarBrideProcession: yup
		.string()
		.required("Vui lòng không được để trống"),
	groomNumberCardInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	groomOrganizationLocationInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),

	groomSolarCalendarInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	groomDayOfWeekInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	groomLunarCalendarInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),

	brideWeddingCeremonyGroomProcession: yup
		.string()
		.required("Vui lòng không được để trống"),
	brideCelebratedAtGroomProcession: yup
		.string()
		.required("Vui lòng không được để trống"),
	brideAdditionalAddressGroomProcession: yup
		.string()
		.required("Vui lòng không được để trống"),
	brideTimeGroomProcession: yup
		.string()
		.required("Vui lòng không được để trống"),
	brideSolarCalendarGroomProcession: yup

		.string()
		.required("Vui lòng không được để trống"),
	brideDayOfWeekGroomProcession: yup
		.string()
		.required("Vui lòng không được để trống"),
	brideLunarCalendarGroomProcession: yup

		.string()
		.required("Vui lòng không được để trống"),

	brideNumberCardInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	brideAddressInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	brideSolarCalendarInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	brideLunarCalendarInvitationParty: yup

		.string()
		.required("Vui lòng không được để trống"),

	numberCardInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	addressInvitationParty: yup.string().required("Vui lòng không được để trống"),
	pickUpTimeInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	startingTimeCeremonyInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	startingTimePartyInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	organizationLocationInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	solarCalendarInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	dayOfWeekInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
	lunarCalendarInvitationParty: yup
		.string()
		.required("Vui lòng không được để trống"),
});

export type FormDataSchema = yup.InferType<typeof formDataSchema>;

export {formDataSchema};
