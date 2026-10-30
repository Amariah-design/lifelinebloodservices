import { bloodGroups, services, whatsappLink } from "../data";
import BloodCard from "../components/BloodCard";
import Icon from "../components/Icon";

const steps = [
    {
        number: "01",
        title: "Tell us what you need",
        text: "Choose the required blood group and share your enquiry.",
    },
    {
        number: "02",
        title: "Confirm the details",
        text: "Speak with our team about stock and the next steps.",
    },
    {
        number: "03",
        title: "Follow clinical guidance",
        text: "Ensure all required testing and cross-matching are completed.",
    },
];

export default function Home({ navigate }) {
    return (
        <div className="overflow-hidden">
            <section className="mx-auto grid max-w-[1440px] lg:min-h-[650px] lg:grid-cols-[1.02fr_0.98fr]">
                <div className="flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-20">
                    <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b2830]">
                        <span className="h-px w-9 bg-[#8b2830]" />
                        Blood access. Human care.
                    </div>

                    <h1 className="mt-7 max-w-[650px] font-serif text-[clamp(3.5rem,7vw,6.6rem)] leading-[0.94] tracking-[-0.065em]">
                        When it
                        <br />
                        matters{" "}
                        <span className="italic text-[#8b2830]">most.</span>
                    </h1>

                    <p className="mt-7 max-w-[460px] text-[15px] leading-8 text-[#706b64]">
                        Find blood group information, enquire about current
                        availability and connect with a team that understands
                        how important every request can be.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 min-[430px]:flex-row">
                        <button
                            onClick={() => navigate("/find-blood")}
                            className="inline-flex min-h-14 items-center justify-center gap-4 bg-[#8b2830] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#6d1d25]"
                        >
                            Explore blood availability
                            <Icon name="arrow" size={17} />
                        </button>

                        <button
                            onClick={() => navigate("/find-blood#donate")}
                            className="inline-flex min-h-14 items-center justify-center gap-3 border border-[#dcd5cd] px-6 py-4 text-sm font-medium transition hover:border-[#8b2830] hover:text-[#8b2830]"
                        >
                            Become a donor
                        </button>
                    </div>

                    <div className="mt-12 grid max-w-[480px] grid-cols-2 border-t border-[#e8e3dc] pt-6">
                        <div className="flex gap-3 pr-4">
                            <Icon
                                name="shield"
                                size={21}
                                className="mt-0.5 shrink-0 text-[#8b2830]"
                            />
                            <div>
                                <p className="text-sm font-semibold">
                                    Safety matters
                                </p>
                                <p className="mt-1 text-xs leading-5 text-[#817b73]">
                                    Testing and clinical checks
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 border-l border-[#e8e3dc] pl-5">
                            <Icon
                                name="clock"
                                size={21}
                                className="mt-0.5 shrink-0 text-[#8b2830]"
                            />
                            <div>
                                <p className="text-sm font-semibold">
                                    Clear next steps
                                </p>
                                <p className="mt-1 text-xs leading-5 text-[#817b73]">
                                    Direct enquiry and confirmation
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative min-h-[460px] bg-[#e6ded5] sm:min-h-[560px] lg:min-h-[650px]">
                    <img
                        src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=1500&q=85"
                        alt="Blood donation equipment in a clinical setting"
                        fetchPriority="high"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#211b19]/75 via-[#211b19]/5 to-[#211b19]/10" />

                    <div className="absolute left-5 top-5 border border-white/50 bg-[#fbfaf7]/95 p-4 sm:left-8 sm:top-8 sm:p-5">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8b2830]">
                            Here when it counts
                        </p>
                        <p className="mt-2 font-serif text-xl">People first.</p>
                    </div>

                    <div className="absolute inset-x-5 bottom-6 sm:inset-x-9 sm:bottom-9">
                        <div className="max-w-[440px] border-l-2 border-[#d99a9c] pl-5 text-white sm:pl-7">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/75">
                                Our commitment
                            </p>
                            <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
                                Every request deserves care.
                            </h2>
                            <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                                Clear information and direct communication
                                throughout the process.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y border-[#e9e4dc] bg-white">
                <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-8 sm:px-8 md:grid-cols-3 md:gap-0 lg:px-12">
                    {steps.map((step, index) => (
                        <article
                            key={step.number}
                            className={`flex gap-5 ${
                                index > 0
                                    ? "border-t border-[#eee9e2] pt-7 md:border-l md:border-t-0 md:pl-7 md:pt-0 lg:pl-10"
                                    : ""
                            } ${index < 2 ? "md:pr-7 lg:pr-10" : ""}`}
                        >
                            <span className="font-serif text-2xl text-[#b65e63]">
                                {step.number}
                            </span>
                            <div>
                                <h2 className="font-serif text-xl">
                                    {step.title}
                                </h2>
                                <p className="mt-2 max-w-xs text-sm leading-6 text-[#77716a]">
                                    {step.text}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b2830]">
                            The blood directory
                        </p>
                        <h2 className="mt-4 max-w-lg font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                            Information that helps you take the next step.
                        </h2>
                    </div>

                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                        <p className="max-w-md text-sm leading-7 text-[#77716a]">
                            Explore blood groups and the latest recorded stock
                            information. Contact us before travelling to confirm
                            availability.
                        </p>
                        <button
                            onClick={() => navigate("/find-blood")}
                            className="inline-flex shrink-0 items-center gap-3 border-b border-[#8b2830] pb-2 text-sm font-medium hover:gap-5"
                        >
                            View all groups
                            <Icon name="arrow" size={16} />
                        </button>
                    </div>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {bloodGroups.slice(0, 4).map((blood) => (
                        <BloodCard key={blood.id} blood={blood} />
                    ))}
                </div>

                <p className="mt-5 text-xs leading-6 text-[#898178]">
                    Displayed stock is illustrative until confirmed by the
                    service team. Transfusion decisions require professional
                    assessment, testing and cross-matching.
                </p>
            </section>

            <section id="services" className="scroll-mt-24 bg-[#f0ede7]">
                <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b2830]">
                            How we can help
                        </p>

                        <h2 className="mt-5 max-w-lg font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl">
                            Practical support. Thoughtful care.
                        </h2>

                        <p className="mt-5 max-w-md text-sm leading-7 text-[#716b63]">
                            From initial enquiries to donor coordination, our
                            aim is to make the process easier to understand.
                        </p>

                        <button
                            onClick={() => navigate("/find-blood")}
                            className="mt-8 inline-flex items-center gap-3 bg-[#292725] px-5 py-4 text-sm font-medium text-white transition hover:bg-[#8b2830]"
                        >
                            Explore our services
                            <Icon name="arrow" size={16} />
                        </button>
                    </div>

                    <div className="grid border-t border-[#ddd7ce] sm:grid-cols-2 lg:border-l lg:border-t-0">
                        {services.map((service, index) => (
                            <article
                                key={service.title}
                                className={`p-6 sm:p-8 lg:p-10 ${
                                    index % 2 === 1
                                        ? "sm:border-l sm:border-[#ddd7ce]"
                                        : ""
                                } ${
                                    index > 1 ? "border-t border-[#ddd7ce]" : ""
                                }`}
                            >
                                <div className="flex h-11 w-11 items-center justify-center border border-[#d7c6c0] text-[#8b2830]">
                                    <Icon name={service.icon} size={22} />
                                </div>

                                <p className="mt-7 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#a29a90]">
                                    0{index + 1}
                                </p>
                                <h3 className="mt-2 font-serif text-2xl leading-tight">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm leading-7 text-[#77716a]">
                                    {service.text}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-[#292220] text-white">
                <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[1fr_auto] md:items-center lg:px-12 lg:py-24">
                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#d9a2a4]">
                            Let's talk
                        </p>
                        <h2 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                            Need blood information or want to donate?
                        </h2>
                        <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
                            Send us your enquiry on WhatsApp. We'll help you
                            confirm availability and understand the next steps.
                        </p>
                    </div>

                    <a
                        href={whatsappLink(
                            "Hello LifeLine Blood Services, I would like help with a blood enquiry or donation.",
                        )}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#a6333b] px-6 py-4 text-sm font-medium text-white transition hover:bg-[#bd454d]"
                    >
                        <Icon name="whatsapp" size={19} />
                        Contact LifeLine
                        <Icon name="arrow" size={16} />
                    </a>
                </div>
            </section>
        </div>
    );
}
