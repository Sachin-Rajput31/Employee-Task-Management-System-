import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  
  const [newTask, setNewTask] = useState({
    taskTitle: '',
    taskDescription: '',
    taskDate: '',
    category: '',
    active: false,
    newTask: true,
    failed: false,
    completed: false,
  });

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({ taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false });

    if (userData && Array.isArray(userData)) {
      userData.forEach((elem) => {
        if (assignTo.toLowerCase() === elem.firstName.toLowerCase()) {
          if (!elem.tasks) elem.tasks = [];
          if (!elem.taskCounts) elem.taskCounts = { newTask: 0 };
          elem.tasks.push(newTask);
          elem.taskCounts.newTask += 1;
        }
      });

      setUserData(userData);
      console.log(userData);
    }


    setTaskTitle('');
    setAssignTo('');
    setCategory('');
    setTaskDate('');
    setTaskDescription('');
  };

  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-7 rounded]">
        <form onSubmit={submitHandler} className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="make a UI designs"
              />
            </div>
            <div>
              <h1 className="text-sm text-gray-300 mb-0.5">Date</h1>
              <input
                value={taskDate}
                onChange={(e) => setTaskDate(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design or dev, etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
              name=""
              cols="30"
              rows="10"
              id=""
            />
            <button type="submit" className="bg-emerald-500 py-3 active:bg-emerald-800 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
