"use client";

import "./ShinyText.css";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  color?: string;
  shineColor?: string;
  spread?: number;
}

export default function ShinyText({
  children,
  className = "",
  speed = 2,
  color = "#ffffff",
  shineColor = "#c084fc",
  spread = 120,
}: ShinyTextProps) {
  const duration = speed;

  return (
    <span
      className={`shiny-text ${className}`}
      style={{
        backgroundImage: `linear-gradient(${spread}deg, ${color} 0%, ${color} 35%, ${shineColor} 50%, ${color} 65%, ${color} 100%)`,
        backgroundSize: "200% auto",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        animation: `shiny-sweep ${duration}s linear infinite`,
      } as React.CSSProperties}
    >
      {children}
    </span>
  );
}