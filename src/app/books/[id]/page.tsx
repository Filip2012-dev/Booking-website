import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, User, Share2 } from "lucide-react";

export default function BookDetailPage() {
  // In a real app, we would fetch book data based on params.id
  const book = {
    title: "The God of Overus",
    description: "The definitive account of Sergey Taboritsky's rise to godhood on the infinite Earth of Overus. This volume covers the initial formation of the Archangelic Regime, the implementation of the brutalist aesthetic, and the tragic assassination of Loji that sparked the current era of crystal-powered dominance.",
    author: "Sergey Taboritsky",
    chapters: [
      { id: "1", title: "The Ascension of Sergey", order: 1 },
      { id: "2", title: "Loji's Final Performance", order: 2 },
      { id: "3", title: "The Cinan Awakening", order: 3 },
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono pb-24">
      {/* Header */}
      <nav className="h-20 border-b-4 border-[#3f3f3f] bg-[#1a1a1a] flex items-center px-8 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 text-[#888888] hover:text-[#00f2ff] transition-colors uppercase text-xs font-bold tracking-widest">
          <ArrowLeft size={16} /> Exit Archive
        </Link>
      </nav>

      <div className="max-w-4xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Cover Area */}
          <div className="md:col-span-1">
             <div className="aspect-[2/3] bg-[#1a1a1a] border-8 border-[#3f3f3f] relative overflow-hidden shadow-[16px_16px_0px_0px_rgba(63,63,63,0.5)]">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400')] bg-cover bg-center grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                   <div className="text-[10px] font-black text-[#ffd700] uppercase">Official Record</div>
                </div>
             </div>

             <div className="mt-8 space-y-4">
                <button className="w-full bg-[#00f2ff] text-black font-black py-4 uppercase tracking-[0.2em] shadow-[4px_4px_0px_0px_rgba(0,136,145,1)] hover:translate-y-[-2px] transition-transform">
                   Follow Serial
                </button>
                <div className="flex gap-2">
                   <button className="flex-1 border-2 border-[#3f3f3f] py-2 flex items-center justify-center gap-2 text-[10px] font-bold uppercase hover:bg-[#2a2a2a]">
                      <Share2 size={14} /> Share
                   </button>
                </div>
             </div>
          </div>

          {/* Info Area */}
          <div className="md:col-span-2 space-y-8">
             <div className="border-l-8 border-[#ffd700] pl-6">
                <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-2">{book.title}</h1>
                <div className="flex flex-wrap gap-4 text-xs font-bold uppercase text-[#888888]">
                   <span className="flex items-center gap-1 text-[#00f2ff]"><User size={12} /> {book.author}</span>
                   <span className="flex items-center gap-1"><Clock size={12} /> Updated 2 days ago</span>
                   <span className="flex items-center gap-1"><BookOpen size={12} /> {book.chapters.length} Chapters</span>
                </div>
             </div>

             <div className="bg-[#1a1a1a] border-2 border-[#3f3f3f] p-6 font-serif italic text-lg leading-relaxed text-[#bbbbbb]">
                &ldquo;{book.description}&rdquo;
             </div>

             <div className="space-y-4">
                <h2 className="text-xl font-black uppercase tracking-widest border-b-2 border-[#3f3f3f] pb-2">Index of Transmissions</h2>
                <div className="grid grid-cols-1 gap-2">
                   {book.chapters.map((chapter) => (
                      <Link
                        key={chapter.id}
                        href={`/books/1/${chapter.id}`}
                        className="bg-[#1a1a1a] border-2 border-[#3f3f3f] p-4 flex items-center justify-between group hover:border-[#00f2ff] transition-colors"
                      >
                         <div className="flex items-center gap-4">
                            <span className="text-[#3f3f3f] font-black group-hover:text-[#ffd700] transition-colors">{chapter.order.toString().padStart(2, '0')}</span>
                            <span className="font-bold uppercase tracking-wide group-hover:text-white transition-colors">{chapter.title}</span>
                         </div>
                         <ArrowLeft size={16} className="rotate-180 text-[#3f3f3f] group-hover:text-[#00f2ff] transition-colors" />
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
