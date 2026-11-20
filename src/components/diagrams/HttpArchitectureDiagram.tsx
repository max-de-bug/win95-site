import React from "react";

export function HttpArchitectureDiagram() {
  return (
    <div className="w-full my-4 win95-sunken bg-[#ffffff] p-3 text-black">
      <div className="flex items-center justify-between border-b border-gray-400 pb-2 mb-3">
        <span className="font-arcade text-xs text-red-700 bg-red-100 px-2 py-0.5 border border-red-400">
          FIGURE 1: HTTP CLEARTEXT WIRE ARCHITECTURE (PORT 80)
        </span>
        <span className="text-[11px] font-mono text-gray-500">RFC 2616 / Layer 7</span>
      </div>

      <div className="w-full overflow-x-auto">
        <svg
          viewBox="0 0 760 300"
          className="w-full min-w-[560px] h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Grid */}
          <defs>
            <pattern id="winGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="760" height="300" fill="url(#winGrid)" />

          {/* Client Node */}
          <g transform="translate(30, 40)">
            <rect x="0" y="0" width="160" height="180" fill="#c0c0c0" stroke="#000000" strokeWidth="2" />
            <rect x="4" y="4" width="152" height="24" fill="#000080" />
            <text x="10" y="20" fill="#ffffff" fontFamily="monospace" fontSize="12" fontWeight="bold">
              CLIENT (Browser)
            </text>
            <rect x="12" y="36" width="136" height="70" fill="#000000" stroke="#808080" strokeWidth="1" />
            <text x="18" y="54" fill="#00ff00" fontFamily="monospace" fontSize="10">GET /login.html</text>
            <text x="18" y="68" fill="#00ff00" fontFamily="monospace" fontSize="10">Host: win95.site</text>
            <text x="18" y="82" fill="#ffff00" fontFamily="monospace" fontSize="9">User: admin</text>
            <text x="18" y="96" fill="#ff4444" fontFamily="monospace" fontSize="9">Pass: secret95</text>
            <rect x="12" y="116" width="136" height="48" fill="#dfdfdf" stroke="#808080" strokeWidth="1" />
            <text x="18" y="132" fill="#000000" fontFamily="sans-serif" fontSize="10" fontWeight="bold">IP: 192.168.1.42</text>
            <text x="18" y="148" fill="#555555" fontFamily="sans-serif" fontSize="9">TCP Port: 49152</text>
          </g>

          {/* Public Insecure Wire / Eavesdropper */}
          <g transform="translate(240, 20)">
            <rect x="0" y="0" width="280" height="230" fill="#fff5f5" stroke="#cc0000" strokeWidth="2" strokeDasharray="4 2" />
            <rect x="0" y="0" width="280" height="24" fill="#cc0000" />
            <text x="10" y="17" fill="#ffffff" fontFamily="monospace" fontSize="11" fontWeight="bold">
              PUBLIC NETWORK (UNENCRYPTED)
            </text>

            {/* Wire arrows */}
            <path d="M -50 70 L 330 70" stroke="#cc0000" strokeWidth="3" />
            <text x="20" y="60" fill="#990000" fontFamily="monospace" fontSize="10" fontWeight="bold">
              HTTP REQUEST (Cleartext ASCII)
            </text>

            <path d="M 330 140 L -50 140" stroke="#0000aa" strokeWidth="3" />
            <text x="20" y="130" fill="#0000aa" fontFamily="monospace" fontSize="10" fontWeight="bold">
              HTTP RESPONSE (HTTP/1.1 200 OK)
            </text>

            {/* Eavesdropper node */}
            <g transform="translate(40, 160)">
              <rect x="0" y="0" width="200" height="60" fill="#ffe6e6" stroke="#cc0000" strokeWidth="1.5" />
              <text x="10" y="20" fill="#cc0000" fontFamily="monospace" fontSize="11" fontWeight="bold">
                PACKET SNIFFER (MITM)
              </text>
              <text x="10" y="38" fill="#333333" fontFamily="sans-serif" fontSize="10">
                Can inspect, intercept and tamper
              </text>
              <text x="10" y="52" fill="#880000" fontFamily="monospace" fontSize="9">
                Credentials visible in cleartext
              </text>
            </g>
          </g>

          {/* Server Node */}
          <g transform="translate(570, 40)">
            <rect x="0" y="0" width="160" height="180" fill="#c0c0c0" stroke="#000000" strokeWidth="2" />
            <rect x="4" y="4" width="152" height="24" fill="#000080" />
            <text x="10" y="20" fill="#ffffff" fontFamily="monospace" fontSize="12" fontWeight="bold">
              WEB SERVER (HTTP)
            </text>
            <rect x="12" y="36" width="136" height="70" fill="#000000" stroke="#808080" strokeWidth="1" />
            <text x="18" y="54" fill="#00ff00" fontFamily="monospace" fontSize="10">HTTP/1.1 200 OK</text>
            <text x="18" y="68" fill="#00ff00" fontFamily="monospace" fontSize="10">Content-Type: html</text>
            <text x="18" y="82" fill="#aaaaaa" fontFamily="monospace" fontSize="9">Set-Cookie: ID=95</text>
            <text x="18" y="96" fill="#ffff00" fontFamily="monospace" fontSize="9">&lt;html&gt;Welcome&lt;/html&gt;</text>
            <rect x="12" y="116" width="136" height="48" fill="#dfdfdf" stroke="#808080" strokeWidth="1" />
            <text x="18" y="132" fill="#000000" fontFamily="sans-serif" fontSize="10" fontWeight="bold">IP: 93.184.216.34</text>
            <text x="18" y="148" fill="#cc0000" fontFamily="sans-serif" fontSize="10" fontWeight="bold">Port: 80</text>
          </g>

          {/* Bottom Alert Banner */}
          <g transform="translate(30, 260)">
            <rect x="0" y="0" width="700" height="30" fill="#fff0f0" stroke="#cc0000" strokeWidth="1" />
            <text x="15" y="20" fill="#cc0000" fontFamily="monospace" fontSize="11" fontWeight="bold">
              Unencrypted transmission: HTTP provides no encryption, integrity checks or identity verification.
            </text>
          </g>
        </svg>
      </div>
      <p className="text-xs text-gray-600 mt-2">
        In standard HTTP, headers, cookies, and form bodies are transmitted over public networks in cleartext ASCII.
      </p>
    </div>
  );
}
