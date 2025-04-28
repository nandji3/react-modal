//Question Create a timer functionality, where on initial load of the app, the timer should start in reverse order and every second got decreased by one , if the timer reaches at 0 it should get stop


import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(10);

    useEffect(() => {
        if (count === 0) return;

        const interval = setInterval(() => {
            setCount(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleIncr = () => {
        // eslint-disable-next-line no-undef
        setCount(prev => prev + 1)
    }

    const handleDec = () => {
        // eslint-disable-next-line no-undef
        if (count === 0) {
            return;
        }
        // eslint-disable-next-line no-undef
        setCount(prev => prev - 1)
    }

    return (
        <div className='w-full min-h-[100vh] flex justify-center items-center gap-[2rem]'>

            <button className="bg-teal-500 hover:bg-teal-600 text-white px-[0.8rem] py-[0.15rem] rounded-sm cursor-pointer transition-all ease-in duration-200 text-[1.2rem]" onClick={handleDec}>-</button>
            <h1>{count}</h1>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-[0.8rem] py-[0.15rem] rounded-sm cursor-pointer transition-all ease-in duration-200 text-[1.2rem]" onClick={handleIncr}>+</button>
        </div>
    )
}

export default Counter;
