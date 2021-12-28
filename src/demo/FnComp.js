import React, { useState } from 'react';

function FnComp() {

    const [btnState, setBtnState] = useState(1);

    const add = () => {
        let nums = btnState + 1;
        setBtnState(() => {
            console.log('执行setState回调!')
            return nums
        })
    }

    return (
        <div>
            <button onClick={add}>累加：{btnState}</button>
        </div>
    )
}

export default FnComp