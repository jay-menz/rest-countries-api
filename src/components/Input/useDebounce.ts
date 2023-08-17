import { useRef, useEffect } from "react";

export default function useDebounce(callback: Function, delay: number) {
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);


    useEffect(() => {
        return () => {
            if(timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);
}