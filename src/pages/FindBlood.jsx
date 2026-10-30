import { useState } from "react";
import {
    bloodGroups,
    canReceiveFrom,
    canDonateTo,
    eligibility,
    statusMeta,
    whatsappLink,
} from "../data";
import BloodCard from "../components/BloodCard";
import Icon from "../components/Icon";

const filters = [
    ["all", "All"],
    ["available", "Available"],
    ["low", "Low stock"],
    ["unavailable", "Unavailable"],
];

export default function FindBlood() {
    const [filter, setFilter] = useState("all");
    const [mine, setMine] = useState("");

    const visible = bloodGroups.filter(
        (b) => filter === "all" || b.status === filter,
    );

    const donors = mine
        ? canReceiveFrom[mine].map((label) =>
              bloodGroups.find((b) => b.label === label),
          )
        : [];
    const matches = donors.filter((d) => d.status !== "unavailable");
    const recipients = mine ? canDonateTo[mine] : [];

    return (
        <>
            <section className="border-b border-[#e6dccb] bg-[#f4ece0]">
                <div className="mx-auto max-w-360 px-6 py-14 md:px-14 md:py-20 lg:px-20">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#a8691b]">
                        Find blood
                    </p>
                    <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.15] tracking-tight sm:text-6xl">
                        Blood groups, availability and{" "}
                        <i className="font-normal">matches.</i>
                    </h1>
                    <p className="mt-5 max-w-xl text-sm leading-8 text-[#7a6d60]">
                        See every blood group and type we handle, check a safe
                        match for a patient, or learn how to donate.
                    </p>
                </div>
            </section>

            <section className="mx-auto max-w-360 px-5 py-14 md:px-10 md:py-20 lg:px-14">
                <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#a8691b]">
                            All blood groups
                        </p>
                        <h2 className="mt-3 font-serif text-4xl">
                            What we have today
                        </h2>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {filters.map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => setFilter(key)}
                                className={`border px-4 py-2.5 text-[10px] uppercase tracking-[0.14em] transition ${
                                    filter === key
                                        ? "border-[#8a2f2a] bg-[#8a2f2a] text-white"
                                        : "border-[#d9c9ae] hover:bg-[#f1e7d6]"
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {visible.map((blood) => (
                        <BloodCard key={blood.id} blood={blood} />
                    ))}
                </div>
                {visible.length === 0 && (
                    <p className="mt-10 text-sm text-[#7a6d60]">
                        No blood groups match this filter.
                    </p>
                )}
            </section>

            <section className="border-y border-[#e6dccb] bg-[#f4ece0]">
                <div className="mx-auto grid max-w-360 gap-12 px-5 py-14 md:grid-cols-5 md:px-10 md:py-20 lg:px-14">
                    <div className="md:col-span-2">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#a8691b]">
                            Match finder
                        </p>
                        <h2 className="mt-3 font-serif text-4xl leading-tight">
                            Is there a match for you?
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-[#7a6d60]">
                            Choose the patient's blood group. We show which
                            groups are compatible and whether they are in stock.
                        </p>
                        <div className="mt-7 grid grid-cols-4 gap-2">
                            {bloodGroups.map((b) => (
                                <button
                                    key={b.id}
                                    onClick={() => setMine(b.label)}
                                    className={`border py-3 font-serif text-xl transition ${
                                        mine === b.label
                                            ? "border-[#8a2f2a] bg-[#8a2f2a] text-white"
                                            : "border-[#d9c9ae] bg-[#fdfaf5] hover:border-[#b5533c]"
                                    }`}
                                >
                                    {b.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-3">
                        {!mine ? (
                            <div className="flex h-full min-h-56 flex-col items-center justify-center border border-dashed border-[#d3c2a4] p-8 text-center">
                                <Icon
                                    name="search"
                                    size={26}
                                    className="text-[#b5533c]"
                                />
                                <p className="mt-4 text-sm text-[#7a6d60]">
                                    Select a blood group to see compatible
                                    donors.
                                </p>
                            </div>
                        ) : (
                            <div className="border border-[#e0d3bd] bg-[#fdfaf5] p-7">
                                <div className="flex items-center gap-3">
                                    <span
                                        className="flex h-9 w-9 items-center justify-center"
                                        style={{
                                            color: matches.length
                                                ? statusMeta.available.color
                                                : statusMeta.unavailable.color,
                                            backgroundColor: matches.length
                                                ? statusMeta.available.bg
                                                : statusMeta.unavailable.bg,
                                        }}
                                    >
                                        <Icon
                                            name={
                                                matches.length
                                                    ? "check"
                                                    : "close"
                                            }
                                            size={18}
                                        />
                                    </span>
                                    <h3 className="font-serif text-2xl">
                                        {matches.length
                                            ? `Match available for ${mine}`
                                            : `No match in stock for ${mine}`}
                                    </h3>
                                </div>

                                <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-[#7a6d60]">
                                    {mine} can receive from
                                </p>
                                <ul className="mt-3 divide-y divide-[#ece3d3] border-y border-[#ece3d3]">
                                    {donors.map((d) => {
                                        const m = statusMeta[d.status];
                                        return (
                                            <li
                                                key={d.id}
                                                className="flex items-center justify-between py-3"
                                            >
                                                <span className="font-serif text-xl text-[#8a2f2a]">
                                                    {d.label}
                                                </span>
                                                <span
                                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em]"
                                                    style={{
                                                        color: m.color,
                                                        backgroundColor: m.bg,
                                                    }}
                                                >
                                                    <Icon
                                                        name={m.icon}
                                                        size={12}
                                                    />{" "}
                                                    {m.text}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <p className="mt-5 text-xs leading-6 text-[#7a6d60]">
                                    {mine} can donate to:{" "}
                                    {recipients.join(", ")}.
                                </p>

                                <a
                                    href={whatsappLink(
                                        `Hello, I need blood for a patient with group ${mine}. Please confirm availability.`,
                                    )}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 bg-[#8a2f2a] px-6 py-4 text-xs uppercase tracking-wider text-white transition hover:bg-[#6e231f]"
                                >
                                    <Icon name="whatsapp" size={16} /> Request{" "}
                                    {mine} blood
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <section
                id="donate"
                className="mx-auto max-w-360 px-5 py-16 md:px-10 md:py-24 lg:px-14"
            >
                <div className="grid gap-12 md:grid-cols-2">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-[#a8691b]">
                            Donate blood
                        </p>
                        <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
                            Your donation can reach someone today.
                        </h2>
                        <p className="mt-5 max-w-md text-sm leading-8 text-[#7a6d60]">
                            Donating is simple and safe. Tell us your blood
                            group and when you are free, and we will confirm a
                            time with you.
                        </p>
                        <a
                            href={whatsappLink(
                                "Hello, I would like to donate blood. My blood group is ",
                            )}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 inline-flex items-center gap-2 bg-[#2f2420] px-7 py-4 text-xs uppercase tracking-[0.14em] text-white transition hover:bg-[#8a2f2a]"
                        >
                            <Icon name="whatsapp" size={16} /> I want to donate
                        </a>
                    </div>

                    <div className="border border-[#e0d3bd] bg-[#fdfaf5] p-8">
                        <h3 className="font-serif text-2xl">Who can donate</h3>
                        <ul className="mt-5 divide-y divide-[#ece3d3]">
                            {eligibility.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-3 py-4 text-sm text-[#4a3d33]"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center bg-[#e7ecdd] text-[#5b7347]">
                                        <Icon name="check" size={14} />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-5 text-xs leading-6 text-[#9a8c7c]">
                            Final eligibility is confirmed by our staff before
                            every donation.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
