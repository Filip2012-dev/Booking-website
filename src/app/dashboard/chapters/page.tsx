"use client";

import { useState } from "react";
import { Plus, Save, Trash2, ArrowLeft } from "lucide-react";
import { Chapter } from "@/lib/constants";

export default function ChaptersManager() {
  const [chapters, setChapters] = useState<Chapter[]>([
    {
      id: "1",
      bookId: "1",
      title: "The Ascension of Sergey",
      content: "The world was infinitely large, but Sergey's ambition was larger...",
      order: 1,
      createdAt: "2024-05-20",
    },
    {
      id: "2",
      bookId: "1",
      title: "Loji's Final Performance",
      content: "The stage was set, the crystals were glowing...",
      order: 2,
      createdAt: "2024-05-21",
    }
  ]);

  const [editingChapter, setEditingChapter] = useState<Chapter | null>(null);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingChapter) {
      if (editingChapter.id === "new") {
        const newChapter = { ...editingChapter, id: Math.random().toString(36).substr(2, 9), createdAt: new Date().toISOString().split('T')[0] };
        setChapters([...chapters, newChapter]);
      } else {
        setChapters(chapters.map(c => c.id === editingChapter.id ? editingChapter : c));
      }
      setEditingChapter(null);
    }
  };

  return (
    <div className="space-y-8">
      {!editingChapter ? (
        <>
          <div className="flex justify-between items-end">
            <div className="border-l-4 border-[#ffd700] pl-4">
              <h1 className="text-4xl font-black uppercase tracking-tighter">Chapter Logs</h1>
              <p className="text-[#888888] mt-2 uppercase text-xs tracking-[0.3em]">Recording the sequential events of Overus</p>
            </div>
            <button
              onClick={() => setEditingChapter({ id: "new", bookId: "1", title: "", content: "", order: chapters.length + 1, createdAt: "" })}
              className="bg-[#ffd700] text-black px-6 py-3 font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#e6c200] transition-colors"
            >
              <Plus size={20} />
              Draft New Chapter
            </button>
          </div>

          <div className="bg-[#1a1a1a] border-2 border-[#3f3f3f]">
            <div className="p-4 border-b-2 border-[#3f3f3f] bg-[#2a2a2a] flex justify-between items-center">
              <span className="text-[10px] font-black uppercase tracking-widest">Active Book: The God of Overus</span>
              <span className="text-[10px] font-bold text-[#888888]">{chapters.length} Units Found</span>
            </div>
            <div className="divide-y-2 divide-[#3f3f3f]">
              {chapters.sort((a, b) => a.order - b.order).map(chapter => (
                <div key={chapter.id} className="p-4 flex items-center justify-between group hover:bg-[#252525] transition-colors">
                  <div className="flex items-center gap-6">
                    <span className="text-2xl font-black text-[#3f3f3f] group-hover:text-[#ffd700] tabular-nums transition-colors">
                      {chapter.order.toString().padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-bold uppercase tracking-wide group-hover:text-[#00f2ff] transition-colors">{chapter.title}</h3>
                      <p className="text-[10px] text-[#888888] uppercase mt-1">Status: Archived | {chapter.createdAt}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setEditingChapter(chapter)}
                      className="text-[10px] font-bold uppercase tracking-widest border border-[#3f3f3f] px-3 py-1 hover:bg-[#3f3f3f]"
                    >
                      Transcribe
                    </button>
                    <button className="text-[#888888] hover:text-[#990000] transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            onClick={() => setEditingChapter(null)}
            className="flex items-center gap-2 text-[#888888] hover:text-white mb-8 transition-colors uppercase text-[10px] font-bold tracking-widest"
          >
            <ArrowLeft size={14} /> Back to Archives
          </button>

          <form onSubmit={handleSave} className="space-y-8">
            <div className="flex justify-between items-center">
              <div className="border-l-4 border-[#00f2ff] pl-4">
                <h2 className="text-3xl font-black uppercase tracking-tighter">
                  {editingChapter.id === "new" ? "Transcribing New Entry" : `Editing Entry ${editingChapter.order}`}
                </h2>
              </div>
              <button
                type="submit"
                className="bg-[#00f2ff] text-black px-8 py-4 font-black uppercase tracking-widest flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all"
              >
                <Save size={20} /> Commit to Memory
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-4 gap-6">
                <div className="col-span-3">
                  <label className="block text-[10px] uppercase font-bold text-[#888888] mb-2">Chapter Designation</label>
                  <input
                    required
                    value={editingChapter.title}
                    onChange={e => setEditingChapter({...editingChapter, title: e.target.value})}
                    className="w-full bg-[#1a1a1a] border-4 border-[#3f3f3f] p-4 text-xl font-bold focus:border-[#00f2ff] outline-none"
                    placeholder="ENTER CHAPTER TITLE..."
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-[#888888] mb-2">Sequence</label>
                  <input
                    type="number"
                    value={editingChapter.order}
                    onChange={e => setEditingChapter({...editingChapter, order: parseInt(e.target.value)})}
                    className="w-full bg-[#1a1a1a] border-4 border-[#3f3f3f] p-4 text-xl font-bold focus:border-[#00f2ff] outline-none tabular-nums"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-[#888888] mb-2">Textual Data</label>
                <textarea
                  required
                  value={editingChapter.content}
                  onChange={e => setEditingChapter({...editingChapter, content: e.target.value})}
                  className="w-full min-h-[500px] bg-[#1a1a1a] border-4 border-[#3f3f3f] p-8 font-serif text-lg leading-relaxed focus:border-[#ffd700] outline-none resize-none"
                  placeholder="The ink flows as the crystals pulse..."
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
