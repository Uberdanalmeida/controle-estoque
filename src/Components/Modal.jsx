export default function Modal() {
    return(
        <div className="novoProduto">
            <form action="" method="get">
            <h2>Novo Produto</h2>
            <p>Nome do Produto *</p>
            <input type="text" name="" id="" placeholder="Ex: Notebook Dell"/>
            <p>Descrição</p>
            <input type="text" name="" id="" placeholder="Descrição do Produto"/>
            <div>
                <p>Quantidade *</p>
                <input type="number" name="" id="" placeholder="0"/>
                <p>Preço(R$) *</p>
                <input type="number" name="" id="" placeholder="0,00"/>
            </div>
            <p>Categoria</p>
            <input type="text" name="" id="" placeholder="Ex: Eletrônicos"/>
            <div>
                <button>Cancelar</button>
                <button>Adicionar</button>
            </div>
            </form>
        </div>
    )
}