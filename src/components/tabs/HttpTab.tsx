"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HttpArchitectureDiagram } from "../diagrams/HttpArchitectureDiagram";
import { Win95WarningIcon, Win95DocumentIcon } from "../win95/Win95Icons";

export function HttpTab() {
  const [reqMethod, setReqMethod] = useState("GET");
  const [reqPath, setReqPath] = useState("/login.html");
  const [transmitted, setTransmitted] = useState(false);

  const handleTransmit = () => {
    setTransmitted(true);
  };

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
              <h1 className="font-arcade text-lg sm:text-2xl text-[#000080] tracking-wide">
                HTTP PROTOCOL ARCHITECTURE (PORT 80)
              </h1>
              <p className="font-mono text-xs text-gray-700">
                HyperText Transfer Protocol: The Cleartext Foundation of the Web
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 shrink-0">
            <span className="font-arcade text-xs bg-gray-200 text-black px-2 py-1 border border-gray-600">
              LAYER 7 / RFC 2616
            </span>
          </div>
        </div>
        <p className="font-sans text-xs sm:text-sm text-gray-800 mt-2.5 leading-relaxed">
          HTTP is an application-layer request-response protocol running over TCP.
          In standard HTTP (port 80), all payloads, query parameters, authentication cookies,
          and headers traverse the network in cleartext ASCII.
        </p>
      </div>

      {/* Picture 1: Cleartext Wire Diagram */}
      <HttpArchitectureDiagram />

      {/* Two Column Concept Analysis */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Core Principles */}
        <div className="win95-panel p-3">
          <div className="win95-header px-2 py-1 mb-2.5 flex items-center justify-between text-xs font-bold">
            <span className="font-arcade text-xs sm:text-sm text-white">HTTP SPECIFICATION</span>
            <Win95DocumentIcon className="w-4 h-4" />
          </div>
          <div className="font-sans text-xs sm:text-sm space-y-2 text-gray-900 leading-relaxed">
            <p>
              Designed by <strong>Tim Berners-Lee</strong> in 1989 at CERN, HTTP standardizes how browsers
              fetch documents from web hosts:
            </p>
            <ul className="list-disc pl-4 space-y-1 text-xs font-sans text-gray-800">
              <li><strong>Stateless:</strong> Each transaction executes independently without server-retained session state.</li>
              <li><strong>TCP Dependent:</strong> Operates primarily over a standard 3-way TCP handshake on port 80.</li>
              <li><strong>Extensible:</strong> Supports custom headers, MIME types, caching directives, and content negotiation.</li>
            </ul>
          </div>
        </div>

        {/* Security Vulnerability Warning */}
        <div className="win95-panel p-3 border-red-700">
          <div className="bg-red-800 text-white px-2 py-1 mb-2.5 flex items-center justify-between text-xs font-bold">
            <span className="font-arcade text-xs sm:text-sm text-white">CLEARTEXT VULNERABILITIES</span>
            <Win95WarningIcon className="w-4 h-4" />
          </div>
          <div className="font-sans text-xs sm:text-sm space-y-2 text-gray-900 leading-relaxed">
            <p>
              Because HTTP does not encrypt data in flight, any router or intermediate machine on the physical route can read and modify packets:
            </p>
            <div className="win95-sunken p-2.5 bg-[#fff8f8] text-xs font-mono space-y-1 border-red-300">
              <div className="text-red-700 font-bold">Known Attack Vectors:</div>
              <ul className="list-disc pl-4 space-y-0.5 text-gray-800 font-sans">
                <li>Eavesdropping: Passwords, cookies, and tokens read in transit</li>
                <li>Man-in-the-Middle: Intercepted HTML, scripts, or links</li>
                <li>Session Hijacking: Theft of unencrypted authentication cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Methods & Status Directory */}
      <div className="win95-panel p-3 sm:p-4">
        <div className="win95-header px-2.5 py-1 mb-3 flex items-center justify-between text-xs">
          <span className="font-arcade text-xs sm:text-sm text-white">HTTP METHODS &amp; STATUS MATRIX</span>
          <span className="font-mono text-[10px] text-gray-200">RFC 7231</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Methods */}
          <div>
            <h3 className="font-arcade text-xs text-[#000080] mb-1.5 font-bold">REQUEST METHODS</h3>
            <div className="win95-sunken bg-white overflow-x-auto max-h-56">
              <table className="w-full text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-[#dfdfdf] border-b border-gray-400 text-left">
                    <th className="p-1.5">METHOD</th>
                    <th className="p-1.5">IDEMPOTENT</th>
                    <th className="p-1.5">BEHAVIOR</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-1.5 font-bold text-blue-800">GET</td>
                    <td className="p-1.5 text-green-700">YES</td>
                    <td className="p-1.5 font-sans">Retrieves resource representations</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold text-green-800">POST</td>
                    <td className="p-1.5 text-red-700">NO</td>
                    <td className="p-1.5 font-sans">Submits payload for server processing</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold text-amber-800">PUT</td>
                    <td className="p-1.5 text-green-700">YES</td>
                    <td className="p-1.5 font-sans">Completely replaces target entity</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold text-purple-800">DELETE</td>
                    <td className="p-1.5 text-green-700">YES</td>
                    <td className="p-1.5 font-sans">Deletes the requested resource</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold text-gray-800">HEAD</td>
                    <td className="p-1.5 text-green-700">YES</td>
                    <td className="p-1.5 font-sans">Transfers headers without payload body</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Status Codes */}
          <div>
            <h3 className="font-arcade text-xs text-[#000080] mb-1.5 font-bold">STATUS CLASSIFICATIONS</h3>
            <div className="win95-sunken bg-white overflow-x-auto max-h-56">
              <table className="w-full text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-[#dfdfdf] border-b border-gray-400 text-left">
                    <th className="p-1.5">STATUS</th>
                    <th className="p-1.5">SERIES</th>
                    <th className="p-1.5">EXPLANATION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-1.5 font-bold text-green-700">200 OK</td>
                    <td className="p-1.5">2xx Success</td>
                    <td className="p-1.5 font-sans">Request processed successfully</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold text-blue-700">301 MOVED</td>
                    <td className="p-1.5">3xx Redirect</td>
                    <td className="p-1.5 font-sans">Resource permanently relocated</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold text-amber-700">400 BAD REQ</td>
                    <td className="p-1.5">4xx Client Err</td>
                    <td className="p-1.5 font-sans">Invalid syntax in client request</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold text-red-700">404 NOT FOUND</td>
                    <td className="p-1.5">4xx Client Err</td>
                    <td className="p-1.5 font-sans">URI endpoint cannot be located</td>
                  </tr>
                  <tr>
                    <td className="p-1.5 font-bold text-purple-700">500 ERROR</td>
                    <td className="p-1.5">5xx Server Err</td>
                    <td className="p-1.5 font-sans">Internal server exception encountered</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive HTTP Socket Simulator */}
      <div className="win95-panel p-3 sm:p-4">
        <div className="win95-header px-2.5 py-1 mb-2.5 flex items-center justify-between text-xs">
          <span className="font-arcade text-xs sm:text-sm text-white">HTTP REQUEST SIMULATOR</span>
          <span className="font-mono text-[10px] text-gray-200">Port 80</span>
        </div>

        <p className="font-sans text-xs text-gray-800 mb-3">
          Configure a custom HTTP request below and click <strong>Transmit Packet</strong>.
          Observe how the unencrypted headers and cookies appear on the wire stream.
        </p>

        <div className="flex flex-col sm:flex-row gap-2.5 mb-3">
          <div className="flex items-center gap-2">
            <label className="font-arcade text-xs shrink-0">METHOD:</label>
            <select
              value={reqMethod}
              onChange={(e) => {
                setReqMethod(e.target.value);
                setTransmitted(false);
              }}
              className="win95-sunken px-2.5 py-1.5 text-xs font-mono bg-white min-h-[44px]"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
            </select>
          </div>

          <div className="flex-1 flex items-center gap-2">
            <label className="font-arcade text-xs shrink-0">URI PATH:</label>
            <input
              type="text"
              value={reqPath}
              onChange={(e) => {
                setReqPath(e.target.value);
                setTransmitted(false);
              }}
              className="win95-sunken flex-1 px-3 py-1.5 text-xs font-mono bg-white min-h-[44px]"
              placeholder="/secret-page.html"
            />
          </div>

          <button
            onClick={handleTransmit}
            className="win95-btn px-4 py-2 font-arcade text-xs text-black min-h-[44px] cursor-pointer"
          >
            TRANSMIT PACKET
          </button>
        </div>

        {/* Console Output */}
        <div className="win95-sunken bg-black text-green-400 p-3 font-mono text-xs overflow-x-auto min-h-[140px]">
          <div className="text-gray-500 mb-1 border-b border-gray-800 pb-1">
            Raw TCP Stream: Client [192.168.1.42:51200] -&gt; Server [93.184.216.34:80]
          </div>
          {transmitted ? (
            <div className="space-y-1">
              <div className="text-yellow-400 font-bold">{reqMethod} {reqPath} HTTP/1.1</div>
              <div>Host: web.win95.site</div>
              <div>User-Agent: Mozilla/5.0 (Windows 95; x86) RetroBrowser/1.0</div>
              <div>Accept: text/html,application/xhtml+xml,application/xml;q=0.9</div>
              <div>Accept-Language: en-US,en;q=0.5</div>
              <div className="text-red-400 font-bold">
                Cookie: session_auth=USER95_CLEARTEXT_TOKEN; role=sysadmin
              </div>
              {reqMethod === "POST" && (
                <>
                  <div>Content-Type: application/x-www-form-urlencoded</div>
                  <div>Content-Length: 29</div>
                  <div className="text-red-400 font-bold pt-1 bg-red-950/60 p-1 border border-red-700">
                    Payload: username=admin&amp;password=vintage95
                  </div>
                </>
              )}
              <div className="text-gray-500 pt-2 border-t border-gray-800">
                Server Response: HTTP/1.1 200 OK
              </div>
              <div className="text-cyan-300">Date: Fri, 20 Nov 2026 18:50:00 GMT</div>
              <div className="text-cyan-300">Content-Type: text/html; charset=UTF-8</div>
              <div className="text-cyan-300">Server: Nginx/1.24 (Win95-Compat)</div>
              <div className="text-white pt-1">
                &lt;html&gt;&lt;body&gt;&lt;h1&gt;HTTP 200 OK Delivered in Plaintext&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;
              </div>
            </div>
          ) : (
            <div className="text-gray-400 italic py-4 text-center">
              Socket open on Port 80. Click &quot;TRANSMIT PACKET&quot; to inspect the wire transfer...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
