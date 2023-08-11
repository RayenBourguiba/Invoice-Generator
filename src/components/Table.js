import React, { useContext } from "react";
import { State } from "../context/stateContext";

export default function Table() {
  const { list, total } = useContext(State);

  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantité</td>
            <td className="font-bold">Prix</td>
            <td className="font-bold">Total HT</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr className="h-10">
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price} €</td>
                <td>{amount} €</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <div className="flex items-end justify-end">        
        <p>Sous-total: {total.toLocaleString()} € </p><br/>
        </div>        
        <div className="flex items-end justify-end">        
        <p>T.V.A 20%: {total * 20 / 100} €</p><br/>
        </div>
        <div className="flex items-end justify-end">
        <h4>TOTAL T.T.C: </h4>
        <h2 className="text-gray-800 text-4xl font-bold">
          {total * 120 / 100} € 
        </h2></div>
      </div>
    </>
  );
}
