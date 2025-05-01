"use client";
import * as React from "react";

interface StatCardProps {
  title: string;
  value: string;
  iconSrc: string;
}

function StatCard({ title, value, iconSrc }: StatCardProps) {
  return (
    <article className="grow shrink self-stretch my-auto rounded-none min-w-60 w-[262px]">
      <div className="flex flex-col px-7 pt-8 pb-32 w-full bg-white rounded-3xl border border-solid border-indigo-500 border-opacity-10 max-md:px-5 max-md:pb-24">
        <div className="flex gap-5 justify-between text-base font-medium text-stone-300">
          <h3>{title}</h3>
          <img
            src={iconSrc}
            className="object-contain shrink-0 w-6 aspect-square"
            alt={`${title} icon`}
          />
        </div>
        <p className="self-start mt-1 mb-0 text-3xl font-bold text-neutral-700 max-md:mb-2.5">
          {value}
        </p>
      </div>
    </article>
  );
}

export default StatCard;
