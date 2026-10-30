import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BloodDrop, Icon } from "./Icon";
import { getWhatsAppLink } from "../data/bloodData";

const links = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/#services" },
    { label: "Availability", to: "/#availability" },
    { label: "About", to: "/#about" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    function closeMenu() {
        setMenuOpen(false);
    }

    function navigateToSection(event, to) {
        closeMenu();

        if (!to.includes("#")) return;

        const [path, hash] = to.split("#");
        const targetPath = path || "/";

        if (location.pathname === targetPath) {
            event.preventDefault();
            window.setTimeout(() => {
                document.getElementById(hash)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 0);
        }
    }

    const navClass = ({ isActive }) =>
        `text-sm transition-colors duration-200 ${
            isActive && location.pathname === "/"
                ? "font-semibold text-[#8B1E1E]"
                : "font-medium text-[#6B5D52] hover:text-[#8B1E1E]"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-[#E8DDD1] bg-[#F9F5EF]/95 backdrop-blur-sm">
            <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="flex shrink-0 items-center gap-3"
                    aria-label="LifeLine Blood Services home"
                >
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#8B1E1E] text-white">
                        <BloodDrop size={27} />
                    </span>

                    <span>
                        <span className="block font-serif text-lg font-bold leading-tight tracking-tight text-[#2B1D14] sm:text-xl">
                            LifeLine
                        </span>
                        <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.19em] text-[#8B1E1E]">
                            Blood Services
                        </span>
                    </span>
                </Link>

                <nav
                    aria-label="Main navigation"
                    className="hidden items-center gap-7 lg:flex xl:gap-9"
                >
                    {links.map((link) =>
                        link.to.includes("#") ? (
                            <a
                                key={link.label}
                                href={link.to}
                                onClick={(event) =>
                                    navigateToSection(event, link.to)
                                }
                                className={navClass({
                                    isActive:
                                        location.pathname === "/" &&
                                        location.hash === link.to.split("#")[1],
                                })}
                            >
                                {link.label}
                            </a>
                        ) : (
                            <NavLink
                                key={link.label}
                                to={link.to}
                                className={navClass}
                            >
                                {link.label}
                            </NavLink>
                        ),
                    )}
                </nav>

                <div className="hidden shrink-0 items-center gap-3 sm:flex">
                    <a
                        href={getWhatsAppLink(
                            "Hello LifeLine Blood Services, I would like to make an enquiry.",
                        )}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Contact LifeLine on WhatsApp"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#DCC9B9] text-[#8B1E1E] transition hover:bg-[#F0E3D7]"
                    >
                        <Icon name="whatsapp" size={20} />
                    </a>

                    <Link
                        to="/donate"
                        className="inline-flex items-center gap-2 rounded-lg bg-[#8B1E1E] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#711717]"
                    >
                        Donate blood
                        <Icon name="arrow" size={16} />
                    </Link>
                </div>

                <button
                    type="button"
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E8DDD1] text-[#8B1E1E] sm:ml-auto lg:hidden"
                >
                    <Icon name={menuOpen ? "close" : "menu"} size={23} />
                </button>
            </div>

            {menuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-[#E8DDD1] bg-[#F9F5EF] px-5 pb-5 pt-3 shadow-[0_12px_25px_rgba(43,29,20,0.06)] sm:px-8 lg:hidden"
                >
                    <nav
                        aria-label="Mobile navigation"
                        className="flex flex-col"
                    >
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.to}
                                onClick={(event) =>
                                    navigateToSection(event, link.to)
                                }
                                className="border-b border-[#E8DDD1] py-4 text-sm font-medium text-[#4D3B30] transition hover:text-[#8B1E1E]"
                            >
                                {link.label}
                            </a>
                        ))}

                        <Link
                            to="/donate"
                            onClick={closeMenu}
                            className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-[#8B1E1E] px-5 py-3.5 text-sm font-semibold text-white"
                        >
                            Register to donate
                            <Icon name="arrow" size={17} />
                        </Link>

                        <a
                            href={getWhatsAppLink(
                                "Hello LifeLine Blood Services, I would like to make an enquiry.",
                            )}
                            target="_blank"
                            rel="noreferrer"
                            onClick={closeMenu}
                            className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg border border-[#DCC9B9] px-5 py-3.5 text-sm font-semibold text-[#8B1E1E]"
                        >
                            <Icon name="whatsapp" size={19} />
                            Chat on WhatsApp
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
