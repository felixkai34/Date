import React, { useState } from 'react';

export default function AskForDate({ goToNextStep }) {
    const [transform, setTransform] = useState({ x: 0, y: 0 });


    const handleNoHover = () => {   
        const newX = (Math.random() - 0.5) * 200; // random value between -100 and 100
        const newY = (Math.random() - 0.5) * 200; // random value between -100 and 100
        setTransform({ x: newX, y: newY });

    };

    return (
        <main className="h-screen flex justify-center items-center flex-col">
            <img className=' w-60 mb-5' src="https://stickerly.pstatic.net/sticker_pack/uqCkLfpdVDMQjzsGzvMfgQ/W87RVV/33/98973c2a-1b4e-43df-9d90-3d91af03e32b.png" alt="love-cat-meme" />
            <h1 className="text-3xl text-red-500 animate-bounce m-5">Wanna date with me?</h1>
            <div className="mt-5 flex space-x-4 relative">
                <button
                    className="px-6 py-2 rounded-lg shadow-md bg-rose-600 text-white hover:bg-rose-700"
                    onClick={() => goToNextStep()}
                >
                    Yes
                </button>
                <button
                    className="px-6 py-2 rounded-lg shadow-md bg-gray-200 hover:bg-gray-300"
                    style={{
                        transform: `translate(${transform.x}px, ${transform.y}px)`,
                        transition: 'transform 0.2s ease'
                    }}
                    onMouseEnter={handleNoHover}
                    onClick={handleNoHover}
                >
                    No
                </button>
            </div>
        </main>
    );
}



