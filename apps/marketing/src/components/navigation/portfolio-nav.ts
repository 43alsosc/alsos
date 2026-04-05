import type { LucideIcon } from "lucide-react";
import { Briefcase, Home, Mail, UserRound } from "lucide-react";

export const portfolioNavItems: ReadonlyArray<{
  to: string;
  label: string;
  icon: LucideIcon;
}> = [
  { to: "/", label: "Hjem", icon: Home },
  { to: "/projects", label: "Arbeid", icon: Briefcase },
  { to: "/about", label: "Om", icon: UserRound },
  { to: "/contact", label: "Kontakt", icon: Mail },
];

export function isPortfolioNavActive(pathname: string, to: string): boolean {
  if (to === "/") {
    return pathname === "/";
  }
  return pathname === to || pathname.startsWith(`${to}/`);
}
