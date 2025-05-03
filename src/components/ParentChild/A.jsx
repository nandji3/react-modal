import React, { useEffect, useRef } from 'react';
import B from './B';

const A = () => {
    const bRef = useRef();

    useEffect(() => {
        if (bRef.current) {
            bRef.current.printLog();
        }
    }, []);

    return (
        <div>
            <h2>I'm component A (parent)</h2>
            <B ref={bRef} />
        </div>
    );
};

export default A;
