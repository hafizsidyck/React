import React from 'react'

export default function Tableau(props) {
  return (
    props.elem.map(item => <tr><td>{item.id} </td>
     <td>{item.nom} </td> 
     <td>{item.prix} </td>
     </tr>)
  );
}
