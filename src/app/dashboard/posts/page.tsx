"use client";

import { useState } from "react";
import { Send, Heart, MessageSquare, Share2, User, Eye, Radio } from "lucide-react";
import { SocialPost } from "@/lib/constants";
import { dataStore } from "@/lib/store";

export default function SignalsManager() {
  const [posts, setPosts] = useState<SocialPost[]>(dataStore.getPosts());
  const [newPost, setNewPost] = useState("");

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post: SocialPost = {
      id: Math.random().toString(36).substr(2, 9),
      author: "V-COMMAND",
      content: newPost,
      timestamp: "JUST NOW",
      likes: 0,
    };

    dataStore.addPost(post);
    setPosts([...dataStore.getPosts()]);
    setNewPost("");
  };

  return (
    <div className="space-y-12">
      <div className="border-l-8 border-[#00eeff] pl-6 bg-[#0c0c0c] p-6 border-b-4 border-r-4 border-[#1a1a1a]">
        <h1 className="text-5xl font-black uppercase tracking-tighter italic">GLOBAL <span className="text-[#8b0000] not-italic">SIGNALS</span></h1>
        <p className="text-[#666666] mt-2 uppercase text-xs font-black tracking-[0.5em]">Direct Propaganda Broadcasting</p>
      </div>

      <form onSubmit={handlePost} className="bg-black border-4 border-[#1a1a1a] p-8 shadow-[15px_15px_0px_0px_#121212] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-3 bg-[#8b0000] text-white text-[8px] font-black uppercase tracking-widest">
           LIVE_UPLINK
        </div>
        <div className="flex gap-8">
          <div className="w-16 h-16 bg-[#1a1a1a] flex items-center justify-center border-4 border-[#00eeff]">
            <Radio size={32} className="text-[#00eeff]" />
          </div>
          <div className="flex-1 space-y-6">
            <textarea
              value={newPost}
              onChange={e => setNewPost(e.target.value)}
              className="w-full bg-[#050505] border-2 border-[#1a1a1a] p-6 focus:border-[#00eeff] outline-none resize-none min-h-[120px] font-bold text-white uppercase text-lg"
              placeholder="ENCODE BROADCAST MESSAGE..."
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-6 text-[#444444]">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2"><Eye size={12} /> GLOBAL_SCOPE</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#00ff00]">ENCRYPTION: MAX</span>
              </div>
              <button
                type="submit"
                className="bg-[#00eeff] text-black px-10 py-4 font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-all shadow-[6px_6px_0px_0px_#8b0000]"
              >
                <Send size={20} /> TRANSMIT
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="space-y-8">
        {posts.length === 0 ? (
           <div className="py-20 border-4 border-[#1a1a1a] bg-[#0c0c0c] text-center text-[#2a2a2a] italic font-black uppercase tracking-widest">
              AWAITING NETWORK ACTIVITY...
           </div>
        ) : (
          posts.map(post => (
            <div key={post.id} className="bg-[#0c0c0c] border-4 border-[#1a1a1a] p-8 hover:border-[#00eeff] transition-all relative group shadow-[10px_10px_0px_0px_#121212]">
               <div className="absolute top-0 right-0 p-3 text-[9px] text-[#2a2a2a] font-black uppercase tracking-widest">
                 SIGNAL_ID_{post.id}
               </div>
               <div className="flex gap-6">
                 <div className="w-14 h-14 bg-black border-2 border-[#1a1a1a] flex items-center justify-center group-hover:border-[#00eeff] transition-colors">
                   <User size={24} className="text-[#8b0000]" />
                 </div>
                 <div className="flex-1">
                   <div className="flex items-center gap-4 mb-3">
                     <span className="font-black uppercase tracking-tighter text-xl italic text-[#d0d0d0]">{post.author}</span>
                     <div className="h-3 w-px bg-[#1a1a1a]" />
                     <span className="text-[10px] text-[#666666] font-black tracking-widest">{post.timestamp}</span>
                   </div>
                   <p className="text-[#888888] font-bold uppercase leading-relaxed mb-6 text-lg group-hover:text-[#d0d0d0] transition-colors">
                     {post.content}
                   </p>
                   <div className="flex gap-10">
                     <button className="flex items-center gap-2 text-[10px] font-black text-[#444444] hover:text-[#00eeff] transition-colors uppercase tracking-widest">
                       <Heart size={16} /> {post.likes} ENDORSE
                     </button>
                     <button className="flex items-center gap-2 text-[10px] font-black text-[#444444] hover:text-[#00eeff] transition-colors uppercase tracking-widest">
                       <MessageSquare size={16} /> RESPOND
                     </button>
                     <button className="flex items-center gap-2 text-[10px] font-black text-[#444444] hover:text-[#8b0000] transition-colors ml-auto uppercase tracking-widest">
                       <Share2 size={16} /> RE-BROADCAST
                     </button>
                   </div>
                 </div>
               </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
