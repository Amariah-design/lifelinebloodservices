import Icon from "./Icon";
import { statusMeta, whatsappLink } from "../data";

export default function BloodCard({ blood, highlight = false }) {
    const meta = statusMeta[blood.status];
    const message =
        blood.status === "unavailable"
            ? `Hello, I need blood group ${blood.label}. Please let me know when it becomes available.`
            : `Hello, I would like to enquire about blood group ${blood.label}.`;

    return (
        <article
            className={`flex flex-col border bg-[#fdfaf5] p-6 transition hover:border-[#b5533c] ${
                highlight ? "border-[#8a2f2a]" : "border-[#e6dccb]"
            }`}
        >
            <div className="flex items-start justify-between">
                <span className="font-serif text-5xl leading-none text-[#8a2f2a]">
                    {blood.label}
                </span>
                <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[9px] uppercase tracking-[0.12em]"
                    style={{ color: meta.color, backgroundColor: meta.bg }}
                >
                    <Icon name={meta.icon} size={12} />
                    {meta.text}
                </span>
            </div>

            <dl className="mt-6 space-y-2 border-t border-[#ece3d3] pt-4 text-xs text-[#7a6d60]">
                <div className="flex justify-between">
                    <dt className="uppercase tracking-[0.12em]">Blood group</dt>
                    <dd className="text-[#2f2420]">{blood.group}</dd>
                </div>
                <div className="flex justify-between">
                    <dt className="uppercase tracking-[0.12em]">Blood type</dt>
                    <dd className="text-[#2f2420]">{blood.rh}</dd>
                </div>
                <div className="flex justify-between">
                    <dt className="uppercase tracking-[0.12em]">In stock</dt>
                    <dd className="text-[#2f2420]">
                        {blood.units > 0 ? `${blood.units} units` : "None"}
                    </dd>
                </div>
            </dl>

            <p className="mt-4 text-xs text-[#9a8c7c]">{blood.note}</p>

            <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 border border-[#d9c9ae] px-4 py-3 text-[10px] uppercase tracking-[0.14em] text-[#2f2420] transition hover:bg-[#2f2420] hover:text-white"
            >
                <Icon name="whatsapp" size={15} />
                {blood.status === "unavailable" ? "Notify me" : "Enquire"}
            </a>
        </article>
    );
}
