import React from 'react';
import { useParams } from 'react-router-dom';
import WhitepaperOne from './WhitepaperOne';
import Footer from '../Footer';
import Navbar from '../Navbar';


const whitepapers = [
    {
        id: 'Choosing-the-Right-Partner-for-Channel-Led-Growth', 
        title: 'Choosing the Right Partner for Channel - Led Growth',
        image: '/bgwhitepaper.jpg',
        component: <WhitepaperOne />,  
    },
];

const WhitepaperDetails = () => {
    const { id } = useParams();
    const whitepaper = whitepapers.find(paper => paper.id === decodeURIComponent(id));
    if (!whitepaper) {
        return <div>Whitepaper not found!</div>;
    }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                {whitepaper.component}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default WhitepaperDetails;
