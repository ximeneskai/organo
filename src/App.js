import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Relacao from './componentes/Relacao';
import Rodape from './componentes/Rodape';

function App() {

  const relacoes = [
    {
      nome: 'Desconhecide',
      corPrimaria:'#ED6b69',
      corSecundaria: '#FDE7E8'
    },{
      nome: 'Conhecide',
      corPrimaria:'#FF8A29',
      corSecundaria: '#FFEEDF'
    },{
      nome: 'Colega de trabalho',
      corPrimaria:'#FFBA05',
      corSecundaria: '#FFF5D9'
    },{
      nome: 'Parente',
      corPrimaria:'#DB6EBF',
      corSecundaria: '#FAE9F5'
    },{
      nome: 'Amigue',
      corPrimaria:'#57c278',
      corSecundaria: '#d9f7e9'
    },{
      nome: 'Amigue próxime',
      corPrimaria:'#A6D157',
      corSecundaria: '#F0F8E2'
    },{
      nome: 'Melhor amigue',
      corPrimaria:'#82CFFA',
      corSecundaria: '#E8F8FF'
    }
  ]

  const [pessoas, setPessoas] = useState([])

  const aNovaPessoaAdicionada = (pessoa) => {
    console.log(pessoa);
    setPessoas([...pessoas, pessoa])
  }

  return (
    <div className="App">
      <Banner/>

      <Formulario 
      relacoes={relacoes.map(relacao => relacao.nome)}
      aNovaPessoaCadastrada={pessoa => 
      aNovaPessoaAdicionada(pessoa)}/>
      
      {relacoes.map(relacao => 
      <Relacao 
      key={relacao.nome} 
      nome={relacao.nome}
      corPrimaria={relacao.corPrimaria}
      corSecundaria={relacao.corSecundaria}
      pessoas={pessoas.filter(pessoa => pessoa.relacao === relacao.nome)}
      />)}

      <Rodape />

    </div>
  );
}

export default App;
