"use client";

import React, { CSSProperties, forwardRef, useEffect, useState } from 'react';

interface BackgroundProps {
    position?: CSSProperties['position'];
    gradient?: boolean;
    dots?: boolean;
    lines?: boolean;
    shootingStars?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(({
    position = 'fixed',
    gradient = true,
    dots = true,
    lines = true,
    shootingStars = false,
    className,
    style
}, ref) => {
    const [stars, setStars] = useState<Array<{ id: number, top: string, left: string }>>([]);

    useEffect(() => {
        if (shootingStars) {
            const interval = setInterval(() => {
                const newStar = {
                    id: Math.random(),
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                };
                setStars((prevStars) => [...prevStars, newStar]);

                setTimeout(() => {
                    setStars((prevStars) => prevStars.filter((star) => star.id !== newStar.id));
                }, 5000); // Adjust as needed
            }, Math.random() * 5000 + 5000); // Adjust as needed

            return () => clearInterval(interval);
        }
    }, [shootingStars]);

    return (
        <>
            {gradient && (
                <div
                    ref={ref}
                    className={className}
                    style={{
                        position,
                        top: '0',
                        left: '0',
                        zIndex: '0',
                        width: '100%',
                        height: '100%',
                        filter: 'contrast(1.5)',
                        background: 'radial-gradient(100% 100% at 49.99% 0%, var(--static-transparent) 0%, var(--page-background) 100%), radial-gradient(87.4% 84.04% at 6.82% 16.24%, var(--brand-background-medium) 0%, var(--static-transparent) 100%), radial-gradient(217.89% 126.62% at 48.04% 0%, var(--accent-solid-medium) 0%, var(--static-transparent) 100%)',
                        ...style,
                    }}>
                </div>
            )}
            {dots && (
                <div
                    ref={ref}
                    className={className}
                    style={{
                        position,
                        zIndex: '0',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'radial-gradient(var(--brand-on-background-weak) 0.5px, var(--static-transparent) 0.5px)',
                        opacity: '0.25',
                        backgroundSize: 'var(--static-space-16) var(--static-space-16)',
                        ...style,
                    }}>
                </div>
            )}
            {lines && (
                <div
                    ref={ref}
                    className={className}
                    style={{
                        position,
                        zIndex: '0',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'repeating-linear-gradient(45deg, var(--brand-on-background-weak) 0, var(--brand-on-background-weak) 0.5px, var(--static-transparent) 0.5px, var(--static-transparent) var(--static-space-8))',
                        maskImage: 'linear-gradient(to bottom left, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 70%)',
                        maskSize: '100% 100%',
                        maskPosition: 'top right',
                        maskRepeat: 'no-repeat',
                        opacity: '0.2',
                        ...style,
                    }}>
                </div>
            )}
            {shootingStars && stars.map((star) => (
                <div
                    key={star.id}
                    className={className}
                    style={{
                        position: 'absolute',
                        top: star.top,
                        left: star.left,
                        width: '1px',
                        height: '1px',
                        background: 'linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
                        animation: 'shooting-star 5s ease-out forwards',
                        perspective: '1000px',
                        ...style,
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes shooting-star {
                    0% {
                        width: 1px;
                        opacity: 0;
                        transform: translateZ(-1000px) scale(0.1) rotateY(45deg);
                        transform-origin: left center;
                    }
                    20% {
                        width: 400px;
                        opacity: 1;
                        transform: translateZ(-500px) scale(0.5) rotateY(45deg);
                    }
                    80% {
                        width: 400px;
                        opacity: 1;
                        transform: translateZ(0px) scale(1) rotateY(45deg);
                    }
                    100% {
                        width: 0px;
                        opacity: 0;
                        transform: translateZ(300px) scale(2) rotateY(45deg);
                        transform-origin: left center;
                    }
                }
            `}</style>
        </>
    );
});

Background.displayName = 'Background';

export { Background };
