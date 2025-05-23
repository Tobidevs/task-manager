import React, { useEffect, useState } from "react";
import TitleBar from "../components/TitleBar";
import SideBar from "../components/SideBar";
import TaskCard from "../components/TaskCard";
import EditTaskModal from "../components/EditTaskModal";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const openEditModal = (task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const closeEditModal = () => {
    setSelectedTask(null);
    setShowModal(false);
  };

  const populateStatuses = () => {
    const incompleteTasks = tasks.filter(
      (task) => task.status === "incomplete"
    );
    setIncomplete(incompleteTasks);
    const inProgressTasks = tasks.filter(
      (task) => task.status === "in progress"
    );
    setInProgress(inProgressTasks);
    const completedTasks = tasks.filter((task) => task.status === "completed");
    setCompleted(completedTasks);
  };

  const handleDelete = async (task) => {
    try {
      await axios.delete(`${apiUrl}/tasks/${task._id}`);
      closeEditModal();
      fetchTasks();
    } catch (error) {
      console.error();
    }
  };

  const handleStatus = async (task, status) => {
    try {
      await axios.patch(`${apiUrl}/tasks/${task._id}`, {
        status: status,
      });
      fetchTasks();
    } catch (error) {
      console.error("Error updating Status:", error);
    }
  };

  const fetchTasks = async () => {
    try {
      const res = await axios.get(`${apiUrl}/tasks`);
      setTasks(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleTagDelete = async (newTags, taskId) => {
    try {
      await axios.patch(`${apiUrl}/tasks/${taskId}`, {
        tags: newTags,
      });
      fetchTasks();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    populateStatuses();
  }, [tasks]);

  return (
    <div className="bg-[#F0F4FF] h-screen w-screen">
      <TitleBar />
      <div className="w-full h-full flex">
        <SideBar />
        <div className="w-6/7">
          {showModal && selectedTask && (
            <EditTaskModal
              task={selectedTask}
              onClose={closeEditModal}
              onUpdate={fetchTasks}
              onDelete={handleDelete}
            />
          )}
          <div className="h-1/11 w-full text-[#2C2C2C] font-semibold text-3xl flex items-center pl-20">
            My Tasks
          </div>
          <div className="w-full h-10/11 pr-8 pl-8 pb-8 flex justify-between">
            <div className="bg-[#F6F9FF] h-full border w-3/10 rounded-3xl border-[#D3D8DE]">
              <div className="h-14 w-full flex justify-center items-center">
                <div className="flex items-center bg-[#BCBEC1] h-7 rounded-2xl pr-3 pl-3 ">
                  <div className="rounded-full h-3 w-3 bg-[#6F6F6F] mr-2"></div>
                  <div className="font-medium">Incomplete</div>
                </div>
              </div>
              <div className="h-11/12 w-full pr-5 pl-5 flex flex-col gap-4">
                {incomplete && incomplete.length > 0 ? (
                  incomplete.map((task) => (
                    <TaskCard
                      key={task._id}
                      task={task}
                      onTagDelete={handleTagDelete}
                      onEdit={() => openEditModal(task)}
                      changeStatus={handleStatus}
                    />
                  ))
                ) : (
                  <div className="flex justify-center items-center">
                    <p className="text-xl text-gray-500">No tasks</p>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-[#F6F9FF] h-full w-3/10 rounded-3xl border-1 border-[#D3D8DE]">
              <div className="h-14 w-full flex justify-center items-center">
                <div className="flex items-center bg-[#B5CEFF] h-7 rounded-2xl pr-3 pl-3 ">
                  <div className="rounded-full h-3 w-3 bg-[#5F99DF] mr-2"></div>
                  <div className="font-medium">In progress</div>
                </div>
              </div>
              <div className="h-11/12 w-full pr-5 pl-5 flex flex-col gap-4">
                {inProgress && inProgress.length > 0 ? (
                  inProgress.map((task) => (
                    <TaskCard
                      key={task._id}
                      task={task}
                      onTagDelete={handleTagDelete}
                      onEdit={() => openEditModal(task)}
                      changeStatus={handleStatus}
                    />
                  ))
                ) : (
                  <div className="flex justify-center items-center">
                    <p className="text-xl text-gray-500">No tasks</p>
                  </div>
                )}
              </div>
            </div>
            <div className="bg-[#F6F9FF] h-full w-3/10 rounded-3xl border-1 border-[#D3D8DE]">
              <div className="h-14 w-full flex justify-center items-center">
                <div className="flex items-center bg-[#9EE9BE] h-7 rounded-2xl pr-3 pl-3 ">
                  <div className="rounded-full h-3 w-3 bg-[#3CD08B] mr-2"></div>
                  <div className="font-medium">Completed</div>
                </div>
              </div>
              <div className="h-11/12 w-full pr-5 pl-5 flex flex-col gap-4">
                {completed && completed.length > 0 ? (
                  completed.map((task) => (
                    <TaskCard
                      key={task._id}
                      task={task}
                      onTagDelete={handleTagDelete}
                      onEdit={() => openEditModal(task)}
                      changeStatus={handleStatus}
                    />
                  ))
                ) : (
                  <div className="flex justify-center items-center">
                    <p className="text-xl text-gray-500">No tasks</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
