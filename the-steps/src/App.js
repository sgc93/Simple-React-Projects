const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

export default function App() {
	const step = 1;
	return (
		<div className="steps">
			<Header />
			<div className="content">
				<Nubmers step={step} />
				<p className="message">{messages[step - 1]}</p>
				<Buttons />
			</div>
		</div>
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

function Nubmers({ step }) {
	const remainingSteps = 40;
	return (
		<div className="numbers">
			<div className="learned-steps active">1</div>
			<div className="remain-step">
				Remaining <span className="active">{remainingSteps}</span>
			</div>
		</div>
	);
}

function Buttons() {
	return (
		<div className="buttons">
			<button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
				Previous
			</button>
			<button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
				Next
			</button>
		</div>
	);
}
