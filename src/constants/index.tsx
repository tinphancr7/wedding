const listFormData = {
	header: [
		{
			name: "nameBrideGroom",
			type: "text",
			placeholder: "Tên Dâu & Rể:",
			kind: "input",
		},
		{
			name: "zalo",
			type: "text",
			placeholder: "Số Zalo (Nơi duyệt mẫu demo) :",
			kind: "input",
		},
		{
			name: "phone",
			type: "text",
			placeholder: "Số ĐT liên hệ:",
			kind: "input",
		},
	],
	groomParent: [
		{
			name: "groomFather",
			type: "text",
			placeholder: "ÔNG: (Thêm tên Thánh nếu có)",
			kind: "input",
		},
		{
			name: "groomMother",
			type: "text",
			placeholder: "BÀ: (Thêm tên Thánh nếu có)",
			kind: "input",
		},
		{
			name: "addressGroomParent",
			type: "text",
			placeholder: "ĐỊA CHỈ:",
			kind: "input",
		},
	],
	brideParent: [
		{
			name: "brideFather",
			type: "text",
			placeholder: "ÔNG: (Thêm tên Thánh nếu có)",
			kind: "input",
		},
		{
			name: "brideMother",
			type: "text",
			placeholder: "BÀ: (Thêm tên Thánh nếu có)",
			kind: "input",
		},
		{
			name: "addressBrideParent",
			type: "text",
			placeholder: "ĐỊA CHỈ:",
			kind: "input",
		},
	],
	groom: [
		{
			name: "fullNameGroom",
			type: "text",
			placeholder: "HỌ & TÊN: (Thêm tên Thánh nếu có)",
			kind: "input",
		},
		{
			name: "kindOfGroom",
			type: "select",
			placeholder: "Chọn Trưởng Nam hoặc...",
			kind: "select",
			data: (
				<>
					<option value="">Chọn Trưởng Nam hoặc...</option>
					<option value="Trưởng nam">Trưởng nam</option>
					<option value="Quý nam">Quý nam</option>
					<option value="Thứ nam">Thứ nam</option>
					<option value="Út nam">Út nam</option>
				</>
			),
		},
	],
	bride: [
		{
			name: "fullNameBride",
			type: "text",
			placeholder: "HỌ & TÊN: (Thêm tên Thánh nếu có)",
			kind: "input",
		},
		{
			name: "kindOfBride",
			type: "select",
			placeholder: "Chọn Trưởng Nữ hoặc...",
			kind: "select",
			data: (
				<>
					<option value="">Chọn Trưởng Nữ hoặc...</option>
					<option value="Trưởng nữ">Trưởng nữ</option>
					<option value="Quý nữ">Quý nữ</option>
					<option value="Thứ nữ">Thứ nữ</option>
					<option value="Út nữ">Út nữ</option>
				</>
			),
		},
	],
	groomHouseCard: [
		{
			name: "groomWeddingCeremonyBrideProcession",
			type: "text",
			placeholder: "Chọn LỄ TÂN HÔN hoặc...",
			kind: "select",
			data: (
				<>
					<option value="">Chọn LỄ TÂN HÔN hoặc...</option>
					<option value="LỄ TÂN HÔN (Tiệc mời khách của nhà trai chủ hôn)">
						LỄ TÂN HÔN (Tiệc mời khách của nhà trai chủ hôn)
					</option>
					<option value="LỄ THÀNH HÔN (Tiệc mời khách chung của 2 nhà cùng chủ hôn)">
						LỄ THÀNH HÔN (Tiệc mời khách chung của 2 nhà cùng chủ hôn)
					</option>
				</>
			),
		},
		{
			name: "groomCelebratedAtBrideProcession",
			type: "text",
			placeholder: "TẠI:",
			kind: "select",
			data: (
				<>
					<option value="">CỬ HÀNH TẠI:</option>
					<option value="Tư Gia">Tư Gia</option>
					<option value="Thánh Đường">Thánh Đường</option>
					<option value="Không Tổ Chức">Không Tổ Chức</option>
				</>
			),
		},
		{
			name: "groomAdditionalAddressBrideProcession",
			type: "text",
			placeholder: "BỔ SUNG TÊN THÁNH ĐƯỜNG:  ",
			kind: "input",
		},
		{
			name: "groomTimeBrideProcession",
			type: "text",
			placeholder: "VÀO LÚC:",
			kind: "input",
		},
		{
			name: "groomSolarCalendarBrideProcession",
			type: "text",
			placeholder: "NGÀY DƯƠNG:",
			kind: "input",
		},
		{
			name: "groomLunarCalendarBrideProcession",
			type: "text",
			placeholder: "NGÀY ÂM:",
			kind: "input",
		},
	],
	groomHouseCard2: [
		{
			name: "groomNumberCardInvitationParty",
			type: "number",
			placeholder: "SỐ LƯỢNG THIỆP NHÀ TRAI DỰ ĐỊNH IN:",
			kind: "input",
		},
		{
			name: "groomOrganizationLocationInvitationParty",
			type: "text",
			placeholder: "ĐỊA ĐIỂM TỔ CHỨC: Tư Gia Hoặc Điền Tên Nhà Hàng",
			kind: "input",
		},
		{
			name: "groomAddressInvitationParty",
			type: "text",
			placeholder: "ĐỊA CHỈ: (Thêm Sảnh + Lầu nếu có)",
			kind: "input",
		},
		{
			name: "groomSolarCalendarInvitationParty",
			type: "text",
			placeholder: "DƯƠNG LỊCH: ngày / tháng / năm",
			kind: "input",
		},
		{
			name: "groomDayOfWeekInvitationParty",
			type: "select",
			placeholder: "",
			kind: "select",
			data: (
				<>
					<option value="">THỨ HAI hoặc ...</option>
					<option value="THỨ HAI">THỨ HAI</option>
					<option value="THỨ BA">THỨ BA</option>
					<option value="THỨ TƯ">THỨ TƯ</option>
					<option value="THỨ NĂM">THỨ NĂM</option>
					<option value="THỨ SÁU">THỨ SÁU</option>
					<option value="THỨ BẢY">THỨ BẢY</option>
					<option value="CHỦ NHẬT">CHỦ NHẬT</option>
					<option value="ĐỂ TRỐNG">ĐỂ TRỐNG</option>
				</>
			),
		},
		{
			name: "groomLunarCalendarInvitationParty",
			type: "text",
			placeholder: "ÂM LỊCH: ngày / tháng / năm",
			kind: "input",
		},
		{
			name: "groomMapInvitationParty",
			type: "select",
			placeholder: "",
			kind: "select",
			data: (
				<>
					<option value="">Chọn BẢN ĐỒ ĐƯỜNG ĐI</option>
					<option value="CÓ IN BẢN ĐỒ">CÓ IN BẢN ĐỒ</option>
					<option value="KHÔNG IN BẢN ĐỒ">KHÔNG IN BẢN ĐỒ</option>
				</>
			),
		},
		{
			name: "groomPickUpTimeInvitationParty",
			type: "text",
			placeholder:
				"GIỜ ĐÓN KHÁCH: (Ghi vào Viết Tay nếu muốn để trông viết tay)",
			kind: "input",
		},
		{
			name: "groomStartingTimeCeremonyInvitationParty",
			type: "text",
			placeholder:
				"GIỜ BẮT ĐẦU NGHI THỨC: (Ghi vào Viết Tay nếu muốn để trông)",
			kind: "input",
		},
		{
			name: "groomStartingTimePartyInvitationParty",
			type: "text",
			placeholder:
				"GIỜ KHAI TIỆC ĂN: (Ghi vào Viết Tay nếu muốn để trông viết tay)",
			kind: "input",
		},
	],

	brideHouseCard: [
		{
			name: "brideWeddingCeremonyGroomProcession",
			type: "text",
			placeholder: "Chọn LỄ TÂN HÔN hoặc...",
			kind: "select",
			data: (
				<>
					<option value="">Chọn LỄ VU QUY hoặc ...</option>
					<option value="LỄ VU QUY (Tiệc mời khách của nhà gái chủ hôn)">
						LỄ VU QUY (Tiệc mời khách của nhà gái chủ hôn)
					</option>
					<option value="LỄ THÀNH HÔN (Tiệc mời khách chung của 2 nhà cùng chủ hôn)">
						LỄ THÀNH HÔN (Tiệc mời khách chung của 2 nhà cùng chủ hôn)
					</option>
				</>
			),
		},
		{
			name: "brideCelebratedAtGroomProcession",
			type: "text",
			placeholder: "Chọn CỬ HÀNH TẠI:",
			kind: "select",
			data: (
				<>
					<option value="">Chọn CỬ HÀNH TẠI:</option>
					<option value="Tư Gia">Tư Gia</option>
					<option value="Thánh Đường">Thánh Đường</option>
					<option value="Không Tổ Chức">Không Tổ Chức</option>
				</>
			),
		},
		{
			name: "brideAdditionalAddressGroomProcession",
			type: "text",
			placeholder: "BỔ SUNG TÊN THÁNH ĐƯỜNG:  ",
			kind: "input",
		},
		{
			name: "brideTimeGroomProcession",
			type: "text",
			placeholder: "VÀO LÚC:",
			kind: "input",
		},
		{
			name: "brideSolarCalendarGroomProcession",
			type: "text",
			placeholder: "NGÀY DƯƠNG:",
			kind: "input",
		},
		{
			name: "brideLunarCalendarGroomProcession",
			type: "text",
			placeholder: "NGÀY ÂM:",
			kind: "input",
		},
	],
	brideHouseCard2: [
		{
			name: "brideNumberCardInvitationParty",
			type: "number",
			placeholder: "SỐ LƯỢNG THIỆP NHÀ GÁI DỰ ĐỊNH IN:",
			kind: "input",
		},
		{
			name: "brideOrganizationLocationInvitationParty",
			type: "text",
			placeholder: "ĐỊA ĐIỂM TỔ CHỨC: Tư Gia Hoặc Điền Tên Nhà Hàng",
			kind: "input",
		},
		{
			name: "brideAddressInvitationParty",
			type: "text",
			placeholder: "ĐỊA CHỈ: (Thêm Sảnh + Lầu nếu có)",
			kind: "input",
		},
		{
			name: "brideDayOfWeekInvitationParty",
			type: "select",
			placeholder: "",
			kind: "select",
			data: (
				<>
					<option value="">THỨ HAI hoặc ...</option>
					<option value="THỨ HAI">THỨ HAI</option>
					<option value="THỨ BA">THỨ BA</option>
					<option value="THỨ TƯ">THỨ TƯ</option>
					<option value="THỨ NĂM">THỨ NĂM</option>
					<option value="THỨ SÁU">THỨ SÁU</option>
					<option value="THỨ BẢY">THỨ BẢY</option>
					<option value="CHỦ NHẬT">CHỦ NHẬT</option>
					<option value="ĐỂ TRỐNG">ĐỂ TRỐNG</option>
				</>
			),
		},
		{
			name: "brideSolarCalendarInvitationParty",
			type: "text",
			placeholder: "DƯƠNG LỊCH: ngày / tháng / năm",
			kind: "input",
		},
		{
			name: "brideMapInvitationParty",
			type: "select",
			placeholder: "",
			kind: "select",
			data: (
				<>
					<option value="">Chọn BẢN ĐỒ ĐƯỜNG ĐI</option>
					<option value="CÓ IN BẢN ĐỒ">CÓ IN BẢN ĐỒ</option>
					<option value="KHÔNG IN BẢN ĐỒ">KHÔNG IN BẢN ĐỒ</option>
				</>
			),
		},
		{
			name: "brideLunarCalendarInvitationParty",
			type: "text",
			placeholder: "ÂM LỊCH: ngày / tháng / năm",
			kind: "input",
		},
		{
			name: "bridePickUpTimeInvitationParty",
			type: "text",
			placeholder:
				"GIỜ ĐÓN KHÁCH: (Ghi vào Viết Tay nếu muốn để trông viết tay)",
			kind: "input",
		},
		{
			name: "brideStartingTimeCeremonyInvitationParty",
			type: "text",
			placeholder:
				"GIỜ BẮT ĐẦU NGHI THỨC: (Ghi vào Viết Tay nếu muốn để trông)",
			kind: "input",
		},
		{
			name: "brideStartingTimePartyInvitationParty",
			type: "text",
			placeholder:
				"GIỜ KHAI TIỆC ĂN: (Ghi vào Viết Tay nếu muốn để trông viết tay)",
			kind: "input",
		},
	],
	weedingParty: [
		{
			name: "numberCardInvitationParty",
			type: "number",
			placeholder: "SỐ LƯỢNG THIỆP TIỆC BÁO HỶ:",
			kind: "input",
		},
		{
			name: "addressInvitationParty",
			type: "text",
			placeholder: "ĐỊA CHỈ: (Thêm Sảnh + Lầu nếu có)",
			kind: "input",
		},

		{
			name: "pickUpTimeInvitationParty",
			type: "text",
			placeholder:
				"GIỜ ĐÓN KHÁCH: (Ghi vào Viết Tay nếu muốn để trông viết tay)",
			kind: "input",
		},
		{
			name: "startingTimeCeremonyInvitationParty",
			type: "text",
			placeholder:
				"GIỜ BẮT ĐẦU NGHI THỨC: (Ghi vào Viết Tay nếu muốn để trông)",
			kind: "input",
		},
		{
			name: "startingTimePartyInvitationParty",
			type: "text",
			placeholder:
				"GIỜ KHAI TIỆC ĂN: (Ghi vào Viết Tay nếu muốn để trông viết tay)",
			kind: "input",
		},
		{
			name: "organizationLocationInvitationParty",
			type: "text",
			placeholder: "ĐỊA ĐIỂM TỔ CHỨC: Tư Gia Hoặc Điền Tên Nhà Hàng",
			kind: "input",
		},
		{
			name: "solarCalendarInvitationParty",
			type: "text",
			placeholder: "DƯƠNG LỊCH: ngày / tháng / năm",
			kind: "input",
		},
		{
			name: "dayOfWeekInvitationParty",
			type: "select",
			placeholder: "",
			kind: "select",
			data: (
				<>
					<option value="">THỨ HAI hoặc ...</option>
					<option value="THỨ HAI">THỨ HAI</option>
					<option value="THỨ BA">THỨ BA</option>
					<option value="THỨ TƯ">THỨ TƯ</option>
					<option value="THỨ NĂM">THỨ NĂM</option>
					<option value="THỨ SÁU">THỨ SÁU</option>
					<option value="THỨ BẢY">THỨ BẢY</option>
					<option value="CHỦ NHẬT">CHỦ NHẬT</option>
					<option value="ĐỂ TRỐNG">ĐỂ TRỐNG</option>
				</>
			),
		},
		{
			name: "lunarCalendarInvitationParty",
			type: "text",
			placeholder: "ÂM LỊCH: ngày / tháng / năm",
			kind: "input",
		},
		{
			name: "mapInvitationParty",
			type: "select",
			placeholder: "",
			kind: "select",
			data: (
				<>
					<option value="">Chọn BẢN ĐỒ ĐƯỜNG ĐI</option>
					<option value="CÓ IN BẢN ĐỒ">CÓ IN BẢN ĐỒ</option>
					<option value="KHÔNG IN BẢN ĐỒ">KHÔNG IN BẢN ĐỒ</option>
				</>
			),
		},
	],
};
export {listFormData};
