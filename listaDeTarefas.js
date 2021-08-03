(()=>{ // IIFE Immediately Invoked Function Expression ou “Função de Invocação Imediata”. Para não ter acesso a regras de negócio

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
    li.classList.add('task');
    list.appendChild(li);
  
    value = '';
  }
  
  newItem.addEventListener('click', createTask);
  
  const ButtonConcludes = () => {
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

})(); // ativa a função IIFE