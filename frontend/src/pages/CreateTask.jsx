import React from "react";
import TitleBar from "../components/TitleBar";
import SideBar from "../components/SideBar";
import TaskForm from "../components/tasksForm";

const CreateTask = () => {
  return (
    <div className="bg-[#F0F4FF] h-screen w-screen">
      <TitleBar />
      <div className="w-full h-full flex">
        <SideBar />
        <div className="w-6/7">
          <div className="h-1/11 w-full text-[#2C2C2C] font-semibold text-3xl flex items-center justify-center">
            Create Task
          </div>
          <div className="h-10/11 flex justify-center ">
            <TaskForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
