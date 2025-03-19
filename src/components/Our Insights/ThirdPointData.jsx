import React from "react";
import data from "../../data/ThirdPoint.json";

const ThirdPointData = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Third Point Data</h1>
            {Object.entries(data.partners).map(([key, value]) => (
                <div key={key} className="mb-6 p-4 border rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-2">{key.replace(/_/g, " ")}</h2>
                    <div className="grid grid-cols-2">
                        <div>
                            <div className="">
                                <h3 className="text-lg font-medium">Advantages:</h3>
                                <ul className="list-disc pl-5">
                                    {value.advantages.map((advantage, index) => (
                                        <li key={index}>{advantage}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="">
                                <h3 className="text-lg font-medium">Challenges:</h3>
                                <ul className="list-disc pl-5">
                                    {value.challenges.map((challenge, index) => (
                                        <li key={index}>{challenge}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium">Recommendations:</h3>
                            <ul className="list-disc pl-5">
                                {value.recommendations.map((recommendation, index) => (
                                    <li key={index}>{recommendation}</li>
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
