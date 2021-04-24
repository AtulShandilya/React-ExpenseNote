import './Card.css'
function Card(props){
    return(<div className={'Card '+props.className}>{props.children}</div>)
}

export default Card