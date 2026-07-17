import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Karyo Growth Engine",
  description: "AI growth head for Indian local businesses. Spend 5 min/day to grow your shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full dark`}>
      <body className="min-h-full bg-neutral-950 text-neutral-100 flex items-center justify-center p-0 sm:p-8 overflow-hidden select-none relative">
        {/* Glow Effects on Desktop */}
        <div className="hidden sm:block absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px] pointer-events-none" />
        <div className="hidden sm:block absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-600/10 blur-[120px] pointer-events-none" />

        {/* Mobile Device Frame */}
        <div className="relative w-full max-w-[380px] h-screen sm:h-[812px] bg-neutral-950 sm:rounded-[48px] sm:border-[10px] sm:border-neutral-900 flex flex-col overflow-hidden sm:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] sm:ring-1 sm:ring-neutral-800">
          
          {/* Notch / Dynamic Island (Desktop only) */}
          <div className="hidden sm:flex absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-neutral-900 rounded-full z-50 items-center justify-between px-3 border border-neutral-800/30 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 animate-pulse" />
            <span className="w-10 h-1 bg-neutral-800 rounded-full" />
            <span className="w-2.5 h-2.5 rounded-full bg-neutral-800 flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-indigo-500/80" />
            </span>
          </div>

          {/* Screen Content Container */}
          <div className="flex-1 flex flex-col h-full overflow-y-auto no-scrollbar relative z-10">
            {children}
          </div>

          {/* Home Indicator (Desktop only) */}
          <div className="hidden sm:block absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-neutral-800 rounded-full z-50" />
        </div>
      </body>
    </html>
  );
}
