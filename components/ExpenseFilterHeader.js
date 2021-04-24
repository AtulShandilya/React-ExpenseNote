import './ExpenseFilterHeader.css'
function ExpenseFilterHeader(props){

    // const years=props.expenses.map(expense => new Date(expense.date).getFullYear().filter(
    //     (value,index,self)=>self.indexOf(value)===index)
    // )

    const yearList=[...new Set(props.expenses.map(expense => new Date(expense.date).getFullYear()))]
    // console.log("year list",yearList)

    const onChangeFilter=(event)=>{
        props.setFilteredYear(event.target.value)
        console.log(" selected year",event.target.value);
    }

    return (
        <div className="ExpenseFilter">
            <h2> Filter By Year</h2>
            <form>
                <label ></label>
                <select onChange={onChangeFilter} name='year' id='year' >
                    <option value={"All"}>All</option>
                    {
                        yearList.map(year => <option value={year}
                                                     selected={year==props.filteredYear?"selected":""}
                        >{year}</option>)
                    }
                </select>
            </form>
        </div>
    )

}

export default ExpenseFilterHeader;