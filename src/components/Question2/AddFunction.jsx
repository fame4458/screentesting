import React from "react";

export default function AddFunction(props) {
  return (
    <form>
      <div className="d-flex input-group">
        <span className="input-group-text bg-transparent border-0">Todo: </span>

        <input
          className="border-0 form-control"
          type="text"
          name="todo"
          placeholder="Enter what you want to do here..."
          onChange={(e) => props.setStage(e.target.value)}
        />
        <span
          className="input-group-text bg-transparent border-0 fw-bold"
          style={{ cursor: "pointer" }}
          onClick={() => props.handleConfimAddTodo()}
        >
          ADD
        </span>
      </div>
    </form>
  );
}
