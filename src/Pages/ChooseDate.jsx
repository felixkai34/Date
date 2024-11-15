import { Datepicker, Toast } from "flowbite-react";
import { useState } from "react";

export default function ChooseDate({ goToNextStep }) {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [toast, setToast] = useState("hide");

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1); // Set min date to minDate

    const maxDate = new Date(minDate);
    maxDate.setMonth(minDate.getMonth() + 1); // Set max date to one month after minDate

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    return (
        <main className=" relative min-h-screen flex flex-col items-center justify-evenly md:p-5 p-7 my-10 md:my-0">
            {toast === "show" && (
                <Toast className=" sticky top-10 z-50">
                    <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
                        🥺
                    </div>
                    <div className="ml-3 text-sm font-normal"> Pls Select Both Date and Time </div>
                    <Toast.Toggle onDismiss={() => setToast("hide")} />
                </Toast>)}
            <div className="flex flex-col md:flex-row w-full justify-evenly items-center space-y-5 md:space-y-0">
                <div className="flex flex-col items-center justify-center text-center">
                    <img
                        className="w-40 md:w-60 mb-3"
                        src="https://i.redd.it/c7vtwaqft0b51.jpg"
                        alt="yay"
                    />
                    <h1 className="text-2xl md:text-3xl text-red-500">YEAYY !! Hapi Hapi</h1>
                </div>

                <div className="flex flex-col md:flex-row items-center space-y-5 transform scale-90 md:scale-100">
                    <Datepicker
                        inline
                        selected={selectedDate}
                        onChange={handleDateChange}
                        title="Choose date to date ❤️"
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                    <div className="ml-7 border-gray-200 dark:border-gray-800 w-full">
                        <h3 className="text-gray-900 dark:text-white text-base font-medium text-center mb-3">
                            {selectedDate ? selectedDate.toDateString() : "Select a date"}
                        </h3>

                        {/* Time slots */}
                        <ul className="grid grid-cols-2 gap-2 mt-5">
                            {["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"].map(
                                (time, index) => (
                                    <li key={index}>
                                        <input
                                            type="radio"
                                            id={`time-${index}`}
                                            name="timetable"
                                            value={time}
                                            checked={selectedTime === time}
                                            onChange={() => handleTimeSelect(time)}
                                            className="hidden peer"
                                        />
                                        <label
                                            htmlFor={`time-${index}`}
                                            className=" px-7 inline-flex items-center justify-center w-full p-2 text-sm font-medium text-center bg-white border rounded-lg cursor-pointer text-blue-600 border-blue-600 dark:border-blue-500 peer-checked:bg-blue-600 peer-checked:text-white dark:bg-gray-900 dark:text-blue-500 dark:hover:bg-blue-600"
                                        >
                                            {time}
                                        </label>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
            </div>

            <button
                className="mt-7 px-10 py-4 text-xl rounded-lg shadow-md bg-rose-600 text-white hover:bg-rose-700"
                onClick={() => {
                    if (selectedDate && selectedTime) {
                        goToNextStep({ date: selectedDate, time: selectedTime });
                    } else {
                        setToast("show")
                    }
                }}
            >
                Continue ❤️
            </button>
        </main>
    );
}
