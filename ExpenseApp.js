import React,{useState} from 'react';
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
function ExpensesApp(props){
    const [expenses,setExpenses]=useState([]);
    const [first,setFirst]=useState(0);
    const [filteredYear,setFilteredYear]=useState(['All'])

    const ip='http://106.213.98.219:'
    const port='4000'
    const readUrl=ip+port+'/fileService?operation=read&filename=expenses.json'
    if (first==0){
        setFirst(1);
        fetch(readUrl).then(response=>response.json()).then(data=>{
            const fileObj=JSON.parse(JSON.parse(String(data[0])));
            setExpenses(fileObj);
        });
    }
    const writeFileObj=(fileObj)=>{
        let writeUrl=ip+port+'/fileService?operation=write&filename=expenses.json'
        writeUrl=writeUrl.concat('&fileobj=',JSON.stringify(fileObj))
        fetch(writeUrl);
    }
    const delExpense=(index)=>{
        setExpenses((prevExpenses)=>{
            return expenses.slice(0,index).concat(expenses.slice(index+1,expenses.length));
        })
        writeFileObj(expenses.slice(0,index).concat(expenses.slice(index+1,expenses.length)));
        let count=0
        expenses.map(expense => {
            if (filteredYear == new Date(expense.date).getFullYear()) count++;
        })
        if(count==0 || (count==1 && (new Date(expenses[index].date)).getFullYear()==filteredYear)) setFilteredYear("All")
    }

    return(
        <div>
            <NewExpense expenses={expenses} setExpenses={setExpenses} writeFile={writeFileObj}
                        setFilteredYear={setFilteredYear} filteredYear={filteredYear}/>
            <Expenses items={expenses} delExpense={delExpense} filteredYear={filteredYear}
                setFilteredYear={setFilteredYear}/>
        </div>

    )
}

export default ExpensesApp