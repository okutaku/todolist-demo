import React, { useState } from 'react';
import "./index.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "1項目目",
    "2項目目"
  ]);

  const [completeTodos, setCompleteTodos] = useState([
    "３項目目",
  ]);
  return (
    <div className="app">
      <div className="input-area">
        <input placeholder="やるべきこと"/>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return(
              <div key={todo} className="list">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
        {completeTodos.map((todo) => {
            return(
              <div key={todo} className="list">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  )
}