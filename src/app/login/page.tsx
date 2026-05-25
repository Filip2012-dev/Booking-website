"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, ShieldAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock auth
    if (username === "sergey" || username === "philip" || username === "admin") {
      router.push("/dashboard");
    } else {
      setError("Unauthorized by the Archangelic Regime.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] flex items-center justify-center p-4 font-mono">
      <div className="max-w-md w-full border-4 border-[#3f3f3f] bg-[#1a1a1a] p-8 shadow-[10px_10px_0px_0px_rgba(63,63,63,1)]">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-[#ffd700] flex items-center justify-center mb-4 border-2 border-black">
            <ShieldAlert size={40} className="text-black" />
          </div>
          <h1 className="text-3xl font-bold tracking-tighter uppercase text-center">
            Colossal Era <br />
            <span className="text-[#00f2ff] text-xl">Terminal Access</span>
          </h1>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase font-bold mb-2 text-[#888888]">
              Identifier
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" size={18} />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#2a2a2a] border-2 border-[#3f3f3f] p-3 pl-10 focus:outline-none focus:border-[#00f2ff] transition-colors"
                placeholder="USER_ID"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase font-bold mb-2 text-[#888888]">
              Access Key
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#888888]" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#2a2a2a] border-2 border-[#3f3f3f] p-3 pl-10 focus:outline-none focus:border-[#00f2ff] transition-colors"
                placeholder="********"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-[#990000] text-white p-3 text-xs border border-white/20">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#00f2ff] hover:bg-[#00d8e6] text-black font-bold py-4 px-6 uppercase tracking-widest transition-transform active:translate-y-1 active:shadow-none shadow-[4px_4px_0px_0px_rgba(0,136,145,1)]"
          >
            Initiate Link
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-[#3f3f3f] text-[10px] text-[#888888] text-center uppercase tracking-widest">
          Archangelic Regime Property - Overus Sector 7
        </div>
      </div>
    </div>
  );
}
