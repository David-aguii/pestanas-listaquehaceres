import React from 'react'
import { useState } from 'react';
import style from "./Estilo.module.css"

const TaskList = () => {
  const[works,setWorks]=useState([]);
  const[newWork,setNewWorks]=useState("");
  const handleNewWork =(e)=>{
    e.preventDefault();
    let newWorksAy= works.concat({name: newWork, status: false});
    setWorks([...newWorksAy]);
  }
  const handleStatusChange=(index)=>{
    setWorks((prevWorks) => {
      const updatedList = [...prevWorks];
      updatedList[index].checked = !updatedList[index].checked;
      return updatedList;
    });
  }
  const handleDeleteWork=(index)=>{
      let aux=[...works];
      let filtro=aux.filter((value,idx,array)=>idx!==index);
      setWorks([...filtro]);
  }
  return (
    <div>
      <form className={style.form} onSubmit={handleNewWork}>
          <input type="text"
          onChange={(e)=> setNewWorks(e.target.value)}
          value={newWork}
          className={style.input}
          ></input>
          <button className={style.addbtn}>Add</button>
      </form>

      <div>
          {works.map((item,index)=>{
            return(
                 <p key={Math.random()} style={{ textDecoration: item.checked ? 'line-through' : 'none' }}>{item.name}
                 <input type="checkbox" onChange={()=> handleStatusChange(index,item)}  checked={item.checked}/> 
                 <button className={style.deletebtn} onClick={()=>handleDeleteWork(index)}>Delete</button> 
                 </p>
              )
        })} 
      </div>
      
    </div>
  )
}

export default TaskList   
