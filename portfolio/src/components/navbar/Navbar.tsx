import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("hero");

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

                if (
                    rect.top <= window.innerHeight / 2 &&
                    rect.bottom > window.innerHeight / 2
                ) {
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

                <a href="#hero" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-110 transition">

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

                <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">

                    {/* Links */}
                    {links.map((link) => {
                        const isActive =
                            active === link.href.replace("#", "");

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

                    {/* Socials */}
                    <div className="flex items-center gap-3 ml-2 text-gray-400">

                        <a
                            href="https://github.com/DanBlais5078"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="hover:text-white transition mr-4"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 .5C5.7.5.7 5.7.7 12.2c0 5.2 3.4 9.6 8.2 11.1.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.2-1.3-1.6-1.3-1.6-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11 11 0 0 1 6 0C17 5 18 5.3 18 5.3c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.7-2.7 5.7-5.3 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.8-1.5 8.2-5.9 8.2-11.1C23.3 5.7 18.3.5 12 .5z" />
                            </svg>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/dan-blais-2127042b3"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="hover:text-white transition"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.1zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.6V9h3.5v11.4z" />
                            </svg>
                        </a>

                    </div>

                    <a
                        href="/Resume_DanBlais.pdf"
                        download
                        className="ml-2 px-3 py-1.5 rounded-md border border-white/10 text-gray-300 hover:text-white hover:border-blue-400/40 transition"
                    >
                        Resume
                    </a>

                    <a
                        href="#contact"
                        className="ml-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition flex items-center"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-300 hover:text-white transition"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden px-8 pb-6 flex flex-col gap-4 text-sm text-gray-400">

                    {links.map((link) => {
                        const isActive =
                            active === link.href.replace("#", "");

                        return (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`transition ${isActive
                                    ? "text-white"
                                    : "hover:text-white"
                                    }`}
                            >
                                {link.label}
                            </a>
                        );
                    })}

                    {/* Mobile Socials */}
                    <div className="flex flex-col gap-4 mt-2 text-gray-400">
                        <a
                            href="https://github.com/DanBlais5078"
                            target="_blank"
                            className="hover:text-white transition mr-0"
                        >
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/dan-blais-2127042b3"
                            target="_blank"
                            className="hover:text-white transition"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="/Resume_DanBlais.pdf"
                            download
                            onClick={() => setOpen(false)}
                            className="hover:text-white transition"
                        >
                            Resume
                        </a>
                    </div>

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