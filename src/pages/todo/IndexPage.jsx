import { useEffect, useState } from "react";
import BasicLayout from "../../layouts/BasicLayout"
import { getTodoList, postTodo } from "../../api/todoApi";
import TodoInput from "../../components/todo/TodoInput";
import TodoListGroup from "../../components/todo/TodoListGroup";
import TodoEditModal from "../../components/todo/TodoEditModal";
import TodoSummary from "../../components/todo/TodoSummary";

const initEditTodo = {
    id: 0,
    description: ""
};

const IndexPage = () => {
    const [todoList, setTodoList] = useState([]);
    const [editTodo, setEditTodo] = useState(initEditTodo);

    const fetchTodoList = async () => {
        const res = await getTodoList();
        setTodoList(res.data);
    };

    useEffect(() => {
        fetchTodoList();
    }, []);

    const handleAddTodo = async (todoObj) => {
        await postTodo(todoObj);
        fetchTodoList();
    };

    const EmptyList = () => {
        return (
            <div className="empty-list">
                <div className="container">
                    <div className="empty-icon material-symbols-outlined">add_task</div>
                    <p className="empty-title">아직 할 일이 없음</p>
                    <p className="empty-text">완료해야 하는 작업을 추가하세요.</p>
                </div>
            </div>
        );
    };

    return (
        <BasicLayout>
            <TodoSummary />
            <TodoInput onAdd={handleAddTodo} />
            {todoList.length > 0 ? (
                <TodoListGroup todos={todoList} onUpdate={fetchTodoList} onEdit={setEditTodo} />
            ) : (
                <EmptyList />
            )}
            {editTodo.id != 0 && (
                <TodoEditModal todo={editTodo} onUpdate={fetchTodoList} onClose={() => setEditTodo(initEditTodo)} />
            )}
        </BasicLayout>
    );
}

export default IndexPage;