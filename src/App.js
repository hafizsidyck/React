import "./App.css";
import Liste from "./composant/Liste.jsx";
import Somme from "./composant/Somme.jsx";
import Tableau from "./composant/Tableau.jsx";
import Counter from "./composant/Counter.jsx";
import { useState } from "react";

export default function App() {
  const [content, setContent] = useState()
  const [isClicked, setIsClicked] = useState()

  const tab = [
    { id: 1, nom: "Laptop", prix: 999.99 },
    { id: 2, nom: "Smartphone", prix: 599.99 },
    { id: 3, nom: "Tablette", prix: 399.99 },
  ];
  function afficherTab () {
    const resultat = tab.map(tabs => <li key ={tabs.id}>{tabs.nom} </li>)
    setContent (resultat)
    
  }
  return (
    <div className="p-5 border h-96 bg-red-300">
      <ul>{content} </ul>
      <button className='btn btn-info' onClick={afficherTab}>Display tab</button>
      <button className='btn btn-info mx-6' onClick={() => setIsClicked (!isClicked)}>click</button>
      {isClicked && <Counter/>}
      
    </div>

    //  <tab list={Tableau} />
    //   <Somme num1={6} num2={9} /> 

    // {/* <div className="App">
    //       <h1>LISTE DES PRODUITS</h1>
    //       <table>
    //         <tr>
    //           <td>ID</td>
    //           <td>NOM</td>
    //           <td>PRIX</td>
    //         </tr>
    //         <tbody>
    //           <Tableau elem={tab} />
    //         </tbody>
    //       </table>

    //     </div>
    //   );
    // } */}
  );
}
