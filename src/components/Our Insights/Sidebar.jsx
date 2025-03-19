import React from "react";

const sections = [
    { id: "executive-summary", title: "Executive Summary" },
    { id: "channel-growth", title: "Why Channel-Led Growth" },
    { id: "partner-landscape", title: "Partner Landscape" },
    { id: "who-to-work-with", title: "Who Should You Work With?" },
    { id: "beyond-transactions", title: "Beyond Transactions" },
    { id: "conclusion", title: "Conclusion and Summary" }
];

const Sidebar = () => {
    return (
        <div className="bg-gray-100 p-4 border-r h-screen w-max">
            <h2 className="text-lg font-bold mb-4">Sections</h2>
            <ul className="flex flex-col gap-4">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a
                            href={`#${section.id}`}
                            className="text-[14px]"
                        >
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
