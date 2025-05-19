import Link from "next/link";
import React from "react";

type Links = {
	href: string;
	display: string;
};
type GroupLinks = {
	name: string;
	links: Links[];
};
const Footer = () => {
	const groupLinks: GroupLinks[] = [
		{
			name: "products",
			links: [
				{ href: "/", display: "Logo 5" },
				{ href: "/", display: "Why Us" },
				{ href: "/", display: "Support" },
				{ href: "/", display: "Changelog" },
				{ href: "/", display: "Try live demo" },
			],
		},
		{
			name: "solutions",
			links: [
				{ href: "/", display: "Logo 5" },
				{ href: "/", display: "Why Us" },
				{ href: "/", display: "Support" },
				{ href: "/", display: "Changelog" },
				{ href: "/", display: "Try live demo" },
				{ href: "/", display: "Logo 5" },
				{ href: "/", display: "Why Us" },
				{ href: "/", display: "Support" },
			],
		},
		{
			name: "resources",
			links: [
				{ href: "/", display: "Logo 5" },
				{ href: "/", display: "Why Us" },
				{ href: "/", display: "Support" },
				{ href: "/", display: "Changelog" },
				{ href: "/", display: "Try live demo" },
			],
		},
		{
			name: "integrations",
			links: [
				{ href: "/", display: "Logo 5" },
				{ href: "/", display: "Why Us" },
				{ href: "/", display: "Support" },
				{ href: "/", display: "Changelog" },
				{ href: "/", display: "Try live demo" },
			],
		},
		{
			name: "company",
			links: [
				{ href: "/", display: "Logo 5" },
				{ href: "/", display: "Why Us" },
				{ href: "/", display: "Support" },
				{ href: "/", display: "Changelog" },
				{ href: "/", display: "Try live demo" },
				{ href: "/", display: "Logo 5" },
				{ href: "/", display: "Why Us" },
				{ href: "/", display: "Support" },
			],
		},
	];
	return (
		<div>
			<div className="flex flex-col md:flex-row space-y-10 md:space-y-0 items-start justify-start md:space-x-56 px-20 md:px-[112px]">
				<div className={"font-bold text-3xl text-black"}>LOGO</div>
				<div className="flex items-start flex-wrap space-x-20 space-y-7 md:space-y-0">
					{groupLinks.map((group, index) => (
						<div key={index}>
							<h4 className="uppercase text-[#1d1b84] font-semibold text-[15px] h-10">
								{/* group name */}
								{group.name}
							</h4>
							<ul className="flex flex-col space-y-2 text-[#5e709d]">
								{group.links.map((link, index) => (
									<li key={index} className="text-[13px] font-medium">
										<Link href={link.href}>{link.display}</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
