import { useContext } from "react";
import MainContext from "../context/MainContext";
import Modal from "./Modal";
import Print from "./Print";
import Table from "./Table";

// Draw Dashboard
const Main = () => {

    const {students,statusModal,loading} =  useContext(MainContext);
 
    return (
        
        <div className="main">

            <table>
                <thead>
                    <tr>
                    <th>No. Registro</th>
                    <th>Imag&eacute;n</th>
                    <th>Nombre</th>
                    <th>Carrera</th>
                    <th>Acta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.length > 0 ?
                    
                            students.map(item=>(

                                <Table key={item.code} item={item} />

                            )):<tr><th colSpan="5">{loading}</th></tr>
                    
                    }
                </tbody>

            </table>

        {statusModal && <Modal/>}

        <Print />

        </div>
    )
}

export default Main
