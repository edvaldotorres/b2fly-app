import { useEffect, useState } from "react";
import TaskListItem from "./TaskListItem"
import { api } from "../utils/axios";


export default function TaskList() {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState(null);

  async function getTasks() {
    try {
      setLoading(true);
      const response = await api.get(`/tasks`);
      setTasks(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTasks();
  }, [0]); 
  return (
    <>
      {loading ? (
        <div className="text-center mt-8">
          Loading...
        </div>
      ) : (
        <div className="container h-screen align-middle mx-auto my-4 rounded-md space-y-3">
          {tasks?.map(({id, title, completed}) => (
            <TaskListItem key={id} id={id} taskName={title} completed={completed}  />
          ))}
        </div>
      )}
    </>
  )
}