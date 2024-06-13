import React, { useState } from "react";

export default function Counter() {
  
   
  const [count, setCount] = useState(0);
return (
  <div>La valeur de mon compteur est <span className='badge badge-primary mx-6'>{count}</span>
    <button className='btn btn-success mx-3' onClick={() => setCount(count +1)}>Incrimenter</button>
    <button className='btn btn-success mx-3' onClick={() => setCount(count -1)}>Décrimenter</button>
    </div>

);
}
