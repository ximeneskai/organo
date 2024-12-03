import Pessoa from '../Pessoa'
import './Relacao.css'
import hexToRgba from 'hex-to-rgba'

const Relacao = ({ relacao, pessoas, aoDeletar, mudarCor }) => {
    return (
        
       pessoas.length > 0 && <section 
        className='relacao' 
        style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(relacao.cor, '0.6') }}>   

            <input onChange={evento => mudarCor(evento.target.value, relacao.nome)} value={relacao.cor} type='color' className='input-cor' />

            <h3 style={{ borderColor: relacao.cor }}>{relacao.nome}</h3>
            <div className='pessoas'>
                {pessoas.map((pessoa, indice) => 
                    <Pessoa 
                        key={indice} 
                        pessoa={pessoa}
                        corDeFundo={relacao.cor}  
                        aoDeletar={aoDeletar} />
            )}
            </div>
        </section>
    )
}

export default Relacao