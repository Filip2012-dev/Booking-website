"use client";

import { useState } from "react";
import { Plus, Book as BookIcon, Trash2, Edit3, Image as ImageIcon } from "lucide-react";
import { Book } from "@/lib/constants";

export default function BooksManager() {
  const [books, setBooks] = useState<Book[]>([
    {
      id: "1",
      title: "The God of Overus",
      description: "Sergey Taboritsky's rise to power and the assassination of Loji.",
      coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400",
      author: "Sergey Taboritsky",
      createdAt: "2024-05-20",
    },
    {
      id: "2",
      title: "Archangelic Fallout",
      description: "Technology from other universes leaking into Overus.",
      coverImage: "https://images.unsplash.com/photo-1533972751724-9135a8410a4c?auto=format&fit=crop&q=80&w=400",
      author: "Philip IV",
      createdAt: "2024-05-22",
    }
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newBook, setNewBook] = useState({ title: "", description: "", coverImage: "" });

  const handleAddBook = (e: React.FormEvent) => {
    e.preventDefault();
    const book: Book = {
      ...newBook,
      id: Math.random().toString(36).substr(2, 9),
      author: "Admin",
      createdAt: new Date().toISOString().split('T')[0],
    };
    setBooks([...books, book]);
    setNewBook({ title: "", description: "", coverImage: "" });
    setIsAdding(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div className="border-l-4 border-[#00f2ff] pl-4">
          <h1 className="text-4xl font-black uppercase tracking-tighter">Book Archives</h1>
          <p className="text-[#888888] mt-2 uppercase text-xs tracking-[0.3em]">Cataloging the stories of Earth Overus</p>
        </div>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="bg-[#00f2ff] text-black px-6 py-3 font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#00d8e6] transition-colors"
        >
          <Plus size={20} />
          {isAdding ? "Cancel" : "New Record"}
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleAddBook} className="bg-[#1a1a1a] border-4 border-[#00f2ff] p-8 space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
          <h2 className="text-xl font-bold uppercase mb-4">Initialize New Book Protocol</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase font-bold text-[#888888] mb-2">Book Title</label>
                <input
                  required
                  value={newBook.title}
                  onChange={e => setNewBook({...newBook, title: e.target.value})}
                  className="w-full bg-[#2a2a2a] border-2 border-[#3f3f3f] p-3 focus:border-[#00f2ff] outline-none"
                  placeholder="e.g. Chronicles of Cinan"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold text-[#888888] mb-2">Cover Image URL</label>
                <div className="relative">
                  <ImageIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" />
                  <input
                    value={newBook.coverImage}
                    onChange={e => setNewBook({...newBook, coverImage: e.target.value})}
                    className="w-full bg-[#2a2a2a] border-2 border-[#3f3f3f] p-3 pl-10 focus:border-[#00f2ff] outline-none"
                    placeholder="https://..."
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-[10px] uppercase font-bold text-[#888888] mb-2">Lore Description</label>
              <textarea
                required
                value={newBook.description}
                onChange={e => setNewBook({...newBook, description: e.target.value})}
                className="w-full h-full min-h-[120px] bg-[#2a2a2a] border-2 border-[#3f3f3f] p-3 focus:border-[#00f2ff] outline-none resize-none"
                placeholder="Describe the historical significance..."
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-[#00f2ff] text-black font-black py-4 uppercase tracking-[0.2em]">
            Archive to Core
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 gap-6">
        {books.map(book => (
          <div key={book.id} className="bg-[#1a1a1a] border-2 border-[#3f3f3f] flex flex-col md:flex-row group hover:border-[#00f2ff] transition-colors">
            <div className="w-full md:w-48 h-64 md:h-auto relative overflow-hidden bg-[#2a2a2a]">
              {book.coverImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#3f3f3f]">
                  <BookIcon size={48} />
                </div>
              )}
            </div>
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-1">{book.title}</h3>
                  <div className="flex gap-4 text-[10px] font-bold uppercase text-[#888888]">
                    <span>Author: {book.author}</span>
                    <span>Created: {book.createdAt}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 border border-[#3f3f3f] hover:bg-[#3f3f3f] transition-colors"><Edit3 size={16} /></button>
                  <button className="p-2 border border-[#3f3f3f] hover:bg-[#990000] hover:border-[#990000] transition-colors"><Trash2 size={16} /></button>
                </div>
              </div>
              <p className="mt-4 text-sm text-[#bbbbbb] leading-relaxed line-clamp-3">
                {book.description}
              </p>
              <div className="mt-auto pt-6 flex gap-4">
                <button className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 bg-[#2a2a2a] border border-[#3f3f3f] hover:border-[#00f2ff] transition-colors">
                  Manage Chapters
                </button>
                <button className="text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-2 border border-transparent text-[#00f2ff] hover:underline">
                  View Public Page
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
