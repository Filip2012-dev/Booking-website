"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Monitor, Eye } from "lucide-react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "vox" || username === "admin") {
      router.push("/dashboard");
    } else {
      setError("ACCESS DENIED. SURVEILLANCE LOGGED.");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#d0d0d0] flex items-center justify-center p-4 font-mono">
      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] [background-size:100%_2px]" />

      <div className="max-w-md w-full border-4 border-[#1a1a1a] bg-[#121212] p-10 shadow-[20px_20px_0px_0px_#8b0000] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-[#8b0000]" />

        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 bg-black flex items-center justify-center mb-6 border-4 border-[#00eeff] shadow-[0_0_15px_#00eeff40]">
            <Monitor size={40} className="text-[#00eeff]" />
          </div>
          <h1 className="text-4xl font-black tracking-tighter uppercase text-center italic">
            V-COMMAND <br />
            <span className="text-[#8b0000] text-lg not-italic tracking-[0.3em]">SECURE UPLINK</span>
          </h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-8">
          <div>
            <label className="block text-[10px] uppercase font-bold mb-3 text-[#666666] tracking-[0.2em]">
              Personnel ID
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]" size={18} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-black border-2 border-[#1a1a1a] p-4 pl-12 focus:outline-none focus:border-[#00eeff] transition-all text-sm"
                placeholder="ID_NUM"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase font-bold mb-3 text-[#666666] tracking-[0.2em]">
              Authorization Key
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#666666]" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border-2 border-[#1a1a1a] p-4 pl-12 focus:outline-none focus:border-[#00eeff] transition-all text-sm"
                placeholder="********"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-[#8b0000] text-white p-4 text-[10px] font-bold border border-white/20 flex items-center gap-3">
              <Eye size={16} /> {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#8b0000] hover:bg-[#a00000] text-white font-black py-5 px-6 uppercase tracking-[0.3em] transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(139,0,0,0.2)]"
          >
            INITIATE SYNC
          </button>
        </form>

        <div className="mt-10 pt-6 border-t border-[#1a1a1a] text-[9px] text-[#2a2a2a] text-center uppercase tracking-[0.4em] font-black">
          TRUST THE VISION // TRUST THE VOICE
        </div>
      </div>
    </div>
  );
}
