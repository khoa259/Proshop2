import { useEffect, useState } from "react";

export const Debounce = (value, delay) => {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebounce(value) ,delay);
        return () => clearTimeout(handler)
    })
    return debounce;
}