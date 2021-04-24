import ExpenseItem from "./ExpenseItem";
function FilteredExpenses(props){
    // let filteredExpenses=[]
    // if(props.filteredYear==="All"){
    //     filteredExpenses=props.items.slice();
    // }else{
    //     props.items.map(expense =>{
    //         if(new Date(expense.date).getFullYear()==props.filteredYear){
    //             filteredExpenses=filteredExpenses.concat(expense)
    //         }
    //     })
    // }

    let filtered=0
    if(new Date(props.date).getFullYear()==props.filteredYear || props.filteredYear=="All") filtered=1;

    return(
        <div>
            {
                filtered ? (
                        <ExpenseItem title={props.title} key={props.title+props.date}
                                     date={props.date} amount={props.amount}
                                     delExpense={props.delExpense} index={props.index}
                                     key={props.title+ props.date}
                        />

                    )
                    :(
                        <></>
                    )
            }
        </div>
    )

}

export default FilteredExpenses