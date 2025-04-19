import TodoItem from "./TodoItem";
import './TodoListGroup.css';

const TodoListGroup = ({ todos, onUpdate }) => {
    const fixedList = todos.filter(todo => todo.isFixed && !todo.isCompleted);
    const activeList = todos.filter(todo => !todo.isFixed && !todo.isCompleted);
    const completedList = todos.filter(todo => todo.isCompleted);

    return (
        <div className="todo-box">
            <div className="container">
                {/* 고정 목록 */}
                <div className="todo-pin">
                    <ul className="todo-pin-list todo-list">
                        {fixedList.map(todo => (
                            <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
                        ))}
                    </ul>
                </div>

                {/* 일반 목록 */}
                <div className="todo-task">
                    <ul className="todo-task-list todo-list">
                        {activeList.map(todo => (
                            <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
                        ))}
                    </ul>
                </div>

                {/* 완료 목록 */}
                <div className="todo-completed">
                    <div className="todo-tab">
                        <span className="title-icon material-symbols-outlined">arrow_drop_down</span>
                        <div className="title">완료됨</div>
                    </div>
                    <ul className="todo-completed-list todo-list">
                        {completedList.map(todo => (
                            <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} showCompletedDate />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TodoListGroup;