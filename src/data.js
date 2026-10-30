// Replace with your WhatsApp number in international format, no + or spaces.
export const WHATSAPP_NUMBER = "2349060976683";

export const whatsappLink = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// status: "available" | "low" | "unavailable"
export const bloodGroups = [
    { id: "o-neg", label: "O-", group: "O", rh: "Negative", status: "low", units: 6, note: "Universal donor" },
    { id: "o-pos", label: "O+", group: "O", rh: "Positive", status: "available", units: 32, note: "Most requested" },
    { id: "a-pos", label: "A+", group: "A", rh: "Positive", status: "available", units: 24, note: "Widely compatible" },
    { id: "a-neg", label: "A-", group: "A", rh: "Negative", status: "low", units: 4, note: "Limited supply" },
    { id: "b-pos", label: "B+", group: "B", rh: "Positive", status: "available", units: 18, note: "Steady supply" },
    { id: "b-neg", label: "B-", group: "B", rh: "Negative", status: "unavailable", units: 0, note: "Currently out" },
    { id: "ab-pos", label: "AB+", group: "AB", rh: "Positive", status: "available", units: 9, note: "Universal recipient" },
    { id: "ab-neg", label: "AB-", group: "AB", rh: "Negative", status: "low", units: 3, note: "Rare group" },
];

// Who each group can safely receive from
export const canReceiveFrom = {
    "O-": ["O-"],
    "O+": ["O+", "O-"],
    "A-": ["A-", "O-"],
    "A+": ["A+", "A-", "O+", "O-"],
    "B-": ["B-", "O-"],
    "B+": ["B+", "B-", "O+", "O-"],
    "AB-": ["AB-", "A-", "B-", "O-"],
    "AB+": ["AB+", "AB-", "A+", "A-", "B+", "B-", "O+", "O-"],
};

export const canDonateTo = Object.fromEntries(
    Object.keys(canReceiveFrom).map((g) => [
        g,
        Object.keys(canReceiveFrom).filter((r) => canReceiveFrom[r].includes(g)),
    ])
);

export const statusMeta = {
    available: { text: "Available", color: "#5b7347", bg: "#e7ecdd", icon: "check" },
    low: { text: "Low stock", color: "#a8691b", bg: "#f6e8cf", icon: "alert" },
    unavailable: { text: "Unavailable", color: "#9a3a34", bg: "#f4dcd8", icon: "close" },
};

export const services = [
    { icon: "drop", title: "Whole blood supply", text: "Screened whole blood for patients and hospitals, matched by group and Rh type." },
    { icon: "flask", title: "Testing and screening", text: "Every unit is tested and cross-matched before it is released." },
    { icon: "clock", title: "Urgent requests", text: "Emergency enquiries are handled first. Message us and we respond quickly." },
    { icon: "truck", title: "Delivery to hospitals", text: "Safe, temperature-controlled transport to the facility where it is needed." },
];

export const eligibility = [
    "Aged between 18 and 60",
    "Weigh at least 50 kg",
    "In good general health today",
    "No donation in the last 3 months",
];