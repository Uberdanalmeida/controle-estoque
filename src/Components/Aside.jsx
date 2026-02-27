import { CiSearch } from "react-icons/ci";

export default function Aside({ busca, setBusca }) {
  return(
    <div className="input-busca">
      <input 
        className="busca-admin"
        placeholder="Buscar produtos..."
        value={busca}
        onChange={e => setBusca(e.target.value)}
      />
      <CiSearch className="icone-busca"/>
    </div>
  )
}