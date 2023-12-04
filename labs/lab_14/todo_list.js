"use strict";

const domain = "https://jsonplaceholder.typicode.com";

async function displayUsers() {
  const response = await fetch(`${domain}/users`);
  const users = await response.json();

  const usersSelect = document.getElementById("users");
  users.forEach((user) => {
    const option = new Option(user.name, user.id);
    usersSelect.add(option);
  });
}

async function displayTodos(userId) {
  const response = await fetch(`${domain}/todos/?userId=${userId}`);
  const todos = await response.json();

  const listDiv = document.getElementById("list");
  listDiv.innerHTML = createTableHTML(todos);
}

function createTableHTML(todos) {
  return `
    <table>
      <tr>
        <th>To-Do</th>
        <th>Completed</th>
      </tr>
      ${todos.map((todo) => `
        <tr>
          <td>${todo.title}</td>
          <td>${todo.completed ? 'true' : 'false'}</td>
        </tr>
      `).join('')}
    </table>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  await displayUsers();

  const viewListButton = document.getElementById("view_list");
  viewListButton.addEventListener("click", async () => {
    const selectedUserId = document.getElementById("users").value;
    await displayTodos(selectedUserId);
  });
});
