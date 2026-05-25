"use client";

import { useEffect, useState } from "react";
import { Plus, Save, Trash2, ArrowLeft, Radio, Eye } from "lucide-react";
import { Chapter, Book } from "@/lib/constants";
import { dataStore } from "@/lib/store";

export default function SegmentsManager() {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBookId, setSelectedBookId] = useState<string>("");
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [editingChapter, setEditingChapter] = useState<Chapter | null>(null);

  useEffect(() => {
    const allBooks = dataStore.getBooks();
    setBooks(allBooks);
    if (allBooks.length > 0 && !selectedBookId) {
      setSelectedBookId(allBooks[0].id);
    }
  }, [selectedBookId]);

  useEffect(() => {
    if (selectedBookId) {
      setChapters(dataStore.getChapters(selectedBookId));
    }
  }, [selectedBookId]);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingChapter && selectedBookId) {
      if (editingChapter.id === "new") {
        const newChapter = {
          ...editingChapter,
          id: Math.random().toString(36).substr(2, 9),
          bookId: selectedBookId,
          createdAt: new Date().toISOString().split('T')[0]
        };
        dataStore.addChapter(newChapter);
      } else {
        // Mock update
      }
      setChapters(dataStore.getChapters(selectedBookId));
      setEditingChapter(null);
    }
  };

  return (
    <div className="space-y-12">
      {!editingChapter ? (
        <>
          <div className="flex justify-between items-end border-b-4 border-[#1a1a1a] pb-8">
            <div className="border-l-8 border-[#8b0000] pl-6">
              <h1 className="text-5xl font-black uppercase tracking-tighter italic">BROADCAST <span className="text-[#00eeff] not-italic">SEGMENTS</span></h1>
              <p className="text-[#666666] mt-2 uppercase text-xs font-black tracking-[0.5em]">Transcribing Sequential Data Streams</p>
            </div>

            {selectedBookId && (
              <button
                onClick={() => setEditingChapter({ id: "new", bookId: selectedBookId, title: "", content: "", order: chapters.length + 1, createdAt: "" })}
                className="bg-[#8b0000] text-white px-8 py-4 font-black uppercase tracking-widest flex items-center gap-3 hover:bg-[#a00000] transition-all shadow-[6px_6px_0px_0px_#121212]"
              >
                <Plus size={24} />
                NEW SEGMENT
              </button>
            )}
          </div>

          <div className="bg-[#0c0c0c] border-4 border-[#1a1a1a]">
            <div className="p-6 border-b-4 border-[#1a1a1a] bg-black flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#00eeff]">SELECT CHANNEL:</span>
                <select
                  value={selectedBookId}
                  onChange={(e) => setSelectedBookId(e.target.value)}
                  className="bg-black border-2 border-[#1a1a1a] text-[#00eeff] text-xs font-black p-2 uppercase outline-none focus:border-[#00eeff]"
                >
                  {books.map(book => (
                    <option key={book.id} value={book.id}>{book.title}</option>
                  ))}
                  {books.length === 0 && <option value="">NO CHANNELS FOUND</option>}
                </select>
              </div>
              <span className="text-[10px] font-black text-[#666666] uppercase">{chapters.length} SEGMENTS DETECTED</span>
            </div>
            <div className="divide-y-4 divide-[#1a1a1a]">
              {chapters.length === 0 ? (
                <div className="p-20 text-center text-[#2a2a2a]">
                   <Radio size={48} className="mx-auto mb-4" />
                   <p className="font-black uppercase tracking-widest">AWAITING INPUT...</p>
                </div>
              ) : (
                chapters.sort((a, b) => a.order - b.order).map(chapter => (
                  <div key={chapter.id} className="p-6 flex items-center justify-between group hover:bg-black transition-all">
                    <div className="flex items-center gap-10">
                      <span className="text-4xl font-black text-[#1a1a1a] group-hover:text-[#8b0000] italic transition-colors">
                        #{chapter.order.toString().padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-xl font-black uppercase tracking-wide group-hover:text-[#00eeff] transition-all">{chapter.title}</h3>
                        <p className="text-[10px] text-[#444444] font-black uppercase mt-1 tracking-widest">STATUS: ENCRYPTED | {chapter.createdAt}</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => setEditingChapter(chapter)}
                        className="text-[10px] font-black uppercase tracking-[0.3em] border-2 border-[#1a1a1a] px-6 py-2 hover:bg-[#00eeff] hover:text-black hover:border-black transition-all"
                      >
                        EDIT_STREAM
                      </button>
                      <button className="text-[#2a2a2a] hover:text-[#8b0000] transition-colors">
                        <Trash2 size={24} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="animate-in slide-in-from-right-10 duration-300">
          <button
            onClick={() => setEditingChapter(null)}
            className="flex items-center gap-3 text-[#666666] hover:text-[#00eeff] mb-10 transition-colors uppercase text-[10px] font-black tracking-[0.4em]"
          >
            <ArrowLeft size={16} /> RETURN TO LOGS
          </button>

          <form onSubmit={handleSave} className="space-y-10">
            <div className="flex justify-between items-center border-b-4 border-[#1a1a1a] pb-8">
              <div className="border-l-8 border-[#00eeff] pl-6">
                <h2 className="text-4xl font-black uppercase tracking-tighter italic">
                  {editingChapter.id === "new" ? "NEW_SEGMENT" : `SEGMENT_${editingChapter.order}`}
                </h2>
              </div>
              <button
                type="submit"
                className="bg-[#00eeff] text-black px-10 py-5 font-black uppercase tracking-widest flex items-center gap-3 hover:shadow-[0_0_30px_#00eeff60] transition-all"
              >
                <Save size={24} /> PUSH TO BROADCAST
              </button>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-4 gap-8">
                <div className="col-span-3">
                  <label className="block text-[10px] uppercase font-black text-[#666666] mb-3 tracking-widest">SEGMENT IDENTIFIER</label>
                  <input
                    required
                    value={editingChapter.title}
                    onChange={e => setEditingChapter({...editingChapter, title: e.target.value})}
                    className="w-full bg-black border-4 border-[#1a1a1a] p-5 text-2xl font-black focus:border-[#00eeff] outline-none uppercase italic"
                    placeholder="ENTER TITLE..."
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-black text-[#666666] mb-3 tracking-widest">SEQUENCE</label>
                  <input
                    type="number"
                    value={editingChapter.order}
                    onChange={e => setEditingChapter({...editingChapter, order: parseInt(e.target.value)})}
                    className="w-full bg-black border-4 border-[#1a1a1a] p-5 text-2xl font-black focus:border-[#00eeff] outline-none text-center italic"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-4 right-6 text-[8px] font-black text-[#8b0000] uppercase tracking-[0.5em] flex items-center gap-2">
                   <Eye size={10} /> MONITORING_ACTIVE
                </div>
                <label className="block text-[10px] uppercase font-black text-[#666666] mb-3 tracking-widest">RAW TEXTUAL DATA</label>
                <textarea
                  required
                  value={editingChapter.content}
                  onChange={e => setEditingChapter({...editingChapter, content: e.target.value})}
                  className="w-full min-h-[600px] bg-black border-4 border-[#1a1a1a] p-10 font-mono text-lg leading-relaxed focus:border-[#8b0000] outline-none resize-none text-[#d0d0d0] uppercase"
                  placeholder="BEGIN TRANSCRIPTION..."
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
