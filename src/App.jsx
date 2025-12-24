import './App.css'
import Header from "./Components/Header";
import Main from "./Components/Main";
import Aside from "./Components/Aside";
import Cadastro from './Components/Cadastro';
import Modal from './Components/Modal';
import { useState } from 'react';

export default function App() { 
  
  const [exibirModal, setExibirModal] = useState(false)
  const [cadastroUsuario, setCadastroUsuario] = useState([])

  function MostrarCadastro(novoProduto) {
    alert("Produto Adicionado com Sucesso!")
    setCadastroUsuario([...cadastroUsuario, novoProduto])
    setExibirModal(false)
  }
    
  
  function abrirModal() {
    setExibirModal(true)
  }

  function fecharModal() {
    setExibirModal(false)
  }

  return(
    <div className="principal">
      <Header abrirModal={abrirModal}/>
      <Main/>
      <Aside/>
      <Cadastro listaProdutos={cadastroUsuario}></Cadastro>
      { exibirModal && <Modal fecharModal={ fecharModal } MostrarCadastro={MostrarCadastro}/>}
    </div>
  )
}