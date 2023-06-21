import React, { useState } from "react";
/**
 * 
  Luego de una llamada REST se recibe un JSON
  con una estructura de objectos nesteados. [data]

  1) Se tiene que armar un lista desordenada de N niveles respetando
  los niveles y el ordenamientos del JSON.
  
  2) Cada item de la lista debe mostrar su valor y ruta de claves
  ejemplo nivel 1: op1 / 001
  ejemplo nivel 2: op5-op6 / 011
  ejemplo nivel 3: op5-op10-op11 / 101

  3) Si un item de la lista posee hijos agregar la funcionalidad para expandir
  colapsar los hijos
 */
export const data = {
  op1: { value: "001" },
  op2: { value: "002" },
  op3: { value: "003" },
  op4: { value: "004" },
  op5: {
    op6: { value: "011" },
    op7: { value: "012" },
    op10: {
      op11: { value: "101" },
      op12: { value: "101" },
      op14: {
        op15: { value: "101" },
        op16: { value: "101" },
        op17: { value: "101" },
      },
      op13: { value: "101" },
    },
    op8: { value: "013" },
    op9: { value: "014" },
  },
};

const Nav = ({ data }) => {
  return (
    <div>
      <p style={{ fontStyle: "italic", color: "gray" }}>Your code</p>
    </div>
  );
};

export default () => <Nav data={data} />;
