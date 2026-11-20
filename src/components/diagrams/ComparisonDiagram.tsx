import React from "react";

export function ComparisonDiagram() {
  return (
    <div className="w-full my-4 win95-sunken bg-[#ffffff] p-3 text-black">
      <div className="flex items-center justify-between border-b border-gray-400 pb-2 mb-3">
        <span className="font-arcade text-xs text-blue-900 bg-blue-100 px-2 py-0.5 border border-blue-400">
          FIGURE 3: WIRE PACKET PAYLOAD INSPECTION
        </span>
        <span className="text-[11px] font-mono text-gray-600">Payload Analysis</span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 760 260"
          className="w-full min-w-[560px] h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Column: HTTP Packet */}
          <g transform="translate(20, 20)">
            <rect x="0" y="0" width="345" height="220" fill="#fff5f5" stroke="#cc0000" strokeWidth="2" />
            <rect x="0" y="0" width="345" height="28" fill="#cc0000" />
            <text x="172" y="19" fill="#ffffff" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">
              HTTP PACKET ON PORT 80 (CLEARTEXT)
            </text>

            <g transform="translate(15, 40)">
              <rect x="0" y="0" width="315" height="110" fill="#000000" stroke="#880000" strokeWidth="1" />
              <text x="10" y="20" fill="#ff6666" fontFamily="monospace" fontSize="10">POST /api/login HTTP/1.1</text>
              <text x="10" y="36" fill="#ff6666" fontFamily="monospace" fontSize="10">Host: banking.win95.com</text>
              <text x="10" y="52" fill="#ff6666" fontFamily="monospace" fontSize="10">Content-Type: application/json</text>
              <text x="10" y="68" fill="#ffffff" fontFamily="monospace" fontSize="10">Cookie: session_id=XYZ-12345</text>
              <text x="10" y="88" fill="#ffff00" fontFamily="monospace" fontSize="10" fontWeight="bold">
                {`{"user":"john","pin":"1234"}`}
              </text>
              <text x="10" y="102" fill="#ff3333" fontFamily="monospace" fontSize="9">
                Cleartext parameters exposed in transit
              </text>
            </g>

            <rect x="15" y="160" width="315" height="48" fill="#ffebeb" stroke="#cc0000" strokeWidth="1" />
            <text x="25" y="180" fill="#990000" fontFamily="sans-serif" fontSize="10" fontWeight="bold">
              Unencrypted: Routers and proxies can read all headers
            </text>
            <text x="25" y="196" fill="#990000" fontFamily="sans-serif" fontSize="10">
              Vulnerable to script injections and packet tampering
            </text>
          </g>

          {/* Right Column: HTTPS Packet */}
          <g transform="translate(395, 20)">
            <rect x="0" y="0" width="345" height="220" fill="#f0fff4" stroke="#008000" strokeWidth="2" />
            <rect x="0" y="0" width="345" height="28" fill="#008000" />
            <text x="172" y="19" fill="#ffffff" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">
              HTTPS PACKET ON PORT 443 (TLS 1.3)
            </text>

            <g transform="translate(15, 40)">
              <rect x="0" y="0" width="315" height="110" fill="#000000" stroke="#006600" strokeWidth="1" />
              <text x="10" y="20" fill="#00ff00" fontFamily="monospace" fontSize="10">TLS RECORD: Application Data</text>
              <text x="10" y="36" fill="#55ff55" fontFamily="monospace" fontSize="9">Version: TLS 1.3 (RFC 8446)</text>
              <text x="10" y="52" fill="#88ff88" fontFamily="monospace" fontSize="9">Cipher: AES-256-GCM / AEAD</text>
              <text x="10" y="70" fill="#00ffff" fontFamily="monospace" fontSize="9">
                7F A9 3D E1 02 C8 B4 59 F0 11 8C 43
              </text>
              <text x="10" y="86" fill="#00ffff" fontFamily="monospace" fontSize="9">
                2A E7 91 B6 D4 88 F3 09 A1 C5 72 90
              </text>
              <text x="10" y="102" fill="#00ff00" fontFamily="monospace" fontSize="9">
                Authenticated ciphertext with Poly1305 MAC
              </text>
            </g>

            <rect x="15" y="160" width="315" height="48" fill="#e6f7ec" stroke="#008000" strokeWidth="1" />
            <text x="25" y="180" fill="#006600" fontFamily="sans-serif" fontSize="10" fontWeight="bold">
              Encrypted: Indecipherable to intermediate network taps
            </text>
            <text x="25" y="196" fill="#006600" fontFamily="sans-serif" fontSize="10">
              Authenticated payload: Modifying bits corrupts the AEAD tag
            </text>
          </g>
        </svg>
      </div>
      <p className="text-xs text-gray-600 mt-2">
        Packet payload comparison: HTTP exposes plaintext variables and auth cookies directly on the wire; HTTPS wraps communication in authenticated ciphertext.
      </p>
    </div>
  );
}
