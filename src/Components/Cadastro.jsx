export default function Cadastro({ listaProdutos, removerProduto }) {

    if (listaProdutos.length === 0) {
        return <p style={{ textAlign: "center" }}>Nenhum produto cadastrado.</p>
    }

    return (
        <div className="cadastro">
            <div className="descricao">
                <span>Nome do Produto</span>
                <span>Descrição</span>
                <span>Quantidade</span>
                <span>Preço</span>
                <span>Categoria</span>
                <span>Ações</span>
            </div>

            {listaProdutos.map((item, index) => (
                <div className="cadastrando" key={index}>
                    <span>{item.produto}</span>
                    <span>{item.descricao}</span>
                    <span>{item.quantidade}</span>
                    <span>R$ {item.preco}</span>
                    <span>{item.categoria}</span>

                    <button 
                        className="remover"
                        onClick={() => removerProduto(index)}
                    >
                        Remover
                    </button>
                </div>
            ))}
        </div>
    )
}
