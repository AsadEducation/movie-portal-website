import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";



const BoxOffice = () => {


    const moviesData = [
        { name: "Avatar", earnings: 2800 },
        { name: "Avengers: Endgame", earnings: 2797 },
        { name: "Titanic", earnings: 2200 },
        { name: "Star Wars: The Force Awakens", earnings: 2068 },
        { name: "Avengers: Infinity War", earnings: 2048 },
    ];

    return (
        <div className="w-[90%] mx-auto my-8 md:my-12 lg:my-16">

            <h2 className="text-4xl font-bold my-8 text-center">Box Office Earnings Of Movies</h2>

            <div className="w-full p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">

                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={moviesData} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" tick={{ fill: "gray" }} />
                        <YAxis tick={{ fill: "gray" }} />
                        <Tooltip contentStyle={{ backgroundColor: "#f9f9f9", borderRadius: "5px" }} />
                        <Bar dataKey="earnings" fill="#4F46E5" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default BoxOffice;