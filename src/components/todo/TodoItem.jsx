import { deleteTodo, completeTodo, pinTodo, uncompleteTodo, unpinTodo } from "../../api/todoApi";

const TodoItem = ({ todo, onUpdate, onEdit, isCompleted = false }) => {

    const formatDate = new Date(todo.completedAt).toLocaleDateString("ko-KR", {
        month: "long",
        day: "numeric",
        weekday: "short",
    });

    const handleTodoComplete = async () => {
        try {
            if (todo.isCompleted) {
                await uncompleteTodo(todo.id, false);
            } else {
                await completeTodo(todo.id, true);
            }
            onUpdate(); // 목록 새로고침
        } catch (e) {
            console.error("완료 상태 변경 실패", e);
        }
    };

    const handleTodoPin = async () => {
        try {
            if(todo.isFixed) {
                await unpinTodo(todo.id, false);
            } else {
                await pinTodo(todo.id, true);
            }
            onUpdate();
        } catch (e) {
            console.error("고정 상태 변경 실패", e);
        }
    };

    const handleDeleteTodo = async () => {
        if(!window.confirm("정말 삭제하시겠습니까?")) return;

        try {
            await deleteTodo(todo.id);
            onUpdate();
        } catch (e) {
            console.error("할 일 삭제 실패", e);
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
                {isCompleted && (
                    <div className="completed-date">
                        <span>완료일: </span>
                        <span className="date">{formatDate}</span>
                    </div>
                )}
            </div>
            <div className="todo-control">
                {/* <span className="material-symbols-outlined">more_horiz</span> */}
                {!isCompleted && (
                    <span onClick={handleTodoPin}>
                        <i className={`bi ${todo.isFixed ? "bi-star-fill" : "bi-star"}`}></i>
                    </span>
                )}
                <span onClick={() => onEdit(todo)}><i className="bi bi-pencil-square"></i></span>
                <span onClick={handleDeleteTodo}><i className="bi bi-trash"></i></span>
            </div>
        </li>
    );
};

export default TodoItem;