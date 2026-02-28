import { useState } from "react"; 

export default function Modal({ fecharModal, MostrarCadastro }) {

    const [nome, setNome] = useState('');
    const [desc, setDesc] = useState('');
    const [qtd, setQtd] = useState('');
    const [preco, setPreco] = useState('');
    const [cat, setCat] = useState('');

    function formatarMoeda(valor) {
        valor = valor.replace(/\D/g, ""); // remove tudo que não é número
        valor = (Number(valor) / 100).toFixed(2) + "";
        valor = valor.replace(".", ",");
        valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        return valor;
    }

    function handlePreco(e) {
        const valorFormatado = formatarMoeda(e.target.value);
        setPreco(valorFormatado);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nome || !qtd || !preco) return alert("Preencha os campos obrigatórios!");
        
        const novoProduto = {
            produto: nome,
            descricao: desc,
            quantidade: qtd,
            preco: Number(preco.replace(".", "").replace(",", ".")),
            categoria: cat
        };

        MostrarCadastro(novoProduto);
    };


    return(
       <div className="overlay">
         <div className="novoProduto">
            <form onSubmit={handleSubmit}>

            <div className="modal-header">
                <h2>Novo Produto</h2>
                <button className="fechar" onClick={fecharModal}>×</button>
            </div>

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