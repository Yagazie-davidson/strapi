import { Check } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#181826] md:px-[112px] py-3 ">
      <div className="h-40"></div>

      <div className="px-28">
        <h2 className="text-white text-[33px] md:text-[53px] font-bold text-center ">
          Build modern websites with the most customizable Headless CMS
        </h2>
        <p className="text-white text-[17px] font-normal text-center">
          The open-source Headless CMS for developers that makes API creation
          easy, and supports your favorite frameworks. Customize and host your
          projects in the cloud or on your own servers.
        </p>
        <div className="flex justify-center flex-col items-center mt-10">
          <div className="flex flex-col space-y-4">
            <div className="bg-[#212134] w-full flex items-center space-x-6 p-4 rounded-[8px]">
              <div className="code text-white text-sm">
                npx create-strapi-app@latest
              </div>
              <button className="text-[#A36EE6] cursor-pointer">Copy</button>
            </div>
            <div className="text-center text-[#666687] text-[13px] font-bold">
              OR
            </div>
            <button className="bg-[#4945ff] w-full text-white py-[14px] px-[20px] rounded-[8px] font-medium">
              Start your Demo
            </button>
          </div>
          <div className="text-white grid grid-cols-1 md:flex md:justify-center md:space-x-14 mt-10">
            <div className="flex items-center space-x-3">
              <span>
                <Check color="#A36EE6" size={16} />
              </span>
              <h4> Open source (MIT)</h4>
            </div>
            <div className="flex items-center space-x-3">
              <span>
                <Check color="#A36EE6" size={16} />
              </span>
              <h4>soc 2 certified</h4>
            </div>
            <div className="flex items-center space-x-3">
              <span>
                <Check color="#A36EE6" size={16} />
              </span>
              <span>GDPR compliant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
