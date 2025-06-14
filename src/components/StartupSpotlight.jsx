import React from 'react';

const startups = [
  { logo: '/Netix.png', name: 'Netix', impact: 'Reduced energy costs 20%' },
  { logo: '/Pluralsight.png', name: 'Pluralsight', impact: 'Upskilled 5k+ developers' },
  { logo: '/DrLalPathLabs.png', name: 'Dr. Lal PathLabs', impact: 'AI lab automation' }
];

const StartupSpotlight = () => {
  return (
    <section id="startups" className="bg-bgBlue py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-customBlack">Startup Spotlight</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {startups.map((s) => (
          <div key={s.name} className="flex flex-col items-center max-w-[180px] text-center">
            <img src={s.logo} alt={s.name} className="h-12 mb-3 object-contain" />
            <span className="font-medium text-customBlack">{s.name}</span>
            <span className="text-sm text-customGreyishBlack">{s.impact}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StartupSpotlight;
