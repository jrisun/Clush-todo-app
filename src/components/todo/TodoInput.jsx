import { useState } from "react";
import './TodoInput.css';

const initDescription = "";

const TodoInput = ({ onAdd }) => {
    const [inputDescription, setInputDescription] = useState(initDescription);

    const handleChange = (e) => setInputDescription(e.target.value);

    const handleSubmitTodo = () => {
        if (!inputDescription.trim()) return "할 일은 공백일 수 없습니다."; // 메시지 안내 필요
        onAdd({ description: inputDescription });
        setInputDescription(initDescription);
    };

    return (
        <div className="todo-editor">
            <div className="container">
                <input type="text" 
                    name="description" 
                    onChange={handleChange} 
                    value={inputDescription} 
                    className="todo-input input-box" 
                    placeholder="할 일 추가하기"
                />
                <button onClick={handleSubmitTodo} className="todo-btn btn-box btn-box-primary">
                    <span className="material-symbols-outlined">add</span>
                </button>
            </div>
        </div>
    );
}

export default TodoInput;