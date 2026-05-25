"use client";

import { useState } from "react";
import { Send, Heart, MessageSquare, Share2, User } from "lucide-react";
import { SocialPost } from "@/lib/constants";

export default function PostsManager() {
  const [posts, setPosts] = useState<SocialPost[]>([
    {
      id: "1",
      author: "Sergey Taboritsky",
      content: "The infinitely large Earth of Overus is now under my absolute control. The Archangelic Regime will bring order to the chaos. WW3 was just the beginning.",
      timestamp: "2 hours ago",
      likes: 1242,
    },
    {
      id: "2",
      author: "Philip IV",
      content: "Loji didn't have to die. Sergey, you've lost your way. The Cinan crystals belong to the people, not your brutalist throne.",
      timestamp: "5 hours ago",
      likes: 850,
    }
  ]);

  const [newPost, setNewPost] = useState("");

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post: SocialPost = {
      id: Math.random().toString(36).substr(2, 9),
      author: "Admin_Regime",
      content: newPost,
      timestamp: "Just now",
      likes: 0,
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  return (
    <div className="space-y-8">
      <div className="border-l-4 border-[#ff00ff] pl-4">
        <h1 className="text-4xl font-black uppercase tracking-tighter">Social Broadcasts</h1>
        <p className="text-[#888888] mt-2 uppercase text-xs tracking-[0.3em]">Propaganda and Resistance transmissions</p>
      </div>

      <form onSubmit={handlePost} className="bg-[#1a1a1a] border-4 border-[#3f3f3f] p-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-[#3f3f3f] flex items-center justify-center border-2 border-black">
            <User size={24} />
          </div>
          <div className="flex-1 space-y-4">
            <textarea
              value={newPost}
              onChange={e => setNewPost(e.target.value)}
              className="w-full bg-[#2a2a2a] border-2 border-[#3f3f3f] p-4 focus:border-[#ff00ff] outline-none resize-none min-h-[100px]"
              placeholder="Broadcast to the masses of Overus..."
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-4 text-[#888888]">
                <span className="text-[10px] font-bold uppercase tracking-widest">Network: OVER_NET_01</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#00ff00]">Signal: STRONG</span>
              </div>
              <button
                type="submit"
                className="bg-[#ff00ff] text-white px-6 py-2 font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#d800d8] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <Send size={16} /> Broadcast
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="bg-[#1a1a1a] border-2 border-[#3f3f3f] p-6 hover:border-[#ff00ff] transition-colors relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 text-[8px] text-[#3f3f3f] font-bold uppercase">
               POST_ID_{post.id}
             </div>
             <div className="flex gap-4">
               <div className="w-10 h-10 bg-[#2a2a2a] border border-[#3f3f3f] flex items-center justify-center">
                 <User size={20} className={post.author.includes("Sergey") ? "text-[#ffd700]" : "text-[#00f2ff]"} />
               </div>
               <div className="flex-1">
                 <div className="flex items-center gap-2 mb-1">
                   <span className="font-black uppercase tracking-tight text-sm">{post.author}</span>
                   <span className="text-[10px] text-[#888888]">{post.timestamp}</span>
                 </div>
                 <p className="text-[#e0e0e0] leading-relaxed mb-4">
                   {post.content}
                 </p>
                 <div className="flex gap-6">
                   <button className="flex items-center gap-2 text-xs font-bold text-[#888888] hover:text-[#ff00ff] transition-colors">
                     <Heart size={14} /> {post.likes}
                   </button>
                   <button className="flex items-center gap-2 text-xs font-bold text-[#888888] hover:text-[#00f2ff] transition-colors">
                     <MessageSquare size={14} /> Reply
                   </button>
                   <button className="flex items-center gap-2 text-xs font-bold text-[#888888] hover:text-[#ffd700] transition-colors ml-auto">
                     <Share2 size={14} /> Re-Broadcast
                   </button>
                 </div>
               </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
