import React from 'react';
import { Link } from 'react-router-dom';
import { FiShare2, FiDownload } from 'react-icons/fi';
import WhitepaperOne from './WhitepaperOne';

const whitepapers = [
    {
        id: 'Unlocking-Non-Linear-Growth-through-Strategic-Alliances',
        title: 'Unlocking Non-Linear Growth through Strategic Alliances',
        description: "Choosing the Right Partner for Channel - Led Growth",
        image: '/bgwhitepaper.jpg',
        component: <WhitepaperOne />,
        pdfUrl: '/Unlocking Non Linear Growth through Strategic Alliances.pdf',
        url: '/insights/Unlocking Non-Linear Growth through Strategic Alliances',
    },
];

const Whitepapers = () => {
    const handleShare = (url, title) => {
        if (navigator.share) {
            navigator.share({
                title: title,
                url: url,
            })
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            alert('Sharing is not supported on this device.');
        }
    };

    return (
        <div className='h-screen justify-center items-center'>
            <div className='px-8 flex flex-col gap-5'>
                <div className='mt-20 flex font-semibold text-2xl text-customBlack'>
                    Our Insights
                </div>
                <hr className='border-gray-300' />
            </div>

            <div className="flex gap-6 px-6 justify-center items-center pt-10">
                {whitepapers.map((whitepaper) => (
                    <div
                        className="card bg-white border border-gray-200 rounded-[16px] shadow-2xl overflow-hidden hover:scale-105"
                        key={whitepaper.id}
                    >
                        <Link to={`/insights/${whitepaper.id}`} className="flex flex-col"> {/* Updated link path */}
                            <div className="">
                                <img
                                    src={whitepaper.image}
                                    alt={whitepaper.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="card-content px-4 pt-4 pb-2">
                                <h3 className="text-xl font-medium text-customBlack transition-colors duration-300">
                                    {whitepaper.title}
                                </h3>
                            </div>
                            <div className='px-4 pb-4'>
                                <div className='text-sm font-normal text-customGreyishBlack'>
                                    {whitepaper.description}
                                </div>
                            </div>
                        </Link>
                        <div className="flex justify-between items-center pt-0 pb-4 px-4">
                            <button
                                onClick={() => handleShare(whitepaper.url, whitepaper.title)}
                                className="text-gray-600 hover:text-blue-500"
                            >
                                <FiShare2 size={20} />
                            </button>
                            <a
                                href={whitepaper.pdfUrl}
                                download={true}
                                className="text-gray-600 hover:text-blue-500"
                            >
                                <FiDownload size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Whitepapers;
