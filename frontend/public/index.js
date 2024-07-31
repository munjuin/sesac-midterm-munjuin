window.addEventListener("DOMContentLoaded", () => {
  const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  request();

  const div = document.querySelector(".container");
  for (let i = 0; i < 11; i++) {
    div.innerHTML = `
      <div>
        <input type="checkbox">
        <p>${getTodos[i]}</p>
        <button>X</button>
    `;
  }
});
