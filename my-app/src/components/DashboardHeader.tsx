"use client";
import * as React from "react";

function DashboardHeader() {
  return (
    <section className="flex flex-col max-w-full rounded-none w-[184px]">
      <h1 className="text-3xl font-bold text-neutral-700">Dashboard</h1>
      <p className="self-start text-base font-medium text-stone-300">
        Welcome back, Jay
      </p>
    </section>
  );
}

export default DashboardHeader;
