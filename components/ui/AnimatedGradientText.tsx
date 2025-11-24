"use client";

export default function AnimatedGradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-gradient-to-r from-primary-500 via-accent-500 to-primary-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
      {children}
    </span>
  );
}

