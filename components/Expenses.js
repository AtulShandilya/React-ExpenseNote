import './Expenses.css'
// import ExpenseItem from './ExpenseItem'
import ExpenseFilterHeader from "./ExpenseFilterHeader";
import Card from './Card'
import FilteredExpenses from "./FilteredExpenses";
function Expenses(props){
    // console.log("items type:",typeof(props.items))
    // console.log("items:",props.items)

    let index=-1;
    return(
        <Card className="expenses">
            <ExpenseFilterHeader setFilteredYear={props.setFilteredYear} filteredYear={props.filteredYear}
                                 expenses={props.items} />
            {
                props.items.map(expense =>
                    <FilteredExpenses title={expense.title} filteredYear={props.filteredYear}
                                 date={expense.date} amount={expense.amount}
                                 delExpense={props.delExpense} index={++index}
                                      key={expense.title+expense.date}
                    />
                )
            }
        </Card>

    )
}

export default Expenses