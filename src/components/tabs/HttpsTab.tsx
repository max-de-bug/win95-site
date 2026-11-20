"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HttpsHandshakeDiagram } from "../diagrams/HttpsHandshakeDiagram";
import { Win95ShieldIcon, Win95KeyIcon, Win95DocumentIcon } from "../win95/Win95Icons";

export function HttpsTab() {
  const [showCertModal, setShowCertModal] = useState(false);
  const [certTab, setCertTab] = useState<"general" | "details" | "path">("general");

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
              <h1 className="font-arcade text-lg sm:text-2xl text-[#006600] tracking-wide">
                HTTPS &amp; TLS 1.3 ARCHITECTURE (PORT 443)
              </h1>
              <p className="font-mono text-xs text-gray-700">
                Transport Layer Security: Cryptographic Privacy and Data Integrity
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            <a
              href="https://www.rfc-editor.org/rfc/rfc8446"
              target="_blank"
              rel="noopener noreferrer"
              className="font-arcade text-xs bg-blue-900 text-white px-2 py-1 border border-black hover:bg-blue-800 cursor-pointer"
              title="Read IETF RFC 8446 specification (opens in a new tab)"
            >
              TLS 1.3 / RFC 8446
            </a>
          </div>
        </div>
        <p className="font-sans text-xs sm:text-sm text-gray-800 mt-2.5 leading-relaxed">
          HTTPS tunnels standard HTTP requests inside a secure Transport Layer Security (TLS) channel.
          All transmitted headers, query parameters, cookies, and message bodies are authenticated and encrypted
          using authenticated symmetric ciphers.
        </p>
      </div>

      {/* Picture 2: TLS 1.3 Handshake Diagram */}
      <HttpsHandshakeDiagram />

      {/* The 3 Pillars of HTTPS Security */}
      <div className="win95-panel p-3 sm:p-4">
        <div className="win95-header px-2.5 py-1 mb-3 flex items-center justify-between text-xs">
          <span className="font-arcade text-xs sm:text-sm text-white">THE THREE PILLARS OF INFOSEC</span>
          <Win95ShieldIcon className="w-4 h-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Pillar 1 */}
          <div className="win95-sunken p-3 bg-white space-y-2">
            <div className="flex items-center gap-2 text-green-900 border-b border-gray-300 pb-1.5">
              <h3 className="font-arcade text-xs font-bold">1. CONFIDENTIALITY</h3>
            </div>
            <p className="font-sans text-xs text-gray-700 leading-relaxed">
              All payload traffic is shielded by <strong>AES-256-GCM</strong> or <strong>ChaCha20-Poly1305</strong>.
              Adversaries on public networks, coffee shop Wi-Fi, or ISPs only see pseudorandom ciphertext bytes.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="win95-sunken p-3 bg-white space-y-2">
            <div className="flex items-center gap-2 text-blue-900 border-b border-gray-300 pb-1.5">
              <Win95ShieldIcon className="w-4 h-4" />
              <h3 className="font-arcade text-xs font-bold">2. DATA INTEGRITY</h3>
            </div>
            <p className="font-sans text-xs text-gray-700 leading-relaxed">
              Every TLS record carries an <strong>AEAD Authentication Tag</strong> (HMAC/Poly1305).
              If any byte is injected, dropped, or modified in transit, the recipient cryptographically flags and discards the frame.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="win95-sunken p-3 bg-white space-y-2">
            <div className="flex items-center gap-2 text-purple-900 border-b border-gray-300 pb-1.5">
              <Win95KeyIcon className="w-4 h-4" />
              <h3 className="font-arcade text-xs font-bold">3. AUTHENTICATION</h3>
            </div>
            <p className="font-sans text-xs text-gray-700 leading-relaxed">
              Digital <strong>X.509 Certificates</strong> issued by trusted Certificate Authorities prove server domain ownership,
              preventing DNS spoofing, BGP hijacking, and impersonation attacks.
            </p>
          </div>
        </div>
      </div>

      {/* Cryptography Mechanics & Certificate Inspector Trigger */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Asymmetric + Symmetric Hybrid Model */}
        <div className="win95-panel p-3">
          <div className="win95-header px-2 py-1 mb-2.5 flex items-center justify-between text-xs">
            <span className="font-arcade text-xs sm:text-sm text-white">HYBRID CRYPTOGRAPHIC ARCHITECTURE</span>
            <span className="text-[10px] font-mono text-gray-200">ECDHE + AES-GCM</span>
          </div>

          <div className="font-sans text-xs sm:text-sm space-y-3 text-gray-800">
            <p>
              HTTPS achieves high throughput and security by partitioning cryptographic workloads:
            </p>
            <div className="win95-sunken p-2.5 bg-[#f9fafb] text-xs space-y-2">
              <div>
                <strong className="text-purple-800 font-mono">1. Asymmetric Cryptography (Public/Private Keypair):</strong>
                <p className="text-gray-700 mt-0.5">
                  Operates strictly during the 1-RTT TLS Handshake. Authenticates server identity and computes an ephemeral shared secret without sending it over the network.
                </p>
              </div>
              <div className="border-t border-gray-300 pt-2">
                <strong className="text-green-800 font-mono">2. Symmetric Cryptography (Shared Session Key):</strong>
                <p className="text-gray-700 mt-0.5">
                  Encrypts all subsequent application traffic. Processed at multi-gigabit speeds using dedicated AES-NI hardware CPU instructions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Authority & Inspector */}
        <div className="win95-panel p-3 flex flex-col justify-between">
          <div>
            <div className="win95-header px-2 py-1 mb-2.5 flex items-center justify-between text-xs">
              <span className="font-arcade text-xs sm:text-sm text-white">X.509 DIGITAL CERTIFICATES</span>
              <Win95DocumentIcon className="w-4 h-4" />
            </div>

            <p className="font-sans text-xs text-gray-800 mb-3">
              Certificates bind a public key to an authorized hostname. Browsers validate the signature chain up to pre-installed root trust anchors:
            </p>

            <div className="win95-sunken p-2.5 bg-[#eafaf1] border-green-600 text-xs font-mono space-y-1">
              <div className="text-green-900 font-bold">CHAIN OF TRUST VALIDATION:</div>
              <div>[Root CA] DigiCert Global Root G2</div>
              <div className="pl-3">└─ [Intermediate CA] DigiCert TLS RSA SHA256 CA</div>
              <div className="pl-6 font-bold text-green-700">└─ [Leaf Host] *.win95.site (Verified)</div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span className="font-sans text-xs text-gray-700">Inspect server certificate payload:</span>
            <button
              onClick={() => setShowCertModal(true)}
              className="win95-btn px-4 py-2 font-arcade text-xs text-black min-h-[44px] cursor-pointer"
            >
              VIEW CERTIFICATE (X.509)
            </button>
          </div>
        </div>
      </div>

      {/* X.509 Certificate Modal Dialog */}
      {showCertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="win95-panel w-full max-w-md bg-[#c0c0c0] shadow-2xl p-1 animate-in fade-in zoom-in-95 duration-100">
            {/* Modal Titlebar */}
            <div className="win95-header px-2 py-1 flex items-center justify-between select-none">
              <div className="flex items-center gap-1.5">
                <Image src="/logo.png" alt="Logo" width={16} height={16} className="pixelated" />
                <span className="font-arcade text-xs text-white">CERTIFICATE VIEWER (X.509)</span>
              </div>
              <button
                onClick={() => setShowCertModal(false)}
                className="win95-btn w-6 h-6 text-black font-bold text-xs flex items-center justify-center leading-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="p-3">
              <div className="flex border-b border-[#808080] mb-3 gap-1">
                <button
                  onClick={() => setCertTab("general")}
                  className={`px-3 py-1 font-arcade text-xs cursor-pointer ${
                    certTab === "general"
                      ? "win95-panel bg-[#c0c0c0] -mb-[2px] border-b-transparent font-bold text-[#000080]"
                      : "bg-[#b0b0b0] text-gray-700"
                  }`}
                >
                  GENERAL
                </button>
                <button
                  onClick={() => setCertTab("details")}
                  className={`px-3 py-1 font-arcade text-xs cursor-pointer ${
                    certTab === "details"
                      ? "win95-panel bg-[#c0c0c0] -mb-[2px] border-b-transparent font-bold text-[#000080]"
                      : "bg-[#b0b0b0] text-gray-700"
                  }`}
                >
                  DETAILS
                </button>
                <button
                  onClick={() => setCertTab("path")}
                  className={`px-3 py-1 font-arcade text-xs cursor-pointer ${
                    certTab === "path"
                      ? "win95-panel bg-[#c0c0c0] -mb-[2px] border-b-transparent font-bold text-[#000080]"
                      : "bg-[#b0b0b0] text-gray-700"
                  }`}
                >
                  TRUST PATH
                </button>
              </div>

              {/* Tab Contents */}
              <div className="win95-sunken bg-white p-3 min-h-[220px] text-xs font-sans text-gray-900 space-y-2">
                {certTab === "general" && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
                      <Win95ShieldIcon className="w-8 h-8 text-green-700 shrink-0" />
                      <div>
                        <div className="font-bold text-sm text-green-800">Certificate Status: Verified</div>
                        <div className="text-[11px] text-gray-600">Assures server identity and data encryption.</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 font-bold">Issued to:</div>
                      <div className="font-mono text-blue-900 font-bold">win95-site.local / *.win95.site</div>
                    </div>
                    <div>
                      <div className="text-gray-600 font-bold">Issued by:</div>
                      <div className="font-mono text-gray-800">DigiCert Global Trust Root CA</div>
                    </div>
                    <div>
                      <div className="text-gray-600 font-bold">Validity:</div>
                      <div className="font-mono text-gray-800">Nov 2026 to Nov 2027 (Auto-Renewed)</div>
                    </div>
                    <div className="bg-green-50 border border-green-300 p-2 text-[11px] text-green-900 font-mono">
                      [OK] Private key matched via ECDHE key exchange algorithm.
                    </div>
                  </div>
                )}

                {certTab === "details" && (
                  <div className="space-y-1.5 font-mono text-[11px]">
                    <div className="bg-gray-100 p-1 border">Version: X.509 v3</div>
                    <div className="bg-gray-100 p-1 border">Serial: 4F:12:A8:90:BE:71:23:AA</div>
                    <div className="bg-gray-100 p-1 border">Signature Algorithm: ecdsa-with-SHA384</div>
                    <div className="bg-gray-100 p-1 border">Public Key: NIST P-256 Curve</div>
                    <div className="bg-gray-100 p-1 border">Subject Alt Names: win95.site, *.win95.site</div>
                    <div className="bg-gray-100 p-1 border">Fingerprint (SHA-256): 9A:2F:33:C8:10:44:EE:01</div>
                  </div>
                )}

                {certTab === "path" && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="font-bold text-gray-700 border-b pb-1">Hierarchy:</div>
                    <div className="p-2 bg-gray-50 border space-y-1">
                      <div className="text-blue-800 font-bold">[Root] DigiCert Global Root CA</div>
                      <div className="pl-4 text-gray-700">└── [Intermediate] DigiCert TLS RSA SHA256 CA</div>
                      <div className="pl-8 text-green-700 font-bold">└── [Leaf] *.win95.site [VALID]</div>
                    </div>
                    <div className="p-2 bg-green-50 border border-green-300 text-green-900 text-[11px]">
                      Certificate chain validated back to built-in system trust store.
                    </div>
                  </div>
                )}
              </div>

              {/* Close Button */}
              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => setShowCertModal(false)}
                  className="win95-btn px-6 py-2 font-arcade text-xs text-black min-h-[44px] cursor-pointer"
                >
                  CLOSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
