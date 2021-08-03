export const ButtonDelete = () => {
  const buttonDelete = document.createElement('button');
  buttonDelete.innerText = 'Deletar!';

  buttonDelete.addEventListener('click', deleteTask);

  return buttonDelete;
}

const deleteTask = (e) => {
  const buttonDelete = e.target;
  const taskCompleted = buttonDelete.parentElement;

  taskCompleted.remove();

  return buttonDelete;
}