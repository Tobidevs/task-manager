import React, { useState } from "react";
import axios from "axios";
import Tag from "./Tag";
import { IoMenu } from "react-icons/io5";

const EditTaskModal = ({ task, onClose, onUpdate, onDelete }) => {
  const [name, setName] = useState(task.name);
  const [description, setDescription] = useState(task.description);
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState(task.tags);

  const updateTags = () => {
    setTags((prev) => [...prev, tagInput]);
    setTagInput("");
  };
  const deleteTag = (tagToDelete) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToDelete));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5555/tasks/${task._id}`, {
        name: name,
        description: description,
        tags: tags,
      });
      onUpdate();
      onClose();
    } catch (err) {
      console.error("Failed to update task:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-700/50 flex items-center justify-center z-50">
      <div className="bg-[#F0F4FF] p-8 rounded-xl shadow-lg w-3/8 h-3/5 flex flex-col justify-center">
        <div className="flex w-full justify-center  h-1/10 relative">
          <h1 className="text-[#2C2C2C] font-semibold text-3xl ">Edit Task</h1>
          <div
            className="absolute left-0 text-red-500 cursor-pointer"
            onClick={() => onDelete(task)}
          >
            Delete Task
          </div>
          <div
            className="absolute right-0 text-4xl cursor-pointer"
            onClick={() => onClose()}
          >
            &times;
          </div>
        </div>
        <form className="h-9/10 flex flex-col gap-6" onSubmit={handleUpdate}>
          <div className="flex flex-col gap-2 h-fit w-full">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Value"
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="border pl-5 pt-2 pb-2 w-full border-[#D3D8DE] rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 h-fit w-full">
            <label>Description</label>
            <input
              type="text"
              name="description"
              placeholder="Value"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              className="border pl-5 pt-2 pb-2 w-full border-[#D3D8DE] rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-2 h-fit w-full">
            <label>Tags</label>
            <div className="flex items-center gap-3">
              <input
                type="text"
                name="name"
                placeholder="Value"
                onChange={(e) => setTagInput(e.target.value)}
                value={tagInput}
                className="border pl-5 pt-2 pb-2 w-full border-[#D3D8DE] rounded-xl"
              />
              <p
                className="p-2 bg-gray-300 rounded-full cursor-pointer"
                onClick={updateTags}
              >
                &#43;
              </p>
            </div>

            <div className="flex flex-wrap gap-1">
              {tags.map((val, index) => (
                <Tag tagName={val} key={index} onDelete={deleteTag} />
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-xl cursor-pointer"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTaskModal;
