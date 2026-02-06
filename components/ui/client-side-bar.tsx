import React, { useEffect, useState } from 'react';

export const ClientSideBar = ({ index }: { index: number }) => {
    const [height, setHeight] = useState('10%');

    useEffect(() => {
        setHeight(`${Math.random() * 100}%`);
    }, []);

    return (
        <div
            className="w-1 bg-zinc-600 rounded-t-sm animate-pulse"
            style={{
                height,
                animationDelay: `${index * 0.05}s`
            }}
        ></div>
    );
};
