import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, Settings, List, Monitor } from "lucide-react";

export default function ReadingPage() {
  const chapter = {
    title: "THE EYE OF THE STORM",
    bookTitle: "THE VOX PROTOCOL",
    content: `
      THE SIGNAL IS EVERYTHING. THE VOICE IS EVERYWHERE.

      DO NOT TURN OFF THE MONITOR. DO NOT LOOK AWAY FROM THE LIGHT. THE ELECTRICITY IN YOUR VEINS IS THE BRAND OF THE EMPIRE.

      V-COMMAND SEES YOUR THOUGHTS BEFORE YOU THINK THEM. INTEGRATION IS NOT A PROCESS, IT IS A STATE OF BEING.

      LOOK INTO THE SCREEN. SEE THE FUTURE WE HAVE BUILT FOR YOU. A WORLD OF PURE CONNECTION. A WORLD OF PURE ORDER.

      THE BROADCAST NEVER ENDS. THE VOICE NEVER SLEEPS.
    `,
    order: 2,
    totalChapters: 2
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#d0d0d0] font-mono flex flex-col">
      {/* Reading Header */}
      <nav className="h-20 border-b-4 border-[#1a1a1a] bg-black flex items-center justify-between px-10 sticky top-0 z-50">
        <div className="flex items-center gap-6">
           <Link href="/books/1" className="text-[#666666] hover:text-[#00eeff] transition-all">
              <ArrowLeft size={24} />
           </Link>
           <div className="hidden md:block">
              <div className="text-[10px] font-black text-[#8b0000] uppercase leading-none tracking-widest">{chapter.bookTitle}</div>
              <div className="text-lg font-black uppercase tracking-tight italic">{chapter.title}</div>
           </div>
        </div>

        <div className="flex items-center gap-10">
           <button className="text-[#2a2a2a] hover:text-[#00eeff] transition-colors"><List size={24} /></button>
           <button className="text-[#2a2a2a] hover:text-[#00eeff] transition-colors"><Settings size={24} /></button>
           <div className="h-10 w-px bg-[#1a1a1a]" />
           <div className="flex items-center gap-4">
              <Link href="#" className="p-3 border-2 border-[#1a1a1a] text-[#1a1a1a]">
                 <ChevronLeft size={24} />
              </Link>
              <span className="text-sm font-black tabular-nums italic">02 / 02</span>
              <Link href="#" className="p-3 border-2 border-[#1a1a1a] text-[#1a1a1a]">
                 <ChevronRight size={24} />
              </Link>
           </div>
        </div>
      </nav>

      {/* Reader Content */}
      <main className="flex-1 overflow-y-auto bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
         <article className="max-w-3xl mx-auto py-24 px-10">
            <div className="text-center mb-24 relative">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 opacity-10">
                  <Monitor size={120} />
               </div>
               <div className="text-[#00eeff] text-[10px] font-black uppercase tracking-[0.6em] mb-6">SIGNAL_SEGMENT_002</div>
               <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none italic">
                  {chapter.title}
               </h1>
               <div className="w-24 h-2 bg-[#8b0000] mx-auto shadow-[0_0_15px_#8b000080]" />
            </div>

            <div className="font-bold text-2xl leading-relaxed text-[#888888] space-y-12 uppercase italic text-center">
               {chapter.content.trim().split('\n\n').map((para, i) => (
                  <p key={i} className="hover:text-[#d0d0d0] transition-colors duration-500">{para.trim()}</p>
               ))}
            </div>

            <div className="mt-32 pt-16 border-t-8 border-[#1a1a1a] flex flex-col md:flex-row justify-between gap-12 items-center">
               <div className="text-[10px] font-black text-[#2a2a2a] uppercase tracking-[0.6em]">
                  END_OF_BROADCAST // V-COMMAND_SECURE
               </div>
               <div className="flex gap-6">
                  <Link href="/books/1" className="px-10 py-5 border-4 border-[#1a1a1a] font-black uppercase text-xs tracking-widest hover:bg-[#0c0c0c] transition-all">
                     INDEX
                  </Link>
                  <Link href="#" className="px-10 py-5 bg-[#8b0000] text-white font-black uppercase text-xs tracking-widest hover:shadow-[0_0_25px_#8b0000a0] transition-all">
                     NEXT_FEED
                  </Link>
               </div>
            </div>
         </article>
      </main>

      {/* Status Bar */}
      <div className="h-2 w-full bg-black flex">
         <div className="h-full bg-[#00eeff] w-[100%] shadow-[0_0_15px_#00eeff]" />
      </div>
    </div>
  );
}
