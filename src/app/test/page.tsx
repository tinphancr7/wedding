"use client";
import React from "react";

const Test = () => {
	const Export2Doc = (element, filename = "") => {
		var html =
			"<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
		var body1 = `
        <div className="flex items-center flex-col gap-y-2">
					<div className="flex gap-x-2">
						<span>Tên Dâu & Rễ:</span>
						<b>${element.nameBrideGroom}</b>
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

	return (
		<div>
			<div id="content-to-pdf">
				<h2>This is my title</h2>
				<p className="text">
					This is a paragraph of text which needs to be properly formatted so
					that it will appear propperly.
				</p>
				<p style={{color: "red"}}>
					This will be the reference section in smaller font
				</p>
			</div>

			<button
				onClick={() => {
					Export2Doc();
				}}
			>
				Export as .doc
			</button>
		</div>
	);
};

export default Test;
