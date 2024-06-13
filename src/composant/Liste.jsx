import React from "react";

// export default function Liste({ tab }) {
//   // const tab = [
//   //     { id: 1, nom: "Laptop", prix: 999.99 },
//   //     { id: 2, nom: "Smartphone", prix: 599.99 },
//   //     { id: 3, nom: "Tablette", prix: 399.99 },
//   //   ]
//   return (
//     <ul>
//       {tab.map((item) => (
//         <li>
//           {item.id} {item.nom} {item.prix}
//         </li>
//       ))}
//     </ul>
//   );
// }

export default function Liste({ tab }) {
    const content = tab.map(item =>
        <li key={item.id}>
            {item.nom}  {item.prix}
        </li>)
    return (
        <ul>
            {content}
        </ul>
    )
}