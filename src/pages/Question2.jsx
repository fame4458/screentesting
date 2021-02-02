import React, { useState } from "react";
import AddFunction from "../components/Question2/AddFunction";

export default function Question2() {
  const [todo, setTodo] = useState([]);
  const [stage, setStage] = useState();

  const handleConfimAddTodo = () => {
    const tmp = todo;
    const data = {
      todo: stage,
      is_done: 0,
    };
    tmp.push(data);
    setTodo(tmp);
    setStage("");
  };

  const handleDoneTodo = (id) => {
    const tmp = todo;
    tmp[id].is_done = 1;
    setTodo(tmp);
  };

  const handleRemove = (id) => {
    const tmp = todo;
    tmp.splice(id, 1);
    setTodo(tmp);
  };

  return (
    <div className="container">
      <AddFunction
        setStage={setStage}
        handleConfimAddTodo={handleConfimAddTodo}
      />
      <table className="table table-bordered">
        <tbody>
          {todo.map((data, index) => (
            <tr key={index}>
              <td>
                <p
                  className={data.is_done ? "text-decoration-line-through" : ""}
                >
                  {data.todo}
                </p>
              </td>
              <td>
                {data.is_done ? (
                  <p
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </p>
                ) : (
                  <span className="d-flex">
                    <p
                      onClick={() => handleDoneTodo(index)}
                      style={{ cursor: "pointer" }}
                    >
                      Done
                    </p>
                    &nbsp;|&nbsp;
                    <p>Edit</p>
                    &nbsp;|&nbsp;
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </p>
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
