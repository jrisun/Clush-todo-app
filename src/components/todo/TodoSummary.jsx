import { useEffect, useState } from "react";
import "./TodoSummary.css";
import { summaryTodo } from "../../api/todoApi";

const initSummary = "";

const TodoSummary = () => {
    const [summary, setSummary] = useState(initSummary);
    const [loading, setLoading] = useState(false);

    // AI 요약 요청
    const loadSummary = async () => {
        if (loading) return; // 중복 요청 방지

        try {
            setLoading(true);
            setSummary(initSummary);
            const response = await summaryTodo();
            setSummary(response.data.summary);
        } catch (error) {
            console.error("요약 불러오기 실패", error);
            setSummary("요약 불러오기 실패 😢");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadSummary();
    }, []);
    
    return (
        <div className="todo-summary">
            <div className="container">
                <div className="summary-box">
                    <div className="title">
                        <p>AI 활용 요약</p>
                        {!loading && (
                            <div 
                                onClick={loadSummary} 
                                title="요약하기"
                                aria-label="요약 다시 요청"
                                className="refresh-btn material-symbols-outlined"
                            >refresh</div>
                        )}
                    </div>
                    <div className="summary">
                        {loading ? 
                            <span className="loading-dots">메시지 생성 중</span>
                        : summary}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoSummary;