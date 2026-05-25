import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, Settings, List } from "lucide-react";

export default function ReadingPage() {
  const chapter = {
    title: "Loji's Final Performance",
    bookTitle: "The God of Overus",
    content: `
      The crystals hummed with an intensity that Philip had never felt before. The stage was bathed in a sickly violet glow, the Cinan crystals at the corners of the theater pulsing like the heart of Overus itself.

      Loji stood at the center, her voice rising above the mechanical roar of the ventilation systems. She was singing a song from the old world—the Earth that had been consumed to power this very building. It was a melody of green fields and blue skies, things that now only existed in the flickering memory-banks of the Archangelic Regime.

      Sergey sat in the high balcony, his face obscured by the golden mask of the God-King. He didn't move. He didn't applaud. He simply watched.

      "The energy is spiking," Philip whispered into his comms. "The extraction is exceeding safety limits."

      But no one was listening. The audience, a mix of high-ranking brutalist officers and the few elite who could afford a ticket to the God-King's theater, sat in rapt silence.

      Then, the hum became a scream. A single beam of pure crystal energy lanced down from the ceiling.

      Loji didn't even have time to look up.
    `,
    order: 2,
    totalChapters: 3
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono flex flex-col">
      {/* Reading Header */}
      <nav className="h-16 border-b-2 border-[#3f3f3f] bg-[#1a1a1a] flex items-center justify-between px-4 md:px-8 sticky top-0 z-50">
        <div className="flex items-center gap-4">
           <Link href="/books/1" className="text-[#888888] hover:text-white transition-colors">
              <ArrowLeft size={20} />
           </Link>
           <div className="hidden md:block">
              <div className="text-[10px] font-bold text-[#888888] uppercase leading-none">{chapter.bookTitle}</div>
              <div className="text-sm font-black uppercase tracking-tight">{chapter.title}</div>
           </div>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
           <button className="text-[#888888] hover:text-[#00f2ff] transition-colors"><List size={20} /></button>
           <button className="text-[#888888] hover:text-[#00f2ff] transition-colors"><Settings size={20} /></button>
           <div className="h-8 w-px bg-[#3f3f3f]" />
           <div className="flex items-center gap-2">
              <Link href="#" className="p-2 border border-[#3f3f3f] hover:bg-[#2a2a2a] transition-colors text-[#3f3f3f]">
                 <ChevronLeft size={20} />
              </Link>
              <span className="text-xs font-bold tabular-nums">02 / 03</span>
              <Link href="#" className="p-2 border border-[#3f3f3f] hover:bg-[#2a2a2a] transition-colors hover:text-[#00f2ff] hover:border-[#00f2ff]">
                 <ChevronRight size={20} />
              </Link>
           </div>
        </div>
      </nav>

      {/* Reader Content */}
      <main className="flex-1 overflow-y-auto">
         <article className="max-w-2xl mx-auto py-16 px-6">
            <div className="text-center mb-16">
               <div className="text-[#ffd700] text-xs font-black uppercase tracking-[0.4em] mb-4">Transmission 002</div>
               <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
                  {chapter.title}
               </h1>
               <div className="w-12 h-1 bg-[#3f3f3f] mx-auto" />
            </div>

            <div className="font-serif text-xl leading-relaxed text-[#d0d0d0] space-y-8 first-letter:text-5xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-[#00f2ff]">
               {chapter.content.trim().split('\n\n').map((para, i) => (
                  <p key={i}>{para.trim()}</p>
               ))}
            </div>

            <div className="mt-24 pt-12 border-t-4 border-[#3f3f3f] flex flex-col md:flex-row justify-between gap-8 items-center">
               <div className="text-[10px] font-bold text-[#3f3f3f] uppercase tracking-widest">
                  End of Transmission // Source: Sector_Prime_Archive
               </div>
               <div className="flex gap-4">
                  <Link href="/books/1" className="px-6 py-3 border-2 border-[#3f3f3f] font-bold uppercase text-xs tracking-widest hover:bg-[#1a1a1a]">
                     Table of Contents
                  </Link>
                  <Link href="#" className="px-6 py-3 bg-[#00f2ff] text-black font-black uppercase text-xs tracking-widest hover:translate-y-[-2px] transition-transform">
                     Next Chapter
                  </Link>
               </div>
            </div>
         </article>
      </main>

      {/* Progress Bar */}
      <div className="h-1 w-full bg-[#1a1a1a]">
         <div className="h-full bg-[#00f2ff] w-[66%] shadow-[0_0_8px_rgba(0,242,255,0.6)]" />
      </div>
    </div>
  );
}
