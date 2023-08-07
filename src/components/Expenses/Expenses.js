import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = () => {
  const [filterInfoText, setFilterInfoText] = useState("2019,2021 and 2022");
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  function filter(date) {
    const expense = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === date
    );
    console.log(date);
    console.log(expense);
    if (date === "2019") {
      setFilterInfoText("2020, 2021 & 2022");
    } else if (date === "2020") {
      setFilterInfoText("2019, 2021 & 2022");
    } else if (date === "2021") {
      setFilterInfoText("2019, 2020 & 2022");
    } else {
      setFilterInfoText("2019, 2020 & 2021");
    }
  }

  return (
    <div>
      <Card className="expenses">
        {/* ovo je kada zelimo da ubacimo ceo objekat od jednom */}
        {/* <ExpenseItem expense={expenses[0]}></ExpenseItem> */}
        {/* a ovo kada zelimo da ubacujemo po deo i deo iz objekta */}
        <ExpensesFilter onChange={filter} />
        <p>Data for years {filterInfoText} is hidden.</p>
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
