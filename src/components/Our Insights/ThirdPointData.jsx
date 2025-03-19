import React from "react";
import data from "../../data/ThirdPoint.json";

const ThirdPointData = () => {
    return (
        <div className="flex flex-col gap-4">
            {Object.entries(data.partners).map(([key, value]) => (
                <div key={key} className="">
                    <h2 className="text-xl font-semibold mb-2">{key.replace(/_/g, " ")}</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div>
                                <h3 className="text-lg font-medium">Advantages:</h3>
                                <ul className="pl-5 space-y-2">
                                    {value.advantages.map((advantage, index) => (
                                        <li key={index} className="custom-bullet">
                                            {advantage}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="mt-4">
                                <h3 className="text-lg font-medium">Challenges:</h3>
                                <ul className="pl-5 space-y-2">
                                    {value.challenges.map((challenge, index) => (
                                        <li key={index} className="custom-bullet">
                                            {challenge}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Recommendations Section */}
                        <div>
                            <h3 className="text-lg font-medium">Recommendations:</h3>
                            <ul className="pl-5 space-y-2">
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
