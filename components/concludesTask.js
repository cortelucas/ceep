export const ButtonConcludes = () => {
  const buttonConcludes = document.createElement('button');
  
  buttonConcludes.classList.add('check-button');
  buttonConcludes.innerText = 'Concluir!';

  buttonConcludes.addEventListener('click', concludesTask);

  return buttonConcludes;
}

const concludesTask = (e) => {
  const buttonConcludes = e.target;
  const taskCompleted = buttonConcludes.parentElement;

  taskCompleted.classList.toggle('done');
}