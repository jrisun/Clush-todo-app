import { useEffect, useState } from "react";
import BasicLayout from "../../layouts/BasicLayout"
import { getTodoList, createTodo, updateTodo, deleteTodo, unpinTodo, pinTodo, uncompleteTodo, completeTodo } from "../../api/todoApi";
import TodoEditor from "../../components/todo/TodoEditor";
import TodoListGroup from "../../components/todo/TodoListGroup";
import TodoEditModal from "../../components/todo/TodoEditModal";
import TodoSummary from "../../components/todo/TodoSummary";

const initEditTodo = {
    id: 0,
    description: ""
};

const IndexPage = () => {
    const [todoList, setTodoList] = useState([]); // 전체 할 일 목록
    const [editTodo, setEditTodo] = useState(initEditTodo); // 수정할 할 일

    const fetchTodoList = async () => {
        try {
            const response = await getTodoList();
            setTodoList(response.data);
        } catch (error) {
            console.error("할 일 목록 불러오기 실패", error);
        }
    };

    useEffect(() => {
        fetchTodoList();
    }, []);

    const handleAddTodo = async (todoObj) => {
        try {
            await createTodo(todoObj);
            fetchTodoList();
        } catch (error) {
            console.error("할 일 생성 실패", error);
        }
    };

    const handleOpenModal = (todo) => {
        setEditTodo(todo);
    }

    const handleEditTodo = async (todoObj) => {
        try {
            await updateTodo(todoObj.id, todoObj);
            fetchTodoList();
            setEditTodo(initEditTodo);
        } catch (error) {
            console.error("할 일 수정 실패", error);
        }
    }

    const handleTogglePin = async (id, isFixed) => {
        try {
            if(isFixed) {
                await unpinTodo(id, false);
            } else {
                await pinTodo(id, true);
            }
            fetchTodoList();
        } catch (error) {
            console.error("할 일 고정 처리 실패", error);
        }
    }

    const handleToggleComplete = async (id, isCompleted) => {
        try {
            if(isCompleted) {
                await uncompleteTodo(id, false);
            } else {
                await completeTodo(id, true);
            }
            fetchTodoList();
        } catch (error) {
            console.error("할 일 완료 처리 실패", error);
        }
    }

    const handleDeleteTodo = async (id) => {
        try {
            await deleteTodo(id);
            fetchTodoList();
        } catch (error) {
            console.error("할 일 삭제 실패", error);
        }
    }

    const actions = {
        onPin: handleTogglePin,
        onComplete: handleToggleComplete,
        onOpenModal: handleOpenModal,
        onDelete: handleDeleteTodo
    }

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
            <TodoEditor onAdd={handleAddTodo} />
            {todoList.length > 0 ? (
                <TodoListGroup todos={todoList} actions={actions} />
            ) : (
                <EmptyList />
            )}
            {editTodo.id != 0 && (
                <TodoEditModal todo={editTodo} onEdit={handleEditTodo} onCancel={() => setEditTodo(initEditTodo)} />
            )}
        </BasicLayout>
    );
}

export default IndexPage;