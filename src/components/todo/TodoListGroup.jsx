import TodoItem from "./TodoItem";
import './TodoListGroup.css';

const TodoListGroup = ({ todos, actions }) => {
    const renderList = (filterFn) =>
        todos.filter(filterFn).map(todo => (
            <TodoItem key={todo.id} todo={todo} actions={actions} />
        ));
 
    const fixedList = renderList(todo => todo.isFixed && !todo.isCompleted);
    const activeList = renderList(todo => !todo.isFixed && !todo.isCompleted);
    const completedList = renderList(todo => todo.isCompleted);

    const EmptyList = () => {
        if(!(fixedList.length === 0 && activeList.length === 0)) {
            return;
        }

        return (
            <div className="empty-list">
                <div className="container">
                    <div className="empty-icon material-symbols-outlined">add_task</div>
                    <p className="empty-text">모든 할 일 완료</p>
                </div>
            </div>
        );
    };

    return (
        <div className="todo-box">
            <div className="container">
                <EmptyList />

                {/* 고정 목록 */}
                {fixedList.length > 0 && (
                    <div className="todo-pin">
                        <ul className="todo-pin-list todo-list">
                            {fixedList}
                        </ul>
                    </div>
                )}

                {/* 일반 목록 */}
                {activeList.length > 0 && (
                    <div className="todo-task">
                        <ul className="todo-task-list todo-list">
                            {activeList}
                        </ul>
                    </div>
                )}

                {/* 완료 목록 */}
                {completedList.length > 0 && (
                    <div className="todo-completed">
                        <div className="todo-tab">
                            <span className="title-icon material-symbols-outlined">arrow_drop_down</span>
                            <div className="title">완료됨</div>
                        </div>
                        <ul className="todo-completed-list todo-list">
                            {completedList}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TodoListGroup;