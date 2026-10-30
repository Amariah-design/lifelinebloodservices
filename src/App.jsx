import { useEffect, useState } from "react";
import Home from "./pages/Home";
import FindBlood from "./pages/FindBlood";
import Icon from "./components/Icon";
import { whatsappLink } from "./data";

const routes = {
    "/": Home,
    "/find-blood": FindBlood,
};

function getPath() {
    return window.location.hash.replace(/^#/, "").split("#")[0] || "/";
}

export default function App() {
    const [path, setPath] = useState(getPath());
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function onChange() {
            setPath(getPath());
            setOpen(false);

            const anchor = window.location.hash.split("#")[2];

            window.setTimeout(() => {
                if (anchor) {
                    document.getElementById(anchor)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                } else {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }
            }, 50);
        }

        window.addEventListener("hashchange", onChange);
        return () => window.removeEventListener("hashchange", onChange);
    }, []);

    function navigate(to) {
        const [page, anchor] = to.split("#");
        const destination = anchor
            ? `#${page || "/"}#${anchor}`
            : `#${page || "/"}`;

        setOpen(false);

        if (window.location.hash === destination) {
            if (anchor) {
                document.getElementById(anchor)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
            return;
        }

        window.location.hash = destination;
    }

    const Page = routes[path] || Home;

    const navItems = [
        { label: "Home", to: "/" },
        { label: "Find blood", to: "/find-blood" },
        { label: "Our services", to: "/#services" },
        { label: "Donate", to: "/find-blood#donate" },
    ];

    return (
        <div className="min-h-screen bg-[#fbfaf7] text-[#292725]">
            <div className="bg-[#741f26] px-5 py-2.5 text-center text-[10px] font-medium tracking-[0.12em] text-white sm:text-xs">
                BLOOD AVAILABILITY CHANGES. CONTACT US TO CONFIRM CURRENT STOCK.
            </div>

            <header className="sticky top-0 z-50 border-b border-[#e9e5df] bg-[#fbfaf7]/95 backdrop-blur-md">
                <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
                    <button
                        onClick={() => navigate("/")}
                        aria-label="LifeLine home"
                        className="flex shrink-0 items-center gap-3 text-left"
                    >
                        <span className="flex h-11 w-11 items-center justify-center bg-[#8b2830] text-white">
                            <Icon name="drop" size={25} />
                        </span>

                        <span>
                            <span className="block font-serif text-[23px] leading-none tracking-[-0.06em]">
                                LifeLine
                            </span>
                            <span className="mt-1.5 block text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8b2830]">
                                Blood Services
                            </span>
                        </span>
                    </button>

                    <nav
                        aria-label="Main navigation"
                        className="hidden items-center gap-7 lg:flex xl:gap-9"
                    >
                        {navItems.map((item) => {
                            const active =
                                (item.to === "/" && path === "/") ||
                                (item.to === "/find-blood" &&
                                    path === "/find-blood");

                            return (
                                <button
                                    key={item.label}
                                    onClick={() => navigate(item.to)}
                                    className={`relative py-3 text-[13px] transition-colors ${
                                        active
                                            ? "font-semibold text-[#8b2830]"
                                            : "text-[#68645e] hover:text-[#8b2830]"
                                    }`}
                                >
                                    {item.label}
                                    {active && (
                                        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#8b2830]" />
                                    )}
                                </button>
                            );
                        })}
                    </nav>

                    <div className="hidden items-center gap-3 sm:flex">
                        <a
                            href={whatsappLink(
                                "Hello, I have an enquiry for LifeLine Blood Services.",
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-3 text-[12px] font-medium text-[#48423d] transition hover:text-[#8b2830]"
                        >
                            <Icon name="whatsapp" size={18} />
                            <span className="hidden xl:inline">Contact us</span>
                        </a>

                        <button
                            onClick={() => navigate("/find-blood")}
                            className="inline-flex items-center gap-3 bg-[#8b2830] px-5 py-3.5 text-[12px] font-medium text-white transition hover:bg-[#6e1e25]"
                        >
                            Find blood
                            <Icon name="arrow" size={15} />
                        </button>
                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        className="flex h-11 w-11 items-center justify-center border border-[#e4ded6] lg:hidden"
                    >
                        <Icon name={open ? "close" : "menu"} size={23} />
                    </button>
                </div>

                {open && (
                    <nav
                        aria-label="Mobile navigation"
                        className="border-t border-[#e9e5df] bg-[#fbfaf7] px-5 pb-6 pt-3 sm:px-8 lg:hidden"
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => navigate(item.to)}
                                className="block w-full border-b border-[#eee9e2] py-4 text-left text-sm text-[#45413c] transition hover:text-[#8b2830]"
                            >
                                {item.label}
                            </button>
                        ))}

                        <a
                            href={whatsappLink(
                                "Hello, I have an enquiry for LifeLine Blood Services.",
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#8b2830] px-5 py-4 text-sm font-medium text-white"
                        >
                            <Icon name="whatsapp" size={18} />
                            Contact us on WhatsApp
                        </a>
                    </nav>
                )}
            </header>

            <main>
                <Page navigate={navigate} />
            </main>

            <footer className="bg-[#211e1c] text-white">
                <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
                    <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_1fr]">
                        <div>
                            <button
                                onClick={() => navigate("/")}
                                className="flex items-center gap-3 text-left"
                            >
                                <span className="flex h-10 w-10 items-center justify-center bg-[#8b2830]">
                                    <Icon name="drop" size={23} />
                                </span>
                                <span className="font-serif text-2xl tracking-tight">
                                    LifeLine
                                </span>
                            </button>

                            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                                Helping people find blood supply information,
                                explore compatibility and connect with donor
                                support.
                            </p>
                        </div>

                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d8a4a4]">
                                Explore
                            </p>
                            <div className="mt-5 flex flex-col items-start gap-4">
                                <button
                                    onClick={() => navigate("/")}
                                    className="text-sm text-white/70 hover:text-white"
                                >
                                    Home
                                </button>
                                <button
                                    onClick={() => navigate("/find-blood")}
                                    className="text-sm text-white/70 hover:text-white"
                                >
                                    Blood availability
                                </button>
                                <button
                                    onClick={() =>
                                        navigate("/find-blood#donate")
                                    }
                                    className="text-sm text-white/70 hover:text-white"
                                >
                                    Donate blood
                                </button>
                            </div>
                        </div>

                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#d8a4a4]">
                                Need assistance?
                            </p>
                            <p className="mt-5 text-sm leading-7 text-white/65">
                                Contact our team to enquire about stock,
                                donation arrangements or your next steps.
                            </p>
                            <a
                                href={whatsappLink(
                                    "Hello, I need assistance with a blood enquiry.",
                                )}
                                target="_blank"
                                rel="noreferrer"
                                className="mt-5 inline-flex items-center gap-2 border-b border-[#c67d81] pb-2 text-sm text-white transition hover:text-[#e6b9bb]"
                            >
                                <Icon name="whatsapp" size={17} />
                                Speak with our team
                                <Icon name="arrow" size={15} />
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] leading-6 text-white/40 sm:flex-row sm:items-center sm:justify-between">
                        <p>
                            © {new Date().getFullYear()} LifeLine Blood
                            Services.
                        </p>
                        <p>
                            Stock information must be confirmed directly.
                            Clinical compatibility testing is essential.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
