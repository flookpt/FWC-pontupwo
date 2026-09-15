
const list = document.getElementById("ft_list");
const newBtn = document.getElementById("new-btn");

function setCookie(name, value) {
  const encodedValue = encodeURIComponent(value);
  const oneYearInSeconds = 31536000;

  document.cookie =
    name + "=" + encodedValue +
    "; path=/; max-age=" + oneYearInSeconds;
}

function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.startsWith(name + "=")) {
      const value = cookie.substring(name.length + 1);
      return decodeURIComponent(value);
    }
  }

  return null;
}

function saveTodos() {
  const todos = [];

  for (let i = 0; i < list.children.length; i++) {
    todos.push(list.children[i].textContent);
  }

  setCookie("todos", JSON.stringify(todos));
}

function addTodoToDOM(text, atTop) {
  const div = document.createElement("div");
  div.textContent = text;

  div.addEventListener("click", function () {
    if (confirm("Remove this to-do?")) {
      div.remove();
      saveTodos();
    }
  });

  if (atTop) {
    list.prepend(div);
  } else {
    list.appendChild(div);
  }
}

newBtn.addEventListener("click", function () {
  const text = prompt("New to-do:");

  if (text) {
    addTodoToDOM(text, true);
    saveTodos();
  }
});

const saved = getCookie("todos");

if (saved) {
  const todos = JSON.parse(saved);

  for (let i = 0; i < todos.length; i++) {
    addTodoToDOM(todos[i], false);
  }
}