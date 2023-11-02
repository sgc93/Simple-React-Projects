import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 160,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 100,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 222,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 232,
		photoName: "pizzas/funghi.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 145,
		photoName: "pizzas/salamino.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 150,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

// creating components

function Header() {
	// const style = {
	// 	color: "green",
	// 	fontSize: "40px",
	// 	textTransform: "uppercase",
	// 	letterSpacing: "3px",
	// };
	const style = {};
	return (
		<header className="header">
			<h1 style={style}>Hash# Pizzeria</h1>
		</header>
	);
}

function Menu() {
	const NumOfPizza = pizzaData.length;
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{NumOfPizza > 0 ? (
				<>
					<p>
						Authentic Italian and Ethiopian Pizzas. {NumOfPizza} dishes to
						choose from. All organic, all delicious.
					</p>
					<ul className="pizzas">
						{pizzaData.map((pizza) => {
							return <Pizza myPizza={pizza} key={pizza.name} />;
						})}
					</ul>
				</>
			) : (
				<p>We are still working on our menu, please come back later :)</p>
			)}
		</main>
	);
}

function Pizza({ myPizza }) {
	const taxedPrice = myPizza.price + myPizza.price * 0.15;
	return (
		<li className={`pizza ${myPizza.soldOut && "sold-out"}`}>
			<img src={myPizza.photoName} alt={myPizza.photoName}></img>
			<div>
				<h3>{myPizza.name}</h3>
				<p>{myPizza.ingredients}</p>
				<span>{myPizza.soldOut ? "SOLD OUT" : `${taxedPrice} ETB`}</span>
			</div>
		</li>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 1;
	const closeHour = 22;
	const isOpened = hour >= openHour && hour <= closeHour;
	console.log(hour);
	console.log(isOpened);
	return (
		<footer className="footer">
			{isOpened ? (
				<Order closeHour={closeHour} />
			) : (
				<Closed openHour={openHour} closeHour={closeHour} />
			)}
		</footer>
	);
}

function Order({ closeHour }) {
	return (
		<div className="order">
			<p>We're open until {closeHour}:00, come and visit us or order online.</p>
			<button className="btn">Order</button>
		</div>
	);
}

function Closed({ openHour, closeHour }) {
	return (
		<div className="order">
			<p>
				CLOSED! We are pleased to serve you between {openHour}:00 and{" "}
				{closeHour}
				:00.
			</p>
			<button className="btn">Set Reminder</button>
		</div>
	);
}
// rendering react app in react-v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// rendering react app in react<v18
// React.render(<App />);  // remove 'client' in importing ReactDOM
