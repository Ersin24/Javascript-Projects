import React, {useState, useEffect} from "react";

export default function CounterClean(){
    const [clickCount, setClickCount] = useState(0)

    const increment = () => {
        setClickCount((prev) => prev + 1)
    }
    useEffect(() => {
        document.addEventListener('mousedown', increment)
        return () => {
            document.removeEventListener('mousedown', increment)
        }
    })

    return(
        <h1>
            document Clicks: {clickCount}
        </h1>
    )
}