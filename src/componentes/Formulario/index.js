import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [relacao, setRelacao] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aNovaPessoaCadastrada({
            nome,
            cargo,
            imagem,
            relacao
        })

        setNome('')
        setCargo('')
        setImagem('')
        setRelacao('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card da Amizade</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='Nome' 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Cargo' 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label='Imagem' 
                    placeholder="Digite o endereço da sua imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Relação' 
                    itens={props.relacoes}
                    valor={relacao}
                    aoAlterado={valor => setRelacao(valor)}/>
                <Botao texto='Criar Card'/>
            </form>
        </section>
    )
}

export default Formulario;