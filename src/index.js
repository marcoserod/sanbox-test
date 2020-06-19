import "./styles.css";
import React from "react";
import ReactDOM from "react-dom";
import { Test } from "./js/js-1";
import Nav from "./react/react-1";

const App = () => (
  <div>
    <h1>Test</h1>
    <h3>Css</h3>
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
    </ol>
    <h3>JS</h3>
    <ol>
      <li>
        <p>
          Se recibe una cantidad de elementos. Se tiene cajas que pueden
          contener 3 0 5 elementos en cada una.
        </p>
        <p>
          Se tiene que determinar si la cantidad de elementos puede ser
          contenida sin que ninguna caja quede con faltantes o sobrantes.
        </p>
        <p>
          En caso que se pueda distribuir sin faltantes o sobrantes retornar 1
          en caso contrario retornar -1
        </p>
        <p>
          Complete la function "canBeGroup" en <strong>js/js-1.js</strong>
        </p>
        <Test />
        <p />
      </li>
      <li>
        <strong>js/js-2.js:</strong>
        <p>Determine que valor imprime `a` y explique el porque</p>
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
          niveles y el ordenamientos del JSON.
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
      </li>
    </ol>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
