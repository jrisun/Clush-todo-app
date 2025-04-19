const TodoItem = ({ todo, showCompletedDate = false }) => {
    
    const completedDate = new Date(todo.completedAt).toLocaleDateString("ko-KR", {
        month: "long",
        day: "numeric",
        weekday: "short",
    });

    return (
        <li className="todo-item">
            <div className="todo-check">
                <input type="checkbox" name="isCompleted" checked={todo.isCompleted} className="checkbox-custom" />
            </div>
            <div className="todo-content">
                <div className="description">{todo.description}</div>
                {showCompletedDate && (
                    <div className="completed-date">
                        <span>완료일: </span>
                        <span className="date">{completedDate}</span>
                    </div>
                )}
            </div>
            <div className="todo-control">
                <span className="material-symbols-outlined">more_horiz</span>
            </div>
        </li>
    );
}

export default TodoItem;