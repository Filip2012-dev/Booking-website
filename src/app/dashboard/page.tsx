"use client";

import { Monitor, Radio, Share2, Eye, Shield, Activity } from "lucide-react";

export default function DashboardOverview() {
  const stats = [
    { name: "Live Feeds", value: "0", icon: Monitor, color: "text-[#00eeff]" },
    { name: "Global Segments", value: "0", icon: Radio, color: "text-[#8b0000]" },
    { name: "Signal Nodes", value: "Offline", icon: Share2, color: "text-[#ffffff]" },
  ];

  return (
    <div className="space-y-12">
      <div className="border-l-8 border-[#8b0000] pl-6 bg-[#0c0c0c] p-6 shadow-[10px_10px_0px_0px_#121212]">
        <h1 className="text-5xl font-black uppercase tracking-tighter italic">V-COMMAND <span className="text-[#00eeff] not-italic tracking-normal">TERMINAL</span></h1>
        <p className="text-[#666666] mt-2 uppercase text-xs font-black tracking-[0.5em]">Central Surveillance & Media Control</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-[#0c0c0c] border-4 border-[#1a1a1a] p-8 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#1a1a1a] translate-x-8 -translate-y-8 rotate-45 transition-transform group-hover:bg-[#8b0000]" />
            <div className="flex justify-between items-start relative z-10">
              <stat.icon className={stat.color} size={32} />
              <div className="text-4xl font-black italic">{stat.value}</div>
            </div>
            <div className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#666666] relative z-10">
              {stat.name}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
        <div className="border-4 border-[#1a1a1a] bg-[#0c0c0c] p-8 shadow-[15px_15px_0px_0px_#121212]">
          <h2 className="text-2xl font-black uppercase italic mb-8 flex items-center gap-4 text-[#8b0000]">
            <Activity size={24} />
            INTERNAL LOGS
          </h2>
          <div className="space-y-6">
            {[
              "SYSTEM INITIALISED. ALL EYES ACTIVE.",
              "DATABASE CLEARED. LORE RECORDS PURGED.",
              "WAITING FOR NEW BROADCAST PROTOCOLS...",
              "SECURITY LEVEL: ABSOLUTE.",
            ].map((activity, i) => (
              <div key={i} className="flex gap-4 text-sm items-center border-l-2 border-[#1a1a1a] pl-6 py-2 group hover:border-[#00eeff] transition-all">
                <span className="text-[#2a2a2a] text-[10px] font-black group-hover:text-[#00eeff]">ENTRY_{i+1024}</span>
                <span className="font-bold uppercase tracking-tight text-[#666666] group-hover:text-[#d0d0d0]">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-4 border-[#1a1a1a] bg-black p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[#00eeff]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-2xl font-black uppercase italic mb-8 flex items-center gap-4 text-[#00eeff]">
            <Shield size={24} />
            V-GRID STABILITY
          </h2>
          <div className="space-y-8">
            <div className="relative">
              <div className="w-full bg-[#1a1a1a] h-6 border-2 border-black">
                <div className="bg-[#00eeff] h-full w-[100%] shadow-[0_0_20px_#00eeff80] relative">
                   <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] [background-size:200%_100%] animate-[shimmer_2s_infinite]" />
                </div>
              </div>
              <div className="mt-4 flex justify-between text-[10px] font-black uppercase tracking-widest text-[#666666]">
                <span>CAPACITY</span>
                <span className="text-[#00eeff]">STABLE_RECON</span>
              </div>
            </div>
            <p className="text-sm text-[#444444] font-bold uppercase leading-relaxed italic border-t border-[#1a1a1a] pt-6">
              &ldquo;THERE ARE NO ERRORS IN THE SYSTEM. ONLY OPPORTUNITIES FOR INTEGRATION.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
