import TodoItem from "./Todoitem";
import styles from "./TodoList.module.css";
export default function Todo({ todos, setTodos }) {
    return (
        <div className={styles.list}>
            {todos.map((item) => (
                <TodoItem key={item.name} item={item}  todos = {todos} setTodos = {setTodos} />
            ))}
        </div>
    )
}