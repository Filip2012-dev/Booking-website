"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Monitor, Radio, Share2, LayoutDashboard, LogOut, Eye, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Terminal", href: "/dashboard", icon: LayoutDashboard },
  { name: "Broadcasts", href: "/dashboard/books", icon: Monitor },
  { name: "Segments", href: "/dashboard/chapters", icon: Radio },
  { name: "Signals", href: "/dashboard/posts", icon: Share2 },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#050505] text-[#d0d0d0] font-mono">
      {/* Sidebar */}
      <aside className="w-72 border-r-4 border-[#1a1a1a] bg-[#0c0c0c] flex flex-col">
        <div className="p-8 border-b-4 border-[#1a1a1a] flex items-center gap-4 bg-black">
          <div className="w-10 h-10 bg-[#8b0000] flex items-center justify-center border-2 border-white shadow-[4px_4px_0px_0px_#1a1a1a]">
            <Eye size={20} className="text-white" />
          </div>
          <span className="font-black tracking-tighter uppercase text-lg italic">V-COMMAND</span>
        </div>

        <nav className="flex-1 py-10 px-6 space-y-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-6 py-4 border-2 transition-all uppercase text-xs font-black tracking-[0.2em]",
                  isActive
                    ? "bg-[#00eeff] text-black border-black shadow-[4px_4px_0px_0px_#1a1a1a]"
                    : "border-transparent text-[#666666] hover:text-[#d0d0d0] hover:border-[#1a1a1a] hover:bg-[#121212]"
                )}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t-4 border-[#1a1a1a] bg-black">
          <Link
            href="/login"
            className="flex items-center gap-4 px-6 py-4 text-[#2a2a2a] hover:text-[#8b0000] transition-colors uppercase text-xs font-black tracking-[0.2em]"
          >
            <LogOut size={20} />
            TERMINATE
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="h-20 border-b-4 border-[#1a1a1a] bg-[#0c0c0c] flex items-center justify-between px-10">
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-[10px] text-[#666666] uppercase font-black tracking-widest">
               <Shield size={14} className="text-[#8b0000]" /> SYSTEM STATUS: <span className="text-[#00ff00]">SECURED</span>
             </div>
             <div className="h-4 w-px bg-[#1a1a1a]" />
             <div className="text-[10px] text-[#666666] uppercase font-black tracking-widest">
               NODE: CORE_PRIMARY
             </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="px-4 py-2 bg-black border-2 border-[#1a1a1a] text-[10px] font-black uppercase text-[#00eeff]">
              SIGNAL: 100%
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-12 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
