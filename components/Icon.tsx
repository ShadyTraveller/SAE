import type { SVGProps } from "react";

/**
 * Inline SVG icon set in a rounded Google-style outline.
 * Replaces the Material Symbols webfont so icons always render,
 * even when the font fails to load.
 */
export type IconName =
  | "arrow_forward"
  | "bolt"
  | "check"
  | "contract"
  | "expand_more"
  | "grid_view"
  | "groups"
  | "home"
  | "insights"
  | "lightbulb"
  | "location_on"
  | "mail"
  | "progress_activity"
  | "route"
  | "savings"
  | "schedule"
  | "school"
  | "shield"
  | "smart_toy"
  | "strategy"
  | "trending_up"
  | "tune"
  | "workspace_premium";

const PATHS: Record<IconName, React.ReactNode> = {
  arrow_forward: (
    <path d="M4 12h15M13.5 6.5 19 12l-5.5 5.5" />
  ),
  bolt: <path d="M13 2.5 4.5 13.5H11l-1 8 8.5-11.5H12l1-7.5Z" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  contract: (
    <>
      <path d="M7 3.5h7l4 4V20.5H7V3.5Z" />
      <path d="M14 3.5V7.5h4" />
      <path d="M9.5 12h5M9.5 15.5h5" />
    </>
  ),
  expand_more: <path d="m6 9.5 6 6 6-6" />,
  grid_view: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="2" />
      <rect x="13" y="4" width="7" height="7" rx="2" />
      <rect x="4" y="13" width="7" height="7" rx="2" />
      <rect x="13" y="13" width="7" height="7" rx="2" />
    </>
  ),
  groups: (
    <>
      <circle cx="9" cy="8.5" r="3.25" />
      <path d="M3.5 19.5c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5" />
      <circle cx="16.5" cy="9.5" r="2.5" />
      <path d="M16 14.6c2.3.2 3.9 1.7 4.4 4.4" />
    </>
  ),
  home: (
    <>
      <path d="m3.5 11 8.5-7.5L20.5 11" />
      <path d="M5.5 9.8V20h4.5v-5.5h4V20H18.5V9.8" />
    </>
  ),
  insights: (
    <>
      <path d="M4 20V11M10 20V5M16 20v-6" />
      <path d="m3 9 5.5-5L13 8.5 19.5 2" />
      <path d="M15.5 2H19.5V6" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9.5 18h5M10.5 21h3" />
      <path d="M12 3.5c-3.2 0-5.5 2.4-5.5 5.6 0 2.1 1.1 3.6 2.2 4.7.6.6 1.1 1.3 1.3 2.2h4c.2-.9.7-1.6 1.3-2.2 1.1-1.1 2.2-2.6 2.2-4.7 0-3.2-2.3-5.6-5.5-5.6Z" />
    </>
  ),
  location_on: (
    <>
      <path d="M12 21.5s6.5-6 6.5-11a6.5 6.5 0 1 0-13 0c0 5 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </>
  ),
  progress_activity: <path d="M3 12h3.5l2-6.5 4 13 2-6.5H21" />,
  route: (
    <>
      <circle cx="6" cy="18" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" strokeDasharray="1.5 2.4" />
    </>
  ),
  savings: (
    <>
      <ellipse cx="12" cy="6.5" rx="6" ry="2.5" />
      <path d="M6 6.5v5c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5" />
      <path d="M6 11.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4.5" />
      <path d="M9 20.5h6" />
    </>
  ),
  schedule: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3.5 2" />
    </>
  ),
  school: (
    <>
      <path d="m2.5 9.5 9.5-4.5 9.5 4.5-9.5 4.5-9.5-4.5Z" />
      <path d="M6.5 11.5V16c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-4.5" />
      <path d="M21.5 9.5V15" />
    </>
  ),
  shield: <path d="M12 3.5 19 6v5.2c0 4.6-3 7.6-7 9.3-4-1.7-7-4.7-7-9.3V6l7-2.5Z" />,
  smart_toy: (
    <>
      <rect x="5" y="8.5" width="14" height="10" rx="3" />
      <path d="M12 8.5V5.5M12 5.5h3" />
      <circle cx="9.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="13.5" r="1" fill="currentColor" stroke="none" />
      <path d="M3.5 12v3M20.5 12v3" />
    </>
  ),
  strategy: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3" />
    </>
  ),
  trending_up: (
    <>
      <path d="m3.5 16.5 5.5-5.5 3.5 3.5 7-7" />
      <path d="M14.5 7.5h5v5" />
    </>
  ),
  tune: (
    <>
      <path d="M5 7V4M5 20v-9M12 20v-4M12 11V4M19 20v-7M19 9V4" />
      <circle cx="5" cy="12" r="2" fill="white" />
      <circle cx="12" cy="14" r="2" fill="white" />
      <circle cx="19" cy="11" r="2" fill="white" />
    </>
  ),
  workspace_premium: (
    <>
      <circle cx="12" cy="9.5" r="4.5" />
      <path d="m9.8 13.2-2.3 7.3 4.5-2.5 4.5 2.5-2.3-7.3" />
      <path d="m10.2 9.5 1.3 1.3 2.3-2.5" />
    </>
  ),
};

export function Icon({
  name,
  filled = false,
  className,
  ...props
}: {
  name: IconName;
  filled?: boolean;
  className?: string;
} & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {PATHS[name]}
    </svg>
  );
}
