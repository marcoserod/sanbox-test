import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { Test } from "./js/js-1";
import { TestBinaryGap } from "./js/js-3";
import Nav from "./react/react-1";

const App = () => (
  <div>
    <h1>Test</h1>
    {/* <h3>Css</h3>
    <ol>
      <li>
        <strong>css/css-1.html:</strong>
        <p>Determine el color del link y explique el porque.</p>
      </li>
      <li>
        <strong>css/css-1.html:</strong>
        <p>
          1) Utilice display grid para crear una grid de 3 columnas centrado
          verticalmente
        </p>
        <p>2) Agregue una separacion de 2 rem entre cada columna</p>
        <p>3) Cambie el grid a uno de dos columnas</p>
      </li>
    </ol> */}

    <h3>JS</h3>
    <ol>
      <li>
        <p>
          A number of items are received. You have boxes that can Contain 3 or 5
          elements in each one.
        </p>
        <p>
          It has to be determined if the number of elements can be contained
          without any box being missing or left over.
        </p>
        <p>
          In the event that it can be distributed without shortages or
          surpluses, return 1 otherwise return -1
        </p>
        <p>
          Complete function "canBeGroup" in <strong>js/js-1.js</strong>
        </p>
        <Test />
        <p />
      </li>
      {/* <li>
        <strong>js/js-2.js:</strong>
        <p>Determine que valor imprime `a` y explique el porque</p>
      </li>
      <li>
        <p>
          Complete la function "binaryGap" en <strong>js/js-3.js</strong>
        </p>
        <TestBinaryGap />
        <p />
      </li>
    </ol>
    <h3>React</h3>
    <ol>
      <li>
        <p>
          Luego de una llamada REST se recibe un JSON con una estructura de
          objectos nesteados. [data]
        </p>
        <pre>
          {`{
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
        op17: { value: "101" }
      },
      op13: { value: "101" }
    },
    op8: { value: "013" },
    op9: { value: "014" }
  }
}`}
        </pre>
        <p>
          1) Se tiene que armar un lista desordenada de N niveles respetando los
          niveles y el ordenamiento del JSON.
        </p>
        <p>
          2) Cada item de la lista debe mostrar su valor y ruta de claves
          ejemplo nivel 1: op1 / 001 ejemplo nivel 2: op5-op6 / 011 ejemplo
          nivel 3: op5-op10-op11 / 101
        </p>
        <p>
          {" "}
          3) Si un item de la lista posee hijos agregar la funcionalidad para
          expandir colapsar los hijos
        </p>
        <Nav />
      </li> */}
    </ol>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
