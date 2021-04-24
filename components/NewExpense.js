import NewExpenseForm from "./NewExpenseForm";
import Card from './Card'
import './NewExpense.css'
const NewExpense=(props)=>{
    return(
        <Card className={'new-expense'}>
            <div className="expensenote"> Expense Note</div>
            <NewExpenseForm expenses={props.expenses} setExpenses={props.setExpenses}
                            writeFile={props.writeFile} setFilteredYear={props.setFilteredYear}
                            filteredYear={props.filteredYear}
            />
        </Card>
    )

}
export default NewExpense