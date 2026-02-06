import React from 'react';

const testimonials = [
    {
        quote: "The automated recon workflows cut our triage time by 70%. Synapse Suite captures context that other tools miss completely.",
        author: "Alex Chen",
        role: "Staff Security Engineer",
        company: "FinTech Corp"
    },
    {
        quote: "Finally, a security platform that understands developer workflows. The API integration is seamless and the noise-to-signal ratio is incredible.",
        author: "Sarah Miller",
        role: "DevSecOps Lead",
        company: "CloudNative"
    },
    {
        quote: "We replaced three separate tools with Synapse Suite. The continuous monitoring gives us peace of mind that point-in-time scans never could.",
        author: "David Kumar",
        role: "CISO",
        company: "HealthData Inc"
    },
    {
        quote: "The visual asset mapping is a game changer. We instantly saw shadow IT we had no idea existed.",
        author: "Jessica Lee",
        role: "Director of Infrastructure",
        company: "GlobalRetail"
    },
    {
        quote: "Synapse's guardrails allowed us to safely deploy autonomous agents in our prod environment without fear.",
        author: "Michael Ross",
        role: "VP of Engineering",
        company: "SaaS Valley"
    }
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-[450px] p-8 mx-4 rounded-xl border border-white/5 bg-zinc-900/10 backdrop-blur-sm group hover:border-white/10 transition-colors duration-500">
        <div className="flex flex-col h-full justify-between gap-6">
            <p className="text-zinc-400 text-base font-normal leading-7 group-hover:text-zinc-300 transition-colors duration-500">
                "{item.quote}"
            </p>

            <div className="flex flex-col gap-1">
                <span className="text-zinc-200 text-sm font-medium">{item.author}</span>
                <span className="text-zinc-600 text-xs uppercase tracking-wider font-medium">{item.role}, {item.company}</span>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section className="py-32 bg-black border-t border-zinc-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
                <h2 className="text-2xl font-medium text-white mb-3">Trusted by leading security teams</h2>
                <p className="text-zinc-600 text-sm">Empowering the next generation of defense.</p>
            </div>

            <div className="relative w-full">
                {/* Clean Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none"></div>

                {/* Single Row: Right to Left */}
                <div className="flex w-max animate-marquee will-change-transform" style={{ animationDuration: '120s' }}>
                    {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                        <TestimonialCard key={`testimonial-${index}`} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
