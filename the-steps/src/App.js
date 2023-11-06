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
			<div className="numbers">
				<div className={`${step >= 1 ? "active" : ""} `}>1</div>

				<div className={`${step >= 2 ? "active" : ""} `}>2</div>

				<div className={`${step >= 3 ? "active" : ""} `}>3</div>
			</div>
			<p className="message">{messages[step - 1]}</p>
			<div className="buttons">
				<button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
					Previous
				</button>
				<button style={{ backgroundColor: "#7950f2", color: "#fff" }}>
					Next
				</button>
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
