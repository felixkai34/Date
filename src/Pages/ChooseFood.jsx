import { useState } from "react";

export default function ChooseFood({ goToNextStep }) {
    const [selectedFoods, setSelectedFoods] = useState([]);

    const handleSelectFood = (foodName) => {
        setSelectedFoods((prevSelectedFoods) => {
            if (prevSelectedFoods.includes(foodName)) {
                // Remove food if already selected
                return prevSelectedFoods.filter((food) => food !== foodName);
            } else {
                // Add food to selection
                return [...prevSelectedFoods, foodName];
            }
        });
    };

    return (
        <main className="py-10 md:py-0">
            <h1 className="text-3xl text-red-500 animate-bounce m-5 mt-10 text-center">
                What do you want to eat?
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                    { name: "Mala Xiang Guo", img: "https://futuredish.com/wp-content/uploads/2020/06/Mala-Xiang-Guo-2-500x500.jpg" },
                    { name: "Sushi", img: "https://knifeandsoul.com/wp-content/uploads/2022/09/crunchy-roll-sushi-recipe-recipe-card.jpg" },
                    { name: "Hotpot", img: "https://blog.themalamarket.com/wp-content/uploads/2020/11/hot-pot-in-stainless-pot-v2-1024x768.jpg" },
                    { name: "Fried Chicken", img: "https://www.lubzonline.com/wp-content/uploads/2020/03/1E72DCC8-55FD-466E-9F07-347B4B561D32-scaled.jpeg" },
                    { name: "Pizza", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHr4FiIslJFTrLxaoRgE1djF3rTfgBDS-kOw&s" },
                    { name: "Ramen", img: "https://glebekitchen.com/wp-content/uploads/2017/04/tonkotsuramenfront.jpg" }
                ].map((food) => (
                    <div
                        key={food.name}
                        onClick={() => handleSelectFood(food.name)}
                        className="flex flex-col justify-center items-center cursor-pointer"
                    >
                        <img className={`w-48 rounded-full aspect-square ${selectedFoods.includes(food.name) ? ' ring-4 ring-red-500 ring-opacity-50 ' : 'border-2 border-transparent'}`} src={food.img} alt={food.name} />
                        <h1 className="font-bold text-red-500 mt-5">{food.name}</h1>
                    </div>
                ))}
            </div>
            
            <div className=" flex justify-center">
                <button
                    onClick={() => goToNextStep(selectedFoods)}
                    className="mt-7 px-10 py-4 text-xl rounded-lg shadow-md bg-rose-600 text-white hover:bg-rose-700"
                >
                    Continue ❤️
                </button>
            </div>
        </main>
    );
}
