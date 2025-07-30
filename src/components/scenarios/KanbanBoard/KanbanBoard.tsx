import { useState } from "react";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

type Task = {
  id: string;
  title: string;
  status: "Not Started" | "In Progress" | "Done";
};

const initialTasks: Task[] = [
  { id: "1", title: "Setup project", status: "Not Started" },
  { id: "2", title: "Design layout", status: "Not Started" },
  { id: "3", title: "Write components", status: "In Progress" },
  { id: "4", title: "Testing", status: "In Progress" },
  { id: "5", title: "Deployment", status: "Done" },
];

const KanbanCard: React.FC<{
  task: Task;
  onDrop: (taskId: string, newStatus: Task["status"]) => void;
}> = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "CARD",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    drag(
    <div
      className="bg-white p-2 rounded shadow mb-2 border border-gray-300 text-sm cursor-grab"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="font-semibold">{task.title}</div>
      <div className="text-xs text-gray-500 mt-1">{task.status}</div>
    </div>
    )
  );
};

const Column: React.FC<{
  status: Task["status"];
  tasks: Task[];
  onDrop: (taskId: string, newStatus: Task["status"]) => void;
}> = ({ status, tasks, onDrop }) => {
  const [, drop] = useDrop(() => ({
    accept: "CARD",
    drop: (item: { id: string }) => onDrop(item.id, status),
  }));

  return (
    drop(
    <div className="flex-1 p-4 bg-gray-100 rounded-md">
      <h2 className="font-bold mb-3 text-gray-700">{status}</h2>
      {tasks.map((task) => (
        <KanbanCard key={task.id} task={task} onDrop={onDrop} />
      ))}
    </div>)
  );
};

export default function KanbanBoard() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDrop = (id: string, newStatus: Task["status"]) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-4 p-6">
        {(["Not Started", "In Progress", "Done"] as Task["status"][]).map(
          (status) => (
            <Column
              key={status}
              status={status}
              tasks={tasks.filter((task) => task.status === status)}
              onDrop={handleDrop}
            />
          )
        )}
      </div>
    </DndProvider>
  );
};

