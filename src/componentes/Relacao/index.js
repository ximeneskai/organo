import Pessoa from '../Pessoa'
import './Relacao.css'

const Relacao = (props, aoDeletar) => {
    return (
        
        props.pessoas.length > 0 && <section 
        className='relacao' 
        style={{ backgroundColor: props.corSecundaria }}
        >   
            <input value={props.corPrimaria} type='color' className='input-cor'/>

            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='pessoas'>
            {props.pessoas.map(pessoa => 
                <Pessoa 
                corDeFundo={props.corPrimaria} 
                key={pessoa.nome} 
                nome={pessoa.nome} 
                cargo={pessoa.cargo} 
                imagem={pessoa.imagem} 
                aoDeletar={aoDeletar}
                />
            )}
            </div>
        </section>
    )
}

export default Relacao