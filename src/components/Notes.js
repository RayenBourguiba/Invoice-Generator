import { useContext } from "react";
import { State } from "../context/stateContext";

export default function Notes() {
  const { notes } = useContext(State);

  return (
    <>
      <section className="mt-10 mb-5">
          {notes !==""  && <h3>Infos Additionnelles</h3>}
        <p className="lg:w-1/2 text-justify">{notes}</p>
      </section>
    </>
  );
}
