import Link from "next/link";
import { ArrowLeft, Monitor, Clock, User, Share2, Radio } from "lucide-react";

export default function BookDetailPage() {
  const book = {
    title: "THE VOX PROTOCOL",
    description: "The official directive for all citizens of the Digital Empire. This document outlines the mandatory transition from organic thought to integrated media consciousness. Failure to follow these broadcast guidelines is considered a signal violation.",
    author: "VOX",
    chapters: [
      { id: "1", title: "INITIAL INTEGRATION", order: 1 },
      { id: "2", title: "THE EYE OF THE STORM", order: 2 },
    ]
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#d0d0d0] font-mono pb-24">
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] [background-size:100%_2px]" />

      <nav className="h-20 border-b-4 border-[#1a1a1a] bg-black flex items-center px-10 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3 text-[#666666] hover:text-[#00eeff] transition-all uppercase text-[10px] font-black tracking-[0.4em]">
          <ArrowLeft size={16} /> RETURN_TO_FEED
        </Link>
      </nav>

      <div className="max-w-6xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {/* Cover Area */}
          <div className="lg:col-span-1">
             <div className="aspect-[3/4] bg-[#121212] border-[12px] border-[#1a1a1a] relative overflow-hidden shadow-[25px_25px_0px_0px_#8b0000]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center grayscale contrast-150" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-4 left-4 bg-[#8b0000] px-3 py-1 text-[10px] font-black text-white uppercase italic">Official_Communique</div>
                <div className="absolute bottom-6 left-6 right-6">
                   <div className="text-[#00eeff] mb-2"><Monitor size={40} /></div>
                   <h1 className="text-3xl font-black uppercase italic leading-none">{book.title}</h1>
                </div>
             </div>

             <div className="mt-12 space-y-6">
                <button className="w-full bg-[#00eeff] text-black font-black py-5 uppercase tracking-[0.3em] shadow-[6px_6px_0px_0px_#8b0000] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all active:scale-[0.98]">
                   SUBSCRIBE_NODE
                </button>
                <button className="w-full border-4 border-[#1a1a1a] py-4 flex items-center justify-center gap-3 text-xs font-black uppercase hover:bg-[#121212] transition-colors tracking-widest">
                   <Share2 size={18} /> BROADCAST_SIGNAL
                </button>
             </div>
          </div>

          {/* Info Area */}
          <div className="lg:col-span-2 space-y-12">
             <div className="border-l-8 border-[#8b0000] pl-8 bg-[#0c0c0c] p-10 border-b-4 border-r-4 border-[#1a1a1a]">
                <h1 className="text-6xl font-black uppercase tracking-tighter leading-none mb-6 italic">{book.title}</h1>
                <div className="flex flex-wrap gap-8 text-[10px] font-black uppercase text-[#666666] tracking-[0.2em]">
                   <span className="flex items-center gap-2 text-[#00eeff]"><User size={14} /> AUTHOR: {book.author}</span>
                   <span className="flex items-center gap-2"><Clock size={14} /> UPDATED: 0.2_CYCLES_AGO</span>
                   <span className="flex items-center gap-2"><Radio size={14} /> {book.chapters.length} SEGMENTS</span>
                </div>
             </div>

             <div className="bg-black border-4 border-[#1a1a1a] p-10 font-bold italic text-2xl leading-relaxed text-[#888888] uppercase shadow-[10px_10px_0px_0px_#121212]">
                &ldquo;{book.description}&rdquo;
             </div>

             <div className="space-y-6">
                <h2 className="text-xl font-black uppercase tracking-[0.5em] border-b-4 border-[#1a1a1a] pb-4 italic text-[#8b0000]">DATA_INDEX</h2>
                <div className="grid grid-cols-1 gap-4">
                   {book.chapters.map((chapter) => (
                      <Link
                        key={chapter.id}
                        href={`/books/1/${chapter.id}`}
                        className="bg-[#0c0c0c] border-4 border-[#1a1a1a] p-6 flex items-center justify-between group hover:border-[#00eeff] hover:bg-black transition-all"
                      >
                         <div className="flex items-center gap-8">
                            <span className="text-4xl font-black text-[#1a1a1a] group-hover:text-[#8b0000] italic transition-colors">#{chapter.order.toString().padStart(2, '0')}</span>
                            <span className="text-xl font-black uppercase tracking-widest group-hover:text-white transition-all">{chapter.title}</span>
                         </div>
                         <ArrowLeft size={24} className="rotate-180 text-[#1a1a1a] group-hover:text-[#00eeff] transition-colors" />
                      </Link>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
