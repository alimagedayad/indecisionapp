import React from 'react';

const Action = (props) =>
(
    <div>
        <button className='big-button' disabled={!props.isEnabled} onClick={props.shouldIDO}>What Should I Do?</button>
    </div>
);

export default Action;


