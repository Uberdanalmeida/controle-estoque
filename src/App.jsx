import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Aside from "./Components/Aside";
import Cadastro from "./Components/Cadastro";
import Modal from "./Components/Modal";
import Grafico from "./Components/Grafico";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";

export default function App() {
  // 1. ESTADOS (O que estava faltando)
  const [cadastroUsuario, setCadastroUsuario] = useState([]);
  const [exibirModal, setExibirModal] = useState(false);
  const [busca, setBusca] = useState("");
  const [toast, setToast] = useState("");

  // 2. BUSCAR PRODUTOS (SELECT)
  useEffect(() => {
    getProdutos();
  }, []);

  async function getProdutos() {
    const { data, error } = await supabase.from('produtos').select('*');
    if (error) {
      console.error("Erro ao buscar:", error.message);
    } else {
      setCadastroUsuario(data || []);
    }
  }

  // 3. FUNÇÕES DE INTERFACE (O que causou o erro)
  function abrirModal() {
    setExibirModal(true);
  }

  function fecharModal() {
    setExibirModal(false);
  }

  // 4. ADICIONAR PRODUTO (INSERT)
  async function MostrarCadastro(novoProduto) {
    const { data, error } = await supabase
      .from('produtos')
      .insert([novoProduto])
      .select();

    if (!error) {
      setCadastroUsuario([...cadastroUsuario, data[0]]);
      setToast("Produto adicionado com sucesso!");
      setExibirModal(false);
      setTimeout(() => setToast(""), 3000);
    } else {
      console.error("Erro ao inserir:", error.message);
    }
  }

  // 5. REMOVER PRODUTO (DELETE)
  async function removerProduto(idProduto) {
    if (window.confirm("Deseja remover este produto?")) {
      const { error } = await supabase
        .from('produtos')
        .delete()
        .eq('id', idProduto);

      if (!error) {
        setCadastroUsuario(cadastroUsuario.filter((p) => p.id !== idProduto));
      }
    }
  }

  // 6. EDITAR PRODUTO (UPDATE)
  async function editarProduto(produtoEditado) {
    const { error } = await supabase
      .from('produtos')
      .update(produtoEditado)
      .eq('id', produtoEditado.id);

    if (!error) {
      setCadastroUsuario(
        cadastroUsuario.map((p) => (p.id === produtoEditado.id ? produtoEditado : p))
      );
    }
  }

  return (
    <div className="principal">
      <Header abrirModal={abrirModal} />

      <div className="container">
        <Main listaProdutos={cadastroUsuario} />
        <Grafico listaProdutos={cadastroUsuario} />

        <div className="busca">
          <Aside busca={busca} setBusca={setBusca} />
        </div>

        {/* Se a lista for maior que zero, mostra o componente. Se não, mostra a mensagem */}
{cadastroUsuario.length > 0 ? (
  <Cadastro
    listaProdutos={cadastroUsuario}
    removerProduto={removerProduto}
    editarProduto={editarProduto}
    busca={busca}
  />
) : (
  <div className="container-vazio">
    <p>Nenhum produto cadastrado.</p>
  </div>
)}
      </div>

      {exibirModal && (
        <Modal fecharModal={fecharModal} MostrarCadastro={MostrarCadastro} />
      )}

      {toast && <div className="toast">{toast}</div>}
    </div>
  );
}