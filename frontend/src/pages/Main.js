import React, { useEffect, useState, Component } from "react";
import "./Main.css";
import { booleanTypeAnnotation } from "@babel/types";

export default function Main() {
  let [operacao, setOperacao] = useState("");
  let [historico, setHistorico] = useState("");
  let [temaAtual, setTemaAtual] = useState("light");

  class Botao extends Component {
    render() {
      return (
        <button
          className={`botao ${this.props.className}`}
          value={this.props.valor}
          onClick={e => adicionaValor(e)}
        >
          {this.props.valor}
        </button>
      );
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", temaAtual);
  });

  function adicionaValor(event) {
    setOperacao(operacao + event.target.value);
    setHistorico(historico + event.target.value);
  }

  function zeraValor() {
    setOperacao("");
    setHistorico("");
  }

  function fazCalculo() {
    setOperacao(eval(operacao));
    setHistorico(historico + `=${eval(operacao)}`);
  }

  function mudaTema() {
    setTemaAtual(temaAtual == "light" ? "dark" : "light");
  }

  return (
    <div className="tela">
      <div className="container">
        <div className="operacoes">{historico}</div>
        <div className="resultado">{operacao}</div>

        <button className="botao" onClick={() => mudaTema()}>
          THM
        </button>
        <Botao valor=""></Botao>
        <Botao valor=""></Botao>
        <Botao valor=""></Botao>
        <button className="botao botao-limpar" onClick={() => zeraValor()}>
          C
        </button>
        <Botao valor="("></Botao>
        <Botao valor=")"></Botao>
        <Botao className="operadores" valor="/"></Botao>

        <Botao valor="7"></Botao>
        <Botao valor="8"></Botao>
        <Botao valor="9"></Botao>
        <Botao className="operadores" valor="*"></Botao>

        <Botao valor="4"></Botao>
        <Botao valor="5"></Botao>
        <Botao valor="6"></Botao>
        <Botao className="operadores" valor="-"></Botao>

        <Botao valor="1"></Botao>
        <Botao valor="2"></Botao>
        <Botao valor="3"></Botao>
        <Botao className="operadores" valor="+"></Botao>

        <Botao className="zero" valor="0"></Botao>

        <Botao valor="."></Botao>
        <button className="botao operador-igual" onClick={() => fazCalculo()}>
          =
        </button>
      </div>
    </div>
  );
}
