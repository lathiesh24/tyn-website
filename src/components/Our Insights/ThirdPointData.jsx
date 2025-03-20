import React from "react";
import data from "../../data/ThirdPoint.json";

const ThirdPointData = () => {
    return (
        <div className="flex flex-col gap-10">
            {Object.entries(data.partners).map(([key, value]) => (
                <div key={key} className="flex flex-col gap-5">
                    <h2 className="text-2xl font-semibold text-customBlack">{key.replace(/_/g, " ")}</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div>
                                <h3 className="text-xl font-medium text-customBlack">Advantages:</h3>
                                <ul className="pl-5 flex flex-col gap-4 pt-4 text-customGreyishBlack font-light text-lg">
                                    {value.advantages.map((advantage, index) => (
                                        <li key={index} className="custom-bullet">
                                            {advantage}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-xl font-medium  text-customBlack">Challenges:</h3>
                                <ul className="pl-5 flex flex-col gap-5 pt-4 text-customGreyishBlack font-light text-lg">
                                    {value.challenges.map((challenge, index) => (
                                        <li key={index} className="custom-bullet ">
                                            {challenge}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium  text-customBlack">Recommendations:</h3>
                            <ul className="pl-5 flex flex-col gap-4 pt-4 text-customGreyishBlack font-light text-lg">
                                {value.recommendations.map((recommendation, index) => (
                                    <li key={index} className="custom-bullet">
                                        {recommendation}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ThirdPointData;
