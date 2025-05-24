import { React, useState } from "react";
import axios from "axios";
import Tag from "./Tag";
const apiUrl = import.meta.env.VITE_API_URL;

const TaskForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [message, setMessage] = useState("");

  const deleteTag = (tagToDelete) => {
    setTags((prev) => prev.filter((tag) => tag !== tagToDelete));
  };

  const updateTags = () => {
    setTags((prev) => [...prev, tagInput]);
    setTagInput("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(apiUrl)
    try {
      const response = await axios.post(`${apiUrl}/tasks`, {
        name: name,
        description: description,
        tags: tags,
      });
      setName("");
      setDescription("");
      setTags([]);
      setMessage("Created Task Successfully!");
      setTimeout(() => setMessage(""), 5000);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <form
      type="submit"
      onSubmit={handleSubmit}
      className="w-3/12 h-7/12 border border-[#D3D8DE] rounded-xl p-8 flex flex-col gap-6 "
    >
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
          name="name"
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
        Create Task
      </button>
      {message && (
        <div className="bg-green-200 text-green-800 flex items-center justify-center p-2 rounded-xl mb-2">
          {message}
        </div>
      )}
    </form>
  );
};

export default TaskForm;
