import {useState} from "react";
const stock = 15;
const initial = 1;

const Count = () => {
    const [count, setCount] = useState(0);
    console.log("count", count);

    const increase = () => {
        console.log("Ahora increase funciona");
        count <= stock - 1 && setCount(count + 1);
    };

    const decrease = () => {
        console.log("Ahora decrease funciona");
        count >= initial && setCount(count - 1);
    };

    return (
        <div>
            <h1>Count</h1>
            <h3>Contador: {count}</h3>
            <button onClick={increase}>Click me to add!</button>
            <button onClick={decrease}>Click me to rest!</button>
        </div>
    )

}

export default Count;