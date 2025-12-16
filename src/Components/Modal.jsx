export default function Modal({ fecharModal, MostrarCadastro }) {
    return(
       <div className="overlay">
         <div className="novoProduto">
            <form action="" method="get">

            <h2 className="novo-product">Novo Produto <span className="x" onClick={fecharModal}>x</span></h2>

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
                <input className="AdiCancel" type="button" value="Cancelar" onClick={ fecharModal }/>

                <input className="AdiCancel" id="botao-azul" type="button" value="Adicionar" onClick={MostrarCadastro}/>
            </div>

            </form>
        </div>
       </div>
    )
}