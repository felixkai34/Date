import { useState } from "react";
import AskFordate from "./Pages/AskForDate";
import ChooseDate from "./Pages/ChooseDate";
import ChooseFood from "./Pages/ChooseFood";
import ChooseMovie from "./Pages/ChooseMovie";
import RateMe from "./Pages/RateMe";
import End from "./Pages/End";
import HeartAnimation from "./Pages/HeartAnimation";

export default function App() {
	const [currentStep, setCurrentStep] = useState(1);
	const [data, setData] = useState([]);

	const goToNextStep = (Data) => {
		setCurrentStep((prevStep) => prevStep + 1);
		setData((prevData) => {
			const updatedData = [...prevData, Data]; 
			return updatedData; 
		});
	};	

	return (
		<div>
			<HeartAnimation />
			{currentStep === 1 && <AskFordate goToNextStep={goToNextStep} />}
			{currentStep === 2 && <ChooseDate goToNextStep={goToNextStep} />}
			{currentStep === 3 && <ChooseFood goToNextStep={goToNextStep} />}
			{currentStep === 4 && <ChooseMovie goToNextStep={goToNextStep} />}
			{currentStep === 5 && <RateMe goToNextStep={goToNextStep} />}
			{currentStep === 6 && <End DT={[data[1]?.date,data[1]?.time]} />}
		</div>
	);
}
