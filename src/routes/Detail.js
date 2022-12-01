import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Detail() {
    const toDos = useSelector((state) => state);

    const id = useParams().id;
    const toDoItem = toDos.find((toDo) => toDo.id === parseInt(id));

    return (
        <>
            <h1>{toDoItem?.text}</h1>
            <p>Created at {toDoItem?.id}</p>
        </>
    );
}
