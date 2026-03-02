import './App.css'
import Header from "./Components/Header";
import Main from "./Components/Main";
import Aside from "./Components/Aside";
import Cadastro from './Components/Cadastro';
import Modal from './Components/Modal';
import Grafico from './Components/Grafico';
import { useState, useEffect } from 'react';

export default function App() { 
  
  const [exibirModal, setExibirModal] = useState(false)
  const [busca, setBusca] = useState("")
  const [toast, setToast] = useState("")

  // 🔴 CARREGA DO LOCALSTORAGE
  const [cadastroUsuario, setCadastroUsuario] = useState(() => {
    const dados = localStorage.getItem("produtosAdmin")
    return dados ? JSON.parse(dados) : []
  })

  // 🔴 SALVA AUTOMÁTICO
  useEffect(() => {
    localStorage.setItem("produtosAdmin", JSON.stringify(cadastroUsuario))
  }, [cadastroUsuario])

  function MostrarCadastro(novoProduto) {
  setCadastroUsuario([
    ...cadastroUsuario,
    { ...novoProduto, id: crypto.randomUUID() }
  ])

  setToast("Produto adicionado com sucesso!")
  setExibirModal(false)

  setTimeout(() => setToast(""), 3000)
}
    
  function abrirModal() {
    setExibirModal(true)
  }

  function fecharModal() {
    setExibirModal(false)
  }

  function removerProduto(idProduto) {
    if (window.confirm("Deseja remover este produto?")) {
      setCadastroUsuario(cadastroUsuario.filter(p => p.id !== idProduto))
    }
  }

  function editarProduto(produtoEditado) {
    setCadastroUsuario(
      cadastroUsuario.map(p => p.id === produtoEditado.id ? produtoEditado : p)
    )
  }

  return(
  <div className="principal">
    <Header abrirModal={abrirModal}/>

    <div className="container">
      <Main listaProdutos={cadastroUsuario} />
      
      <Grafico listaProdutos={cadastroUsuario} />

      <div className="busca">
        <Aside busca={busca} setBusca={setBusca}/>
      </div>

      <Cadastro 
        listaProdutos={cadastroUsuario} 
        removerProduto={removerProduto}
        editarProduto={editarProduto}
      />
    </div>

    { exibirModal && <Modal fecharModal={ fecharModal } MostrarCadastro={MostrarCadastro}/> }

    {toast && <div className="toast">{toast}</div>}
  </div>
)
}