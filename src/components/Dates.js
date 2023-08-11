import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Dates() {
  const { invoiceNumber, invoiceDate, dueDate } = useContext(State);

  return (
    <>
      <article className="mt-10 mb-14 flex items-end justify-end">
        <ul>
          <li className="p-1 ">
            <span className="font-bold">Numéro de facture:</span> {invoiceNumber}
          </li>
          <li className="p-1 bg-gray-100">
            <span className="font-bold">Date de la facture:</span> {invoiceDate}
          </li>
          {dueDate !== "" && 
          <li className="p-1 ">
            <span className="font-bold">Date d'échéance:</span> {dueDate}
          </li>}
        </ul>
      </article>
    </>
  );
}