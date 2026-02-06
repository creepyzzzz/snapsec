'use client';
import { cn } from '@/lib/utils';
import { motion, useSpring, useTransform, SpringOptions } from 'framer-motion';
import { useEffect } from 'react';

export type AnimatedNumberProps = {
    value: number;
    className?: string;
    springOptions?: SpringOptions;
    as?: React.ElementType;
};

export function AnimatedNumber({
    value,
    className,
    springOptions,
    as = 'span',
}: AnimatedNumberProps) {
    // Using motion() factory to create the component dynamically
    const MotionComponent = motion(as as any);

    const spring = useSpring(value, springOptions);
    const display = useTransform(spring, (current) =>
        Math.round(current).toLocaleString()
    );

    useEffect(() => {
        spring.set(0);
        setTimeout(() => spring.set(value), 50);
    }, [spring, value]);

    return (
        <MotionComponent className={cn('tabular-nums', className)}>
            {display}
        </MotionComponent>
    );
}
