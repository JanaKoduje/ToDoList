// data
const apiUri = "https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks";

// komponenty
export const Task = ({ name, due, done }) => {
  return `
        <div class="task">
        <div class="task__body">
          <div class="task__name">${name}</div>
          <div class="task__due">${due}</div>
        </div>
        <div class="task__done">${done ? "✓" : ""}</div>
      </div>
      `;
};

// helpers
const renderTask = (data) => {
  const taskListElm = document.querySelector("#taskList");
  taskListElm.innerHTML = [data.map((task) => Task(task))].join("\n");
};

const dataProcess = (uri) =>
  fetch(uri)
    .then((response) => response.json())
    .then(renderTask);


// render    
dataProcess(apiUri);

const checkElm = document.querySelector("#checkbox-undone");
checkElm.addEventListener("change", (e) => {
  dataProcess(e.target.checked ? apiUri + "?done=false" : apiUri);
});
