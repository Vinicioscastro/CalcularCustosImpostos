import React, { useState, useEffect } from "react";
import "./custo.css";

export default function Custo() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);

  const [numero1, setNumero1] = useState("");
  // const [showNumber1, setShowNuber1] = useState("");

  useEffect(() => {
    setShowName(false);
  }, [name]);

  return (
    <div className="componentecusto">
      <h1>Teste</h1>
      <b>Nome</b>
      <br />
      <input
        type="text"
        name="nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <button onClick={() => setShowName(true)}>enviar</button>
      <br />
      <br />
      {showName && <h1>{name}</h1>}
      <b>Digite 1 numero</b>
      <input
        type="number"
        name="numero1"
        value={numero1}
        onChange={(event) => setNumero1(event.target.value)}
      />
      {console.log(numero1)}
    </div>
  );
}
