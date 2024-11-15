import React, { useEffect, useState } from 'react';

const HeartAnimation = () => {
    const [hearts, setHearts] = useState([]);

    // Generate new hearts at intervals
    useEffect(() => {
        const interval = setInterval(() => {
            const newHeart = {
                id: Date.now(),
                size: Math.random() * 2, // random size
                left: Math.random() * 100, // random left position
            };
            setHearts((prevHearts) => [...prevHearts, newHeart]);

            // Remove hearts after a delay
            setTimeout(() => {
                setHearts((prevHearts) =>
                    prevHearts.filter((heart) => heart.id !== newHeart.id)
                );
            }, 4000);
        }, 500); // generate a new heart every 500ms

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
            {hearts.map((heart) => (
                <span
                    key={heart.id}
                    className="absolute text-red-500 animate-float "
                    style={{
                        bottom : "10px",
                        left: `${heart.left}%`,
                        fontSize: `${heart.size}rem`,
                    }}
                >
                    ❤️
                </span>
            ))}
        </div>
    );
};

export default HeartAnimation;
