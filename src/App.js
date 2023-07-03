import Expenses from "./components/Expenses/Expenses";

function App() {
  return <Expenses />;
}

export default App;

//USing JSX code
// return(
//   <div>
//     <h2>Lets get started</h2>
//     <Expenses items={expenses} />
//   </div>
// )

//Using react object
// return React.createElement(
//   "div",
//   {},
//   React.createElement("h2", {}, "Lets get started"),
//   React.createElement(Expenses, { items: expenses })
// );
// kada pisemo kod ovako onda moramo importovati react u svakom prethodnom fajlu
