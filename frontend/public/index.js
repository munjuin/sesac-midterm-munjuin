window.addEventListener("DOMContentLoaded", () => {
  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    });
    const data = await response.json();

    return data;
  };
});
