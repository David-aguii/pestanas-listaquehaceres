  import { useState } from "react";
  import style from "./Pestana.module.css"
  const tabsList = [
    { tabs: "TAB1", content: "Tab 1 content is showing here" },
    { tabs: "TAB2", content: "Tab 2 content is showing here" },
    { tabs: "TAB3", content: "Tab 3 content is showing here" },
  ];

  const Pestanhas = () => {
    const [seleccion, setSeleccion] = useState(null);
   
    return (
      <div>
        {tabsList.map((item, idx) => (
          <button
            key={idx}
            className={style.pestanaBtn}
            onClick={() => setSeleccion(idx)}
          >
            {item.tabs}
          </button>
        ))}
        <div className={style.cuadroSt}>{seleccion !== null ? tabsList[seleccion].content :null}</div>
      </div>
    );
  };

  export default Pestanhas;
