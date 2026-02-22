import { FiTrash2, FiEdit } from "react-icons/fi";
import { useState } from "react";

export default function Cadastro({ listaProdutos, removerProduto, editarProduto }) {

    const [busca, setBusca] = useState("")
    const [editando, setEditando] = useState(null)

    const produtosFiltrados = listaProdutos.filter(p =>
        p.produto.toLowerCase().includes(busca.toLowerCase())
    )

    function salvarEdicao() {
        editarProduto(editando)
        setEditando(null)
    }

    if (listaProdutos.length === 0) {
        return <p style={{ textAlign: "center" }}>Nenhum produto cadastrado.</p>
    }

    return (
        <div className="cadastro-container">

            <input
                className="busca-admin"
                placeholder="Buscar produto..."
                value={busca}
                onChange={e => setBusca(e.target.value)}
            />

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
                    {produtosFiltrados.map(item => (
                        <tr key={item.id} className={item.quantidade < 3 ? "estoque-baixo" : ""}>

                            <td>
                              {editando?.id === item.id ?
                                <input value={editando.produto} onChange={e => setEditando({...editando, produto:e.target.value})}/>
                                : item.produto}
                            </td>

                            <td>
                              {editando?.id === item.id ?
                                <input value={editando.descricao} onChange={e => setEditando({...editando, descricao:e.target.value})}/>
                                : item.descricao}
                            </td>

                            <td>
                              {editando?.id === item.id ?
                                <input type="number" value={editando.quantidade} onChange={e => setEditando({...editando, quantidade:e.target.value})}/>
                                : item.quantidade}
                            </td>

                            <td>
                              {editando?.id === item.id ?
                                <input type="number" value={editando.preco} onChange={e => setEditando({...editando, preco:e.target.value})}/>
                                : `R$ ${Number(item.preco).toLocaleString("pt-BR")}`}
                            </td>

                            <td>
                              {editando?.id === item.id ?
                                <input value={editando.categoria} onChange={e => setEditando({...editando, categoria:e.target.value})}/>
                                : item.categoria}
                            </td>

                            <td className="acoes">
                                {editando?.id === item.id ? (
                                    <button className="btn-salvar" onClick={salvarEdicao}>
                                      Salvar
                                    </button>
                                ) : (
                                    <>
                                      <button className="btn-editar" onClick={() => setEditando(item)}>
                                        <FiEdit/>
                                      </button>

                                      <button className="btn-remover" onClick={() => removerProduto(item.id)}>
                                        <FiTrash2/>
                                      </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}