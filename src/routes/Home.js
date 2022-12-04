import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../store";
import ToDo from "../components/ToDo";

export default function Home() {
    const [text, setText] = useState("");
    const toDos = useSelector((state) => state);
    const dispatch = useDispatch();

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        dispatch(add(text));
        setText("");
    }

    return (
        <>
            <h1>To-Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((todo) => (
                    <ToDo key={todo.id} id={todo.id} text={todo.text} />
                ))}
            </ul>
        </>
    );
}
