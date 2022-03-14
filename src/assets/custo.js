import React, { useState, useEffect } from "react";
import "./custo.css";

export default function Custo() {
  const [name, setName] = useState("");
  const [showName, setShowName] = useState(false);
  const [soma, setSoma] = useState(0);
  const [maodeobra, setMaodeobra] = useState(null);
  const [host, setHost] = useState(null);
  const [contador, setContador] = useState(null);
  const [iss, setIss] = useState(null);
  const [imposto, setImposto] = useState(null);

  useEffect(() => {
    setShowName(false);
  }, [name]);

  return (
    <div className="componentecusto">
      <h1>Entre com os dados necessarios</h1>

      <b>Nome</b>
      <input
        type="text"
        name="nome"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <button onClick={() => setShowName(true)}>enviar</button>

      {showName && <h1>{name}</h1>}

      <b>Mão de Obra</b>
      <input
        type="number"
        name="maodeobra"
        value={maodeobra}
        onChange={(event) => setMaodeobra(Number(event.target.value))}
      />

      <b>Serviços de hospedagem</b>
      <input
        type="number"
        name="host"
        value={host}
        onChange={(event) => setHost(Number(event.target.value))}
      />

      <b>Contabilidade</b>
      <input
        type="number"
        name="contador"
        value={contador}
        onChange={(event) => setContador(Number(event.target.value))}
      ></input>
      <b>Imposto Iss</b>
      <input
        type="Number"
        name="iss"
        value={iss}
        onChange={(event) => setIss(Number(event.target.value))}
      ></input>

      <b>Imposto Sobre Lucro</b>
      <input type="number"></input>

      <button
        onClick={(event) => {
          setSoma(maodeobra + host);
        }}
      >
        Somar os 2 numeros
      </button>

      {soma > 0 && <h1>{soma}</h1>}
    </div>
  );
}
