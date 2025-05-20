"use client";
import Image from "next/image";
import React from "react";

const Companies = () => {
	const logos: string[] = [
		"/orion.svg",
		"/toyota.svg",
		"/Logo_engie.svg",
		"/walmart.svg",
		"/Delivery_NB.svg",
		"/NASA_NB.svg",
		"/societe.svg",
		"/Accenture.svg",
	];
	return (
		<div className="grid grid-cols-2 gap-20 min-[986px]:gap-0 min-[986px]:flex min-[986px]:justify-center min-[986px]:items-center min-[986px]:space-x-10">
			{logos.map((logoSrc, index) => (
				<Image
					key={index}
					alt="company logo"
					src={logoSrc}
					width={100}
					height={100}
				/>
			))}
		</div>
	);
};

export default Companies;
