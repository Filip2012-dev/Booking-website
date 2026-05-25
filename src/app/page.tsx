import Link from "next/link";
import { Monitor, Eye, Radio, Shield, Zap } from "lucide-react";
import { dataStore } from "@/lib/store";

export default function Home() {
  const books = dataStore.getBooks();

  return (
    <div className="min-h-screen bg-[#050505] text-[#d0d0d0] font-mono selection:bg-[#00eeff] selection:text-black">
      {/* V-Command Header */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden border-b-8 border-[#1a1a1a]">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] [background-size:100%_2px,3px_100%]" />
          <div className="absolute inset-0 bg-[radial-gradient(#00eeff10_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#00eeff]/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl">
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#00eeff] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="w-32 h-32 bg-[#121212] flex items-center justify-center border-4 border-[#8b0000] rotate-45 shadow-[10px_10px_0px_0px_#8b0000]">
                <Monitor size={60} className="text-[#00eeff] -rotate-45" />
              </div>
              <div className="absolute -top-4 -right-4 bg-[#8b0000] p-2 border-2 border-white">
                <Eye size={24} className="text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-4 leading-none italic">
            VOX<span className="text-[#8b0000]">TEK</span> <span className="text-[#00eeff] not-italic">COMMAND</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.4em] mb-12 text-[#666666] flex items-center justify-center gap-4">
             <Radio size={24} className="text-[#00eeff]" /> THE FUTURE IS WATCHING <Radio size={24} className="text-[#00eeff]" />
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link
              href="/dashboard"
              className="bg-[#00eeff] text-black px-12 py-6 font-black uppercase tracking-widest text-xl hover:translate-y-[-4px] hover:shadow-[0_0_30px_#00eeff80] transition-all active:translate-y-0 relative overflow-hidden group"
            >
              <span className="relative z-10">ENTER SYSTEM</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-10" />
            </Link>
            <button className="border-4 border-[#8b0000] bg-transparent text-[#d0d0d0] px-12 py-6 font-black uppercase tracking-widest text-xl hover:bg-[#8b0000] hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(139,0,0,0.3)]">
              ARCHIVES
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 text-[10px] font-bold uppercase tracking-[0.5em] text-[#666666] hidden lg:flex flex-col gap-2">
          <div className="flex items-center gap-2"><div className="w-2 h-2 bg-[#00ff00] rounded-full animate-pulse" /> BROADCAST STABLE</div>
          <div className="flex items-center gap-2"><div className="w-2 h-2 bg-[#8b0000] rounded-full" /> SURVEILLANCE ACTIVE</div>
        </div>
      </header>

      {/* Corporate Section */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
             <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-[#2a2a2a]" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8b0000]">MANDATORY INFORMATION</span>
                <div className="h-px flex-1 bg-[#2a2a2a]" />
             </div>
            <h2 className="text-6xl font-black uppercase tracking-tighter leading-none italic">
              Absolute <br /> <span className="text-[#00eeff] not-italic">Connection</span>
            </h2>
            <p className="text-xl text-[#bbbbbb] leading-relaxed border-l-4 border-[#00eeff] pl-8">
              &ldquo;We provide the signals. We provide the vision. In the new order of V-Command,
              there is no distance between the broadcast and the brain. Total media integration
              is not a choice—it is the evolution.&rdquo;
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="border-2 border-[#1a1a1a] p-6 bg-[#0c0c0c] hover:border-[#00eeff] transition-colors">
                <Shield size={32} className="text-[#8b0000] mb-4" />
                <h4 className="font-bold uppercase text-sm mb-1 tracking-wider">Internal Security</h4>
                <p className="text-[10px] text-[#666666] uppercase">Zero-Leak Media Protocol</p>
              </div>
              <div className="border-2 border-[#1a1a1a] p-6 bg-[#0c0c0c] hover:border-[#00eeff] transition-colors">
                <Zap size={32} className="text-[#00eeff] mb-4" />
                <h4 className="font-bold uppercase text-sm mb-1 tracking-wider">Electric Power</h4>
                <p className="text-[10px] text-[#666666] uppercase">24/7 Grid Dominance</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video border-[12px] border-[#1a1a1a] bg-black shadow-[30px_30px_0px_0px_#121212]">
             <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale contrast-150" />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[#00eeff] animate-pulse">
                   <Monitor size={160} strokeWidth={1} />
                </div>
             </div>
             <div className="absolute top-0 left-0 w-full p-2 bg-[#8b0000] text-white text-[10px] font-bold uppercase text-center tracking-[1em]">
               V-SYSTEM_FEEDS
             </div>
          </div>
        </div>
      </section>

      {/* Featured Broadcasts */}
      <section className="bg-[#0c0c0c] py-32 border-y-8 border-[#1a1a1a]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="border-l-8 border-[#8b0000] pl-6">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-2 italic">Active Channels</h2>
              <p className="text-[#666666] uppercase tracking-[0.3em] text-sm">Official propaganda streams</p>
            </div>
          </div>

          {books.length === 0 ? (
            <div className="py-24 text-center border-4 border-dashed border-[#1a1a1a] text-[#2a2a2a] italic font-black uppercase tracking-[0.5em]">
               Awaiting First Broadcast...
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {books.map((book, i) => (
                <Link key={book.id} href={`/books/${book.id}`} className="group cursor-pointer">
                  <div className="aspect-[16/10] bg-[#121212] border-4 border-[#1a1a1a] mb-6 overflow-hidden relative transition-all group-hover:border-[#00eeff] group-hover:scale-[1.02]">
                     {book.coverImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover grayscale contrast-125" />
                     ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-10">
                           <Monitor size={80} />
                        </div>
                     )}
                     <div className="absolute bottom-6 left-6 right-6">
                        <div className="text-[10px] font-bold text-[#888888] uppercase mb-2 group-hover:text-[#00eeff] transition-colors">Broadcast</div>
                        <h3 className="text-3xl font-black uppercase leading-none group-hover:italic transition-all">{book.title}</h3>
                     </div>
                  </div>
                  <div className="flex justify-between items-center px-1">
                     <span className="text-xs font-bold uppercase text-[#666666]">PRODUCER: {book.author}</span>
                     <span className="text-[10px] text-[#8b0000] font-black">CH.{i+10}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-8 border-[#8b0000] py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
          <div className="text-center md:text-left">
            <div className="text-4xl font-black uppercase tracking-tighter mb-4 italic">
              VOX<span className="text-[#8b0000]">TEK</span>
            </div>
            <p className="text-[10px] text-[#2a2a2a] uppercase tracking-widest font-bold max-w-xs">
              Property of V-Command Corp. Unauthorised viewing is a punishable offense.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
