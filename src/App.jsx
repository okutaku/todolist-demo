import React, { useState } from 'react';
import "./index.css";
import { InputTodo } from './Components/InputTodo'

export const App = () => {
  //初期の要素
  const [todoLine, setTodoLine] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  //クリック機能
  const onClickAdd = () => {
    if (todoLine === "") return(
      alert("「やるべきこと」に文字を入力してください")
    );
    const newTodos = [...incompleteTodos, todoLine];
    setIncompleteTodos(newTodos);
    setTodoLine("");
  }

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos,];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  //JSX
  const onChangeTodoLine = e => setTodoLine(e.target.value);
  return (
    <div className="app">
      <InputTodo
        todoLine={todoLine}
        onChange={onChangeTodoLine}
        onClick={onClickAdd}
        />
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return(
              <div key={todo} className="list">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
        {completeTodos.map((todo, index) => {
            return(
              <div key={todo} className="list">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  )
}