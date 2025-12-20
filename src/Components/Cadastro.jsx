import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Cadastro() {

    return (
        <div className="cadastro">
            <div className="descricao">
                <span>Nome do Produto</span>
                <span>Descrição</span>
                <span>Quantidade</span>
                <span>Preço</span>
                <span>Categoria</span>
            </div>
            <div className="cadastrando">
                <span>qualquer coisa</span>
                <span>1212</span>
                <span>10</span>
                <span>R$ 100,00</span>
                <span><GoPencil color="blue" /> <FaRegTrashAlt color="red" /></span>
            </div>
        </div>
    )
}