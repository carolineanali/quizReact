import React, { useState } from 'react';
import Pergunta from './perguntas';

function Quiz() {
  const [opcoesSelecionadas, setOpcoesSelecionadas] = useState({});
  const [enviando, setEnviando] = useState(false);

  const perguntas = [
    {
      id: 1,
      pergunta:  'Em React.Js, como são chamadas as entradas que são passadas na criação dos componentes React, usando uma convenção de nomenclatura semelhante aos atributos de tag HTML?',
      opcoes: ['Refs', 'Props', 'State', 'Keys', 'Elements'],
      resposta: 'Props',
    },
    {
      id: 2,
      pergunta: 'Qual a habilidade técnica NÃO é necessária para ser um desenvolvedor front-end?',
      opcoes: ['HTML', 'Python', 'CSS',  'jQuery', 'Javascript'],
      resposta: 'Python',
    },
    {
      id: 3,
      pergunta:  'Julgue se a afirmativa a seguir é verdadeira ou falsa: O JavaScript é amplamente categorizado como uma linguagem de criação de scripts ou uma linguagem interpretada. O código em JavaScript é interpretado, ou seja, é traduzido diretamente no código de linguagem de máquina subjacente por um mecanismo de JavaScript.',
      opcoes: ['Verdadeira', 'Falsa'],
      resposta: 'Verdadeira',
    },
  ];

  function aoSelecionarOpcao(pergunta, opcao) {
    if (opcoesSelecionadas[pergunta]) {
      alert('Você já respondeu esta pergunta!');
      return;
    }

    setOpcoesSelecionadas((opcoesAntigas) => ({
      ...opcoesAntigas,
      [pergunta]: opcao,
    }));
  }

  function aoEnviar() {
    if (Object.keys(opcoesSelecionadas).length < perguntas.length) {
      alert('Por favor, responda todas as perguntas antes de finalizar o quiz!');
    } else {
      setEnviando(true);
    }
  }

  const respostasCorretas = perguntas.reduce((acertos, pergunta) => {
    if (opcoesSelecionadas[pergunta.id] === pergunta.resposta) {
      return acertos + 1;
    } else {
      return acertos;
    }
  }, 0);

  if (enviando) {
    alert('Você acertou ' + respostasCorretas + ' de ' + perguntas.length + ' perguntas');

  }

  return (
    <div>
      <h1>Quiz Front-End</h1>
      {perguntas.map((pergunta) => (
        <Pergunta
          key={pergunta.id}
          pergunta={pergunta.pergunta}
          opcoes={pergunta.opcoes}
          opcaoSelecionada={opcoesSelecionadas[pergunta.id]}
          aoSelecionarOpcao={(opcao) => aoSelecionarOpcao(pergunta.id, opcao)}
        />
      ))}
      <button onClick={aoEnviar}>Finalizar</button>
    </div>
  );
}

export default Quiz