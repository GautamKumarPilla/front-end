import React, { useState } from 'react';
import axios from 'axios';

function Express() {
    const [data, setData] = useState({
        id:'',
        name:''
    })
   const{id,name} = data;
   const changeHandler = (z) =>{
      setData({...data,[z.target.name]:z.target.value})
   }

  const submitHandler = (y) => {
        y.preventDefault();
    axios.put('http://localhost:5000/addmodels',data).then(
    ()=>{
        alert('Data Sent Successfully');
        setData({...data,id:'',name:''})
    }).catch(error =>console.log(error))
  }

  return (
    <div className='card'>
        <center>
            <h4 className='mt-3'>Add Models</h4>
            <form onSubmit={submitHandler} autoComplete="off" className='card-body'>
              <input type="text" value={id} name="id" placeholder='ID' onChange={changeHandler}/><br/><br/>
              <input type="text" value={name} name="name" placeholder='Name' onChange={changeHandler}/><br/><br/>
              <input type="submit" name="Add Model" />
            </form>
        </center>
    </div>
  )
}

export default Express;