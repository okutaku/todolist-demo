import React from 'react';
import "./index.css";

export const App = () => {
  return (
    <div className="app">
      <div className="input-area">
        <input placeholder="やるべきこと"/>
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list">
            <li>1項目</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list">
            <li>2項目</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          <div className="list">
            <li>1項目</li>
            <button>戻す</button>
          </div>
          <div className="list">
            <li>2項目</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </div>
  )
}