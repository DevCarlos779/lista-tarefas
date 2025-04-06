

function Todo({ todo, removeTodo, completeTodo }) {

    function complete() {
        completeTodo(todo.id)
    }

    function remove() {
        removeTodo(todo.id)
    }

    return (
        <div 
            className="todo"
            style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
        >
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">({todo.category})</p>
            </div>
            <div>
              <button onClick={complete} className="complete">Completar</button>
              <button onClick={remove} className="remove">x</button>
            </div>
        </div>
    )
}

export default Todo;
