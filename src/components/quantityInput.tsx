import { useEffect, useState } from "react";

export function QuantityInput({setInput}:any) {
    const [input, setInputState]:any = useState(0);
    useEffect(()=>{
      setInput(input);
    },[input])
    const handleDecrement = () => {
      setInputState((prev:any) => (prev > 0 ? prev - 1 : 0)); 
    };
  
    const handleIncrement = () => {
      setInputState((prev:any) => prev + 1);
    };
  
    return (
      <div className="flex items-center">
        <button 
          className="px-2 py-1 text-white bg-slate-800 hover:bg-slate-600" 
          onClick={handleDecrement}
        >
          -
        </button>
        <input
          value={input}
          className="w-8 pl-1 text-center"
          onChange={(e) => setInput(parseInt(e.target.value) || 0)}
          type="number"
          placeholder="quantity"
        />
        <button 
          className="px-2 py-1 text-white bg-slate-800 hover:bg-slate-600" 
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    );
  }