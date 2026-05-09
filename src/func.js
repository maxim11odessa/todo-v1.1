const API_KEY = "todos"

export const inLocalStorage = (todos) => {
  localStorage.setItem(API_KEY, JSON.stringify(todos));
};

export const outLocalStorage = () => {
  return JSON.parse(localStorage.getItem(API_KEY)) || [];
}