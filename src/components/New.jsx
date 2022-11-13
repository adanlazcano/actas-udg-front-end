import { useContext,useRef } from "react";
import MainContext from "../context/MainContext";
import { optionActa } from "../collections/Collections";

// Draw Modal with new acta content
const New = () => {

    const {student,createActa} = useContext(MainContext);

    const actaRef = useRef();
  
    const collectionFilter = student.actas.map(item=>item.key);

    const handleChange = e=>{
      e.target.style.borderColor="#D9D9D9";
    }

    const handleCreate = e =>{

      if(actaRef.current.value !== ''){
        
        const file = `${student.code}_${actaRef.current[actaRef.current.selectedIndex].dataset.file}`;
        
        const title = actaRef.current[actaRef.current.selectedIndex].text
        
        const body = {
          idStudent : student._id,
          key: actaRef.current.value,
          file,
          title,
          order:actaRef.current[actaRef.current.selectedIndex].dataset.order
          
        }

        createActa(e,body,file,title);
    
      }else{
        actaRef.current.style.borderColor="#DC3545";
      }
      
    }

    return (
      <div className="modalContentNew">
         
        <span>Actas</span> 
        <select onChange={handleChange} className="modalSelect" ref={actaRef}>
              <option value="">Selecciona...</option>
              {
                  optionActa.filter(item=>!collectionFilter.includes(item.key)).map(item=>(

                    <option data-order={item.order} data-file={item.file} key={item.key} value={item.key}>{item.title}</option>

                  ))
              }
           
         </select>
         <div className="modalBtn">
           <button onClick={handleCreate}>Crear</button>
          </div>
      </div>
    )
}

export default New
