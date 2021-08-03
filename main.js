import ButtonConcludes from "./components/concludesTask";
import ButtonDelete from "./components/deleteTask";

const newItem = document.querySelector('[data-form-button]');

const createTask = (e) => {
  e.preventDefault();

  const list = document.querySelector('[data-list]');
  const input= document.querySelector('[data-form-input]');
  const value = input.value;

  const li = document.createElement('li');

  const content = `<p class="content">${value}</p>`;

  li.innerHTML = content;
  li.appendChild(ButtonConcludes());
  li.appendChild(ButtonDelete());
  li.classList.add('task');
  list.appendChild(li);

  value = '';
}

newItem.addEventListener('click', createTask);  