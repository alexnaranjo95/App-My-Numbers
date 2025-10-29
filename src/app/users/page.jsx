"use client"; //sino es use client no podemos usar hooks, ni nada reactivo
import { useState, useEffect } from "react";
 
const UsersPage = () => {
  const [count, setCount] = useState(0);
 
  function handleAdd() {
    setCount(count + 1);
  }
  function handleMinus() {
    setCount(count - 1);
  }
  function handleZero() {
    setCount(0);
  }
 
  return (
    <div>
      <h1 className="text-3xl font-bold">Mi contador</h1>
      <p className="text-4xl font-semibold text-teal-400">{count}</p>
      <button
        onClick={handleAdd}
        className="bg-teal-300 text-white font-bold p-2 rounded-md"
      >
        Add one
      </button>
      <button
        onClick={handleMinus}
        className="bg-teal-300 text-white font-bold p-2 rounded-md"
      >
        Minus one
      </button>
      <button
        onClick={handleZero}
        className="bg-teal-300 text-white font-bold p-2 rounded-md"
      >
        Zero
      </button>
    </div>
  );
};
 
export default UsersPage;
 