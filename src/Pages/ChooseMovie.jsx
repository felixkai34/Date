import { useState } from "react";

export default function ChooseMovie({ goToNextStep }) {
    const [selectedMovie, setSelectedMovie] = useState([]);

    const handleSelectedMovie = (movieName) => {
        setSelectedMovie((prevSelectedMovie) => {
            if (prevSelectedMovie.includes(movieName)) {
                return prevSelectedMovie.filter((movie) => movie !== movie);
            } else {
                return [...prevSelectedMovie, movieName];
            }
        });
    };

    return (
        <main className="py-10 md:py-0">
            <h1 className="text-3xl text-red-500 animate-bounce m-5 mt-10 text-center">
                What do you want to watch?
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { name: "My Fault", img: "https://m.media-amazon.com/images/M/MV5BZDA0ODE1NzMtMzRiZC00Y2UzLWEyMzgtZWY3YjdiY2Q3NzcyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
                    { name: "A Walk to Remember", img: "https://m.media-amazon.com/images/M/MV5BYjkxZWE0YjMtYTk2OS00ZmFjLTk2YjEtY2M3MGY4MzE4MGNkXkEyXkFqcGc@._V1_.jpg" },
                    { name: "The Notebook", img: "https://m.media-amazon.com/images/M/MV5BZjE0ZjgzMzYtMTAxYi00NGMzLThmZDktNzFlMzA2MWRmYWQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
                    { name: "La La Land", img: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg" },
                    { name: "Before Sunrise", img: "https://m.media-amazon.com/images/M/MV5BZDZhZmI1ZTUtYWI3NC00NTMwLTk3NWMtNDc0OGNjM2I0ZjlmXkEyXkFqcGc@._V1_.jpg" },
                    { name: "Crazy Rich Asians", img: "https://m.media-amazon.com/images/M/MV5BMTYxNDMyOTAxN15BMl5BanBnXkFtZTgwMDg1ODYzNTM@._V1_FMjpg_UX1000_.jpg" }
                ].map((movie) => (
                    <div
                        key={movie.name}
                        onClick={() => handleSelectedMovie(movie.name)}
                        className="flex flex-col justify-center items-center cursor-pointer"
                    >
                        <img className={`w-48 rounded-full aspect-square object-cover ${selectedMovie.includes(movie.name) ? ' ring-4 ring-red-500 ring-opacity-50 ' : 'border-2 border-transparent'}`} src={movie.img} alt={movie.name} />
                        <h1 className="font-bold text-red-500 mt-5">{movie.name}</h1>
                    </div>
                ))}
            </div>

            <div className=" flex justify-center">
                <button
                    onClick={() => goToNextStep(selectedMovie)}
                    className="mt-7 px-10 py-4 text-xl rounded-lg shadow-md bg-rose-600 text-white hover:bg-rose-700"
                >
                    Continue ❤️
                </button>
            </div>
        </main>
    );
}
