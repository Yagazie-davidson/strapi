"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Search } from "lucide-react";
import MobileMenu from "./MobileMenu";

const components: { title: string; href: string; description: string }[] = [
	{
		title: "Alert Dialog",
		href: "/docs/primitives/alert-dialog",
		description:
			"A modal dialog that interrupts the user with important content and expects a response.",
	},
	{
		title: "Hover Card",
		href: "/docs/primitives/hover-card",
		description:
			"For sighted users to preview content available behind a link.",
	},
	{
		title: "Progress",
		href: "/docs/primitives/progress",
		description:
			"Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
	},
	{
		title: "Scroll-area",
		href: "/docs/primitives/scroll-area",
		description: "Visually or semantically separates content.",
	},
	{
		title: "Tabs",
		href: "/docs/primitives/tabs",
		description:
			"A set of layered sections of content—known as tab panels—that are displayed one at a time.",
	},
	{
		title: "Tooltip",
		href: "/docs/primitives/tooltip",
		description:
			"A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
	},
];

export function NavBar() {
	const [isScrolled, setIsScrolled] = React.useState(false);

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={cn(
				"fixed top-0 left-0 right-0 z-50 flex items-center min-[986px]:justify-center justify-between space-x-10 px-[28px] min-[986px]:px-[112px] py-6 min-[986px]:py-3 transition-colors duration-300",
				{
					"bg-white shadow-md": isScrolled,
					"bg-transparent": !isScrolled,
				}
			)}
		>
			<div className="flex items-center space-x-4  ">
				<div
					className={cn("font-bold text-2xl", {
						"text-black": isScrolled,
						"text-white": !isScrolled,
					})}
				>
					LOGO
				</div>
				<NavigationMenu className="hidden min-[986px]:block">
					<NavigationMenuList className="  -space-x-5 min-[1304px]:space-x-0 flex justify-center">
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className={cn({
									"text-black": isScrolled,
								})}
							>
								Product
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid gap-3 p-6 min-[986px]:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
									<li className="row-span-3">
										<NavigationMenuLink asChild>
											<Link
												className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
												href="/"
											>
												<div className="mb-2 mt-4 text-lg font-medium">
													shadcn/ui
												</div>
												<p className="text-sm leading-tight text-muted-foreground">
													Beautifully designed components that you can copy and
													paste into your apps. Accessible. Customizable. Open
													Source.
												</p>
											</Link>
										</NavigationMenuLink>
									</li>
									<ListItem href="/docs" title="Introduction">
										Re-usable components built using Radix UI and Tailwind CSS.
									</ListItem>
									<ListItem href="/docs/installation" title="Installation">
										How to install dependencies and structure your app.
									</ListItem>
									<ListItem
										href="/docs/primitives/typography"
										title="Typography"
									>
										Styles for headings, paragraphs, lists...etc
									</ListItem>
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className={cn({
									"text-black": isScrolled,
								})}
							>
								Solutions
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4 min-[986px]:w-[500px] min-[986px]:grid-cols-2 lg:w-[600px] ">
									{components.map(component => (
										<ListItem
											key={component.title}
											title={component.title}
											href={component.href}
										>
											{component.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className={cn({
									"text-black": isScrolled,
								})}
							>
								Developers
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4 min-[986px]:w-[500px] min-[986px]:grid-cols-2 lg:w-[600px] ">
									{components.map(component => (
										<ListItem
											key={component.title}
											title={component.title}
											href={component.href}
										>
											{component.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/docs" legacyBehavior passHref>
								<NavigationMenuLink
									className={cn(navigationMenuTriggerStyle(), {
										"text-black": isScrolled,
									})}
								>
									Docs
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<Link href="/docs" legacyBehavior passHref>
								<NavigationMenuLink
									className={cn(navigationMenuTriggerStyle(), {
										"text-black": isScrolled,
									})}
								>
									Pricing
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className={cn({
									"text-black": isScrolled,
								})}
							>
								Cloud
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<ul className="grid w-[400px] gap-3 p-4 min-[986px]:w-[500px] min-[986px]:grid-cols-2 lg:w-[600px] ">
									{components.map(component => (
										<ListItem
											key={component.title}
											title={component.title}
											href={component.href}
										>
											{component.description}
										</ListItem>
									))}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<div className="flex items-center min-[986px]:hidden ">
				{/* <div className="bg-white shadow-md p-2 rounded-sm">
					<Menu color={"#000"} strokeWidth={2} size={24} />
				</div> */}
				<MobileMenu />
			</div>
			<div className="min-[986px]:flex items-center justify-end space-x-4 hidden  ">
				<div>
					<Search
						color={isScrolled ? "#000" : "#FFF"}
						strokeWidth={2}
						size={18}
					/>
				</div>
				<button
					className={cn(
						"py-[10px] px-2.5 min-[1304px]:px-[20px] rounded-[8px] font-medium",
						{
							"text-[#292875] bg-white border border-[#292875]": !isScrolled,
							" text-[#292875]": isScrolled,
						}
					)}
				>
					Contact Sales
				</button>
				<button className="bg-[#4945ff] text-white py-[10px] px-2.5 min-[1304px]:px-[20px] rounded-[8px] font-medium">
					Get Started
				</button>
			</div>
		</nav>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
