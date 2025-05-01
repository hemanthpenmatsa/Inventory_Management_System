"use client";
import * as React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardHeader from "./DashboardHeader";
import StatCard from "./StatCard";

function Dashboard1() {
  return (
    <main className="flex overflow-hidden flex-wrap items-start bg-slate-50">
      <Sidebar />
      <section className="flex flex-col flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
        <Header />
        <div className="px-16 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <DashboardHeader />
          <div className="flex flex-wrap gap-6 items-center mt-10 w-full max-md:max-w-full">
            <StatCard
              title="Total Stock"
              value="100 Kgs"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/eea6e4012f6bc6875b946e0fd1bc9107eb9ef464?placeholderIfAbsent=true"
            />
            <StatCard
              title="Expenses"
              value="$1545.34"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/6b82e40f190724c93a27d29ce1b0d2001c04dda9?placeholderIfAbsent=true"
            />
            <StatCard
              title="Total Stock"
              value="100 Kgs"
              iconSrc="https://cdn.builder.io/api/v1/image/assets/9dbba16676144dc4a9bb4f6e4b24fb55/e340f740c059ae05d2da536ee09e9fc6374016ba?placeholderIfAbsent=true"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard1;
