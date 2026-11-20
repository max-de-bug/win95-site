"use client";

import React from "react";
import Image from "next/image";

interface NavbarProps {
  activeTab: "http" | "https" | "comparison";
  onSelectTab: (tab: "http" | "https" | "comparison") => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Navbar({
  activeTab,
  onSelectTab,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavbarProps) {
  const tabs = [
    {
      id: "http" as const,
      title: "HTTP PROTOCOL",
      badge: "PORT 80",
      badgeStyle: "bg-red-700 text-white",
    },
    {
      id: "https" as const,
      title: "HTTPS & TLS 1.3",
      badge: "PORT 443",
      badgeStyle: "bg-green-700 text-white",
    },
    {
      id: "comparison" as const,
      title: "SECURITY LAB",
      badge: "AUDIT",
      badgeStyle: "bg-purple-800 text-white",
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full win95-panel bg-[#c0c0c0] shadow-md border-b-2 border-[#808080]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Brand with logo.png & Arcade Classic title */}
        <div className="flex items-center justify-between w-full md:w-auto gap-3">
          <div className="flex items-center gap-2.5">
            {/* Mobile hamburger menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden win95-btn p-2 flex items-center justify-center min-w-[44px] min-h-[44px] cursor-pointer"
              aria-label="Toggle navigation drawer"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-5 h-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* logo.png in navbar */}
            <div className="win95-sunken p-1 bg-white shrink-0">
              <Image
                src="/logo.png"
                alt="Navbar Logo"
                width={26}
                height={26}
                priority
                className="pixelated w-[26px] h-[26px] object-contain"
              />
            </div>

            <div>
              <span className="font-arcade text-sm sm:text-base text-[#000080] font-bold tracking-wider block leading-tight">
                HTTP &amp; HTTPS EXPLORER
              </span>
              <span className="font-mono text-[10px] text-gray-700 hidden sm:block">
                Win95 Architecture Reference
              </span>
            </div>
          </div>
        </div>

        {/* Right: Navbar 3 Dynamic Tabs */}
        <nav
          className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0"
          role="tablist"
          aria-label="Protocol modules"
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                role="tab"
                aria-selected={isActive}
                className={`flex-1 md:flex-none px-2.5 sm:px-3 py-1.5 flex items-center gap-2 cursor-pointer transition-none min-h-[44px] whitespace-nowrap ${
                  isActive
                    ? "win95-btn-active bg-[#dfdfdf]"
                    : "win95-btn bg-[#c0c0c0]"
                }`}
              >
                {/* logo.png for tab logo in navbar */}
                <div className="win95-sunken p-0.5 bg-white shrink-0">
                  <Image
                    src="/logo.png"
                    alt="Tab Logo"
                    width={16}
                    height={16}
                    className="pixelated w-4 h-4 object-contain"
                  />
                </div>

                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`font-arcade text-xs tracking-wider font-bold ${
                        isActive ? "text-[#000080]" : "text-black"
                      }`}
                    >
                      {tab.title}
                    </span>
                    <span
                      className={`hidden sm:inline-block font-arcade text-[9px] px-1 py-0.2 border border-black ${tab.badgeStyle}`}
                    >
                      {tab.badge}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
