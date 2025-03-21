import React, { useState, useEffect } from "react";

const sections = [
    { id: "executive-summary", title: "Executive Summary" },
    { id: "channel-growth", title: "Why Channel-Led Growth" },
    { id: "partner-landscape", title: "Partner Landscape" },
    { id: "who-to-work-with", title: "Who Should You Work With?" },
    { id: "beyond-transactions", title: "Beyond Transactions" },
    { id: "conclusion", title: "Conclusion and Summary" }
];

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="flex flex-col gap-4 p-4 border-r h-screen w-max">
            <ul className="flex flex-col gap-5">
                {sections.map((section) => (
                    <li key={section.id}>
                        <a
                            href={`#${section.id}`}
                            className={`text-[14px] py-2 px-4 block rounded-md font-light
                                ${activeSection === section.id
                                    ? 'text-black cursor-default'
                                    : 'text-customGreyishBlack'
                                }
                                transition-all`}
                            onClick={(e) => {
                                e.preventDefault(); 
                                handleScrollToSection(section.id); 
                            }}
                        >
                            {section.title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col gap-5">
                <div className="text-customBlack">Authors</div>

                <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-300 flex items-center justify-center">
                        <img src="/gg.jpeg" alt="Ganapathy Gangadharan" className="rounded-full object-cover w-12 h-12" />
                    </div>
                    <div>
                        <div className="text-xs">Ganapathy Gangadharan</div>
                        <div className="text-xs text-customGreyishBlack">Founder</div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className=" rounded-full bg-gray-300 flex items-center justify-center">
                        <img src="/kaushik.jpg" alt="Kaushik Venkatesan" className="rounded-full object-cover w-12 h-12" />
                    </div>
                    <div>
                        <div className="text-xs">Kaushik Venkatesan</div>
                        <div className="text-xs text-customGreyishBlack">Alliance Director</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
