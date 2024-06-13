import React from "react";

export default function Somme({ num1, num2 }) {
  return (
    <div>
      <p className="text-3xl">{num1 + num2}</p>
    </div>
  );
}
