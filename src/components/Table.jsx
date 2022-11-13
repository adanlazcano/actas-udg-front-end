import { arrIcon } from "../collections/Collections";
import Icon from "./Icon";

//Set and Draw students table and icons as well
const Table = ({item}) => {

  const {actas,code,picture,name,career} = item;

    const Actions = _ =>{

        if(actas.length===0){
            return (
                <Icon {...arrIcon[1]} item={item}/>
            )
        }else if(actas.length===4){
            return(
            <>
            <Icon {...arrIcon[0]} item={item}/>
            <Icon {...arrIcon[2]} item={item}/>
            </>
            )
        }else{
            return(
            arrIcon.map((prop,i)=>(
                <Icon key={i} {...prop} item={item} />
                ))
            )
        }
               
    }
  
    return (
      
        <tr>
            <td>{code}</td>
            <td className="tdImg"><img src={`./students/${picture}`} title={name} alt={name} /></td>
            <td>{name}</td>
            <td>{career}</td>
            <td className="tdIcon"><Actions/></td>
        </tr>
    )
}

export default Table
