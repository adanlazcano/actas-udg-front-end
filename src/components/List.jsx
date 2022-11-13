import { useContext } from "react";
import MainContext from "../context/MainContext";

// Draw Modal click on list of actas or delete acta icon
const List = () => {

    const {titleModal,student,actaPdf,deleteActa} = useContext(MainContext);

     const ContentList = ({_id,type,file,title,createdAt}) =>{

       const handleDownload = _ =>{

            actaPdf(file,title,createdAt);
        }

        const handleDelete = _ =>{
            deleteActa(_id);
            
        }

        return(

            <div className="modalList">
                <div className="modalListGrales">
                  <h5>{title}</h5>
                  <h6>{new Intl.DateTimeFormat("es-ES", {dateStyle: "full"}).format(new Date(createdAt))}</h6>
                </div>
                <div className="modalListButtons">
                    {
                        type === 'Listado de Actas'?
                        <i title={`Descargar ${title}`} onClick={handleDownload} className="bx bxs-file-pdf"></i>
                        :
                        <i title="Eliminar Acta" onClick={handleDelete} className="bx bx-minus"></i>
                    }
                </div>
           
            </div>
        )
    }

    return (
        <div className="modalContentNew">

            {
                student.actas.length > 0 ?student.actas.sort((a,b)=>a.order - b.order).map(item=>(
                   
                     <ContentList key={item.key} type={titleModal} {...item} />
                  
                )):<b style={{textAlign:"center"}}>No existen actas</b>
            }
          
        </div>
    )
}

export default List
