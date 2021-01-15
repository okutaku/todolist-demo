import React from 'react';

export const App = () => {
  return (
    <>
    <div>
      <input placeholder="やるべきこと"/>
      <button>追加</button>
    </div>
    <div>
      <p>未完了のTODO</p>
      <ul>
        <div>
          <li>1項目</li>
          <button>完了</button>
          <button>削除</button>
        </div>
        <div>
          <li>2項目</li>
          <button>完了</button>
          <button>削除</button>
        </div>
      </ul>
    </div>

    <div>
      <p>完了のTODO</p>
      <ul>
        <div>
          <li>1項目</li>
          <button>戻す</button>
        </div>
        <div>
          <li>2項目</li>
          <button>戻す</button>
        </div>
      </ul>
    </div>
    </>
  )
}