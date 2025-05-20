import React, { useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import Tag from "./Tag";

const TaskCard = ({ task, onTagDelete, onEdit, changeStatus }) => {
  const { name, description, tags } = task;
  const [showDescription, setShowDescription] = useState(false);

  const handleToggle = () => {
    setShowDescription((prev) => !prev);
  };

  const handleDelete = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag != tagToRemove);
    onTagDelete(newTags, task._id);
  };

  return (
    <div className="w-full h-fit border border-[#D3D8DE] rounded-2xl pl-3 pr-3 pt-3 pb-2 flex flex-col gap-2">
      <div className="w-full h-3/8 flex items-center justify-between ">
        <div className="flex gap-2 items-center">
          <div className="text-2xl text-[#2C2C2C] font-semibold">{name}</div>
          {description && (
            <div
              className="flex items-center justify-center w-7 h-5 pb-1 text-xl bg-[#c4c4c4] rounded-xl cursor-pointer"
              onClick={handleToggle}
            >
              &hellip;
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => onEdit(task)} className="cursor-pointer">
            <MdModeEditOutline className="text-xl text-[#2C2C2C]"/>
          </button>
          <div className="relative group inline-block">
            <div className="rounded-full h-4 w-4 bg-[#6F6F6F] mr-2 cursor-pointer"></div>
            <div className="w-50 h-20 border bg-[#F0F4FF] hidden group-hover:block absolute border-[#D3D8DE] rounded-2xl pl-2 pt-1 pb-3">
              <label className="text-sm text-gray-500">Set Status</label>
              <div className="flex items-center pr-3 pl-3 cursor-pointer" onClick={() => changeStatus(task, 'In progress')}>
                <div className="rounded-full h-3 w-3 bg-[#5F99DF] mr-2"></div>
                <div className="font-medium">In progress</div>
              </div>
              <div className="flex items-center pr-3 pl-3 cursor-pointer" onClick={() => changeStatus(task, 'Completed')}>
                <div className="rounded-full h-3 w-3 bg-[#3CD08B] mr-2"></div>
                <div className="font-medium">Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDescription && <p>{description}</p>}
      <div className="flex gap-1 flex-wrap">
        {tags &&
          tags.map((tag) => <Tag tagName={tag} onDelete={handleDelete} />)}
      </div>
    </div>
  );
};

export default TaskCard;
