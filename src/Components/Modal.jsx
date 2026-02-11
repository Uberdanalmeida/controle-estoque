import { useState } from "react"; 

export default function Modal({ fecharModal, MostrarCadastro }) {

    const [nome, setNome] = useState('');
    const [desc, setDesc] = useState('');
    const [qtd, setQtd] = useState('');
    const [preco, setPreco] = useState('');
    const [cat, setCat] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nome || !qtd || !preco) return alert("Preencha os campos obrigatórios!");
        
        const novoProduto = {
            produto: nome,
            descricao: desc,
            quantidade: qtd,
            preco: preco,
            categoria: cat
        };

        MostrarCadastro(novoProduto);
    };


    return(
       <div className="overlay">
         <div className="novoProduto">
            <form onSubmit={handleSubmit}>

            <h2 className="novo-product">Novo Produto <span className="x" onClick={fecharModal}>x</span></h2>

            <span>Nome do Produto *
            <p><input type="text" name="" value={nome} onChange={(e) => setNome(e.target.value)} id="ExInput" placeholder="Ex: Notebook Dell"/></p>
            </span>

            <span>Descrição
            <p><input type="text" name="" value={desc} onChange={(e) => setDesc(e.target.value)} id="ExInput" placeholder="Descrição do Produto"/></p>
            </span>

            <div className="quantidadePreco">
                <span className="quanPre">Quantidade *
                <p><input type="number" name="" value={qtd} onChange={(e) => setQtd(e.target.value)} id="ExInput" placeholder="0"/></p></span>

                <span className="quanPre">Preço(R$) *
                <p><input type="number" name="" value={preco} onChange={(e) => setPreco(e.target.value)} id="ExInput" placeholder="0,00"/></p></span>
            </div>

            <span>Categoria
            <p><input type="text" name="" value={cat} onChange={(e) => setCat(e.target.value)} id="ExInput" placeholder="Ex: Eletrônicos"/></p>
            </span>

            <div className="CancelaAdicionar">
                <input className="AdiCancel" type="button" value="Cancelar" onClick={ fecharModal }/>

                <input className="AdiCancel" id="botao-azul" type="button" value="Adicionar" onClick={handleSubmit}/>
            </div>

            </form>
        </div>
       </div>
    )
}