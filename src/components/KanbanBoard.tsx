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

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Design UI", status: "todo" },
    { id: "2", title: "Develop API", status: "in-progress" },
    { id: "3", title: "Test Features", status: "done" },
  ]);

  const categories = ["todo", "in-progress", "done"];

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
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="row">
        {categories.map((category) => (
          <div key={category} className="col-md-4 bg-light p-3 rounded shadow-sm">
            <h4 className="text-center text-capitalize">{category}</h4>

            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
              {tasks
                .filter((task) => task.status === category)
                .map((task) => (
                  <div
                    key={task.id}
                    className="card mb-2 p-2 shadow-sm"
                    id={task.id}
                  >
                    {task.title}
                  </div>
                ))}
            </SortableContext>
          </div>
        ))}
      </div>
    </DndContext>
  );
};

export default KanbanBoard;
