import { useRef, useState } from "react";
import './TodoEditor.css';

const initDescription = "";

const TodoEditor = ({ onAdd }) => {
    const [inputDescription, setInputDescription] = useState(initDescription);
    const descRef = useRef();

    const handleChange = (e) => {
        setInputDescription(e.target.value);
    }

    const handleSubmitTodo = () => {
        if (!inputDescription.trim()) {
            alert("할 일은 공백일 수 없습니다.");
            descRef.current.focus();
            return;
        }

        onAdd({ description: inputDescription });
        setInputDescription(initDescription);
    };

    const handleKeydown = (e) => {
        if(e.key === 'Enter') {
            handleSubmitTodo();
        }
    }

    return (
        <div className="todo-editor">
            <div className="container">
                <input 
                    type="text" 
                    onChange={handleChange} 
                    onKeyDown={handleKeydown}
                    ref={descRef}
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

export default TodoEditor;