const tasksApi = fetch('https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks');

export const Task = ({name, due, done}) => {

    const doneMark = done ? "✓" : "";

    return `
        <div class="task">
        <div class="task__body">
          <div class="task__name">${name}</div>
          <div class="task__due">${due}</div>
        </div>
        <div class="task__done">${doneMark}</div>
      </div>
      `
}


const renderTask = (data) => {
    const taskListElm = document.querySelector('#taskList')
    taskListElm.innerHTML = 
        [
          data.map( (task) => Task(task))
        ].join('\n')
    
}

tasksApi
    .then( (response) => response.json())
    .then(renderTask)



const suntime = (data) => {
    const suntimeElm = document.querySelector('#suntime');
    suntimeElm.innerHTML = `
        <p>
        Východ: ${data.results.sunrise}<br />
        Západ: ${data.results.sunset}
        </p>   
        `        
}


const btnElm = document.querySelector('button');
btnElm.addEventListener('click', 
        () => pocasi
              .then( (response) => response.json())
              .then(suntime)
              );
