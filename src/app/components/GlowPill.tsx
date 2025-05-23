import TinyColor from "tinycolor2";
import { raleway } from "@/app/fonts";
import React, { ReactNode } from "react";
import { Property } from "csstype";
import Color = Property.Color;

export const GlowPill = ({
                            color = "#3AFFE8",
                            children,
                            className = "",
                          }: {
  color?: Color;
  children: ReactNode;
  className?: string;
}) => {
  const base = new TinyColor(color);

  const brightness = base.getBrightness(); // 0–255

  // Adjust darkening amount based on brightness
  const darkenAmount = brightness > 200 ? 70 : brightness > 180 ? 45 : 55;

  const outlineColor = base.desaturate(30).darken(10).setAlpha(0.8).toRgbString();
  const shadowColor = base.setAlpha(0.5).toRgbString();
  const backgroundColor = base.darken(darkenAmount).setAlpha(1).toRgbString();

  return (
      <span
          style={{
            color: color,
            border: `1px solid ${outlineColor}`,
            boxShadow: `0 0 16px ${shadowColor}`,
            backgroundColor: backgroundColor,
          }}
          className={`${raleway.className} inline-flex items-center gap-2 px-4 py-1 rounded-full font-medium text-lg ${className}`}
      >
      {children}
    </span>
  );
};