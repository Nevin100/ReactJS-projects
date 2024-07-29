import { useState } from "react";
import "./styles.css";

function Counter() {
  const [count, setcount] = useState(0);

  const increment = () => setcount(count + 1);
  const decrement = () => setcount(count - 1);

  return (
    <>
      <div className="container">
        <h1 className="number"> Counter : {count}</h1>
      </div>
      <section className="btns-container">
        <button onClick={increment} className="increment">
          +
        </button>
        <button onClick={decrement} className="decrement">
          -
        </button>
      </section>
    </>
  );
}

export default Counter;
