import React from 'react';

const cases = [
  { sector: 'Healthcare', problem: 'Slow diagnostics', solution: 'AI triage', impact: '20% faster results' },
  { sector: 'Finance', problem: 'Manual underwriting', solution: 'Automated risk scoring', impact: '30% more accurate' },
  { sector: 'Manufacturing', problem: 'Unplanned downtime', solution: 'Predictive maintenance', impact: '15% reduction in outages' }
];

const IndustryUseCases = () => {
  return (
    <section id="use-cases" className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-customBlack">Industry Use Cases</h2>
      </div>
      <div className="flex overflow-x-auto gap-6 px-4 pb-4 scrollbar-thin">
        {cases.map((c) => (
          <div key={c.sector} className="min-w-[260px] bg-white shadow rounded-xl p-6 flex-shrink-0">
            <div className="font-medium text-customBlue mb-2">{c.sector}</div>
            <div className="text-sm text-customGreyishBlack space-y-1">
              <p><strong>Problem:</strong> {c.problem}</p>
              <p><strong>Solution:</strong> {c.solution}</p>
              <p><strong>Impact:</strong> {c.impact}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IndustryUseCases;
