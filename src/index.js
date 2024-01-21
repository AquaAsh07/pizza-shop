import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <main className="container">
      <Header />
      <Menu />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Joruri Pizzas</h1>
    </header>
  );
}

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozzarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozzarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozzarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const availablePizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Pizza Menu</h2>
      {availablePizzas > 0 ? (
        <>
          <p>
            Best italian pizza shop in Bangladesh. six delicious amazing pizza
            to choose from.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaEl={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We are working on our menu. please check latter 😊</p>
      )}

      {/* <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato and mozzarella"
        photoName="pizzas/margherita.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozzarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozzarella mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozzarella, and pepperoni"
        price={15}
        photoName="pizzas/salamino.jpg"
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozzarella, ham, arugula, and burrata cheese"
        price={18}
        photoName="pizzas/prosciutto.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaEl }) {
  // if (pizzaEl.soldOut) return null;

  return (
    <li className={`pizza ${pizzaEl.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaEl.photoName} alt={pizzaEl.name}></img>
      <div>
        <h3>{pizzaEl.name}</h3>
        <p>{pizzaEl.ingredients}</p>
        <span>{pizzaEl.soldOut ? "SOLD OUT" : pizzaEl.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert("we are currently open");
  // else alert("we are currently close");

  return (
    <footer className="footer">
      {isOpen ? (
        <Time closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are currently closed please check between {openHour}:00 from{" "}
          {closeHour}:00 👍
        </p>
      )}
    </footer>
  );
}

function Time({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're Open Until from {openHour}:00 to {closeHour}:00. Come Check Us or
        Order Online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
