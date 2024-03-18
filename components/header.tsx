import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";
import { ChevronDown, Globe } from "lucide-react";

const navbarRoutes = [
  {
    label: "English",
    leftIcon: <Globe />,
    rightIcon: <ChevronDown />,
  },
  {
    label: "About",
    leftIcon: "",
    rightIcon: "",
  },
  {
    label: "Resources",
    leftIcon: "",
    rightIcon: "",
  },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center py-1 pl-[5%] pr-[15%] border-b">
      <div className="flex items-center gap-2">
        <div className="relative w-16 h-16">
          <Image src="/assets/images/logo-icon.png" alt="FS-ROAS Logo" fill />
        </div>
        <div className="relative w-[11rem] h-16 mr-[.2rem]">
          <Image src="/assets/images/logo-text.png" alt="FS-ROAS Logo" fill />
        </div>
        <Separator
          orientation="vertical"
          className="bg-primary-400 w-1 h-16 "
        />
        <div className="max-w-[14rem] text-center text-sm font-semibold">
          Food System Rapid Overview Assessment through Scenarios
        </div>
      </div>

      <div className="flex items-center space-x-8">
        {navbarRoutes.map((route) => (
          <div className="cursor-pointer font-semibold text-lg flex items-center space-x-1 border-b-2 border-transparent hover:border-gray-600 py-4 transition-all">
            {route.leftIcon && route.leftIcon}
            <p>{route.label}</p>
            {route.rightIcon && route.rightIcon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
