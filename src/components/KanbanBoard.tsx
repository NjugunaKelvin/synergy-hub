import { useState } from "react";
import {
  DndContext,
  DragEndEvent,
  closestCorners,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { FaTasks, FaCheckCircle, FaSpinner } from "react-icons/fa";
import "../styles/kanban.css";

const projects = [
  { id: "1", name: "Website Redesign" },
  { id: "2", name: "AI Chatbot" },
  { id: "3", name: "Marketing Strategy" },
  { id: "4", name: "Mobile App Development" },
  { id: "5", name: "Cloud Migration" },
  { id: "6", name: "E-commerce Optimization" },
];

const initialTasks = {
  "1": [
    { id: "1", title: "Wireframe Design", status: "todo" },
    { id: "2", title: "Setup Hosting", status: "in-progress" },
    { id: "3", title: "Launch Beta", status: "done" },
  ],
  "2": [
    { id: "4", title: "Collect Data Samples", status: "todo" },
    { id: "5", title: "Train Model", status: "in-progress" },
    { id: "6", title: "Deploy Chatbot", status: "done" },
  ],
};

const categories = [
  { key: "todo", label: "To Do", icon: <FaTasks color="#00bfff" /> },
  { key: "in-progress", label: "In Progress", icon: <FaSpinner color="#ffcc00" /> },
  { key: "done", label: "Completed", icon: <FaCheckCircle color="#00ff99" /> },
];

const KanbanBoard = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [tasks, setTasks] = useState(initialTasks[activeProject.id] || []);

  const handleProjectChange = (project) => {
    setActiveProject(project);
    setTasks(initialTasks[project.id] || []);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    setTasks((prevTasks) => {
      const oldIndex = prevTasks.findIndex((task) => task.id === active.id);
      const newIndex = prevTasks.findIndex((task) => task.id === over.id);
      return arrayMove(prevTasks, oldIndex, newIndex);
    });
  };

  return (
    <div className="kanban-container">
      {/* Sidebar for Projects */}
      <aside className="kanban-sidebar">
        <h3>Projects</h3>
        <ul>
          {projects.map((project) => (
            <li
              key={project.id}
              className={activeProject.id === project.id ? "active" : ""}
              onClick={() => handleProjectChange(project)}
            >
              {project.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Kanban Board */}
      <main className="kanban-board-container">
        <h2>{activeProject.name}</h2>

        <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
          <div className="kanban-board">
            {categories.map((category) => (
              <div key={category.key} className="kanban-column">
                <h4 className="kanban-title">{category.icon} {category.label}</h4>

                <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
                  {tasks
                    .filter((task) => task.status === category.key)
                    .map((task) => (
                      <div key={task.id} className="kanban-card">
                        {task.title}
                      </div>
                    ))}
                </SortableContext>
              </div>
            ))}
          </div>
        </DndContext>
      </main>
    </div>
  );
};

export default KanbanBoard;
