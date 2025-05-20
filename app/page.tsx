import { Check, MoveRight } from "lucide-react";
import Image from "next/image";
import Companies from "./Companies";
import Integrations from "./Integrations";

export default function Home() {
	return (
		<div>
			<div className="bg-[#181826] bg-[url('/strapi5_hero.svg')] bg-no-repeat bg-cover bg-center md:px-[112px] py-3 flex overflow-y-auto justify-center items-center pt-32 md:pt-0">
				<div className="md:px-28 px-10">
					<div className="flex items-center justify-center mb-10">
						<div className="bg-[#212134] mx-3 w-fit flex items-center space-x-6  py-1.5 px-3 justify-center rounded-[8px] border-[0.5px] border-[#32324d]">
							<div className="bg-[#9739de] text-white font-bold text-[12px] md:text-[14px] px-1 rounded-[4px]">
								Soon
							</div>
							<div className="text-white text-[12px] md:text-[14px] font-bold">
								StrapiConf Keynote kicks off on May 13, 10AM CEST.
							</div>
							<div className="text-[#9739de] cursor-pointer flex items-center  text-[12px] md:text-[14px] space-x-1">
								<p>Watch here</p>
								<MoveRight size={15} />
							</div>
						</div>
					</div>
					<h2 className="text-white text-[33px] md:text-[53px] font-bold text-center ">
						Build modern websites with the most customizable Headless CMS
					</h2>
					<p className="text-white text-[16px] md:text-[17px] font-normal text-center mt-10">
						The open-source Headless CMS for developers that makes API creation
						easy, and supports your favorite frameworks. Customize and host your
						projects in the cloud or on your own servers.
					</p>
					<div className="flex justify-center flex-col items-center mt-10">
						<div className="flex flex-col space-y-4">
							<div className="bg-[#212134] w-full flex items-center space-x-6 p-4 rounded-[8px] border-[0.5px] border-[#32324d]">
								<div className="code text-white text-sm">
									npx create-strapi-app@latest
								</div>
								<button className="text-[#9739de] cursor-pointer">Copy</button>
							</div>
							<div className="text-center text-[#666687] text-[13px] font-bold">
								OR
							</div>
							<button className="bg-[#4945ff] w-full text-white py-[14px] px-[20px] rounded-[8px] font-medium">
								Start your Demo
							</button>
						</div>
						<div className="text-white grid grid-cols-1 gap-y-10 md:flex md:justify-center md:space-x-14 mt-10">
							<div className="flex items-center space-x-3">
								<span>
									<Check color="#9739de" size={16} />
								</span>
								<h4> Open source (MIT)</h4>
							</div>
							<div className="flex items-center space-x-3">
								<span>
									<Check color="#9739de" size={16} />
								</span>
								<h4>soc 2 certified</h4>
							</div>
							<div className="flex items-center space-x-3">
								<span>
									<Check color="#9739de" size={16} />
								</span>
								<span>GDPR compliant</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#181826] h-screen flex justify-center items-end py-20">
				<Companies />
			</div>
			<div className="bg-white h-screen flex justify-center items-center md:px-[112px] ">
				<div className="">
					<h5 className="text-[#9739de] font-bold text-[14px] uppercase text-center">
						the problem
					</h5>
					<h3 className="text-[24px] md:text-[53px] font-bold text-center text-[#292875] md:px-[100px] px-10">
						Building your website the way you want is hard
					</h3>
					<p className="text-[17px] md:text-[17px] font-medium text-center mt-5 text-[#666687] px-10 md:px-0">
						because your CMS is slowing you down and holding you back.
					</p>
					<div className="mt-10 grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-6 lg:gap-x-10 w-full px-4 md:px-0">
						<div className="flex items-center md:space-x-10 space-x-5">
							<div className="border-l-2 h-28">{/* border */}</div>
							<div>
								<div className="flex items-center space-x-3">
									<Image
										width={25}
										height={25}
										src={"/Code.svg"}
										alt="code icon"
									/>
									<h5 className="text-[#292875] text-xl font-semibold">
										Lack of customization
									</h5>
								</div>
								<p className="text-[14px] md:text-[17px] font-medium text-left md:max-w-64 mt-3 text-[#666687]">
									You&apos;re unable to customize or extend the CMS to fit your
									unique project needs.
								</p>
							</div>
						</div>
						<div className="flex items-center md:space-x-10 space-x-5">
							<div className="border-l-2 h-28">{/* border */}</div>
							<div>
								<div className="flex items-center space-x-3">
									<Image
										width={25}
										height={25}
										src={"/Puzzle.svg"}
										alt="puzzle icon"
									/>
									<h5 className="text-[#292875] text-xl font-semibold">
										Lack of plugins
									</h5>
								</div>
								<p className="text-[14px] md:text-[17px] font-medium text-left md:max-w-64 mt-3 text-[#666687]">
									You are not able to use your favorite tools, and lack plugins
									or integrations.
								</p>
							</div>
						</div>
						<div className="flex items-center md:space-x-10 space-x-5">
							<div className="border-l-2 h-28">{/* border */}</div>
							<div>
								<div className="flex items-center space-x-3">
									<Image
										width={25}
										height={25}
										src={"/Users_Three.svg"}
										alt="users icon"
									/>
									<h5 className="text-[#292875] text-xl font-semibold">
										Lack of community
									</h5>
								</div>
								<p className="text-[14px] md:text-[17px] font-medium text-left md:max-w-64 mt-3 text-[#666687]">
									You&apos;re dealing with a CMS that lacks a large, active
									community of developers.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white flex justify-center items-center md:px-[112px]">
				<div className="">
					<h5 className="text-[#9739de] font-bold text-[14px] uppercase text-center">
						integrations
					</h5>
					<h3 className="text-[24px] md:text-[53px] font-bold text-center text-[#292875] md:px-[100px] px-10">
						All your favorite dev tools work with Strapi.
					</h3>
					<p className="text-[17px] md:text-[17px] font-medium text-center mt-5 text-[#666687] px-10 md:px-0">
						Connect your favorite databases, frontend frameworks, or static site
						generators. Choose where you want to host your websites. Integrate
						with your favorite tools, and work with the best of each world. No
						vendor lock-in.
					</p>
					<div className="mt-28">
						<Integrations />
					</div>
				</div>
			</div>
		</div>
	);
}
