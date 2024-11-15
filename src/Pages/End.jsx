export default function End({ DT }) {
    const date = new Date(DT[0]);
    const time = DT[1];

    const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    }).replace(/,/g, "");

    const formattedTime = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    });

    return (
        <main className="h-screen flex flex-col justify-center items-center">
            <img
                className="w-60"
                src="https://media1.tenor.com/m/Knr7GDs-bJEAAAAC/muach.gif"
                alt="sticker"
            />
            <h1 className="text-4xl text-red-500 mt-10 text-center">
                See you soon!! ❤️
            </h1>
            <h1 className="text-2xl text-red-500 mt-10 text-center">
                {formattedDate}, {formattedTime}
            </h1>
        </main>
    );
}
