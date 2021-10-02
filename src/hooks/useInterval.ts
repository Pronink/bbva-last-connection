import { useEffect, useRef } from 'react';

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export function useInterval(callback: Function, delay: number | null) {
    const savedCallback = useRef<Function>();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current!();
        }
        if (delay !== null) { // Null pauses interval
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
