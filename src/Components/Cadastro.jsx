import { FiTrash2 } from "react-icons/fi";

export default function Cadastro({ listaProdutos, removerProduto }) {

    if (listaProdutos.length === 0) {
        return <p style={{ textAlign: "center" }}>Nenhum produto cadastrado.</p>
    }

    return (
        <div className="cadastro-container">

            <table className="tabela-produtos">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Descrição</th>
                        <th>Qtd</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {listaProdutos.map((item, index) => (
                        <tr key={index}>
                            <td>{item.produto}</td>
                            <td>{item.descricao}</td>
                            <td>{item.quantidade}</td>
                            <td>
                              R$ {Number(item.preco).toLocaleString("pt-BR")}
                            </td>
                            <td>{item.categoria}</td>
                            <td>
                                <button 
                                  className="btn-remover"
                                  onClick={() => removerProduto(index)}
                                >
                                  <FiTrash2 size={16}/> Remover
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}