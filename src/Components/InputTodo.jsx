import React from "react";

export const InputTodo = (props) => {
  const { todoLine, onChange, onClick} = props;
  return (
    <div className="input-area">
    <input 
    placeholder="やるべきこと"
    value={todoLine} 
    onChange={onChange}
    />
    <button onClick={onClick}>追加</button>
  </div>
  );
};

