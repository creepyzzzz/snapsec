import React from 'react';
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider';

const logos = [
  { src: "/logos/aws-dark-logo.svg", alt: "AWS", height: "h-8" },
  { src: "/logos/azure-plain-wordmark-logo.svg", alt: "Azure", height: "h-14" },
  { src: "/logos/cloudflare-logo.svg", alt: "Cloudflare", height: "h-6" },
  { src: "/logos/datadog-logo.svg", alt: "Datadog", height: "h-8" },
  { src: "/logos/digitalocean-original-wordmark-logo.svg", alt: "DigitalOcean", height: "h-10" },
  { src: "/logos/mongodb-logo.svg", alt: "MongoDB", height: "h-7" },
  { src: "/logos/vercel-logo.svg", alt: "Vercel", height: "h-6" },
];

const Logos: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black py-10 border-b border-zinc-200 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-8 text-left">
          Protecting the world's most innovative companies
        </p>
        
        <div className="relative">
          {/* Gradient Masks for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

          <InfiniteSlider gap={80} speed={40}>
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center px-4">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.height} w-auto grayscale brightness-0 dark:invert opacity-30 hover:opacity-100 hover:grayscale-0 hover:brightness-100 hover:invert-0 hover:[filter:invert(31%)_sepia(93%)_saturate(1412%)_hue-rotate(213deg)_brightness(97%)_contrast(98%)] dark:hover:[filter:invert(63%)_sepia(91%)_saturate(3015%)_hue-rotate(193deg)_brightness(101%)_contrast(101%)] transition-all duration-500 cursor-pointer`}
                />
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
};

export default Logos;
