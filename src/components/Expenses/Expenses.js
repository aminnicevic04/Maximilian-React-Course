import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ items }) => {
  // const [filterInfoText, setFilterInfoText] = useState("2019,2021 and 2022");

  // function filter(date) {
  //   const expense = items.filter(
  //     (expense) => expense.date.getFullYear().toString() === date
  //   );
  //   console.log(date);
  //   console.log(expense);
  //   if (date === "2019") {
  //     setFilterInfoText("2020, 2021 & 2022");
  //   } else if (date === "2020") {
  //     setFilterInfoText("2019, 2021 & 2022");
  //   } else if (date === "2021") {
  //     setFilterInfoText("2019, 2020 & 2022");
  //   } else {
  //     setFilterInfoText("2019, 2020 & 2021");
  //   }
  // }

  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return (
      filteredYear === "All" ||
      expense.date.getFullYear().toString() === filteredYear
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChange={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
