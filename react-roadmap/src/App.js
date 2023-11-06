import { useState } from "react";

const steps = [
	"JSX (JavaScript XML)",
	"Components and Props",
	"State and Lifecycle",
	"Handling Events",
	"Conditional Rendering",
	"Lists and Keys",
	"Forms and Controlled Components",
	"Composition vs Inheritance",
	"Handling Asynchronous Operations",
	"React Router for Single Page Applications (SPAs)",
	"Context API for Global State Management",
	"Higher-Order Components (HOCs) and Render Props",
	"Hooks (useState, useEffect, useContext, etc.)",
	"Error Boundaries",
	"Performance Optimization Techniques",
	"Redux or MobX for Advanced State Management",
	"Server-Side Rendering (SSR) and Client-Side Rendering (CSR)",
	"Next.js or Gatsby.js for Building Static Sites",
	"Testing with Jest and Enzyme",
	"Advanced Patterns (Render-props, Compound Components, etc.)",
];

export default function App() {
	const [step, setStep] = useState(1);
	const [remainingSteps, setRemainingSteps] = useState(19);
	const [isOpen, setIsOpen] = useState(true);

	function handlePrevious() {
		if (step > 1) {
			setStep(step - 1);
			setRemainingSteps(remainingSteps + 1);
		}
	}

	function handleNext() {
		if (step < 20) {
			setStep(step + 1);
			setRemainingSteps(remainingSteps - 1);
		}
	}

	function handleClose() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<CloseBtn handleClose={handleClose} />
			{isOpen && (
				<div className="steps">
					<Header />
					<div className="content">
						<Nubmers step={step} remainingSteps={remainingSteps} />
						<p className="message">
							Step {step}: {steps[step - 1]}
						</p>
						<Buttons handlePrevious={handlePrevious} handleNext={handleNext} />
					</div>
				</div>
			)}
		</>
	);
}

function CloseBtn({ handleClose }) {
	return (
		<button className="close" onClick={handleClose}>
			&times;
		</button>
	);
}

function Header() {
	return (
		<h3>
			Here is a breakdown of core points to learn in React.js, categorized into
			different proficiency levels _____ By chatGPT
		</h3>
	);
}

function Nubmers({ step, remainingSteps }) {
	let level = "Beginner Level";
	if (step > 5 && step <= 10) {
		level = "Intermediate Level";
	} else if (step > 10 && step <= 15) {
		level = "Advanced Level";
	} else if (step > 15) {
		level = "Professional Level";
	}
	return (
		<div className="numbers">
			<div className="learned-steps active">{step}</div>
			<div className="level">{level}</div>
			<div className="remain-steps">
				remaining <span className="active">{remainingSteps}</span>
			</div>
		</div>
	);
}

function Buttons({ handlePrevious, handleNext }) {
	return (
		<div className="buttons">
			<button
				style={{ backgroundColor: "#7950f2", color: "#fff" }}
				onClick={handlePrevious}
			>
				Previous
			</button>
			<button
				style={{ backgroundColor: "#7950f2", color: "#fff" }}
				onClick={handleNext}
			>
				Next
			</button>
		</div>
	);
}
