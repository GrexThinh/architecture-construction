import React from "react";
import { PhoneCall, MessageCircleMore } from "lucide-react";
import Image from "next/image";

export default function FloatingContacts() {
  return (
    <div
      className="
        fixed right-4 bottom-[calc(16px+env(safe-area-inset-bottom))]
        z-[1000] flex flex-col items-end gap-3 print:hidden
      "
    >
      <a
        href="tel:+84587030273"
        className="
    group w-12 h-12 rounded-full bg-red-500 shadow-lg
    flex items-center justify-center
    hover:scale-110 active:scale-95 transition
    ring-2 ring-red-400/40
    animate-shake
  "
      >
        <PhoneCall className="w-6 h-6 text-white" />
      </a>

      <a
        href="https://zalo.me/0587030273"
        className="
    group w-11 h-11 rounded-full shadow-lg
    flex items-center justify-center hover:scale-110 active:scale-95 transition
    animate-pulseRing
    "
      >
        <img src="/images/zalo.png" alt="Zalo" />
      </a>

      <a
        href="https://m.me/thinhgrex"
        className="
    group w-12 h-12 rounded-full shadow-lg
    flex items-center justify-center hover:scale-110 active:scale-95 transition
    ring-2 ring-[#0084FF]/30
    animate-shake
  "
        style={{ backgroundColor: "#0084FF" }}
      >
        <MessageCircleMore className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
