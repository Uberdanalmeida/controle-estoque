import { CiSearch } from "react-icons/ci";

export default function Aside() {
  return(
    <div className="input-busca">
      <input 
        className="busca-admin"
        placeholder="Buscar produtos..."
      />
      <CiSearch className="icone-busca"/>
    </div>
  )
}