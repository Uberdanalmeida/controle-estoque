import { CiSearch } from "react-icons/ci";

export default function Aside() {
    return(
        <div className="butao">
           <div className="busca">
            <CiSearch size={18}/> 
            <input 
        className="busca-admin"
        placeholder="Buscar produtos..."
      />
           </div>
        </div>
    )
}