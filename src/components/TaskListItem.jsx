import { useNavigate } from "react-router-dom";

export default function TaskListItem({id, taskName, completed}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/task/${id}`);
   };
  return (
    <div>
      <div onClick={handleClick}
        className="flex flex-col w-full h-12 p-4 border-solid border-2 border-neutral-500 rounded-md justify-center cursor-pointer">
        <span className={completed ? "line-through" : ""}>{taskName}</span>
      </div>    
    </div>
  )
}

