"use client";
import * as React from "react";

const NavItem = ({
  iconSrc,
  label,
  isActive = false,
}: {
  iconSrc: string;
  label: string;
  isActive?: boolean;
}) => {
  const textColor = isActive ? "text-white" : "text-violet-300";

  return (
    <div
      className={`flex gap-4 items-center ${isActive ? "" : "mt-12 max-md:mt-10"}`}
    >
      <img
        src={iconSrc}
        className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
        alt={`${label} icon`}
      />
      <span className={`self-stretch my-auto ${textColor}`}>{label}</span>
    </div>
  );
};

function Sidebar() {
  return (
    <nav className="px-px text-sm font-medium text-white rounded-none min-w-60 w-[281px]">
      <div className="flex flex-col py-20 w-full bg-indigo-500 rounded-none">
        <div className="flex gap-4 self-center max-w-full text-xl font-bold whitespace-nowrap w-[107px]">
          <div className="flex shrink-0 w-8 h-8 rounded-full border-white border-solid border-[7px]" />
          <h1 className="self-start">Circle</h1>
        </div>

        <div className="flex gap-5 justify-between mt-20 max-w-full whitespace-nowrap w-[199px] max-md:mt-10">
          <div className="flex shrink-0 w-1 rounded-none bg-zinc-300 h-[72px]" />
          <NavItem
            iconSrc="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/16cd6f5f67e39348f12b585e1ca221fd2007062b?placeholderIfAbsent=true"
            label="Dashboard"
            isActive={true}
          />
        </div>

        <div className="flex flex-col items-center px-7 mt-6 w-full max-md:px-5">
          <NavItem
            iconSrc="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/7f3bcb64d2e8b46a40bcfcf701e51a0b61b37750?placeholderIfAbsent=true"
            label="Inventory"
          />
          <NavItem
            iconSrc="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/e9dbb7cb0ce154fefd6c808faf557d981263d6aa?placeholderIfAbsent=true"
            label="Events"
          />
          <NavItem
            iconSrc="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/8296ba48d8a9a5891f499036d991630ef6529f11?placeholderIfAbsent=true"
            label="Reports"
          />

          <div className="mt-72 max-md:mt-10">
            <NavItem
              iconSrc="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/871b8d8133837ffd74bffde22c8a438563419f15?placeholderIfAbsent=true"
              label="Settings"
            />
          </div>

          <NavItem
            iconSrc="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/200ca96037f2c80d890adaff8bcfb7f9398f82f8?placeholderIfAbsent=true"
            label="Log out"
          />
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
