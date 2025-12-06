export default function Modal() {
    return(
        <div className="novoProduto">
            <form action="" method="get">

            <h2>Novo Produto *</h2>

            <span>Nome do Produto *
            <p><input type="text" name="" id="ExInput" placeholder="Ex: Notebook Dell"/></p>
            </span>

            <span>Descrição
            <p><input type="text" name="" id="ExInput" placeholder="Descrição do Produto"/></p>
            </span>

            <div className="quantidadePreco">
                <span className="quanPre">Quantidade *
                <p><input type="number" name="" id="ExInput" placeholder="0"/></p></span>

                <span className="quanPre">Preço(R$) *
                <p><input type="number" name="" id="ExInput" placeholder="0,00"/></p></span>
            </div>

            <span>Categoria
            <p><input type="text" name="" id="ExInput" placeholder="Ex: Eletrônicos"/></p>
            </span>

            <div className="CancelaAdicionar">
                <input className="AdiCancel" type="button" value="Cancelar" />
                <input className="AdiCancel" type="button" value="Adicionar" />
            </div>
            </form>
        </div>
    )
}