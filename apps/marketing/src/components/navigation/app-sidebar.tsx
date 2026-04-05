import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@alsos/ui/components/sidebar";
import { Logo } from "@alsos/ui/components/logo";
import { cn } from "@alsos/ui/lib/utils";
import { Link, useRouterState } from "@tanstack/react-router";

import { isPortfolioNavActive, portfolioNavItems } from "./portfolio-nav";

export function AppSidebar() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <Sidebar desktopVisibility="none">
      <SidebarHeader className="flex h-14 shrink-0 flex-row items-center border-b border-sidebar-border p-0 px-4">
        <Logo className="size-12" title="Alsos" />
        <span className="text-sm font-semibold">Alsos</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigasjon</SidebarGroupLabel>
          <SidebarMenu>
            {portfolioNavItems.map((item) => {
              const Icon = item.icon;
              const active = isPortfolioNavActive(pathname, item.to);
              return (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton
                    isActive={active}
                    className={cn(
                      "overflow-visible font-medium",
                      "relative after:absolute after:bottom-1 after:left-2 after:right-2 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-sidebar-primary after:transition-transform after:duration-300 after:ease-out",
                      "motion-reduce:after:transition-none",
                      active && "after:scale-x-100",
                    )}
                    render={<Link to={item.to} />}
                    tooltip={item.label}
                  >
                    <Icon />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
