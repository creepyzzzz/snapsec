import React from 'react';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';

const testimonials = [
    {
        quote: "The autonomous discovery engine surfaced shadow IT assets we hadn't seen in years. It's essentially a self-updating map of our entire cloud perimeter.",
        author: "Alex Chen",
        role: "Staff Protection Engineer",
        company: "FinTech Global"
    },
    {
        quote: "The predictive scanning has practically eliminated the noise for our developers. We only get alerted when there's a validated, exploitable finding.",
        author: "Sarah Miller",
        role: "DevOps Protection Lead",
        company: "CloudNative"
    },
    {
        quote: "Aether's behavioral reasoning found logic flaws in our payment flow that traditional scanners missed for months. The context it provides is unmatched.",
        author: "David Kumar",
        role: "CISO",
        company: "GuardPayments"
    },
    {
        quote: "Moving from a static scanner to an intelligence layer has transformed our App Defense program. We're now proactive instead of reactive.",
        author: "Jessica Lee",
        role: "Director of Infrastructure",
        company: "MarketHub"
    },
    {
        quote: "The guardrails are the best I've seen. We can safely deploy autonomous agents in production with full audit trails for every action taken.",
        author: "Michael Ross",
        role: "VP of Engineering",
        company: "SaaS Valley"
    }
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-[290px] xs:w-[320px] md:w-[450px] p-1.5 md:p-2 rounded-3xl bg-gradient-to-br from-blue-300/30 via-white/20 to-blue-400/30 dark:from-blue-600/10 dark:via-zinc-900/20 dark:to-blue-800/20 backdrop-blur-2xl border border-white/60 dark:border-blue-300/10 shadow-[0_4px_20px_rgba(0,0,0,0.03),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(255,255,255,0.3)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),inset_0_1px_2px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(255,255,255,0.05)] overflow-hidden group">
        <div className="relative z-10 bg-white/90 dark:bg-zinc-950/80 backdrop-blur-md rounded-2xl p-8 shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] dark:shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] h-full flex flex-col justify-between gap-8 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 transition-shadow duration-500">
            <div className="relative">
                <svg
                    className="absolute -top-4 -left-4 h-8 w-8 text-blue-200 dark:text-blue-900/30 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-zinc-600 dark:text-zinc-400 text-lg font-normal leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-zinc-300 transition-colors duration-500 relative z-10">
                    {item.quote}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xs shadow-inner">
                    {item.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex flex-col">
                    <span className="text-zinc-950 dark:text-zinc-200 text-[15px] font-medium leading-tight">{item.author}</span>
                    <span className="text-blue-600 dark:text-blue-500 text-[12px] uppercase tracking-widest font-semibold mt-1">
                        {item.role} @ {item.company}
                    </span>
                </div>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <div className="py-20 md:py-32 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-900 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-20 text-center">
                <h2 className="text-2xl md:text-4xl font-medium text-zinc-950 dark:text-white mb-4 tracking-tight leading-tight">
                    Trusted by leading protection teams
                </h2>
                <p className="text-zinc-600 dark:text-zinc-500 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
                    Empowering the next generation of defense with autonomous intelligence and proactive risk management.
                </p>
            </div>

            <div className="relative w-full">
                {/* Clean Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-white via-white dark:from-black dark:via-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-white via-white dark:from-black dark:via-black to-transparent z-10 pointer-events-none" />

                <InfiniteSlider gap={32} speed={30} speedOnHover={15}>
                    {testimonials.map((item, i) => (
                        <TestimonialCard key={`testimonial-${i}`} item={item} />
                    ))}
                </InfiniteSlider>
            </div>
        </div>
    );
};

export default Testimonials;
