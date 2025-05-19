
import { useState } from "react";

interface Message {
  sender: "user" | "FinVent";
  text: string;
}

const commands: Record<string, string> = {
  "halo": "Halo juga! Ada yang bisa saya bantu?",
  "siapa kamu": "Saya adalah asisten virtual Anda.",
  "bagaimana kondisi bisnis saat ini?": "1. Penjualan Hari Ini Total transaksi: 78 Total omzet: Rp 24.350.000 Rata-rata pembelian per transaksi: Rp 312.1803. Status Operasional Ketersediaan stok: Cukup, namun ada 3 item perlu restock segera Permintaan pelanggan: Cenderung stabil dengan sedikit peningkatan sejak awal minggu Margin rata-rata: 28%",
  "produk terlaris": "Produk terlaris bulan ini adalah 'Redbull Drink' dengan 120 penjualan.",
  "total pendapatan hari ini": " Total Pendapatan hari ini : Rp 4.102.000."
};

interface Message {
  sender: "user" | "FinVent";
  text: string;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {

    if (!input.trim()) return;

  const userMessage: Message = { sender: "user", text: input };
  const responseText = commands[input.toLowerCase()] || "Maaf, saya tidak mengerti.";
  const botMessage: Message = { sender: "FinVent", text: responseText };

  setMessages([...messages, userMessage, botMessage]);
  setInput("");
  };

  return (
    <div className="flex flex-col h-[400px]">
      <div className="flex-1 overflow-y-auto border border-gray-300 p-3 rounded bg-gray-50 mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 text-sm ${
              msg.sender === "user" ? "text-right text-blue-600" : "text-left text-gray-700"
            }`}
          >
            <span className="font-medium">{msg.sender === "user" ? "Kamu" : "FinVent"}:</span> {msg.text}
          </div>
        ))}
      </div>
      <div className="flex">
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleSend()}  id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Tanyakan apa saja..." required />
                <button onClick={handleSend}className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </div>
    </div>
  );
}
