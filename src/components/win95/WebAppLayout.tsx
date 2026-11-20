"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { HttpTab } from "../tabs/HttpTab";
import { HttpsTab } from "../tabs/HttpsTab";
import { ComparisonTab } from "../tabs/ComparisonTab";

export function WebAppLayout() {
  const [activeTab, setActiveTab] = useState<"http" | "https" | "comparison">("http");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#008080] text-black">
      {/* Top Application Navbar */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Web App Workspace */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-2 sm:p-4 lg:p-6 flex flex-col md:flex-row gap-4 items-start">
        {/* Dynamic 3-Tab Sidebar */}
        <Sidebar
          activeTab={activeTab}
          onSelectTab={setActiveTab}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />

        {/* Primary Content View Area */}
        <main className="flex-1 w-full min-w-0">
          <div className="win95-panel p-3 sm:p-5 bg-[#c0c0c0] shadow-xl">
            {activeTab === "http" && <HttpTab />}
            {activeTab === "https" && <HttpsTab />}
            {activeTab === "comparison" && <ComparisonTab />}
          </div>
        </main>
      </div>

      {/* Clean Web App Footer */}
      <footer className="w-full win95-panel bg-[#c0c0c0] border-t-2 border-[#808080] py-3 px-4 mt-8 select-none">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-gray-800">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={18}
              height={18}
              className="pixelated w-[18px] h-[18px]"
            />
            <span className="font-arcade text-xs text-[#000080] font-bold">
              HTTP &amp; HTTPS PROTOCOL EXPLORER
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-gray-700">
            <span>RFC 2616 (HTTP/1.1)</span>
            <span>/</span>
            <span>RFC 8446 (TLS 1.3)</span>
            <span>/</span>
            <span>RFC 9114 (HTTP/3)</span>
          </div>
          <div className="text-[11px] text-gray-600 font-sans">
            Windows 95 Web Architecture Reference
          </div>
        </div>
      </footer>
    </div>
  );
}
