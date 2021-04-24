import React,{useState} from 'react';
import './NewExpenseForm.css'
const NewExpenseForm =(props)=>{
    const [newTitle,setTitle]=useState('');
    const [newAmount,setAmount]=useState('');
    const [newDate,setDate]=useState('');
    const newTitleHandler=(event)=>{setTitle(event.target.value)};
    const newAmountHandler=(event)=>{setAmount(event.target.value)};
    const newDateHandler=(event)=>{setDate(event.target.value)};

    const insertNewExpense=(event)=>{
        if(newDate==='' || newAmount==='' || newTitle ==='' ){
            event.preventDefault();
            alert(" Some Fields are Empty !!");
        }else {
            event.preventDefault();
            let newExpense=[{title:newTitle,amount:newAmount,date: new Date(newDate),key:newTitle+newDate}].concat(props.expenses)
            props.setExpenses(
                newExpense
            )
            props.writeFile(newExpense)
            if(props.filteredYear==new Date(newDate).getFullYear()){

            }else{
                props.setFilteredYear("All")
            }
            setTitle("")
            setAmount("");
            setDate("")
        }
    }
    return(
        <form onSubmit={insertNewExpense}>
            <div className="new-expense__controls ">
                <div className="new-expense__control new-expense__title">
                    <label>Title</label>
                    <input onChange={newTitleHandler}
                           className={'ne_Title'}
                           type={"text"}
                           value={newTitle}
                    />
                </div>
                <div className="new-expense__control new-expense__other">
                    <label>Amount</label>
                    <input onChange={newAmountHandler}
                           className={'ne_Other'}
                           type="Number"
                           min={0.01}
                           step={0.01}
                           value={newAmount}
                    />
                </div>
                <div className="new-expense__control new-expense__other">
                    <label>Date</label>
                    <input onChange={newDateHandler}
                           className={'ne_Other'}
                           type={"Date"} min={'2019-01-01'}
                           max={'2022-12-31'}
                           value={newDate}
                    />
                </div>
            </div>
            <div className={'new-expense__action'}>
                <button type={'submit'}>Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpenseForm