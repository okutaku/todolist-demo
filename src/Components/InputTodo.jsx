import React from "react";

export const InputTodo = (props) => {
  const { todoLine, onChange, onClick, disabled} = props;
  return (
  <div className="input-area">
    <input 
    disabled={disabled}
    placeholder="やるべきこと"
    value={todoLine} 
    onChange={onChange}
    />
    <button 
    disabled={disabled}
    onClick={onClick}>追加</button>
  </div>
  );
};

