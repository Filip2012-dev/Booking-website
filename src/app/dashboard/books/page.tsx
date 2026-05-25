"use client";

import { useState } from "react";
import { Plus, Monitor, Trash2, Edit3, Image as ImageIcon, Eye } from "lucide-react";
import { Book } from "@/lib/constants";
import { dataStore } from "@/lib/store";

export default function BroadcastsManager() {
  const [books, setBooks] = useState<Book[]>(dataStore.getBooks());
  const [isAdding, setIsAdding] = useState(false);
  const [newBook, setNewBook] = useState({ title: "", description: "", coverImage: "" });

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    const book: Book = {
      ...newBook,
      id: Math.random().toString(36).substr(2, 9),
      author: "V-PRODUCER",
      createdAt: new Date().toISOString().split('T')[0],
    };
    dataStore.addBook(book);
    setBooks([...dataStore.getBooks()]);
    setNewBook({ title: "", description: "", coverImage: "" });
    setIsAdding(false);
  };

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-end border-b-4 border-[#1a1a1a] pb-8">
        <div className="border-l-8 border-[#00eeff] pl-6">
          <h1 className="text-5xl font-black uppercase tracking-tighter italic">BROADCAST <span className="text-[#8b0000] not-italic">CHANNELS</span></h1>
          <p className="text-[#666666] mt-2 uppercase text-xs font-black tracking-[0.5em]">Establishing New Media Streams</p>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="bg-[#00eeff] text-black px-8 py-4 font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-all shadow-[6px_6px_0px_0px_#8b0000] active:scale-95"
        >
          <Plus size={24} />
          {isAdding ? "CANCEL" : "NEW UPLINK"}
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleAddBook} className="bg-[#0c0c0c] border-4 border-[#00eeff] p-10 space-y-8 animate-in zoom-in-95 duration-300">
          <h2 className="text-2xl font-black uppercase italic text-[#00eeff]">INITIALISING STREAM PROTOCOL</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase font-black text-[#666666] mb-3 tracking-widest">CHANNEL TITLE</label>
                <input
                  required
                  value={newBook.title}
                  onChange={e => setNewBook({...newBook, title: e.target.value})}
                  className="w-full bg-black border-2 border-[#1a1a1a] p-4 focus:border-[#00eeff] outline-none font-bold text-white uppercase"
                  placeholder="ID_TITLE..."
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-black text-[#666666] mb-3 tracking-widest">FEED VISUAL URL</label>
                <div className="relative">
                  <ImageIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]" />
                  <input
                    value={newBook.coverImage}
                    onChange={e => setNewBook({...newBook, coverImage: e.target.value})}
                    className="w-full bg-black border-2 border-[#1a1a1a] p-4 pl-12 focus:border-[#00eeff] outline-none font-bold text-white"
                    placeholder="HTTPS://IMAGE_LINK"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase font-black text-[#666666] mb-3 tracking-widest">MANDATORY DESCRIPTION</label>
              <textarea
                required
                value={newBook.description}
                onChange={e => setNewBook({...newBook, description: e.target.value})}
                className="w-full h-full min-h-[160px] bg-black border-2 border-[#1a1a1a] p-4 focus:border-[#00eeff] outline-none resize-none font-bold text-white uppercase"
                placeholder="DESCRIBE THE BROADCAST OBJECTIVE..."
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-[#8b0000] text-white font-black py-5 uppercase tracking-[0.4em] shadow-[0_0_20px_rgba(139,0,0,0.3)] hover:bg-[#a00000] transition-all">
            CONFIRM UPLINK
          </button>
        </form>
      )}

      {books.length === 0 ? (
        <div className="py-24 border-4 border-dashed border-[#1a1a1a] flex flex-col items-center justify-center text-[#2a2a2a]">
           <Monitor size={80} strokeWidth={1} />
           <p className="mt-6 font-black uppercase tracking-[0.5em]">NO CHANNELS DETECTED</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8">
          {books.map(book => (
            <div key={book.id} className="bg-[#0c0c0c] border-4 border-[#1a1a1a] flex flex-col md:flex-row group hover:border-[#00eeff] transition-all shadow-[10px_10px_0px_0px_#121212]">
              <div className="w-full md:w-64 h-80 md:h-auto relative overflow-hidden bg-black border-r-4 border-[#1a1a1a]">
                {book.coverImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#1a1a1a]">
                    <Monitor size={64} />
                  </div>
                )}
                <div className="absolute top-4 left-4 bg-black/80 px-2 py-1 text-[8px] font-black uppercase text-[#00eeff] border border-[#00eeff]">LIVE_FEED</div>
              </div>
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-4xl font-black uppercase tracking-tight mb-2 italic group-hover:text-[#00eeff] transition-colors">{book.title}</h3>
                    <div className="flex gap-6 text-[10px] font-black uppercase text-[#666666] tracking-widest">
                      <span className="flex items-center gap-2"><Eye size={12} className="text-[#8b0000]" /> {book.author}</span>
                      <span>{book.createdAt}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="p-3 border-2 border-[#1a1a1a] hover:bg-[#1a1a1a] transition-colors"><Edit3 size={20} /></button>
                    <button className="p-3 border-2 border-[#1a1a1a] hover:bg-[#8b0000] hover:border-[#8b0000] transition-colors"><Trash2 size={20} /></button>
                  </div>
                </div>
                <p className="mt-8 text-sm text-[#888888] leading-relaxed line-clamp-4 font-bold uppercase">
                  {book.description}
                </p>
                <div className="mt-auto pt-10 flex gap-6">
                  <button className="text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 bg-black border-2 border-[#1a1a1a] hover:border-[#00eeff] hover:text-[#00eeff] transition-all">
                    MANAGE SEGMENTS
                  </button>
                  <button className="text-[10px] font-black uppercase tracking-[0.3em] px-6 py-3 border-2 border-transparent text-[#8b0000] hover:bg-[#8b0000] hover:text-white transition-all">
                    PUBLIC VIEW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
