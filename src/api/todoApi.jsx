import axios from "axios";

export const API_SERVER_HOST = "https://todo-api.clearline.click";
const prefix = `${API_SERVER_HOST}/api/todo`;

export const getTodoList = async () => {
    const result = await axios.get(`${prefix}`);
    return result.data;
}

export const createTodo = async (todoObj) => {
    const result = await axios.post(`${prefix}`, todoObj);
    return result.data;
}

export const updateTodo = async (id, todoObj) => {
    const result = await axios.patch(`${prefix}/${id}`, todoObj);
    return result.data;
}

export const pinTodo = async (id, isFixed) => {
    const result = await axios.post(`${prefix}/${id}/pin`, {isFixed});
    return result.data;
}
export const unpinTodo = async (id, isFixed) => {
    const result = await axios.post(`${prefix}/${id}/unpin`, {isFixed});
    return result.data;
}

export const completeTodo = async (id, isCompleted) => {
    const result = await axios.post(`${prefix}/${id}/complete`, {isCompleted});
    return result.data;
}
export const uncompleteTodo = async (id, isCompleted) => {
    const result = await axios.post(`${prefix}/${id}/uncomplete`, {isCompleted});
    return result.data;
}

export const deleteTodo = async (id) => {
    const result = await axios.delete(`${prefix}/${id}`, id);
    return result.data;
}

export const summaryTodo = async () => {
    const result = await axios.get(`${prefix}/summary`);
    return result.data;
}