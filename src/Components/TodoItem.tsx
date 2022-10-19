import classes from '../styles/TodoItem.module.css';

type ItemProps = {
    text : string,
    onRemoveTodo : () => void
}

const Item = (props: ItemProps) => {

    return (
        <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
    )
}

export default Item;