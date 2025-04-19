import axios from "axios";

export const API_SERVER_HOST = "http://www.clearline.click:8100";
const prefix = `${API_SERVER_HOST}/api/todo`;

export const getTodoList = async () => {
    const result = await axios.get(`${prefix}`);
    return result.data;
}

export const postTodo = async (todoObj) => {
    const result = await axios.post(`${prefix}`, todoObj);
    return result.data;
}

export const postTodoComplete = async (id, isCompleted) => {
    const result = await axios.post(`${prefix}/${id}/complete`, {isCompleted});
    return result.data;
}
export const postTodoUnComplete = async (id, isCompleted) => {
    const result = await axios.post(`${prefix}/${id}/unComplete`, {isCompleted});
    return result.data;
}