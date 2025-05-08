import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import whitepapers from '../Our Insights/localWhitepapers'; 
import { FiDownload } from 'react-icons/fi';
import Navbar from '../Navbar';

const WhitepaperDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const whitepaper = whitepapers.find(
        (wp) => wp.id.replace(/\s+/g, '-').toLowerCase() === slug.toLowerCase()
    );

    if (!whitepaper) {
        return <div className="p-10 text-center text-red-500">Whitepaper not found.</div>;
    }

    return (
        <div className="">
            <Navbar/>
            <div className="">{whitepaper.component}</div>
            {/* <button
                onClick={() => navigate(-1)}
                className="mb-6 text-sm font-medium text-[#2287C0] hover:underline"
            >
                ← Back to Whitepapers
            </button> */}
        </div>
    );
};

export default WhitepaperDetail;
