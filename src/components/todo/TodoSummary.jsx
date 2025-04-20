import { useEffect, useState } from "react";
import "./TodoSummary.css";
import { summaryTodo } from "../../api/todoApi";

const TodoSummary = () => {
    const [summary, setSummary] = useState("");
    const [loading, setLoading] = useState(false);

    const loadSummary = async () => {
        if (loading) return;

        try {
            setLoading(true);
            const res = await summaryTodo();
            setSummary(res.data);
        } catch (e) {
            console.error("요약 불러오기 실패", e);
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
                            <div onClick={loadSummary} className="refresh-btn material-symbols-outlined">refresh</div>
                        )}
                    </div>
                    <div className="summary">
                        {loading ? "응원 메시지 생성 중..." : summary}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoSummary;