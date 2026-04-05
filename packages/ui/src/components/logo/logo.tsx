import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@alsos/ui/lib/utils";

const VIEWBOX = 300;
const STROKE_WIDTH = 12;
const LETTER_Y = 185;
const FONT_SIZE = 100;

export interface LogoProps extends Omit<
  ComponentPropsWithoutRef<"svg">,
  "viewBox" | "xmlns"
> {
  /** Accessible name; rendered as `<title>` and `aria-label`. */
  title?: string;
  /** Solid background behind the mark (original asset used white). */
  withBackground?: boolean;
}

export function Logo({
  className,
  title = "Alsos",
  withBackground = false,
  ...props
}: LogoProps) {
  return (
    <svg
      viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "inline-block aspect-square shrink-0 text-foreground select-none",
        className,
      )}
      role="img"
      aria-label={title}
      {...props}
    >
      <title>{title}</title>
      {withBackground ? (
        <rect width="100%" height="100%" className="fill-background" />
      ) : null}
      <circle
        cx="150"
        cy="150"
        r="100"
        fill="none"
        className="stroke-current"
        strokeWidth={STROKE_WIDTH}
      />
      <text
        x="120"
        y={LETTER_Y}
        className="fill-current"
        textAnchor="middle"
        style={{
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          fontSize: FONT_SIZE,
          fontWeight: 700,
        }}
      >
        K
      </text>
      <text
        x="180"
        y={LETTER_Y}
        className="fill-current"
        textAnchor="middle"
        style={{
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          fontSize: FONT_SIZE,
          fontWeight: 700,
        }}
      >
        A
      </text>
    </svg>
  );
}
