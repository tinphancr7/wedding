export default function Home() {
	return (
		<div className="container mx-auto">
			<div className="text-black mt-5">
				<div className="flex items-center flex-col gap-y-2">
					<div className="flex gap-x-2">
						<p>Tên Dâu & Rễ:</p>
						<p>Nguyễn Văn A - LÊ Thị B</p>
					</div>
					<div className="flex gap-x-2">
						<p>Số Zalo:</p>
						<p>0123456789</p>
					</div>
					<div className="flex gap-x-2">
						<p>Số DT liên hệ:</p>
						<p>0123456789</p>
					</div>
				</div>

				<div
					className=""
					style={{
						display: "grid",
						gridTemplateColumns: "repeat(2, 1fr)",
						gap: "0.5rem",
					}}
				>
					{/* Phụ huynh nhà trai */}
					<div
						style={{gridColumn: "span 1", minWidth: 0}}
						className="col-span-1 h-fit"
					>
						{/* Phụ huynh nhà trai */}
						<h2
							style={{
								backgroundColor: "white",
								textTransform: "uppercase",
								textAlign: "center",
								paddingTop: "0.25rem",
								paddingBottom: "0.25rem",
							}}
							className="bg-white uppercase text-center py-1"
						>
							Phụ huynh nhà trai
						</h2>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "0.25rem",
							}}
							className="flex justify-center gap-x-1"
						>
							<p>Ông:</p>
							<p>Nguyễn Văn A</p>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "0.25rem",
							}}
							className="flex justify-center gap-x-1"
						>
							<p>Bà:</p>
							<p>Lê Thị B</p>
						</div>
					</div>

					{/* Phụ huynh nhà gái */}
					<div
						style={{gridColumn: "span 1", minWidth: 0}}
						className="col-span-1 h-fit"
					>
						<h2
							style={{
								backgroundColor: "white",
								textTransform: "uppercase",
								textAlign: "center",
								paddingTop: "0.25rem",
								paddingBottom: "0.25rem",
							}}
							className="bg-white uppercase text-center py-1"
						>
							Phụ huynh nhà gái
						</h2>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "0.25rem",
							}}
							className="flex justify-center gap-x-1"
						>
							<p>Ông:</p>
							<p>Nguyễn Văn A</p>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "0.25rem",
							}}
							className="flex justify-center gap-x-1"
						>
							<p>Bà:</p>
							<p>Lê Thị B</p>
						</div>
					</div>

					{/* Thiệp nhà trai */}
					<div
						style={{gridColumn: "span 1", minWidth: 0}}
						className="col-span-1"
					>
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								paddingTop: "0.25rem",
								paddingBottom: "0.25rem",
								backgroundColor: "white",
								alignItems: "center",
							}}
							className="flex flex-col py-1 bg-white items-center"
						>
							<h2
								style={{
									fontWeight: "bold",
									color: "red",
									backgroundColor: "#fdeeee",
									paddingLeft: "0.5rem",
									paddingRight: "0.5rem",
									paddingTop: "0.25rem",
									paddingBottom: "0.25rem",
									borderRadius: "0.25rem",
								}}
								className="font-bold text-red-600 bg-red-100 px-2 py-1 w-max rounded-full"
							>
								THIỆP NHÀ TRAI
							</h2>
							<h2 style={{fontWeight: "bold"}}>
								PHẦN LỄ RƯỚC DÂU HOẶC THÁNH LỄ HÔN PHỐI
							</h2>
						</div>

						<p style={{textAlign: "center"}}>Lễ thành hôn:</p>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "0.25rem",
							}}
							className="flex justify-center gap-x-1"
						>
							<p style={{marginRight: "0.25rem"}}>Cử hành tại:</p>
							<p>Tư gia</p>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "0.25rem",
							}}
							className="flex justify-center gap-x-1"
						>
							<p style={{marginRight: "0.25rem"}}>Thánh đường:</p>
							<p>Thánh đường ABCXYZ...</p>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "0.25rem",
							}}
							className="flex justify-center gap-x-1"
						>
							<p style={{marginRight: "0.25rem"}}>Vào lúc:</p>
							<p>13 giờ 20</p>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "0.25rem",
							}}
							className="flex justify-center gap-x-1"
						>
							<p style={{marginRight: "0.25rem"}}>Dương lịch:</p>
							<p>10/05/2024</p>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: "0.25rem",
							}}
							className="flex justify-center gap-x-1"
						>
							<p style={{marginRight: "0.25rem"}}>Âm lịch:</p>
							<p>10/05/2024</p>
						</div>
					</div>

					{/* Thiệp nhà trai */}
					{/* <div className="col-span-1">
						<div className="flex flex-col py-1 bg-white items-center">
							<h2 className="font-bold text-red-600 bg-red-100 px-2 py-1 w-max rounded-full">
								THIỆP NHÀ TRAI
							</h2>
							<h2 className="font-bold">PHẦN TIỆC MỜI KHÁCH</h2>
						</div>

						<div className="flex justify-center gap-x-1">
							<p>Số lượng thiệp nhà trai dự định in:</p>
							<p>100</p>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Địa điểm tỗ chức:</p>
							<p>Tư gia</p>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Địa chỉ:</p>
							<p>Đường ABCXYZ...</p>
						</div>
						<div className="flex justify-center gap-x-3 items-center">
							<p>Thứ Hai</p>

							<div className="flex justify-center gap-x-1">
								<p>Dương lịch:</p>
								<p>10/05/2024</p>
							</div>
						</div>
						<div className="flex justify-center gap-x-3 items-center">
							<p>Có bản đồ</p>

							<div className="flex justify-center gap-x-1">
								<p>Âm lịch:</p>
								<p>10/05/2024</p>
							</div>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Giờ đón khách:</p>
							<p>13 giờ 20</p>
						</div>

						<div className="flex justify-center gap-x-1">
							<p>Giờ bắt đầu nghi thức:</p>
							<p>13 giờ 20</p>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Giờ khai tiệc ăn:</p>
							<p>13 giờ 20</p>
						</div>
					</div> */}

					{/* Thiệp nhà gái */}
					{/* <div className="col-span-1">
						<div className="flex flex-col py-1 bg-white items-center uppercase">
							<h2 className="font-bold text-red-600 bg-red-100 px-2 py-1 w-max rounded-full">
								THIỆP NHÀ Gái
							</h2>
							<h2 className="font-bold">
								PHẦN LỄ RƯỚC DÂU HOẶC THÁNH LỄ HÔN PHỐI
							</h2>
						</div>

						<p className="text-center">Lễ thành hôn:</p>
						<div className="flex justify-center gap-x-1">
							<p>Cử hành tại:</p>
							<p>Tư gia</p>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Thánh đường:</p>
							<p>Thánh đường ABCXYZ...</p>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Vào lúc:</p>
							<p>13 giờ 20</p>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Dương lịch:</p>
							<p>10/05/2024</p>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Âm lịch:</p>
							<p>10/05/2024</p>
						</div>
					</div> */}

					{/* Thiệp nhà gái */}
					{/* <div className="col-span-1">
						<div className="flex flex-col py-1 bg-white items-center uppercase">
							<h2 className="font-bold text-red-600 bg-red-100 px-2 py-1 w-max rounded-full">
								THIỆP NHÀ GÁI
							</h2>
							<h2 className="font-bold">PHẦN TIỆC MỜI KHÁCH</h2>
						</div>

						<div className="flex justify-center gap-x-1">
							<p>Số lượng thiệp nhà gái dự định in:</p>
							<p>100</p>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Địa điểm tỗ chức:</p>
							<p>Tư gia</p>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Địa chỉ:</p>
							<p>Đường ABCXYZ...</p>
						</div>
						<div className="flex justify-center gap-x-3 items-center">
							<p>Thứ Hai</p>

							<div className="flex justify-center gap-x-1">
								<p>Dương lịch:</p>
								<p>10/05/2024</p>
							</div>
						</div>
						<div className="flex justify-center gap-x-3 items-center">
							<p>Có bản đồ</p>

							<div className="flex justify-center gap-x-1">
								<p>Âm lịch:</p>
								<p>10/05/2024</p>
							</div>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Giờ đón khách:</p>
							<p>13 giờ 20</p>
						</div>

						<div className="flex justify-center gap-x-1">
							<p>Giờ bắt đầu nghi thức:</p>
							<p>13 giờ 20</p>
						</div>
						<div className="flex justify-center gap-x-1">
							<p>Giờ khai tiệc ăn:</p>
							<p>13 giờ 20</p>
						</div>
					</div> */}

					{/* <div className="col-span-2">
						<div className="flex flex-col py-1 bg-white items-center uppercase">
							<h2 className="font-bold text-red-600 bg-red-100 px-2 py-1 w-max rounded-full">
								TIỆC BÁO HỶ
							</h2>
							<h2 className="font-bold">PHẦN TIỆC MỜI KHÁCH</h2>
						</div>
						<div className="grid grid-cols-2">
							<div className="flex justify-center gap-x-1">
								<p>Số lượng thiệp tiệc báo hỷ:</p>
								<p>100</p>
							</div>
							<div className="flex justify-center gap-x-1">
								<p>Địa điểm tổ chức:</p>
								<p>Đường ABC Phường XYZ Quận 234 TP.HCM</p>
							</div>
							<div className="flex justify-center gap-x-1">
								<p>Địa chỉ:</p>
								<p>Đường ABC Phường XYZ Quận 234 TP.HCM</p>
							</div>
							<div className="flex justify-center gap-x-3 items-center">
								<p>Thứ Hai</p>

								<div className="flex justify-center gap-x-1">
									<p>Dương lịch:</p>
									<p>10/05/2024</p>
								</div>
							</div>
							<div className="flex justify-center gap-x-1">
								<p>Giờ đón khách:</p>
								<p>23 giờ 00</p>
							</div>
							<div className="flex justify-center gap-x-3 items-center">
								<p>Có bản đồ</p>

								<div className="flex justify-center gap-x-1">
									<p>Âm lịch:</p>
									<p>10/05/2024</p>
								</div>
							</div>
							<div className="flex justify-center gap-x-1">
								<p>Giờ bắt đầu nghi thức:</p>
								<p>23 giờ 00</p>
							</div>
							<div className="flex justify-center gap-x-1">
								<p>Giờ khai tiệc ăn:</p>
								<p>23 giờ 00</p>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}
