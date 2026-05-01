"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type Agent = {
    name: string;
    role: string;
    phone: string;
    avatar?: string;
};

const AGENTS: Agent[] = [
    { name: "CEO/FOUNDER", role: "Coach Homes Sales", phone: "2349035288969", avatar: "/CEO.jpg" },
    // Add more agents here if needed
];

const MESSAGE = "Hi! I'm interested in a property at Coach Homes.";

export default function WhatsAppCTA() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const getLink = (phone: string) =>
        `https://wa.me/${phone}?text=${encodeURIComponent(MESSAGE)}`;

    return (
        <>
            {/* Backdrop */}
            {open && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            <div
                className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
            >
                {/* Panel */}
                <div
                    className={`transition-all duration-300 origin-bottom-right ${open
                            ? "opacity-100 scale-100 pointer-events-auto"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                >
                    <div className="w-72 rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#111]">
                        {/* Header */}
                        <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
                            <div>
                                <p className="text-white font-semibold text-sm">Chat with us</p>
                                <p className="text-white/80 text-xs">Our team is available</p>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Agents */}
                        <div className="divide-y divide-white/5">
                            {AGENTS.map((agent: Agent) => (
                                <a
                                    key={agent.phone}
                                    href={getLink(agent.phone)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors group"
                                >
                                    <div className="relative shrink-0 w-10 h-10 rounded-full overflow-hidden bg-[#25D366]/20">
                                        {agent.avatar ? (
                                            <Image
                                                src={agent.avatar}
                                                alt={agent.name}
                                                fill
                                                className="object-cover"
                                                sizes="40px"
                                            />
                                        ) : (
                                            <span className="w-full h-full flex items-center justify-center text-[#25D366] font-bold text-sm">
                                                {agent.name.charAt(0)}
                                            </span>
                                        )}
                                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#111] rounded-full z-10" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-white text-sm font-medium truncate">{agent.name}</p>
                                        <p className="text-white/50 text-xs truncate">{agent.role}</p>
                                        <p className="text-[#25D366] text-xs mt-0.5">Available</p>
                                    </div>
                                    <svg
                                        className="shrink-0 text-white/30 group-hover:text-white/60 transition-colors"
                                        width="14" height="14" viewBox="0 0 24 24" fill="none"
                                        stroke="currentColor" strokeWidth="2"
                                    >
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </a>
                            ))}
                        </div>


                    </div>
                </div>

                {/* FAB Button */}
                <button
                    onClick={() => setOpen((o) => !o)}
                    className="w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
                    aria-label="Chat on WhatsApp"
                >
                    {open ? (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.858L.057 23.61a.75.75 0 00.92.92l5.752-1.478A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.737 9.737 0 01-4.964-1.357l-.356-.212-3.688.946.962-3.595-.232-.37A9.727 9.727 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
                        </svg>
                    )}
                </button>
            </div>
        </>
    );
}