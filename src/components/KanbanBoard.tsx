import { useState } from "react";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design UI", status: "todo" },
    { id: 2, title: "Develop API", status: "in-progress" },
    { id: 3, title: "Test Features", status: "done" },
  ]);

  const categories = ["todo", "in-progress", "done"];

  return (
    <div className="row">
      {categories.map((category) => (
        <div key={category} className="col-md-4">
          <h4 className="text-center text-capitalize">{category}</h4>
          <div className="kanban-column bg-light p-3 rounded">
            {tasks
              .filter((task) => task.status === category)
              .map((task) => (
                <div key={task.id} className="card mb-2">
                  <div className="card-body">{task.title}</div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
