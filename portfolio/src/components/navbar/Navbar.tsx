import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("projects");

    const links = [
        { href: "#projects", label: "Projects" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("[data-section]");

            let current = "";

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                    current = section.id;
                }
            });

            if (window.scrollY < 50) {
                setActive("hero");
                return;
            }

            if (current) {
                setActive(current);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0f19]/70 backdrop-blur-md">
            <div className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">

                <div className="flex items-center gap-2">
                    <a href="#hero" className="flex items-center gap-2 group">
                        {/* Logo */}
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition">

                            <svg viewBox="0 0 28 28" className="w-7 h-7">

                                <path
                                    d="M6 4V24H14C21.5 24 24.5 20 24.5 14C24.5 8 21.5 4 14 4H6Z"
                                    fill="white"
                                />

                                <path
                                    d="M11.5 7V21H13C17.2 21 18.8 19.3 18.8 14C18.8 8.7 17.2 7 13 7H11.5Z"
                                    fill="#2563eb"
                                />

                                <rect x="6" y="4" width="1.2" height="20" fill="white" />

                            </svg>
                        </div>

                        <h1 className="ml-1 text-lg font-semibold text-white">
                            Dan Blais
                        </h1>
                    </a>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">

                    {links.map((link) => {
                        const isActive = active === link.href.replace("#", "");

                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`h-10 flex items-center transition ${isActive
                                    ? "text-white"
                                    : "text-gray-400 hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="ml-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition flex items-center"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-300 hover:text-white transition"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden px-8 pb-6 flex flex-col gap-4 text-sm text-gray-400">

                    {links.map((link) => {
                        const isActive = active === link.href.replace("#", "");

                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`transition ${isActive ? "text-white" : "hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}

                    {/* Mobile CTA */}
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="mt-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-center hover:bg-blue-500 transition"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    );
}