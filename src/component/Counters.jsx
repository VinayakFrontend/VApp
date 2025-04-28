
import React, { useState, useEffect } from 'react';
import './Counters.css';

export default function Counters({ count, setCount }) {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
      
        const timer = setTimeout(() => {
            setLoader(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    function Increment() {
        if (count < 20) {
            setCount(count + 1);
        }
    }

    function Decrement() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function Reset() {
        if (count > 0) {
            setCount(0);
        }
    }

    return (
        <>
            {loader ? (
                <div className="loader">
                    <h2>Loading...</h2>
                    {/* You can add a spinner here */}
                </div>
            ) : (
                <div className="counter">
                    <h1>Counter App</h1>
                    <button className="reset" onClick={Reset}>&#x21bb;</button>
                    <div className="display">{count}</div>
                    <button className="dec" onClick={Decrement}>-</button>
                    <button className="inc" onClick={Increment}>+</button>
                </div>
            )}
        </>
    );
}
