import Pessoa from '../Pessoa'
import './Relacao.css'

const Relacao = (props) => {
    return (
        
        props.pessoas.length > 0 && <section 
        className='relacao' 
        style={{ backgroundColor: props.corSecundaria }}
        >
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='pessoas'>
            {props.pessoas.map(pessoa => <Pessoa nome={pessoa.nome} cargo={pessoa.cargo} imagem={pessoa.imagem}/>)}
            </div>
        </section>
    )
}

export default Relacao