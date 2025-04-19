import { useEffect, useState } from "react";
import BasicLayout from "../../layouts/BasicLayout"
import { getTodoList, postTodo } from "../../api/todoApi";
import TodoInput from "../../component/todo/TodoInput";
import TodoListGroup from "../../component/todo/TodoListGroup";

const IndexPage = () => {

    const [todoList, setTodoList] = useState([]);

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
            <TodoListGroup todos={todoList} />
        </BasicLayout>
    );
}

export default IndexPage;