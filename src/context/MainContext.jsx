import { useState,useEffect,createContext } from "react";
import axios from 'axios';
import html2pdf from 'html2pdf.js';

const API_URL = process.env.REACT_APP_API_URL;

const MainContext = createContext();

let createTime = '';

const MainProvider = ({children}) =>{

    const [students,setStudents] = useState([]);
    const [statusModal,setStatusModal] = useState(false);
    const [titleModal,setTitleModal] = useState('');
    const [student,setStudent] = useState({});
  
    //Get Data from backend
    const getData = async _ =>{
       
        const res = await axios.get(`${API_URL}/student`);
        setStudents(res.data);
    }
  
    useEffect(_=>{
   
        getData();
   
    },[]);

    //Get one of the students by code
    const getSearch = async code =>{
        const res = await axios.get(`${API_URL}/student/${code}`);
        setStudents(res.data);
    }

    const searchStudent = search =>{
       search.value.length > 0
       ?
        getSearch(search.value)
       :
        getData()
    }

    //Download PDF
    const actaPdf = (file,title,date=0) =>{

       date = date ? new Date(date) : new Date();

       const optDownload = {
            margin: [0.3,0.3,0.3,0.4],
            filename: `${file}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, letterRendering:true, dpi:362, logging:true },
            jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
        };

        const element = document.querySelector('.print');
        element.querySelectorAll('.printActa').forEach(item=>
            item.innerHTML=title
            );
        element.querySelectorAll('.printDate').forEach(item=>
            item.innerHTML=new Intl.DateTimeFormat("es-ES", {dateStyle: "full"}).format(date));
        
        html2pdf(element.innerHTML,optDownload); 
    }

    //Send Data to save acta
    const createActa = async (e,body,file,title) =>{

        clearTimeout(createTime);

        e.target.disabled='true';
        e.target.innerHTML="Creando PDF ...";

        await axios.post(`${API_URL}/acta`,body).then(_=>{

           createTime = setTimeout(_ => {
              
                e.target.disabled="false";
        
                actaPdf(file,title);
                setStatusModal(false);
                getData();
       
             }, 2500);
        });
    }

    //Delete acta from DB
    const deleteActa = async id =>{

        await axios.put(`${API_URL}/acta/${id}`,{idStudent:student._id});
    
         student.actas.filter((item,i)=>{
            
            if(item._id===id){
    
                student.actas.splice(i,1);
               return getData();
            
            }else{
                return 0;
            }
        });
    }

    const data ={students,searchStudent,statusModal,setStatusModal,titleModal,setTitleModal,student,setStudent,createActa,actaPdf,deleteActa};

    return <MainContext.Provider value={data}>
                {children}
           </MainContext.Provider>
}

export {MainProvider};

export default MainContext;