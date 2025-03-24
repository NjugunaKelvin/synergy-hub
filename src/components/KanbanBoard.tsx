import { useState } from "react";
import { DragDropContext, Droppable, Draggable, DroppableProvided, DraggableProvided } from "react-beautiful-dnd";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: "1", title: "Design UI", status: "todo" },
    { id: "2", title: "Develop API", status: "in-progress" },
    { id: "3", title: "Test Features", status: "done" },
  ]);

  const categories = ["todo", "in-progress", "done"];

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = categories[result.destination.droppableId];
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="row">
        {categories.map((category, index) => (
            <Droppable key={category} droppableId={index.toString()}>
            {(provided: DroppableProvided) => (
              <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="col-md-4 bg-light p-3 rounded shadow-sm"
              >
              <h4 className="text-center text-capitalize">{category}</h4>
              {tasks
                .filter((task) => task.status === category)
                .map((task, i) => (
                <Draggable key={task.id} draggableId={task.id} index={i}>
                  {(provided: DraggableProvided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className="card mb-2 p-2 shadow-sm"
                  >
                    {task.title}
                  </div>
                  )}
                </Draggable>
                ))}
              {provided.placeholder}
              </div>
            )}
            </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default KanbanBoard;
