import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteToDo } from "../store";

function ToDo(props) {
    const dispatch = useDispatch();

    const onClick = () => {
        console.log("clicked");
        dispatch(deleteToDo(props.id));
    };

    return (
        <li>
            <Link to={`/${props.id}`}>
                {props.text}
                <button onClick={onClick}>❌</button>
            </Link>
        </li>
    );
}

export default ToDo;