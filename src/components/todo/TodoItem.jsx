import { postTodoComplete, postTodoUnComplete } from "../../api/todoApi";

const TodoItem = ({ todo, onUpdate, showCompletedDate = false }) => {

    const completedDate = new Date(todo.completedAt).toLocaleDateString("ko-KR", {
        month: "long",
        day: "numeric",
        weekday: "short",
    });

    const handleTodoComplete = async () => {
        try {
            if(todo.isCompleted) {
                await postTodoUnComplete(todo.id, false);
            } else {
                await postTodoComplete(todo.id, true);
            }
            onUpdate();
        } catch (e) {
            console.error("완료 상태 변경 실패", e);
        }
    };

    return (
        <li className="todo-item">
            <div className="todo-check">
                <input 
                type="checkbox" name="isCompleted" 
                checked={todo.isCompleted} 
                onChange={handleTodoComplete}
                className="checkbox-custom" 
                />
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