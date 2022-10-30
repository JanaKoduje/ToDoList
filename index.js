const apiUri = "https://apps.kodim.cz/daweb/trening-api/apis/tasks-api/tasks";

export const Task = ({ name, due, done }) => {
  const doneMark = done ? "✓" : "";

  return `
        <div class="task">
        <div class="task__body">
          <div class="task__name">${name}</div>
          <div class="task__due">${due}</div>
        </div>
        <div class="task__done">${doneMark}</div>
      </div>
      `;
};

const renderTask = (data) => {
  const taskListElm = document.querySelector("#taskList");
  taskListElm.innerHTML = [data.map((task) => Task(task))].join("\n");
};

fetch(apiUri)
  .then((response) => response.json())
  .then(renderTask);

const checkElm = document.querySelector("#checkbox-undone");
checkElm.addEventListener("change", (e) => {
  fetch(e.target.checked ? apiUri + "?done=false" : apiUri)
    .then((response) => response.json())
    .then(renderTask);
});
