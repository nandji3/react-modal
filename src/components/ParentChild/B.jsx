import React, { forwardRef, useImperativeHandle } from 'react';

const B = forwardRef((props, ref) => {

    const printLog = () => {
        console.log('Log from B Component');
    };

    useImperativeHandle(ref, () => ({
        printLog,
    }));

    return <div>I'm component B (child)</div>;
});

export default B;
