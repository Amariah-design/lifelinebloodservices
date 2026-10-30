const paths = {
    check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
    close: <path d="M6 6l12 12M18 6L6 18" />,
    alert: (
        <>
            <path d="M12 4l9 16H3L12 4z" />
            <path d="M12 10v4M12 17.2v.1" />
        </>
    ),
    arrow: <path d="M4 12h16M14 6l6 6-6 6" />,
    drop: (
        <path d="M12 3c3.5 4.3 6 7.4 6 10.5a6 6 0 01-12 0C6 10.4 8.5 7.3 12 3z" />
    ),
    flask: (
        <>
            <path d="M9 3h6M10 3v6l-5 9a2 2 0 001.8 3h10.4a2 2 0 001.8-3l-5-9V3" />
            <path d="M7.5 15h9" />
        </>
    ),
    clock: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </>
    ),
    truck: (
        <>
            <path d="M2 6h11v10H2zM13 10h4l3 3v3h-7" />
            <circle cx="7" cy="17.5" r="1.8" />
            <circle cx="16.5" cy="17.5" r="1.8" />
        </>
    ),
    heart: (
        <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10z" />
    ),
    shield: (
        <>
            <path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z" />
            <path d="M8.5 12l2.5 2.5 4.5-5" />
        </>
    ),
    search: (
        <>
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l4.5 4.5" />
        </>
    ),
    whatsapp: (
        <>
            <path d="M4 20l1.3-4.2A8 8 0 1112 20a8 8 0 01-3.9-1L4 20z" />
            <path d="M9 8.5c0 3 2.5 5.5 5.5 5.5l1-1.3-1.8-1-.8.6c-.9-.4-1.6-1.1-2-2l.6-.8-1-1.8L9 8.5z" />
        </>
    ),
    user: (
        <>
            <circle cx="12" cy="8" r="3.5" />
            <path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6" />
        </>
    ),
    link: (
        <>
            <path d="M9 12h6" />
            <path d="M7 8a4 4 0 000 8M17 8a4 4 0 010 8" />
        </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
};

export default function Icon({ name, size = 18, className = "" }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {paths[name] || paths.drop}
        </svg>
    );
}
