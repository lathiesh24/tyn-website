import React from 'react'

const Card = () => {

    const cardData = [
        {
            name: "Kishore Jayaraman",
            roleDescription: "President, Rolls Royce, India & South Asia",
            image: "/adt1.png"
        },
        {
            name: "Sundaravalli Narayanaswami",
            roleDescription: "Professor & Ex chair, Public systems group, IIM Ahmedabad",
            image: "/adt2.png"
        },
        {
            name: "Antony Kagoo (Tony)",
            roleDescription: "Head of Innovation & Strategic Initiatives, TCS UK",
            image: "/adt3.png"
        },
        {
            name: "MVS Subramanian",
            roleDescription: "Partner, July Ventures (Serial entrepreneur)",
            image: "/adt4.png"
        },
    ];

    return (
        <>
            {cardData.map((card, index) => {
                return (
                    <div className="sm:w-64 bg-white shadow-lg rounded-lg mt-24 px-4 pb-4 ">
                        <div className="relative h-[88px] w-[88px] rounded-full mx-auto">
                            <img
                                className="absolute object-cover h-24 w-48 rounded-2xl -top-[44px]"
                                src={card.image}
                                alt=""
                            />
                        </div>
                        <div className="">
                            <div className="font-semibold text-xl ">
                                <span>{card.name}</span>
                            </div>
                            <p className="font-light pb-4 pt-1.5 ">{card.roleDescription}</p>
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default Card