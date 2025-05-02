"use client";
import * as React from "react";

function Header() {
  return (
    <header className="flex overflow-hidden flex-wrap gap-10 justify-between items-center self-center py-5 pr-20 pl-16 w-full bg-white max-w-[1160px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-2 self-stretch my-auto rounded-none min-w-60 w-[248px]">
        <h2 className="grow my-auto text-xl font-semibold text-neutral-700">
          Sort:
        </h2>
        <div className="flex gap-10 py-4 pr-6 pl-2 text-xs rounded-2xl border border-solid border-indigo-500 border-opacity-10 text-stone-300 max-md:pr-5">
          <span>Last week</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/137cf67c7556796d472171d8456ce3e4211e16f5?placeholderIfAbsent=true"
            className="object-contain shrink-0 self-start w-4 aspect-square"
            alt="Dropdown icon"
          />
        </div>
      </div>

      <div className="flex gap-6 items-center self-stretch my-auto min-w-60 w-[269px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/a63b882bcb348dc5e589725db44245b41bfd5706?placeholderIfAbsent=true"
          className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt="Notification icon"
        />
        <div className="flex gap-3 self-stretch px-px my-auto w-[221px]">
          <div className="flex relative flex-col items-end px-3 pt-px pb-11 rounded-full aspect-square w-[60px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/bded41050f548d435fa150c5233a4e159df7072f?placeholderIfAbsent=true"
              className="object-cover absolute inset-0 size-full"
              alt="User profile"
            />
            <div className="flex relative shrink-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white border-solid" />
          </div>
          <div className="flex flex-col self-start">
            <h3 className="self-start text-base font-semibold text-black">
              Jay Bandi
            </h3>
            <p className="mt-1.5 text-sm font-light text-zinc-300">
              jaybandi@gmail.com
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
