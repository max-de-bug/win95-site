import React from "react";

export function Win95ComputerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="28" height="20" fill="#c0c0c0" stroke="#000000" strokeWidth="2" />
      <rect x="5" y="6" width="22" height="14" fill="#000080" />
      <rect x="7" y="8" width="18" height="10" fill="#008080" />
      <line x1="8" y1="10" x2="16" y2="10" stroke="#ffffff" strokeWidth="2" />
      <line x1="8" y1="14" x2="22" y2="14" stroke="#ffffff" strokeWidth="2" />
      <path d="M12 23H20V26H12V23Z" fill="#808080" stroke="#000000" strokeWidth="1.5" />
      <rect x="7" y="26" width="18" height="4" fill="#c0c0c0" stroke="#000000" strokeWidth="1.5" />
      <rect x="19" y="27" width="4" height="2" fill="#008000" />
    </svg>
  );
}

export function Win95NetworkIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="12" height="10" fill="#c0c0c0" stroke="#000000" strokeWidth="1.5" />
      <rect x="4" y="4" width="8" height="6" fill="#000080" />
      <rect x="18" y="2" width="12" height="10" fill="#c0c0c0" stroke="#000000" strokeWidth="1.5" />
      <rect x="20" y="4" width="8" height="6" fill="#000080" />
      <path d="M8 12V20H24V12" stroke="#000000" strokeWidth="2" />
      <path d="M16 20V24" stroke="#000000" strokeWidth="2" />
      <rect x="10" y="24" width="12" height="6" fill="#c0c0c0" stroke="#000000" strokeWidth="1.5" />
      <circle cx="16" cy="27" r="1.5" fill="#00ff00" />
    </svg>
  );
}

export function Win95ShieldIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L4 5V11C4 16.5 7.5 21 12 22C16.5 21 20 16.5 20 11V5L12 2Z" fill="#008000" stroke="#000000" strokeWidth="1.5" />
      <path d="M9 11.5L11 13.5L15 9.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Win95WarningIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L2 21H22L12 3Z" fill="#ffcc00" stroke="#000000" strokeWidth="1.5" />
      <rect x="11" y="9" width="2" height="6" fill="#000000" />
      <circle cx="12" cy="18" r="1.5" fill="#000000" />
    </svg>
  );
}

export function Win95DocumentIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 2H14L20 8V22H4V2Z" fill="#ffffff" stroke="#000000" strokeWidth="1.5" />
      <path d="M14 2V8H20" fill="#dfdfdf" stroke="#000000" strokeWidth="1.5" />
      <line x1="7" y1="12" x2="17" y2="12" stroke="#808080" strokeWidth="1.5" />
      <line x1="7" y1="15" x2="17" y2="15" stroke="#808080" strokeWidth="1.5" />
      <line x1="7" y1="18" x2="13" y2="18" stroke="#808080" strokeWidth="1.5" />
    </svg>
  );
}

export function Win95KeyIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="7" cy="12" r="5" fill="#ffcc00" stroke="#000000" strokeWidth="1.5" />
      <circle cx="7" cy="12" r="2" fill="#c0c0c0" stroke="#000000" strokeWidth="1" />
      <path d="M12 12H21V15H19V12H17V15H15V12" stroke="#000000" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

