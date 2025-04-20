import { useEffect, useState } from "react";
import BasicLayout from "../../layouts/BasicLayout"
import { getTodoList, postTodo } from "../../api/todoApi";
import TodoInput from "../../components/todo/TodoInput";
import TodoListGroup from "../../components/todo/TodoListGroup";
import TodoEditModal from "../../components/todo/TodoEditModal";

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

    return (
        <BasicLayout>
            <TodoInput onAdd={handleAddTodo} />
            <TodoListGroup todos={todoList} onUpdate={fetchTodoList} onEdit={setEditTodo}/>
            {editTodo.id != 0 && (
                <TodoEditModal todo={editTodo} onUpdate={fetchTodoList} onClose={() => setEditTodo(initEditTodo)}/>
            )}
        </BasicLayout>
    );
}

export default IndexPage;