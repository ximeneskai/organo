import { IoMdCloseCircle } from "react-icons/io";
import './Pessoa.css'

///APAGAR ISSO AQUI DEPOIS QUE RESOLVER O ONCLICK
function deletarColaborador() {
    console.log('deletando colaborador...');
  }

const Pessoa = ({nome, imagem, cargo, corDeFundo, aoDeletar}) => {
    return (
        <div className='pessoa'>
            <IoMdCloseCircle size={25} className='deletar' onClick={deletarColaborador}/>

            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>

        </div>
    )
}

export default Pessoa