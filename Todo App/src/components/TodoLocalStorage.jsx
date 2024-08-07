const todoKey = "reactTodo";

export const getLocalStoragetodoDate = () => {
  const rawTodos = localStorage.getItem(todoKey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
};
export const setLocalStoragetodoDate = (task) => {
  localStorage.setItem(todoKey, JSON.stringify(task));
};
