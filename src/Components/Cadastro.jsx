import { GoPencil } from "react-icons/go";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Cadastro({ listaProdutos }) {

    return (
        <div className="cadastro">
            <div className="descricao">
                <span>Nome do Produto</span>
                <span>Descrição</span>
                <span>Quantidade</span>
                <span>Preço</span>
                <span>Categoria</span>
            </div>

        {listaProdutos.map((item, index) => (
        <div className="cadastrando" key={index}>
          <span>{item.produto}</span>
          <span>{item.descricao}</span>
          <span>{item.quantidade}</span>
          <span>R$ {item.preco}</span>
          <span>{item.categoria}</span>         
        </div>
      ))}
    </div>
    )
}