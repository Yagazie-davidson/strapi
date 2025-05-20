"use client";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
const integrationsData = [
	{
		name: "Next.js",
		description:
			"Next.js is a minimalistic framework for server-rendered React applications as well as statically exported React apps.",
		imageSrc: "/Next.png",
		link: "/",
	},
	{
		name: "React",
		description:
			"React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
		imageSrc: "/React.svg", // Assuming you have a React.png or will add one
		link: "/react-integration",
	},
	{
		name: "Vue.js",
		description:
			"Vue.js is a JavaScript framework for building user interfaces that provides a declarative, component-based programming model that helps you efficiently develop user interfaces of any complexity.",
		imageSrc: "/vuejs-logo.svg", // Assuming you have a Vue.png or will add one
		link: "/vue-integration",
	},
	{
		name: "Astro",
		description:
			"Astro is a modern static site builder that allows you to build a static website with a with various frameworks. Including React, Vue, Svelte, and more.",
		imageSrc: "/astro_icon.png", // Assuming you have a Svelte.png or will add one
		link: "/astro-integration",
	},
	{
		name: "React Router 7",
		description:
			"React Router is a multi-strategy router for React bridging the gap from React 18 to React 19. You can use it maximally as a React framework or minimally as a library with your own architecture.",
		imageSrc: "/react_router.png", // Assuming you have a Vue.png or will add one
		link: "/react-router-integration",
	},
	{
		name: "Angular",
		description:
			"Angular is a platform for building mobile and desktop web applications.",
		imageSrc: "/angular.png", // Assuming you have a Svelte.png or will add one
		link: "/angular-integration",
	},
];

const Integrations = () => {
	return (
		<div className="grid grid-cols-1 min-[986px]:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8 min-[986px]:px-16 lg:px-[112px] gap-5">
			{integrationsData.map((item, index) => (
				<motion.div
					initial={{ scale: 1 }}
					whileHover={{
						scale: 1.02,
						transition: { duration: 0.1, ease: "linear" },
					}}
					key={index}
				>
					{/* link */}
					<Link
						href={item.link}
						className="flex flex-col h-full pt-[40px] rounded-sm shadow-lg transition-colors duration-200"
					>
						<div className="flex items-center justify-center mb-2 h-[100px]">
							{/* image source */}
							<Image
								alt={`${item.name} integration`}
								src={item.imageSrc}
								height={70}
								width={70}
								className="object-contain"
							/>
						</div>
						<h5 className="text-[#1d1b84] text-[17px] text-center font-semibold mb-2">
							{/* name */}
							{item.name}
						</h5>
						<p className="text-[#344b80] text-[15px] text-center font-normal pb-[32px] px-4 flex-grow line-clamp-3">
							{/* description */}
							{item.description.slice(0, 100)}
						</p>
						<div className="border-b w-full mt-auto"></div>
						<div className="text-[#13bb70] flex items-center space-x-1.5 justify-center text-[14px] uppercase py-4">
							<p className="font-semibold">Create Project</p>
							<MoveRight size={15} />
						</div>
					</Link>
				</motion.div>
			))}
		</div>
	);
};

export default Integrations;
