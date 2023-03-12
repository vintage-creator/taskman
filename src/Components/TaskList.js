import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useTheme } from "switch-mode";
import { toast } from "react-toastify";
import { RWebShare } from "react-web-share";
import { Player } from "@lottiefiles/react-lottie-player";

const TaskList = (props) => {
  const [touched, setTouched] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { tasky, funct } = props;
  const { theme } = useTheme();

  const [state, setState] = useState({
    title: "",
    desc: "",
    assignee: "",
    date: "",
  });

  const { title, desc, assignee, date } = state;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const truncate = (str, num) => {
    if (str.length > num) {
      str = str.substr(0, num) + "...";
      return str;
    }
    return str;
  };

  function deleteHandler() {
    const decision = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (decision) {
      deleteTask();
    }
  }
  //GETTING THE VALUE OF TASKS FROM LOCALSTORAGE
  const tasks = JSON.parse(localStorage.getItem("tasks"));
  const copy = [...tasks];

  function deleteTask() {
    const newtasks = copy.filter((x) => x.id !== tasky.id);
    localStorage.setItem("tasks", JSON.stringify(newtasks));
    funct();
  }

  function updateHandler() {
    setOpenModal(true);
    const exist = copy.find((item) => item.id === tasky.id);
    if (exist) {
      setState({
        title: exist.title,
        desc: exist.desc,
        assignee: exist.assignee,
        date: exist.date,
      });
    }
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    setTouched(true);

    setTimeout(() => {
      const indexOfTask = copy.findIndex((y) => y.id === tasky.id);
      const taskObj = copy[indexOfTask];
      taskObj.title = state.title;
      taskObj.desc = state.desc;
      taskObj.assignee = state.assignee;
      taskObj.date = state.date;
      localStorage.setItem("tasks", JSON.stringify(copy));
      setTouched(false);
      toast.success("Congratulations! Your task has been updated.");
      funct();
      setOpenModal(false);
    }, 5000);
  };

  return (
    <>
      {openModal && (
        <modal
          style={{
            backgroundColor: "rgba(8, 9, 16, 0.873)",
            height: "100vh",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "5px 15px",
              width: "400px",
              height: "490px",
              borderRadius: "8px",
              zIndex: 999,
            }}
          >
            <h3 style={{ color: "#080910" }}>
              Edit task
              <span
                style={{ marginLeft: "75%", cursor: "pointer" }}
                onClick={() => setOpenModal(false)}
              >
                🗙
              </span>
            </h3>
            <form style={{ color: "#080910", fontWeight: "600" }}>
              <label htmlFor="title">Title: </label>
              <br />
              <input
                type="text"
                id="title"
                placeholder="Enter task title"
                value={title}
                name="title"
                onChange={handleChange}
                style={{
                  padding: "5px 8px",
                  width: "94%",
                  borderRadius: "8px",
                  outline: "none",
                }}
              />
              <br />
              <br />
              <label htmlFor="desc">Description: </label>
              <br />
              <textarea
                id="desc"
                cols={20}
                rows={8}
                placeholder="Enter a detailed description of your task"
                value={desc}
                name="desc"
                onChange={handleChange}
                style={{
                  padding: "5px 8px",
                  width: "94%",
                  borderRadius: "8px",
                  outline: "none",
                }}
              />
              <br />
              <br />
              <label htmlFor="assignee">Assignee: </label>
              <br />
              <input
                type="text"
                id="assignee"
                placeholder='Enter the task receipient(e.g "John Doe")'
                value={assignee}
                name="assignee"
                onChange={handleChange}
                style={{
                  padding: "5px 8px",
                  width: "94%",
                  borderRadius: "8px",
                  outline: "none",
                }}
              />
              <br />
              <br />
              <label htmlFor="date">Date: </label>
              <input
                type="date"
                value={date}
                name="date"
                onChange={handleChange}
              />
              <br />
              <br />

              {touched ? (
                <Player
                  autoplay
                  loop
                  src="https://assets3.lottiefiles.com/packages/lf20_gbfwtkzw.json"
                  style={{ height: "80px", width: "80px" }}
                ></Player>
              ) : (
                <button
                  onClick={handleUpdate}
                  type="button"
                  style={{
                    fontSize: "15px",
                    margin: "5% 40%",
                    backgroundColor: "#080910",
                    cursor: "pointer",
                    color: "white",
                    padding: "5px 15px",
                    borderRadius: "8px",
                  }}
                >
                  Update
                </button>
              )}
            </form>
          </div>
        </modal>
      )}

      <div
        style={{
          backgroundColor:
            theme === "light" ? "rgba(255, 255, 255, 0.02)" : "#080910",
          padding: "20px",
          borderRadius: "8px",
          color: "white",
          width: "236px",
          height: "300px",
          margin: "30px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h2 style={{ wordWrap: "break-word" }}>
            <Link
              to={`/tasks/${tasky.id}`}
              style={{ color: "white", textDecoration: "underline" }}
            >
              {truncate(tasky.title, 10)}
            </Link>
          </h2>
          <div style={{ wordWrap: "break-word" }}>
            <b>Description:</b> {truncate(tasky.desc, 25)}
          </div>
          <br />
          <div style={{ wordWrap: "break-word" }}>
            <b>Assigned to:</b> {truncate(tasky.assignee, 20)}
          </div>
          <br />
          {tasky.date && (
            <div>
              <b>Date:</b> {tasky.date}
            </div>
          )}
          <br />
          <br />
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
              <Icon
                icon="material-symbols:delete-outline"
                style={{ color: "white", fontSize: "22px", cursor: "pointer" }}
                onClick={deleteHandler}
              />{" "}
              <Icon
                icon="material-symbols:edit-document-outline"
                style={{ color: "white", fontSize: "22px", cursor: "pointer" }}
                onClick={updateHandler}
              />
            </div>{" "}
            <div>
            <RWebShare
          data={{
            text: tasky.desc.slice(0, 30),
            url: `http://localhost:3000/tasks/${tasky.id}`,
            title: `Task title: ${tasky.title}`,
          }}
          onClick={() => console.log("shared successfully!")}
        >
          <Icon
                icon="material-symbols:share-outline"
                style={{ color: "white", fontSize: "22px", cursor: "pointer" }}
              />
        </RWebShare>
              
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
