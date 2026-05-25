"use client";

import { Book, FileText, Share2, Gem, Clock } from "lucide-react";

export default function DashboardOverview() {
  const stats = [
    { name: "Active Serials", value: "3", icon: Book, color: "text-[#00f2ff]" },
    { name: "Total Chapters", value: "142", icon: FileText, color: "text-[#ffd700]" },
    { name: "Social Reach", value: "12.4k", icon: Share2, color: "text-[#ff00ff]" },
  ];

  return (
    <div className="space-y-8">
      <div className="border-l-4 border-[#00f2ff] pl-4">
        <h1 className="text-4xl font-black uppercase tracking-tighter">Terminal Overview</h1>
        <p className="text-[#888888] mt-2 uppercase text-xs tracking-[0.3em]">Monitoring the Colossal Era development</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-[#1a1a1a] border-2 border-[#3f3f3f] p-6 shadow-[4px_4px_0px_0px_rgba(63,63,63,1)]">
            <div className="flex justify-between items-start">
              <stat.icon className={stat.color} size={24} />
              <div className="text-3xl font-black">{stat.value}</div>
            </div>
            <div className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[#888888]">
              {stat.name}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
        <div className="border-4 border-[#3f3f3f] bg-[#1a1a1a] p-6">
          <h2 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
            <Clock size={20} className="text-[#00f2ff]" />
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[
              "Chapter 42 of &apos;The God of Overus&apos; published",
              "New social post: &apos;The Cinan Crisis&apos;",
              "Book &apos;Archangelic Regime&apos; updated metadata",
              "User &apos;Philip_IV&apos; logged in from Sector 4",
            ].map((activity, i) => (
              <div key={i} className="flex gap-3 text-sm items-center border-l-2 border-[#3f3f3f] pl-4 py-1">
                <span className="text-[#888888] text-[10px] tabular-nums">0{i+1}:32</span>
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-4 border-[#3f3f3f] bg-[#1a1a1a] p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00f2ff]/5 -mr-16 -mt-16 rotate-45 border border-[#00f2ff]/20" />
          <h2 className="text-xl font-bold uppercase mb-6 flex items-center gap-2">
            <Gem size={20} className="text-[#00f2ff]" />
            Cinan Core Status
          </h2>
          <div className="space-y-4">
            <div className="w-full bg-[#2a2a2a] h-4 border border-[#3f3f3f]">
              <div className="bg-[#00f2ff] h-full w-[85%] shadow-[0_0_10px_rgba(0,242,255,0.5)]" />
            </div>
            <div className="flex justify-between text-[10px] uppercase font-bold text-[#888888]">
              <span>Stability</span>
              <span className="text-[#00f2ff]">85% - OPTIMAL</span>
            </div>
            <p className="text-xs text-[#888888] leading-relaxed italic">
              &ldquo;The Earth&apos;s cores are being drained at a steady rate. Sergey&apos;s powers remain absolute.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
