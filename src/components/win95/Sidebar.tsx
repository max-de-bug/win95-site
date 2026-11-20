"use client";

import React from "react";
import Image from "next/image";

interface SidebarProps {
  activeTab: "http" | "https" | "comparison";
  onSelectTab: (tab: "http" | "https" | "comparison") => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Sidebar({
  activeTab,
  onSelectTab,
  mobileMenuOpen,
  setMobileMenuOpen,
}: SidebarProps) {
  const tabs = [
    {
      id: "http" as const,
      title: "HTTP PROTOCOL",
      subtitle: "Port 80 Cleartext",
      badge: "UNENCRYPTED",
      badgeStyle: "bg-red-700 text-white",
      desc: "Request-Response cycle, methods, headers, status codes, and packet sniffing risks.",
    },
    {
      id: "https" as const,
      title: "HTTPS & TLS 1.3",
      subtitle: "Port 443 Encrypted",
      badge: "TLS 1.3",
      badgeStyle: "bg-green-700 text-white",
      desc: "TLS 1.3 Handshake sequence, AES-256 cipher, and X.509 certificate validation.",
    },
    {
      id: "comparison" as const,
      title: "SECURITY LAB",
      subtitle: "Packet Inspector",
      badge: "AUDIT",
      badgeStyle: "bg-purple-800 text-white",
      desc: "Specification matrix, live packet inspector, and protocol knowledge check.",
    },
  ];

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-xs"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed md:sticky top-14 md:top-16 left-0 z-40 h-[calc(100dvh-3.5rem)] md:h-[calc(100dvh-4rem)] w-72 lg:w-80 shrink-0 win95-panel bg-[#c0c0c0] p-3 flex flex-col justify-between overflow-y-auto transition-transform duration-200 ease-in-out select-none border-r-2 border-[#808080] ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="space-y-4">
          {/* Sidebar Header Title */}
          <div className="win95-header px-2.5 py-1.5 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-1.5">
              <Image
                src="/logo.png"
                alt="Tab Logo"
                width={18}
                height={18}
                className="pixelated w-[18px] h-[18px]"
              />
              <span className="font-arcade text-xs tracking-wider text-white">
                NAVIGATION
              </span>
            </div>
            <span className="font-mono text-[10px] text-gray-200">3 MODULES</span>
          </div>

          {/* 3 Dynamic Tabs */}
          <div className="space-y-2.5" role="tablist">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    onSelectTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left p-3 flex flex-col justify-between cursor-pointer min-h-[64px] transition-none rounded-none ${
                    isActive
                      ? "win95-btn-active bg-[#dfdfdf]"
                      : "win95-btn bg-[#c0c0c0]"
                  }`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <div className="flex items-start justify-between gap-2 w-full">
                    <div className="flex items-center gap-2.5">
                      {/* logo.png on each tab */}
                      <div className="win95-sunken p-1 bg-white shrink-0">
                        <Image
                          src="/logo.png"
                          alt="Tab Logo"
                          width={20}
                          height={20}
                          className="pixelated w-5 h-5 object-contain"
                        />
                      </div>
                      <div>
                        <div
                          className={`font-arcade text-xs sm:text-sm tracking-wider font-bold ${
                            isActive ? "text-[#000080]" : "text-gray-900"
                          }`}
                        >
                          {tab.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-gray-400/60 flex items-center justify-between w-full">
                    <span className="font-mono text-[11px] text-gray-700 font-medium">
                      {tab.subtitle}
                    </span>
                    <span
                      className={`font-arcade text-[10px] px-1.5 py-0.5 border border-black ${tab.badgeStyle}`}
                    >
                      {tab.badge}
                    </span>
                  </div>

                  <p className="font-sans text-[11px] text-gray-700 mt-1.5 leading-snug">
                    {tab.desc}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Telemetry / Technical Specs Panel at Sidebar Bottom */}
        <div className="mt-4 win95-sunken bg-white p-2.5 font-mono text-[11px] space-y-1.5">
          <div className="font-arcade text-[11px] text-[#000080] border-b border-gray-300 pb-1 flex items-center justify-between">
            <span>SOCKET SPECIFICATIONS</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Protocol Stack:</span>
            <span className="font-bold text-black">TCP/IP v4</span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Active Port:</span>
            <span className="font-bold text-blue-900">
              {activeTab === "http" ? "80 (HTTP)" : "443 (HTTPS)"}
            </span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Cipher:</span>
            <span className="font-bold text-gray-900">
              {activeTab === "http" ? "None" : "AES-256-GCM"}
            </span>
          </div>
          <div className="flex justify-between text-gray-700">
            <span>Payload State:</span>
            <span
              className={`font-bold ${
                activeTab === "http" ? "text-red-700" : "text-green-700"
              }`}
            >
              {activeTab === "http" ? "Cleartext" : "Authenticated"}
            </span>
          </div>
        </div>
      </aside>
    </>
  );
}
