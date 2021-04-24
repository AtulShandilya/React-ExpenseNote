import './ExpenseItem.css'
import Card from './Card'
function ExpenseItem(props){
    // const dateConvert=(date)=>{
    //     // console.log("typeof tempdate:",typeof date);
    //     let dt=new Date(date);
    //     date=dt.getDate()+"-"+dt.getMonth()+"-"+dt.getFullYear();
    //     return date
    // }
    const monthName=["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const date=new Date(props.date)
    const tempDate=date.getDate(), tempMonth=monthName[date.getMonth()],tempYear=date.getFullYear();

    const delItem=(event)=>{
        props.delExpense(props.index);
    }

    return(
        <Card>
            <div className="expense-item">
                {/*<div className="expense-item__date">{dateConvert(props.date)}</div>*/}
                <div className="expense-item__date">
                    <div className="month">{tempMonth}</div>
                    <div className="year">{tempYear}</div>
                    <div className="date">{tempDate}</div>
                </div>
                <div className="expense-item__description">
                    <div>{props.title}</div>
                    <div className="expense-item__price">${props.amount}</div>
                    {/*<div className="expense-item__del">x</div>*/}
                </div>
                <button type="text" onClick={delItem} className="expense-item__del"><p>_</p></button>
            </div>
        </Card>
    )
}

export default ExpenseItem