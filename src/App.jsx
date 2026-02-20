import './App.css'
import Header from "./Components/Header";
import Main from "./Components/Main";
import Aside from "./Components/Aside";
import Cadastro from './Components/Cadastro';
import Modal from './Components/Modal';
import { useState, useEffect } from 'react';

export default function App() { 
  
  const [exibirModal, setExibirModal] = useState(false)

  // 🔹 Estado persistente
  const [cadastroUsuario, setCadastroUsuario] = useState(() => {
    const dadosSalvos = localStorage.getItem("produtos");
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  // 🔹 Sempre salva quando mudar
  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(cadastroUsuario));
  }, [cadastroUsuario]);

  function MostrarCadastro(novoProduto) {
    alert("Produto Adicionado com Sucesso!");
    setCadastroUsuario(prev => [...prev, novoProduto]);
    setExibirModal(false);
  }
    
  function abrirModal() {
    setExibirModal(true);
  }

  function fecharModal() {
    setExibirModal(false);
  }

  function removerProduto(indexProduto) {
    const novaLista = cadastroUsuario.filter((_, index) => index !== indexProduto);
    setCadastroUsuario(novaLista);
  }

  return(
    <div className="principal">
      <Header abrirModal={abrirModal}/>
      <Main listaProdutos={cadastroUsuario} />
      <Aside/>
      <Cadastro 
        listaProdutos={cadastroUsuario} 
        removerProduto={removerProduto}
      />
      { exibirModal && (
        <Modal 
          fecharModal={fecharModal} 
          MostrarCadastro={MostrarCadastro}
        />
      )}
    </div>
  )
}