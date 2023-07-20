import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = () => {
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
    {
      id: "i3",
      title: "na kurve",
      amount: 1000,
      date: new Date(2021, 11, 10),
    },
  ];

  function filter(date) {
    const expense = expenses.filter(
      (expense) => expense.date.getFullYear().toString() === date
    );
    console.log(date);
    console.log(expense);
  }

  return (
    <div>
      <Card className="expenses">
        {/* ovo je kada zelimo da ubacimo ceo objekat od jednom */}
        {/* <ExpenseItem expense={expenses[0]}></ExpenseItem> */}
        {/* a ovo kada zelimo da ubacujemo po deo i deo iz objekta */}
        <ExpensesFilter onChange={filter} />
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[4].title}
          amount={expenses[4].amount}
          date={expenses[4].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};

export default Expenses;
