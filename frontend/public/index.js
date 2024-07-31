window.addEventListener("DOMContentLoaded", () => {
  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    });
    const data = await response.json();

    return data;
  };
  getTodos();
});

const div = document.querySelector(".container");
for (let i = 0; i < 11; i++) {
  div.innerHTML = `
  
    <div>
      <input type="checkbox">
      <p>${getTodos()[i].slice(0, 10)}</p>
      <button></button>
  
    
  `;
}
