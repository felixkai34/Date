import { Rating } from "flowbite-react";
import { useState } from "react";

export default function RateMe({ goToNextStep }) {

    const [rating, setRating] = useState(0); // Track the selected stars

    // Function to handle star clicks
    const handleStarClick = (index) => {
        setRating(index + 1); // Set rating to the clicked star index + 1
    };

    return (
        <main className=" h-screen flex flex-col justify-center items-center">
            <img className=" w-72" src="https://media.tenor.com/zkaB7Dlry8YAAAAi/hug.gif" alt="sticker" />
            <h1 className="text-3xl text-red-500 mt-10 text-center">
                Rate Me
            </h1>

            <Rating className=" mt-5" size="lg">
                {[...Array(5)].map((_, index) => (
                    <Rating.Star
                        key={index}
                        filled={index < rating} // Fill stars up to the selected rating
                        onClick={() => handleStarClick(index)} // Handle clicks
                    />
                ))}
            </Rating>

            <button
                onClick={() => goToNextStep(rating)}
                className="mt-7 px-10 py-4 text-xl rounded-lg shadow-md bg-rose-600 text-white hover:bg-rose-700"
            >
                Continue ❤️
            </button>
        </main>
    )
}