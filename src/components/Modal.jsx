import { useContext } from "react";
import MainContext from "../context/MainContext";
import List from "./List";
import New from "./New";

//Set Modal
const Modal = _ => {

    const {setStatusModal,titleModal,student} = useContext(MainContext);

    const Content = _ =>{

        return (
        <>
        {
         titleModal === 'Nueva Acta'
            ?
            <New/>
            :
            <List/>
        }
        </>
        )
    }

    return (
        <div className="modal"> 
            <div className="modalContainer">
                <div className="modalTitle">

                    <i onClick={_=>setStatusModal(false)} className='bx bx-x modalClose'></i>

                     <h2>{titleModal}</h2>

                </div>
               
                <div className="modalGrales">
                    <h4>{student.name}</h4>
                    <h5>{student.career}</h5>
                </div>

                <Content />
           
            </div>
        </div>
    )
}

export default Modal
