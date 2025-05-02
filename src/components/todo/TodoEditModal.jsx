import { useState } from "react";
import { updateTodo } from "../../api/todoApi";
import "./TodoEditModal.css";

const TodoEditModal = ({ todo, onClose, onUpdate }) => {
    const [description, setDescription] = useState(todo.description);

    const handleEditTodo = async () => {
        if (!description.trim()) return alert("할 일은 공백일 수 없습니다.");

        try {
            await updateTodo(todo.id, { description });
            onUpdate();
            onClose();
        } catch (e) {
            console.error("할 일 수정 실패", e);
        }
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="container">
                    <p className="title">할 일 수정</p>
                    <div className="modal-input">
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="input-box"
                        />
                    </div>
                    <div className="modal-btn">
                        <button onClick={handleEditTodo} className="btn-box btn-box-primary">수정</button>
                        <button onClick={onClose} className="btn-box">취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoEditModal;
