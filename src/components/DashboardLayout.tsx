"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Book, FileText, Share2, LayoutDashboard, LogOut, Gem } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Books", href: "/dashboard/books", icon: Book },
  { name: "Chapters", href: "/dashboard/chapters", icon: FileText },
  { name: "Social Posts", href: "/dashboard/posts", icon: Share2 },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono">
      {/* Sidebar */}
      <aside className="w-64 border-r-4 border-[#3f3f3f] bg-[#1a1a1a] flex flex-col">
        <div className="p-6 border-b-4 border-[#3f3f3f] flex items-center gap-3">
          <div className="w-8 h-8 bg-[#00f2ff] flex items-center justify-center border border-black rotate-45">
            <Gem size={16} className="text-black -rotate-45" />
          </div>
          <span className="font-bold tracking-tighter uppercase text-sm">Regime Hub</span>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 border-2 border-transparent transition-all uppercase text-xs font-bold tracking-widest",
                  isActive
                    ? "bg-[#00f2ff] text-black border-black"
                    : "hover:bg-[#2a2a2a] hover:border-[#3f3f3f]"
                )}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t-4 border-[#3f3f3f]">
          <Link
            href="/login"
            className="flex items-center gap-3 px-4 py-3 text-[#888888] hover:text-white transition-colors uppercase text-xs font-bold tracking-widest"
          >
            <LogOut size={18} />
            Disconnect
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 border-b-4 border-[#3f3f3f] bg-[#1a1a1a] flex items-center justify-between px-8">
          <div className="text-[10px] text-[#888888] uppercase tracking-[0.2em]">
            Status: <span className="text-[#00ff00]">Linked</span> | Sector: Overus Prime
          </div>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-[#2a2a2a] border border-[#3f3f3f] text-[10px] uppercase">
              Cinan Level: 99.8%
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
