import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { sanity } from '../../sanityClient';
import Navbar from '../Navbar';
import Footer from '../Footer';

const YnsightDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [ynsight, setYnsight] = useState(null);
    const sectionsRef = useRef({});

    useEffect(() => {
        sanity
            .fetch(
                `*[_type == "ynsight" && slug.current == $slug][0]{
                    title,
                    slug,
                    industry,
                    usecaseDescription,
                    problemStatement,
                    solution,
                    impact,
                    testimonials,
                    competitorPositioning,
                    enterpriseName,
                    solutionProviderName,
                    "imageUrl": thumbnail.asset->url,
                    _createdAt
                }`,
                { slug }
            )
            .then(setYnsight)
            .catch(console.error);
    }, [slug]);

    const formatDate = (iso) =>
        new Date(iso).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

    const sectionList = [
        { label: 'Problem Statement', id: 'problem' },
        { label: 'Solution', id: 'solution' },
        { label: 'Impact', id: 'impact' },
        { label: 'Competitor Positioning', id: 'competitor' },
        { label: 'Solution Provider', id: 'provider' },
        { label: 'Enterprise', id: 'enterprise' },
        ...(ynsight?.testimonials?.length > 0 ? [{ label: 'Testimonials', id: 'testimonials' }] : []),
    ];

    if (!ynsight) return <div className="p-8 text-center">Loading...</div>;

    return (
        <>
            <Navbar />

            <div className="pt-20">
                {/* Header Section */}
                <div className="flex flex-col gap-2 bg-bgBlue px-8 py-4">
                    <p className="text-sm text-customGreyishBlack">
                        What We Think → {ynsight.industry} → Ynsight
                    </p>
                    <h1 className="text-2xl font-bold text-customBlack mt-2">{ynsight.title}</h1>
                    <div className="flex items-center gap-3 mt-3">
                        {ynsight.industry && (
                            <span className="text-xs bg-customBlue text-white font-medium px-3 py-1 rounded-full">
                                {ynsight.industry}
                            </span>
                        )}
                        <span className="text-xs text-customGreyishBlack">
                            {formatDate(ynsight._createdAt)}
                        </span>
                    </div>
                </div>

                {/* Image */}
                {ynsight.imageUrl && (
                    <img
                        src={ynsight.imageUrl}
                        alt={ynsight.title}
                        className="w-full h-64 object-cover mb-8"
                    />
                )}

                {/* Main Content with Sidebar */}
                <div className="flex flex-col lg:flex-row gap-10 px-8 pb-12 items-start min-h-screen">
                    {/* Sidebar */}
                    <aside className="hidden lg:block w-1/5 border-r border-gray-200 pr-4 self-stretch">
                        <ul className="text-sm font-medium space-y-3 pt-2">
                            {sectionList.map(({ label, id }) => (
                                <li key={id}>
                                    <a
                                        href={`#${id}`}
                                        className="block px-3 py-2 rounded-md transition-all text-customGreyishBlack hover:text-customBlue hover:shadow-md"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Ynsight Content */}
                    <main className="flex-1 space-y-12">
                        <section id="problem" className="scroll-mt-32">
                            <h2 className="text-2xl font-semibold text-customBlue">Problem Statement</h2>
                            <p className="mt-2 text-customGreyishBlack">{ynsight.problemStatement}</p>
                        </section>

                        <section id="solution" className="scroll-mt-32">
                            <h2 className="text-2xl font-semibold text-customBlue">Solution</h2>
                            <p className="mt-2 text-customGreyishBlack">{ynsight.solution}</p>
                        </section>

                        <section id="impact" className="scroll-mt-32">
                            <h2 className="text-2xl font-semibold text-customBlue">Impact</h2>
                            <p className="mt-2 text-customGreyishBlack">{ynsight.impact}</p>
                        </section>

                        <section id="competitor" className="scroll-mt-32">
                            <h2 className="text-2xl font-semibold text-customBlue">Competitor Positioning</h2>
                            <p className="mt-2 text-customGreyishBlack">{ynsight.competitorPositioning}</p>
                        </section>

                        <section id="provider" className="scroll-mt-32">
                            <h2 className="text-2xl font-semibold text-customBlue">Solution Provider</h2>
                            <p className="mt-2 text-customGreyishBlack">{ynsight.solutionProviderName}</p>
                        </section>

                        <section id="enterprise" className="scroll-mt-32">
                            <h2 className="text-2xl font-semibold text-customBlue">Enterprise</h2>
                            <p className="mt-2 text-customGreyishBlack">{ynsight.enterpriseName}</p>
                        </section>

                        {ynsight.testimonials?.length > 0 && (
                            <section id="testimonials" className="scroll-mt-32">
                                <h2 className="text-2xl font-semibold text-customBlue">Testimonials</h2>
                                <ul className="list-disc ml-6 text-customGreyishBlack mt-2">
                                    {ynsight.testimonials.map((quote, i) => (
                                        <li key={i}>{quote}</li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Back Button */}
                        <div className="mt-12">
                            <button
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                    navigate(-1);
                                }}
                                className="text-sm font-medium bg-customBlue text-white rounded-md px-3 py-2"
                            >
                                ← Back
                            </button>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default YnsightDetail;
