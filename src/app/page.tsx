import Link from "next/link";
import { ShieldAlert, Book as BookIcon, Zap, Globe, Share2, Gem } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] font-mono selection:bg-[#00f2ff] selection:text-black">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden border-b-8 border-[#3f3f3f]">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(#3f3f3f_1px,transparent_1px)] [background-size:20px_20px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f2ff]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-[#ffd700] flex items-center justify-center border-4 border-black rotate-3 shadow-[8px_8px_0px_0px_rgba(255,215,0,0.3)]">
              <ShieldAlert size={60} className="text-black -rotate-3" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none">
            Colossal <span className="text-[#00f2ff]">Era</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.2em] mb-12 text-[#888888]">
            Records of Earth Overus | Sector 001
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/dashboard"
              className="bg-[#00f2ff] text-black px-10 py-5 font-black uppercase tracking-widest text-lg hover:translate-y-[-4px] hover:shadow-[0_8px_20px_rgba(0,242,255,0.4)] transition-all active:translate-y-0"
            >
              Access Terminal
            </Link>
            <button className="border-4 border-[#3f3f3f] bg-transparent text-white px-10 py-5 font-black uppercase tracking-widest text-lg hover:bg-[#1a1a1a] transition-all">
              Explore Lore
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 text-[10px] font-bold uppercase tracking-[0.5em] text-[#3f3f3f] hidden lg:block">
          System Time: {new Date().getFullYear()}.05.25 // Stable
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-block px-3 py-1 bg-[#ffd700] text-black font-bold uppercase text-xs tracking-widest">
              Historical Context
            </div>
            <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">
              An Infinitely Large Earth
            </h2>
            <p className="text-lg text-[#bbbbbb] leading-relaxed font-serif italic">
              &ldquo;The Earth of Overus is a vessel of infinite expansion. Every nation, every faction,
              drawn from across the multiverse to fight in a war that never ends. Technology
              stalled in 1999, yet powered by the dying cores of a thousand Earths.&rdquo;
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-[#3f3f3f] p-4 bg-[#1a1a1a]">
                <Zap size={24} className="text-[#ffd700] mb-2" />
                <h4 className="font-bold uppercase text-xs mb-1">Energy Source</h4>
                <p className="text-[10px] text-[#888888] uppercase">Planetary Core Extraction</p>
              </div>
              <div className="border-2 border-[#3f3f3f] p-4 bg-[#1a1a1a]">
                <Gem size={24} className="text-[#00f2ff] mb-2" />
                <h4 className="font-bold uppercase text-xs mb-1">Immortality</h4>
                <p className="text-[10px] text-[#888888] uppercase">Cinan Crystal Synthesis</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square border-8 border-[#3f3f3f] bg-[#1a1a1a] flex items-center justify-center p-12 group">
             <div className="absolute inset-0 opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center" />
             <div className="relative z-10 w-full h-full border-2 border-dashed border-[#ffd700]/50 flex items-center justify-center">
                <Globe size={120} className="text-[#ffd700] animate-[pulse_4s_infinite]" />
             </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="bg-[#1a1a1a] py-32 border-y-8 border-[#3f3f3f]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="border-l-8 border-[#00f2ff] pl-6">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-2">Active Serials</h2>
              <p className="text-[#888888] uppercase tracking-[0.3em] text-sm">Transmissions from the front lines</p>
            </div>
            <button className="text-[10px] font-black uppercase tracking-widest text-[#00f2ff] hover:underline flex items-center gap-2">
              View All Archives <Zap size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "The God of Overus", author: "Sergey Taboritsky", tag: "Main Story" },
              { title: "The Loji Incident", author: "Philip IV", tag: "Historical" },
              { title: "Cinan Dreams", author: "Unknown", tag: "Propaganda" },
            ].map((book, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[2/3] bg-[#0a0a0a] border-4 border-[#3f3f3f] mb-4 overflow-hidden relative transition-transform group-hover:translate-y-[-8px]">
                   <div className="absolute inset-0 bg-[#00f2ff]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-[10px] font-bold text-[#00f2ff] uppercase mb-1">{book.tag}</div>
                      <h3 className="text-2xl font-black uppercase leading-none">{book.title}</h3>
                   </div>
                   <div className="absolute top-4 right-4 text-[#3f3f3f] group-hover:text-[#00f2ff] transition-colors">
                      <BookIcon size={32} />
                   </div>
                </div>
                <div className="flex justify-between items-center px-1">
                   <span className="text-xs font-bold uppercase text-[#888888]">{book.author}</span>
                   <span className="text-[10px] text-[#3f3f3f]">VOL. {i+1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Feed Preview */}
      <section className="py-32 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Share2 size={48} className="text-[#ff00ff] mx-auto mb-6" />
          <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Live Transmissions</h2>
          <div className="w-24 h-1 bg-[#ff00ff] mx-auto" />
        </div>

        <div className="space-y-4">
          {[
            { user: "Sergey_T", text: "The Archangelic Regime sees everything. Your loyalty is your life." },
            { user: "Resistance_01", text: "The crystals are failing. Philip was right about the cores." },
            { user: "News_Bot", text: "New artifacts found in Sector 7 resemble &apos;Fallout&apos; era tech." }
          ].map((post, i) => (
            <div key={i} className="p-6 border-2 border-[#3f3f3f] bg-[#1a1a1a] flex gap-6 items-start hover:border-[#ff00ff] transition-colors">
              <div className="text-[#ff00ff] font-bold text-xs pt-1">[@]</div>
              <div>
                <div className="font-bold uppercase text-xs mb-1">{post.user}</div>
                <p className="text-sm text-[#bbbbbb]">{post.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t-8 border-[#3f3f3f] py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <div className="text-2xl font-black uppercase tracking-tighter mb-2">
              Colossal <span className="text-[#00f2ff]">Era</span>
            </div>
            <p className="text-[10px] text-[#3f3f3f] uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Archangelic Intellectual Property
            </p>
          </div>
          <div className="flex gap-12">
            <div className="space-y-4">
               <div className="text-[10px] font-black uppercase text-[#888888]">Protocol</div>
               <ul className="text-xs space-y-2 font-bold uppercase">
                 <li className="hover:text-[#00f2ff] cursor-pointer">Security</li>
                 <li className="hover:text-[#00f2ff] cursor-pointer">Archive</li>
                 <li className="hover:text-[#00f2ff] cursor-pointer">Regime</li>
               </ul>
            </div>
            <div className="space-y-4">
               <div className="text-[10px] font-black uppercase text-[#888888]">Connect</div>
               <ul className="text-xs space-y-2 font-bold uppercase">
                 <li className="hover:text-[#ff00ff] cursor-pointer">Terminal</li>
                 <li className="hover:text-[#ff00ff] cursor-pointer">Signal</li>
                 <li className="hover:text-[#ff00ff] cursor-pointer">Broadcast</li>
               </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
