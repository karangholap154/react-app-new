import { useState } from "react";
function Button() {
    const [counter, setCounter] = useState(0);
    return (
        <>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter + 2)}>Add</button>
        <button onClick={() => setCounter(counter - 1)}>Sub</button>
        </>
    );
}

export default Button;