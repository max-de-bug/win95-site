"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ComparisonDiagram } from "../diagrams/ComparisonDiagram";
import { Win95ShieldIcon } from "../win95/Win95Icons";

export function ComparisonTab() {
  const [snifferMode, setSnifferMode] = useState<"http" | "https">("http");
  const [secretInput, setSecretInput] = useState("admin:supersecret95:card_400012345678");

  // Interactive Quiz State
  const [q1, setQ1] = useState<string | null>(null);
  const [q2, setQ2] = useState<string | null>(null);
  const [q3, setQ3] = useState<string | null>(null);

  // Helper to generate realistic pseudo-hex ciphertext
  const getCiphertext = (str: string) => {
    let hex = "";
    for (let i = 0; i < str.length; i++) {
      const code = (str.charCodeAt(i) * 17 + 43) % 256;
      hex += (code < 16 ? "0" : "") + code.toString(16).toUpperCase() + " ";
      if ((i + 1) % 8 === 0) hex += " ";
    }
    return hex + "... [AES-256-GCM / 128-bit Poly1305 MAC]";
  };

  const quizScore = [
    q1 === "443",
    q2 === "integrity",
    q3 === "handshake",
  ].filter(Boolean).length;

  return (
    <div className="space-y-6">
      {/* Module Title Header */}
      <div className="win95-panel p-3 sm:p-4 bg-[#c0c0c0]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#808080] pb-3">
          <div className="flex items-center gap-2.5">
            <div className="win95-sunken p-1 bg-white shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={26}
                height={26}
                className="pixelated w-[26px] h-[26px] object-contain"
              />
            </div>
            <div>
              <h1 className="font-arcade text-lg sm:text-2xl text-[#800080] tracking-wide">
                HTTP AND HTTPS SPECIFICATION COMPARISON
              </h1>
              <p className="font-mono text-xs text-gray-700">
                Architectural Audit and Wire Inspection
              </p>
            </div>
          </div>
          <span className="font-arcade text-xs bg-purple-900 text-white px-2 py-1 border border-black shrink-0">
            PORT 80 VS PORT 443
          </span>
        </div>
        <p className="font-sans text-xs sm:text-sm text-gray-800 mt-2.5 leading-relaxed">
          Compare protocol specifications across encryption, speed, and tamper resistance,
          and test transmission payloads in the wire packet inspector.
        </p>
      </div>

      {/* Picture 3: On-The-Wire Packet Inspection Diagram */}
      <ComparisonDiagram />

      {/* Comparison Matrix Table */}
      <div className="win95-panel p-3 sm:p-4">
        <div className="win95-header px-2.5 py-1 mb-3 flex items-center justify-between text-xs">
          <span className="font-arcade text-xs sm:text-sm text-white">PROTOCOL COMPARISON AUDIT MATRIX</span>
          <span className="font-mono text-[10px] text-gray-200">Specification Review</span>
        </div>

        <div className="win95-sunken bg-white overflow-x-auto">
          <table className="w-full text-xs font-sans border-collapse min-w-[540px]">
            <thead>
              <tr className="bg-[#dfdfdf] border-b-2 border-gray-400 font-arcade text-xs text-left">
                <th className="p-2.5 border-r border-gray-300">ATTRIBUTE</th>
                <th className="p-2.5 border-r border-gray-300 text-red-800 bg-red-50">HTTP (PORT 80)</th>
                <th className="p-2.5 text-green-800 bg-green-50">HTTPS (PORT 443)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-2.5 font-bold bg-gray-50 border-r border-gray-300">Default Port</td>
                <td className="p-2.5 font-mono text-red-700 border-r border-gray-300">Port 80 (TCP)</td>
                <td className="p-2.5 font-mono text-green-700 font-bold">Port 443 (TCP / QUIC)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold bg-gray-50 border-r border-gray-300">Encryption</td>
                <td className="p-2.5 text-red-700 border-r border-gray-300">None (Cleartext ASCII)</td>
                <td className="p-2.5 text-green-700 font-bold">TLS 1.2 / TLS 1.3 (AES-256-GCM)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold bg-gray-50 border-r border-gray-300">Data Integrity</td>
                <td className="p-2.5 text-red-700 border-r border-gray-300">Vulnerable to injection and tampering</td>
                <td className="p-2.5 text-green-700 font-bold">Cryptographically authenticated (AEAD Tag)</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold bg-gray-50 border-r border-gray-300">Authentication</td>
                <td className="p-2.5 text-red-700 border-r border-gray-300">No identity validation</td>
                <td className="p-2.5 text-green-700 font-bold">Verified by X.509 Certificate Authorities</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold bg-gray-50 border-r border-gray-300">Performance</td>
                <td className="p-2.5 text-gray-700 border-r border-gray-300">Subject to head-of-line blocking</td>
                <td className="p-2.5 text-green-700 font-bold">Enables HTTP/2 multiplexing and HTTP/3 QUIC</td>
              </tr>
              <tr>
                <td className="p-2.5 font-bold bg-gray-50 border-r border-gray-300">Browser Treatment</td>
                <td className="p-2.5 text-red-700 font-bold border-r border-gray-300">Flagged as Not Secure</td>
                <td className="p-2.5 text-green-700 font-bold">Secure origin APIs active</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Tool: Live Packet Sniffer */}
      <div className="win95-panel p-3 sm:p-4">
        <div className="win95-header px-2.5 py-1 mb-2.5 flex items-center justify-between text-xs">
          <span className="font-arcade text-xs sm:text-sm text-white">WIRE PACKET INSPECTOR</span>
          <span className="font-mono text-[10px] text-gray-200">Network Tap</span>
        </div>

        <p className="font-sans text-xs text-gray-800 mb-3">
          Enter test credentials below. Toggle between <strong>HTTP Mode</strong> and <strong>HTTPS Mode</strong>
          to compare cleartext packet exposure against authenticated TLS ciphertext.
        </p>

        {/* Input and Mode Buttons */}
        <div className="space-y-3 mb-4">
          <div>
            <label className="font-arcade text-xs text-black block mb-1.5 font-bold">
              TRANSMISSION PAYLOAD:
            </label>
            <input
              type="text"
              value={secretInput}
              onChange={(e) => setSecretInput(e.target.value)}
              className="win95-sunken w-full px-3 py-2 text-xs font-mono bg-white min-h-[44px]"
              placeholder="Enter text to transmit..."
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="font-arcade text-xs text-black font-bold">PROTOCOL SELECTION:</span>
            <button
              onClick={() => setSnifferMode("http")}
              className={`px-4 py-2 font-arcade text-xs min-h-[44px] cursor-pointer transition-none ${
                snifferMode === "http"
                  ? "win95-btn-active bg-red-100 text-red-900 font-bold border-2 border-red-600"
                  : "win95-btn text-black"
              }`}
            >
              PORT 80 (HTTP CLEARTEXT)
            </button>
            <button
              onClick={() => setSnifferMode("https")}
              className={`px-4 py-2 font-arcade text-xs min-h-[44px] cursor-pointer transition-none ${
                snifferMode === "https"
                  ? "win95-btn-active bg-green-100 text-green-900 font-bold border-2 border-green-600"
                  : "win95-btn text-black"
              }`}
            >
              PORT 443 (HTTPS TLS 1.3)
            </button>
          </div>
        </div>

        {/* Live Sniffer Terminal Screen */}
        <div className="win95-sunken bg-black p-3.5 font-mono text-xs overflow-x-auto min-h-[160px]">
          <div className="flex items-center justify-between border-b border-gray-800 pb-1.5 mb-2 text-gray-400">
            <span>PACKET TAP: INTERFACE eth0</span>
            <span className={snifferMode === "http" ? "text-red-400 font-bold" : "text-green-400 font-bold"}>
              {snifferMode === "http" ? "CLEARTEXT EXPOSED" : "AES-256-GCM ENCRYPTED"}
            </span>
          </div>

          {snifferMode === "http" ? (
            <div className="space-y-1.5 text-red-400">
              <div className="text-yellow-400 font-bold">
                FRAME 1892: TCP [192.168.1.100:51234 -&gt; 93.184.216.34:80] LEN=248
              </div>
              <div className="text-gray-400">HTTP/1.1 POST /api/v1/auth HTTP/1.1</div>
              <div className="text-gray-400">Host: intranet.bank.win95</div>
              <div className="text-gray-400">Content-Type: application/x-www-form-urlencoded</div>
              <div className="bg-red-950/80 p-2.5 border border-red-600 text-white font-bold my-1">
                Recovered Cleartext: {secretInput || "(empty)"}
              </div>
              <div className="text-yellow-300 text-[11px]">
                Notice: Unencrypted credentials recovered verbatim from network wire.
              </div>
            </div>
          ) : (
            <div className="space-y-1.5 text-green-400">
              <div className="text-yellow-400 font-bold">
                FRAME 1893: TCP [192.168.1.100:51235 -&gt; 93.184.216.34:443] LEN=312
              </div>
              <div className="text-gray-400">TLSv1.3 Record Layer: Application Data Protocol</div>
              <div className="text-gray-400">Cipher Suite: TLS_AES_256_GCM_SHA384</div>
              <div className="bg-green-950/80 p-2.5 border border-green-600 text-emerald-300 font-mono my-1 break-all">
                Ciphertext: {getCiphertext(secretInput)}
              </div>
              <div className="text-green-300 text-[11px]">
                Secure: Ciphertext requires private session key for decryption.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Interactive 3-Question Protocol Knowledge Check */}
      <div className="win95-panel p-3 sm:p-4">
        <div className="win95-header px-2.5 py-1 mb-3 flex items-center justify-between text-xs">
          <span className="font-arcade text-xs sm:text-sm text-white">PROTOCOL AUDIT QUIZ</span>
          <span className="font-mono text-[10px] text-gray-200">Score: {quizScore}/3</span>
        </div>

        <div className="space-y-4 font-sans text-xs">
          {/* Question 1 */}
          <div className="win95-sunken p-3 bg-white space-y-2">
            <div className="font-bold text-gray-900 text-xs sm:text-sm">
              1. What standard TCP port does HTTPS use for encrypted traffic?
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { label: "Port 21 (FTP)", val: "21" },
                { label: "Port 80 (HTTP)", val: "80" },
                { label: "Port 443 (HTTPS)", val: "443" },
              ].map((opt) => (
                <button
                  key={opt.val}
                  onClick={() => setQ1(opt.val)}
                  className={`px-3 py-2 text-left font-mono text-xs min-h-[44px] cursor-pointer ${
                    q1 === opt.val
                      ? opt.val === "443"
                        ? "bg-green-100 border-2 border-green-600 font-bold text-green-900"
                        : "bg-red-100 border-2 border-red-600 font-bold text-red-900"
                      : "win95-btn"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 2 */}
          <div className="win95-sunken p-3 bg-white space-y-2">
            <div className="font-bold text-gray-900 text-xs sm:text-sm">
              2. Which security pillar guarantees that packets were not modified in transit?
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { label: "Integrity (MAC/AEAD)", val: "integrity" },
                { label: "Availability", val: "availability" },
                { label: "Non-repudiation", val: "nonrep" },
              ].map((opt) => (
                <button
                  key={opt.val}
                  onClick={() => setQ2(opt.val)}
                  className={`px-3 py-2 text-left font-mono text-xs min-h-[44px] cursor-pointer ${
                    q2 === opt.val
                      ? opt.val === "integrity"
                        ? "bg-green-100 border-2 border-green-600 font-bold text-green-900"
                        : "bg-red-100 border-2 border-red-600 font-bold text-red-900"
                      : "win95-btn"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Question 3 */}
          <div className="win95-sunken p-3 bg-white space-y-2">
            <div className="font-bold text-gray-900 text-xs sm:text-sm">
              3. When does modern TLS 1.3 perform asymmetric key negotiation?
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {[
                { label: "During every GET request", val: "every" },
                { label: "During initial TLS Handshake (1-RTT)", val: "handshake" },
                { label: "Never (Passwords only)", val: "never" },
              ].map((opt) => (
                <button
                  key={opt.val}
                  onClick={() => setQ3(opt.val)}
                  className={`px-3 py-2 text-left font-mono text-xs min-h-[44px] cursor-pointer ${
                    q3 === opt.val
                      ? opt.val === "handshake"
                        ? "bg-green-100 border-2 border-green-600 font-bold text-green-900"
                        : "bg-red-100 border-2 border-red-600 font-bold text-red-900"
                      : "win95-btn"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Verified Pass Score Badge */}
          {quizScore === 3 && (
            <div className="win95-panel p-3 bg-[#eafaf1] border-green-600 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Win95ShieldIcon className="w-8 h-8 text-green-700 shrink-0" />
                <div>
                  <div className="font-arcade text-sm text-green-900 font-bold">
                    PROTOCOL AUDIT PASSED
                  </div>
                  <div className="text-xs text-green-700">
                    All 3 criteria verified. RFC protocol mastery confirmed.
                  </div>
                </div>
              </div>
              <span className="font-arcade text-base text-green-800 bg-white px-3 py-1 win95-sunken">
                100% PASS
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
