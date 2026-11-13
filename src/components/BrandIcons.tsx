import React from "react";

interface BrandIconProps {
  size?: number;
  className?: string;
  variant?: "color" | "monochrome";
}

/**
 * Live Google Play Store Brand Icon
 * Authentic Google Play multi-colored triangle (Cyan, Green, Coral Red, Amber Yellow)
 */
export function GooglePlayIcon({ size = 24, className = "" }: BrandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={`inline-block flex-shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        fill="#00D7FF"
        d="M19.7 13.9C9 24.8 3.1 41.5 3.1 62.5v387c0 21 5.9 37.7 16.6 48.6l1.7 1.7 222-222v-5.2L21.4 12.2l-1.7 1.7z"
      />
      <path
        fill="#00E676"
        d="M315.6 366.1l-72.2-72.2v-5.2l72.2-72.2 1.7 1 85.5 48.6c24.4 13.9 24.4 36.6 0 50.5l-85.5 48.6-1.7.9z"
      />
      <path
        fill="#FF3D00"
        d="M317.3 365.1l-73.9-73.9-223.7 223.7c8 8.5 21.2 9.5 36.1 1.1l261.5-150.9z"
      />
      <path
        fill="#FFD600"
        d="M317.3 146.9L55.8 2.2C40.9-6.2 27.7-5.2 19.7 3.3l223.7 223.7 73.9-73.9v-6.2z"
      />
    </svg>
  );
}

/**
 * Live Apple Brand Icon
 * Official Apple silhouette logo with fill="currentColor"
 */
export function AppleIcon({ size = 24, className = "" }: BrandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 170 170"
      width={size}
      height={size}
      fill="currentColor"
      className={`inline-block flex-shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.66-7.8-11.87-14.3-5.77-8.91-10.42-19.16-13.94-30.73-3.52-11.58-5.28-22.61-5.28-33.1 0-14.99 3.84-27.42 11.52-37.3 7.68-9.88 17.3-15.01 28.87-15.39 5.34 0 11.22 1.48 17.65 4.45 6.43 2.97 10.59 4.51 12.48 4.62 1.52 0 5.9-1.63 13.13-4.89 7.23-3.26 13.52-4.66 18.87-4.2 13.91.75 24.78 5.66 32.61 14.73-12.18 7.39-18.15 17.51-17.9 30.36.26 10.23 4.19 18.77 11.79 25.62 7.6 6.85 16.53 10.74 26.8 11.66-2.18 6.53-4.79 13.48-7.84 20.84zM119.22 33.15c0-7.39 2.66-14.41 7.97-21.05 5.31-6.64 11.87-10.88 19.68-12.73.13 1.09.2 2.08.2 2.97 0 7.39-2.73 14.54-8.19 21.45-5.46 6.91-12.15 11.08-20.08 12.51-.4-1.09-.6-2.14-.6-3.15z" />
    </svg>
  );
}

/**
 * Live Apple App Store Icon
 * Supports both official Apple icon and App Store blue badge
 */
export function AppStoreIcon({ size = 24, className = "", variant = "color" }: BrandIconProps) {
  if (variant === "monochrome") {
    return <AppleIcon size={size} className={className} />;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={`inline-block flex-shrink-0 ${className}`}
      aria-hidden="true"
    >
      <rect width="512" height="512" rx="115" fill="url(#appstore-grad)" />
      <defs>
        <linearGradient id="appstore-grad" x1="256" y1="0" x2="256" y2="512" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E9FFF" />
          <stop offset="1" stopColor="#0B86F4" />
        </linearGradient>
      </defs>
      {/* App Store 'A' symbol composed of paintbrush, pencil and ruler */}
      <g fill="#FFFFFF" fillRule="evenodd">
        {/* Diagonal Rod 1 (left to right) */}
        <rect
          x="236"
          y="68"
          width="40"
          height="376"
          rx="20"
          transform="rotate(30 256 256)"
        />
        {/* Diagonal Rod 2 (right to left) */}
        <rect
          x="236"
          y="68"
          width="40"
          height="376"
          rx="20"
          transform="rotate(-30 256 256)"
        />
        {/* Horizontal Bar */}
        <rect
          x="88"
          y="312"
          width="336"
          height="40"
          rx="20"
        />
      </g>
    </svg>
  );
}

/**
 * Live WhatsApp Brand Icon
 * Authentic WhatsApp Green with crisp white receiver
 */
export function WhatsAppIcon({ size = 24, className = "", variant = "color" }: BrandIconProps) {
  if (variant === "monochrome") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        className={`inline-block flex-shrink-0 ${className}`}
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.43 12.38c-.3.15-1.77.87-2.04.97-.28.1-.48.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3.15-1.26.46-2.4 1.48-.89.79-1.49 1.77-1.66 2.07-.18.3-.02.46.13.61.13.13.3.35.45.52.15.18.2.3.3.5.1.2.05.38-.02.53-.08.15-.68 1.63-.93 2.24-.24.59-.49.51-.67.52h-.58c-.2 0-.52.07-.79.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={`inline-block flex-shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path
        fill="#25D366"
        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"
      />
      <path
        fill="#FFFFFF"
        d="M17.47 14.38c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.24-.24-.59-.49-.51-.67-.52h-.58c-.2 0-.52.07-.79.37-.28.3-1.05 1.03-1.05 2.51s1.08 2.91 1.23 3.11c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
      />
    </svg>
  );
}

/**
 * Pre-styled Live Google Play Download Badge
 */
export function GooglePlayBadge({
  href = "https://play.google.com/store/apps/details?id=com.sts.stshrms&pcampaignid=web_share",
  className = "",
}: {
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0D2E40] text-white hover:bg-[#087E8B] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group ${className}`}
      aria-label="Get it on Google Play"
    >
      <GooglePlayIcon size={24} className="group-hover:scale-110 transition-transform" />
      <div className="text-left">
        <p className="text-[10px] uppercase font-semibold text-slate-300 leading-none">GET IT ON</p>
        <p className="text-sm font-bold leading-tight mt-0.5">Google Play</p>
      </div>
    </a>
  );
}

/**
 * Pre-styled Live Apple App Store Download Badge
 */
export function AppStoreBadge({
  href = "https://apps.apple.com/ie/app/shenll-hrms/id6757430801",
  className = "",
}: {
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0D2E40] text-white hover:bg-[#087E8B] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 group ${className}`}
      aria-label="Download on the App Store"
    >
      <AppleIcon size={24} className="text-white group-hover:scale-110 transition-transform" />
      <div className="text-left">
        <p className="text-[10px] uppercase font-semibold text-slate-300 leading-none">Download on the</p>
        <p className="text-sm font-bold leading-tight mt-0.5">App Store</p>
      </div>
    </a>
  );
}

/**
 * Live Microsoft Excel Brand Icon
 * Authentic Microsoft Office / Fluent Excel logo with green spreadsheet grid & 'X' tile
 */
export function ExcelIcon({ size = 32, className = "" }: BrandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={`inline-block flex-shrink-0 ${className}`}
      aria-label="Microsoft Excel"
    >
      <defs>
        <linearGradient id="excel-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#107C41" />
          <stop offset="100%" stopColor="#0B5A2F" />
        </linearGradient>
      </defs>
      {/* Background spreadsheet canvas */}
      <rect x="14" y="6" width="28" height="36" rx="4" fill="#188038" />
      {/* Spreadsheet grid lines */}
      <rect x="22" y="12" width="16" height="3" rx="1.5" fill="#E6F4EA" opacity="0.9" />
      <rect x="22" y="18" width="16" height="3" rx="1.5" fill="#E6F4EA" opacity="0.9" />
      <rect x="22" y="24" width="16" height="3" rx="1.5" fill="#E6F4EA" opacity="0.9" />
      <rect x="22" y="30" width="16" height="3" rx="1.5" fill="#E6F4EA" opacity="0.9" />
      <rect x="28" y="12" width="2" height="21" fill="#107C41" opacity="0.3" />
      {/* Left Front 'X' Tile */}
      <rect x="6" y="11" width="24" height="26" rx="4" fill="url(#excel-bg-grad)" />
      {/* Crisp White 'X' */}
      <path
        d="M14.5 17.5L17.5 24L14.5 30.5H17L18.8 26.2L20.6 30.5H23L20 24L23 17.5H20.6L18.8 21.8L17 17.5H14.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Live Microsoft Word Brand Icon
 * Authentic Microsoft Office / Fluent Word logo with blue document lines & 'W' tile
 */
export function WordIcon({ size = 32, className = "" }: BrandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={`inline-block flex-shrink-0 ${className}`}
      aria-label="Microsoft Word"
    >
      <defs>
        <linearGradient id="word-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#185ABD" />
          <stop offset="100%" stopColor="#0F4C81" />
        </linearGradient>
      </defs>
      {/* Background document canvas */}
      <rect x="14" y="6" width="28" height="36" rx="4" fill="#1A73E8" />
      {/* Document text lines */}
      <rect x="22" y="13" width="15" height="2.5" rx="1.25" fill="#E8F0FE" opacity="0.95" />
      <rect x="22" y="19" width="15" height="2.5" rx="1.25" fill="#E8F0FE" opacity="0.95" />
      <rect x="22" y="25" width="15" height="2.5" rx="1.25" fill="#E8F0FE" opacity="0.95" />
      <rect x="22" y="31" width="10" height="2.5" rx="1.25" fill="#E8F0FE" opacity="0.95" />
      {/* Left Front 'W' Tile */}
      <rect x="6" y="11" width="24" height="26" rx="4" fill="url(#word-bg-grad)" />
      {/* Crisp White 'W' */}
      <path
        d="M13.5 17.5L15.3 26.5L17.3 20H18.7L20.7 26.5L22.5 17.5H24.5L21.7 30.5H20L18 24.2L16 30.5H14.3L11.5 17.5H13.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Live Adobe PDF Brand Icon
 * Authentic Adobe Acrobat PDF logo with red canvas and white signature loop mark
 */
export function PdfIcon({ size = 32, className = "" }: BrandIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={`inline-block flex-shrink-0 ${className}`}
      aria-label="Adobe PDF"
    >
      <defs>
        <linearGradient id="pdf-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FA2424" />
          <stop offset="100%" stopColor="#C40000" />
        </linearGradient>
      </defs>
      {/* Red rounded background canvas */}
      <rect x="4" y="4" width="40" height="40" rx="9" fill="url(#pdf-bg-grad)" />
      {/* White Adobe Acrobat Infinity Loop Ribbon */}
      <path
        d="M33.8 25.4c-1.1-.9-3.2-1.2-5.7-.9-1.2-.8-2.6-2.2-3.6-4-.4-1.9-.8-4.5-.4-5.9.1-.4.4-1.2.9-1.2.6 0 1.2.6 1.4 1.5.2 1.3-.1 3.2-.8 5-.1.3-.3.7-.4 1 .8 1.5 1.9 2.7 2.9 3.5 1.5-.2 2.9-.1 3.8.4.9.4 1 1 1 1.4-.1.7-.8 1-1.3 1-.7 0-1.8-.4-2.8-1.5zm-9.3 2.1c-.8.7-1.8 1.4-2.7 2-1.9 2.3-3.4 3.7-4.4 4.3-.8.5-1.5.6-2 .6-.9 0-1.5-.6-1.5-1.4 0-1.1.9-2.2 2.5-3.1 1.9-1 4.5-1.7 6.9-2.1.4-.1.8-.2 1.2-.3zm-1-1.6c.4-.7.9-1.6 1.3-2.5-.5.7-1.1 1.4-1.6 2.1.1.1.2.3.3.4zm10.7-.1c-.4-.2-1.3-.3-2.3 0 .7.6 1.3.8 1.7.8.3 0 .5-.2.6-.5 0-.1 0-.2 0-.3zm-17.7 5.7c.4-.4 1.4-1.3 2.8-3.1-1.5.3-3.1.8-4.1 1.4-.7.4-.9.9-.9 1.2 0 .3.2.5.6.5.4 0 .9-.3 1.6-.8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/**
 * Pre-styled Live WhatsApp Direct Chat Button
 */
export function WhatsAppButton({
  phone = "918122046761",
  message = "Hello Shenll HRMS, I would like to book a demo",
  label = "Chat on WhatsApp",
  className = "",
}: {
  phone?: string;
  message?: string;
  label?: string;
  className?: string;
}) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-bold bg-[#25D366] text-white hover:bg-[#20ba59] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group ${className}`}
      aria-label={label}
    >
      <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform" />
      <span>{label}</span>
    </a>
  );
}
