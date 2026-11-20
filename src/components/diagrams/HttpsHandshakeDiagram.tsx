import React from "react";

export function HttpsHandshakeDiagram() {
  return (
    <div className="w-full my-4 win95-sunken bg-[#ffffff] p-3 text-black">
      <div className="flex items-center justify-between border-b border-gray-400 pb-2 mb-3">
        <span className="font-arcade text-xs text-green-800 bg-green-100 px-2 py-0.5 border border-green-500">
          FIGURE 2: TLS 1.3 SECURE HANDSHAKE (PORT 443)
        </span>
        <span className="text-[11px] font-mono text-green-700 font-bold">1-RTT</span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 760 360"
          className="w-full min-w-[560px] h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Header Pillars */}
          <g transform="translate(60, 20)">
            <rect x="0" y="0" width="160" height="36" fill="#000080" stroke="#000000" strokeWidth="2" />
            <text x="80" y="24" fill="#ffffff" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">
              CLIENT (Browser)
            </text>
            <line x1="80" y1="36" x2="80" y2="310" stroke="#000080" strokeWidth="2" strokeDasharray="4 4" />
          </g>

          <g transform="translate(540, 20)">
            <rect x="0" y="0" width="160" height="36" fill="#006600" stroke="#000000" strokeWidth="2" />
            <text x="80" y="24" fill="#ffffff" fontFamily="monospace" fontSize="12" fontWeight="bold" textAnchor="middle">
              SERVER (HTTPS:443)
            </text>
            <line x1="80" y1="36" x2="80" y2="310" stroke="#006600" strokeWidth="2" strokeDasharray="4 4" />
          </g>

          {/* Step 1: ClientHello */}
          <g transform="translate(140, 75)">
            <path d="M 0 0 L 470 0" stroke="#000080" strokeWidth="2" />
            <polygon points="480,0 470,-5 470,5" fill="#000080" />
            <rect x="70" y="-14" width="340" height="28" fill="#e8eeff" stroke="#000080" strokeWidth="1" />
            <text x="240" y="4" fill="#000080" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">
              1. ClientHello: Supported Ciphers + KeyShare (ECDHE)
            </text>
          </g>

          {/* Step 2: ServerHello + Cert + Finished */}
          <g transform="translate(140, 125)">
            <path d="M 480 0 L 10 0" stroke="#006600" strokeWidth="2" />
            <polygon points="0,0 10,-5 10,5" fill="#006600" />
            <rect x="60" y="-16" width="360" height="32" fill="#e8f8e8" stroke="#006600" strokeWidth="1" />
            <text x="240" y="-2" fill="#006600" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">
              2. ServerHello: Chosen Cipher + KeyShare (ECDHE)
            </text>
            <text x="240" y="10" fill="#005500" fontFamily="sans-serif" fontSize="9" textAnchor="middle">
              + EncryptedExtensions + X.509 Certificate + Finished HMAC
            </text>
          </g>

          {/* Key Derivation Box */}
          <g transform="translate(180, 180)">
            <rect x="0" y="0" width="400" height="42" fill="#fff9e6" stroke="#b38600" strokeWidth="1.5" />
            <text x="200" y="18" fill="#664d00" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">
              DIFFIE-HELLMAN KEY DERIVATION
            </text>
            <text x="200" y="32" fill="#555555" fontFamily="sans-serif" fontSize="10" textAnchor="middle">
              Both endpoints independently derive symmetric master session key: AES-256-GCM
            </text>
          </g>

          {/* Step 3: Encrypted Session Tunnel */}
          <g transform="translate(140, 245)">
            <rect x="0" y="-8" width="480" height="52" fill="#e6f7ff" stroke="#0088cc" strokeWidth="2" />
            <path d="M 10 12 L 470 12" stroke="#0088cc" strokeWidth="2" />
            <polygon points="480,12 470,7 470,17" fill="#0088cc" />
            <path d="M 470 28 L 10 28" stroke="#0088cc" strokeWidth="2" />
            <polygon points="0,28 10,23 10,33" fill="#0088cc" />
            <text x="240" y="8" fill="#004466" fontFamily="monospace" fontSize="10" fontWeight="bold" textAnchor="middle">
              ENCRYPTED APPLICATION DATA STREAM (HTTP/2 or HTTP/3)
            </text>
            <text x="240" y="24" fill="#006699" fontFamily="sans-serif" fontSize="9" textAnchor="middle">
              Ciphertext: 0x8F4A12B... (Indecipherable to eavesdroppers)
            </text>
          </g>

          {/* Bottom Security Seals */}
          <g transform="translate(60, 315)">
            <rect x="0" y="0" width="640" height="30" fill="#eafaf1" stroke="#27ae60" strokeWidth="1" />
            <text x="320" y="20" fill="#1e8449" fontFamily="monospace" fontSize="11" fontWeight="bold" textAnchor="middle">
              Verified: Confidentiality (AES-256) | Integrity (Poly1305 / HMAC) | Authentication (X.509 CA)
            </text>
          </g>
        </svg>
      </div>
      <p className="text-xs text-gray-600 mt-2">
        TLS 1.3 completes cryptographic key negotiation in a single round-trip (1-RTT) using ephemeral Elliptic Curve Diffie-Hellman (ECDHE).
      </p>
    </div>
  );
}
