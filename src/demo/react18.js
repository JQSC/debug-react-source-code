import React, { Component, useState } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(false);

    function handleClick() {
        //批量更新：第一个更新走任务调度，第二个更新在走任务调度前判断 root.callbackNode,因为第一个更新会设置此属性，那么在任务未执行前，第二个更新执行时callbackNode不为空，则取消当前
       //的任务调度，只更新updateQueue，状态由第一个更新的任务调度执行。
        //setCount(c => c + 1); // Does not re-render yet
        //setFlag(f => !f); // Does not re-render yet
        // React will only re-render once at the end (that's batching!)
        setTimeout(()=>{
            setCount(c => c + 1); // Does not re-render yet
            setFlag(f => !f); // Does not re-render yet
        })
    }

    console.log('render')

    return (
        <div>
            <button onClick={handleClick}>Next</button>
            <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
        </div>
    );
}


export default App