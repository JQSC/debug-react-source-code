import React, { useState } from 'react';

function FnComp() {

    const [btnState, setBtnState] = useState(1);

    const add = () => {
        let nums = btnState + 1;
        setBtnState(nums)
    }

    return (
        <div>
            <button onClick={add}>累加：{btnState}</button>
        </div>
    )
}

export default FnComp