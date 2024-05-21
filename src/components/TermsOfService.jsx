import React from "react";
import "./TermsOfService.css";

const TermsOfService = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="terms-modal">
        <h2 className="title">Termos de Serviço do RemanescenteGram</h2>
        <p>
          Bem-vindo aos Termos de Serviço do nosso aplicativo. Estes termos
          descrevem as suas responsabilidades ao usar nosso serviço.
        </p>
        <h3>1. Respeito e Comportamento Ético</h3>
        <p>
          Ao utilizar o RemanescenteGram, você concorda em respeitar todos os
          usuários e contribuir para um ambiente positivo e respeitoso. 
        </p>
        <h3>2. Responsabilidade pelo Conteúdo</h3>
        <p>
          Você é responsável por todo o conteúdo que você
          compartilha ou publica no aplicativo. 
        </p>
        <button className="button" onClick={onClose}>Fechar</button>
        <button className="button" onClick={onClose}>Concordo</button>
      </div>
    </div>
  );
};

export default TermsOfService;
