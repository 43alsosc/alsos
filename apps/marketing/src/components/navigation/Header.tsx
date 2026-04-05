import { SidebarTrigger } from "@alsos/ui/components/sidebar";
import { Link, useRouterState } from "@tanstack/react-router";
import { cn } from "@alsos/ui/lib/utils";

import { isPortfolioNavActive, portfolioNavItems } from "./portfolio-nav";

export default function Header() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <header className="sticky top-0 z-20 flex h-14 shrink-0 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-backdrop-filter:bg-background/80">
      <SidebarTrigger className="md:hidden" />
      <Link
        to="/"
        className="font-semibold tracking-tight text-foreground hover:opacity-90"
      >
        Oscar Alsos
      </Link>
      <nav
        className="ml-auto hidden items-center gap-1 md:flex"
        aria-label="Hovednavigasjon"
      >
        {portfolioNavItems.map((item) => {
          const active = isPortfolioNavActive(pathname, item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative rounded-none px-3 py-2 text-sm font-medium transition-colors",
                "text-muted-foreground hover:text-foreground",
                "after:pointer-events-none after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-foreground after:transition-transform after:duration-300 after:ease-out",
                "motion-reduce:after:transition-none",
                active && "text-foreground after:scale-x-100",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
