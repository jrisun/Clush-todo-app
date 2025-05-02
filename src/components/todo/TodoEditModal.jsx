import { useEffect, useRef, useState } from "react";
import { updateTodo } from "../../api/todoApi";
import "./TodoEditModal.css";

const TodoEditModal = ({ todo, onEdit, onCancel }) => {
    const [editTodo, setEditTodo] = useState(todo); // 수정 내용
    const descRef = useRef();

    useEffect(() => {
        descRef.current.focus();
    }, []);

    useEffect(() => {
        const handleEsc = (e) => {
            if(e.key === 'Escape') {
                onCancel();
            }
        }
        
        window.addEventListener("keydown", handleEsc);
        return (
            () => window.removeEventListener("keydown", handleEsc)
        );
    }, [onCancel]);

    const handleChangeTodo = (e) => {
        setEditTodo({
            ...editTodo,
            description: e.target.value
        });
    }

    const handleSubmit = () => {
        if(!editTodo.description.trim()) {
            alert("할 일은 공백일 수 없습니다.");
            descRef.current.focus();
            return;
        }

        onEdit(editTodo);
    }

    const handleKeydown = (e) => {
        if(e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div className="modal-backdrop" onClick={onCancel}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="container">
                    <p className="title">할 일 수정</p>
                    <div className="modal-input">
                        <input
                            type="text"
                            ref={descRef}
                            value={editTodo.description}
                            onChange={handleChangeTodo}
                            onKeyDown={handleKeydown}
                            className="input-box"
                        />
                    </div>
                    <div className="modal-btn">
                        <button onClick={handleSubmit} className="btn-box btn-box-primary">수정</button>
                        <button onClick={onCancel} className="btn-box">취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoEditModal;
