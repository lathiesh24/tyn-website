import WhitepaperOne from '../Our Insights/WhitepaperOne';
import WhitepaperTwo from './WhitepaperTwo';

const whitepapers = [
    {
        id: 'Choosing-the-Right-Partner-for-Channel-Led Growth',
        slug: 'choosing-the-right-partner-channel-growth',
        title: 'Choosing the Right Partner for Channel - Led Growth',
        description: 'Choosing the Right Partner for Channel - Led Growth',
        image: 'https://res.cloudinary.com/dv0eaik7h/image/upload/v1749708844/bgwhitepaper_fhv4be.jpg',
        component: <WhitepaperOne authors = {
            [
                {
                    name: "Ganapathy Gangadharan",
                    role: "Founder",
                    image: "/gg.jpeg"
                },
                {
                    name: "Kaushik Venkatesan",
                    role: "Alliance Director",
                    image: "/kaushik.jpg"
                }
            ]
        } />,
        pdfUrl: '/whitepapers/Unlocking Non Linear Growth through Strategic Alliances.pdf',
        url: '/ynsights/choosing-the-right-partner-for-channel-led-growth',
    },
    {
        id: 'Unlocking-industrial-transformation-through-market-innovation-adoption',
        slug: 'unlocking-industrial-transformation-through-market-innovation-adoption',
        title: 'Unlocking Industrial Transformation through Market Innovation Adoption',
        description: 'Unlocking Industrial Transformation through Market Innovation Adoption',
        image: 'https://res.cloudinary.com/dv0eaik7h/image/upload/v1749708621/global-business_bxe79k.webp',
        component: <WhitepaperTwo authors = {
            [
                {
                    name: "Senthilvelan Natarajan",
                    role: "Co-Founder & CTO",
                    image: "/velan.png"
                },
                {
                    name: "Sourish Ghosh",
                    role: "Growth Manager",
                    image: "/sourish.jpeg"
                } 
            ]
        }/>,
        pdfUrl: '/whitepapers/Unlocking Enterprise Transformation through Market Innovation Adoption.pdf',
        url: '/ynsights/unlocking-industrial-transformation-through-market-innovation-adoption',
    },
];

export default whitepapers;
