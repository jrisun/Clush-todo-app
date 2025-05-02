const TodoItem = ({ todo, actions }) => {
    const {onPin, onComplete, onOpenModal, onDelete} = actions;

    const handleToggleComplete = () => {
        onComplete(todo.id, todo.isCompleted);
    }

    const handleTogglePin = () => {
        onPin(todo.id, todo.isFixed);
    }

    const handleEditModal = () => {
        onOpenModal(todo);
    }

    const handleDeleteTodo = () => {
        if(!window.confirm("정말 삭제하시겠습니까?")) {
            return;
        }
        onDelete(todo.id);
    }

    const formattedDate = (completedAt) => {
        if(!completedAt) {
            return "완료일 없음";
        }

        const newDate = new Date(completedAt);
        if(isNaN(newDate)) {
            return "잘못된 날짜";
        }

        const date = new Intl.DateTimeFormat('ko-KR', {
            month: 'long',
            day: 'numeric'
        }).format(newDate);
        const weekday = new Intl.DateTimeFormat('ko-KR', { weekday: 'short' }).format(newDate);
        return date + ' (' + weekday + ')';
    }

    return (
        <li className="todo-item">
            <div className="todo-check">
                <input
                    type="checkbox" 
                    checked={todo.isCompleted}
                    onChange={handleToggleComplete}
                    className="checkbox-custom"
                    title="완료"
                    aria-label="완료 처리"
                />
            </div>
            <div className="todo-content">
                <div className="description">{todo.description}</div>
                {todo.isCompleted && (
                    <div className="completed-date">
                        <span>완료일: </span>
                        <span className="date">{formattedDate(todo.completedAt)}</span>
                    </div>
                )}
            </div>
            <div className="todo-control">
                {/* <span className="material-symbols-outlined">more_horiz</span> */}
                {!todo.isCompleted && (
                    <span onClick={handleTogglePin} title="고정" aria-label="할 일 고정">
                        <i className={`bi ${todo.isFixed ? "bi-star-fill" : "bi-star"}`}></i>
                    </span>
                )}
                <span onClick={handleEditModal} title="수정" aria-label="할 일 수정">
                    <i className="bi bi-pencil-square"></i>
                </span>
                <span onClick={handleDeleteTodo} title="삭제" aria-label="할 일 삭제">
                    <i className="bi bi-trash"></i>
                </span>
            </div>
        </li>
    );
};

export default TodoItem;